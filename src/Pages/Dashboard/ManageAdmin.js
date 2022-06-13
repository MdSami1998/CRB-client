import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ManageAdmin = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/user', {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading....</p>
    }

    const handleMakeAdmin = (email, name) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made ${name} as an admin`)
                }
            });

    }

    const handleRemoveAdmin = (email, name) => {
        const procced = window.confirm(`Are you sure you want to remove ${name} as an Admin??`);
        if (procced) {
            fetch(`http://localhost:5000/user/removeadmin/${email}`, {
                method: 'PUT',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        refetch();
                        toast.success(`Successfully removed ${name} as an admin`)
                    }
                });
        };
    }
    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold my-10 banner-font text-blue-800 tracking-widest">Users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-secondary'>
                            <th></th>
                            <th className='text-lg'>Name</th>
                            <th className='text-lg'>Email</th>
                            <th className='text-lg'>Make Admin</th>
                            <th className='text-lg'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((adminuser, index) => <tr key={adminuser._id} className='text-lg'>
                                <th>{index + 1}</th>

                                <td className='uppercase'>{adminuser.name}</td>

                                <td>{adminuser.email}</td>

                                <td>
                                    {adminuser.role === 'admin' ? "Admin" :
                                        <button onClick={() => handleMakeAdmin(adminuser.email, adminuser.name)} className="btn btn-accent hover:bg-transparent hover:text-accent hover:scale-110 btn-sm flex justify-end mt-3 text-white">Make Admin</button>
                                    }
                                </td>

                                <td>
                                    {
                                        adminuser.role === 'admin' && user.email !== adminuser.email ? <button onClick={() => handleRemoveAdmin(adminuser.email, adminuser.name)} className="btn btn-accent hover:bg-transparent hover:text-accent hover:scale-110 btn-sm flex justify-end mt-3 text-white">Remove Admin</button> : ""
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAdmin;
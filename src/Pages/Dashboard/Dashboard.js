import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile h-full">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <Outlet></Outlet>

            </div>
            <div className="drawer-side md:-z-0">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content text-lg font-semibold">

                    {
                        admin && <li><Link to="/dashboard">Club Match History</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/managehistory">Manage All Players</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/bestplayer">Player of the month</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/manageadmin">Make Admin</Link></li>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
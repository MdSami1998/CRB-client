import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactSectionIlluestration from '../../assets/icon/undraw_junior_soccer_6sop.svg'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y5r3jnt', 'template_3wtywli', form.current, '4HRi9Y_iTm42TpYzU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id='contact' className='pb-10 my-3'>
            <div>
                <h2 className='text-4xl text-black uppercase font-bold text-center pt-20'>Hire Players!</h2>
                <div className='bg-secondary mt-1 h-1 w-36 mx-auto'></div>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse w-full gap-12 md:gap-40">
                    <div>
                        <img className='w-96' src={contactSectionIlluestration} alt="" />
                        <p className='font-semibold text-secondary'>Contact Us to hire your favorite player.</p>
                    </div>
                    <div data-aos="zoom-in" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="your name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your message</span>
                                </label>
                                <textarea name="textarea" rows="3" className='border border-gray-300 rounded-md p-3 bg-transparent text-sm' placeholder='message'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent hover:bg-transparent hover:text-accent items-center text-black">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
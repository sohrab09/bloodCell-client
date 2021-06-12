import React from 'react';
import './Contact.css';
import contact from '../../Image/contact.png';

const Contact = () => {
    return (
        <div className="contact mt-5">
            <form>
                <div>
                    <img src={contact} alt="icon"/>
                </div>
                <input type="text" placeholder="Name" required/>
                <input type="number" placeholder="Mobile Number" required/>
                <input type="text" placeholder="Hospital Name" required/>
                <input type="text" placeholder="Hospital Address" required/>
                <input type="text" placeholder="Blood Group" required/>
                <textarea placeholder="Message for us" required></textarea>
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Contact;
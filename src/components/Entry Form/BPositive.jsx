import React, { useState } from 'react';
import './CommonStyle.css';

const BPositive = () => {

    const [BPositive, setBPositive] = useState({});

    const handleBlur = (e) => {
        const addBPositive = { ...BPositive };
        addBPositive[e.target.name] = e.target.value;
        setBPositive(addBPositive);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', BPositive.name);
        formData.append('mobile', BPositive.mobile);
        formData.append('address', BPositive.address);
        formData.append('group', BPositive.group);
        formData.append('occupation', BPositive.occupation);
        fetch("http://localhost:5000/bPositive", {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert("Your Blood Group Added Successfully")
                }
            }).catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="shades">
                    <div className="blackboard">
                        <div className="DonorForm">
                            <p>
                                <label className="mt-3">B (+) Positive Blood Donor Form</label>
                            </p>
                            <p>
                                <label>Name: </label>
                                <input onBlur={handleBlur} type="text" name="name" placeholder="Name" required/>
                            </p>
                            <p>
                                <label>Mobile Number: </label>
                                <input onBlur={handleBlur} type="number" name="mobile" placeholder="Number" required/>
                            </p>
                            <p>
                                <label>Address: </label>
                                <input onBlur={handleBlur} type="text" name="address" placeholder="Your Address" required/>
                            </p>
                            <p>
                                <label>Blood Group: </label>
                                <input onBlur={handleBlur} type="text" name="group" placeholder="Your Blood Group" required/>
                            </p>
                            <p>
                                <label>Occupation: </label>
                                <input onBlur={handleBlur} type="text" name="occupation" placeholder="Your Occupation" required/>
                            </p>
                            <p className="wipeout">
                                <input type="submit" value="Send" />
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BPositive;
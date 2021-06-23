import React, { useState } from 'react';
import './CommonStyle.css';

const APositive = () => {

    const [aPositive, setAPositive] = useState({});

    const handleBlur = (e) => {
        const addAPositive = { ...aPositive };
        addAPositive[e.target.name] = e.target.value;
        setAPositive(addAPositive);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', aPositive.name);
        formData.append('mobile', aPositive.mobile);
        formData.append('address', aPositive.address);
        formData.append('group', aPositive.group);
        formData.append('occupation', aPositive.occupation)
        fetch("http://localhost:5000/aPositive", {
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
                                <label className="mt-3">A (+) Positive Blood Donor Form</label>
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

export default APositive;
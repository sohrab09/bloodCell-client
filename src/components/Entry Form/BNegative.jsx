import React, { useState } from 'react';
import './CommonStyle.css';

const BNegative = () => {

    const [BNegative, setBNegative] = useState({});

    const handleBlur = (e) => {
        const addBNegative = { ...BNegative };
        addBNegative[e.target.name] = e.target.value;
        setBNegative(addBNegative);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', BNegative.name);
        formData.append('mobile', BNegative.mobile);
        formData.append('address', BNegative.address);
        formData.append('group', BNegative.group);
        formData.append('occupation', BNegative.occupation);
        fetch("https://agile-taiga-79684.herokuapp.com/addBNegative", {
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
                                <label className="mt-3">B (-) Negative Blood Donor Form</label>
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

export default BNegative;
import React from 'react';
import './CommonStyle.css';

const ABPositive = () => {
    return (
        <div>
            <form>
                <div className="shades">
                    <div className="blackboard">
                        <div className="DonorForm">
                            <p>
                                <label className="mt-3">AB (+) Positive Blood Donor Form</label>
                            </p>
                            <p>
                                <label>Name: </label>
                                <input type="text" placeholder="Name"/>
                            </p>
                            <p>
                                <label>Mobile Number: </label>
                                <input type="number" placeholder="Number"/>
                            </p>
                            <p>
                                <label>Address: </label>
                                <input type="text" placeholder="Your Address"/>
                            </p>
                            <p>
                                <label>Blood Group: </label>
                                <input type="text" placeholder="Your Blood Group"/>
                            </p>
                            <p>
                                <label>Occupation: </label>
                                <input type="text" placeholder="Your Occupation"/>
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

export default ABPositive;
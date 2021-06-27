import React, { useState } from 'react';
import { useEffect } from 'react';
import "./centralStyle.css";

const APositiveData = () => {

    const [getAPositive, setGetAPositive] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/getAPositive")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetAPositive(data);
            })
    }, [])

    return (
        <section className="central">
            <h1>A (+) Positive Blood Donor List</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Blood Group</th>
                            <th>Occupation</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        {getAPositive.map((aPositive) => {
                            return (
                                <tr>
                                    <td>{aPositive.name}</td>
                                    <td>{aPositive.mobile}</td>
                                    <td>{aPositive.address}</td>
                                    <td>{aPositive.group}</td>
                                    <td>{aPositive.occupation}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default APositiveData;
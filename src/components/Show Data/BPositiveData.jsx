import React, { useEffect } from 'react';
import { useState } from 'react';
import "./centralStyle.css";

const BPositive = () => {

    const [getBPositive, setGetBPositive] = useState([])
    useEffect(() => {
        fetch("https://agile-taiga-79684.herokuapp.com/getBPositive")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetBPositive(data);
            })

    }, [])

    return (
        <section className="central">
            <h1>B (+) Positive Blood Donor List</h1>
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
                    {getBPositive.map((bPositive) => {
                            return (
                                <tr>
                                    <td>{bPositive.name}</td>
                                    <td>{bPositive.mobile}</td>
                                    <td>{bPositive.address}</td>
                                    <td>{bPositive.group}</td>
                                    <td>{bPositive.occupation}</td>
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

export default BPositive;
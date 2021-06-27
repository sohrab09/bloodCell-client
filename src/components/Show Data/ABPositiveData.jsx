import React, { useEffect } from 'react';
import { useState } from 'react';
import "./centralStyle.css";

const ABPositive = () => {

    const [getABPositive, setGetABPositive] = useState([])
    useEffect(() => {
        fetch("https://agile-taiga-79684.herokuapp.com/getABPositive")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetABPositive(data);
            })

    }, [])

    return (
        <section className="central">
            <h1>AB (+) Positive Blood Donor List</h1>
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
                    {getABPositive.map((abPositive) => {
                            return (
                                <tr>
                                    <td>{abPositive.name}</td>
                                    <td>{abPositive.mobile}</td>
                                    <td>{abPositive.address}</td>
                                    <td>{abPositive.group}</td>
                                    <td>{abPositive.occupation}</td>
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

export default ABPositive;
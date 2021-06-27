import React, { useEffect } from 'react';
import { useState } from 'react';
import "./centralStyle.css";

const OPositive = () => {

    const [getOPositive, setGetOPositive] = useState([])
    useEffect(() => {
        fetch("https://agile-taiga-79684.herokuapp.com/getOPositive")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetOPositive(data);
            })

    }, [])

    return (
        <section className="central">
            <h1>O (+) Positive Blood Donor List</h1>
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
                    {getOPositive.map((oPositive) => {
                            return (
                                <tr>
                                    <td>{oPositive.name}</td>
                                    <td>{oPositive.mobile}</td>
                                    <td>{oPositive.address}</td>
                                    <td>{oPositive.group}</td>
                                    <td>{oPositive.occupation}</td>
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

export default OPositive;
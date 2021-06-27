import React, { useState } from 'react';
import { useEffect } from 'react';
import "./centralStyle.css";

const ANegativeData = () => {

    const [getANegative, setGetANegative] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/getANegative")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetANegative(data);
            })
    }, [])

    return (
        <section className="central">
            <h1>A (-) Negative Blood Donor List</h1>
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
                        {getANegative.map((aNegative) => {
                            return (
                                <tr>
                                    <td>{aNegative.name}</td>
                                    <td>{aNegative.mobile}</td>
                                    <td>{aNegative.address}</td>
                                    <td>{aNegative.group}</td>
                                    <td>{aNegative.occupation}</td>
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

export default ANegativeData;
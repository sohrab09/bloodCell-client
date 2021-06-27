import React, { useEffect } from 'react';
import { useState } from 'react';
import "./centralStyle.css";

const ABNegative = () => {

    const [getABNegative, setGetABNegative] = useState([])
    useEffect(() => {
        fetch("https://agile-taiga-79684.herokuapp.com/getABNegative")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetABNegative(data);
            })

    }, [])

    return (
        <section className="central">
            <h1>AB (-) Negative Blood Donor List</h1>
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
                    {getABNegative.map((abNegative) => {
                            return (
                                <tr>
                                    <td>{abNegative.name}</td>
                                    <td>{abNegative.mobile}</td>
                                    <td>{abNegative.address}</td>
                                    <td>{abNegative.group}</td>
                                    <td>{abNegative.occupation}</td>
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

export default ABNegative;
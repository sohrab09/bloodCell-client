import React, { useEffect } from 'react';
import { useState } from 'react';
import "./centralStyle.css";

const BNegative = () => {

    const [getBNegative, setGetBNegative] = useState([])
    useEffect(() => {
        fetch("https://agile-taiga-79684.herokuapp.com/getBNegative")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetBNegative(data);
            })

    }, [])

    return (
        <section className="central">
            <h1>B (-) Negative Blood Donor List</h1>
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
                    {getBNegative.map((bNegative) => {
                            return (
                                <tr>
                                    <td>{bNegative.name}</td>
                                    <td>{bNegative.mobile}</td>
                                    <td>{bNegative.address}</td>
                                    <td>{bNegative.group}</td>
                                    <td>{bNegative.occupation}</td>
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

export default BNegative;
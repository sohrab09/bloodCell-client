import React, { useEffect } from 'react';
import { useState } from 'react';
import "./centralStyle.css";

const ONegative = () => {

    const [getONegative, setGetONegative] = useState([])
    useEffect(() => {
        fetch("https://agile-taiga-79684.herokuapp.com/getONegative")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGetONegative(data);
            })

    }, [])

    return (
        <section className="central">
            <h1>O (-) Negative Blood Donor List</h1>
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
                    {getONegative.map((oNegative) => {
                            return (
                                <tr>
                                    <td>{oNegative.name}</td>
                                    <td>{oNegative.mobile}</td>
                                    <td>{oNegative.address}</td>
                                    <td>{oNegative.group}</td>
                                    <td>{oNegative.occupation}</td>
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

export default ONegative;
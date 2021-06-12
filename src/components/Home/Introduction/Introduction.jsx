import React from 'react';
import './Introduction.css';
import feature from '../../Image/feature.jpg';

const Introduction = () => {
    return (
        <section className="Introduction container">
            <div className="row d-flex align-items-center mt-5">
                <div className="col-md-6">
                    <h2>
                        “Bring a life back to power. Make blood donation your responsibility”
                        <br />
                        <br />
                        “Spare only 15 minutes and save one life”
                    </h2>
                </div>
                <div className="col-md-6 intro-img">
                    <img style={{ width: '100%' }} src={feature} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Introduction;
import React from 'react';
import './Emergency.css';
import feature2 from '../../Image/feature2.png';

const Emergency = () => {
    return (
        <section className="mt-5">
            <h2 className="text-center">For Medical Emergency</h2>
            <div className="row d-flex align-items-center mt-5">
                <div className="col-md-6 Emergency">
                    <img style={{width:'100%'}} src={feature2} alt="" />
                </div>
                <div className="col-md-6">
                    <h4>Fell free to contact with us.</h4>
                    <p>Join with us in facebook group</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci asperiores, perferendis, animi recusandae quo, consectetur esse laboriosam natus debitis ipsam officiis. Dignissimos, totam. Impedit ipsam autem aspernatur omnis molestiae soluta accusamus, voluptatem excepturi magni consequuntur facilis culpa ex commodi amet.</p>
                </div>
            </div>
        </section>
    );
};

export default Emergency;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './premium.css'
// import { loadStripe } from '@stripe/stripe-js';

const Premium = () => {
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const [aadharNumber, setAadharNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [tick, setTick] = useState(false);
    const [verifyMessage, setVerifyMessage] = useState('');

    const handleAadharChange = (event) => {
        const inputValue = event.target.value;
        setAadharNumber(inputValue);
        setVerifyMessage(inputValue.length === 12 ? "" : "Enter Valid Aadhar Number");
    };

    const handleClick = () => {
        if (aadharNumber.length === '0') {
            alert("Enter aadhar card ")
        } 
    };

    return (
        <div>
            <h1 className='heading'>Want to became Premium User ? {CurrentUser?.result.name}</h1>
            <div>
                <div className='id'>
                    <p>Get exciting features with the premium membership which is free for first month for all the users.</p>
   
                 </div>

                <div class="pricing-table">
                    <div class="grid">
                        <div class="box professional">
                            <div class="title">Get Free</div>
                            <div class="price">
                                <b>Basic</b>
                                <span>per month</span>
                            </div>
                            <div class="features">
                                <div>Premium Features</div>
                                <div>Avatar</div>
                                <div>And many more</div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                <label className='adhar'>Enter Your Aadhar Card</label>
                <div className='vefification'>
                    <input
                        className='input-text'
                        type="text"
                        value={aadharNumber}
                        onChange={handleAadharChange}
                        placeholder="Enter Aadhar Number"
                    />
                    <span>{verifyMessage !== '' ? "Invalid Aadhar" : <button type='submit' disabled={aadharNumber === ''} onClick={() => setTick(true)} >&#x2713;</button>}</span>
                    {tick}
                </div>
                <div className='id'>
                    <h2>Free for 30 days</h2>
                </div>
                <div className='id'>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                    />
                    I accept the terms and conditions
                </label>
                </div>
                <br />
            </div>
           <div className='button'>
           {
           <Link to={`/success/${CurrentUser?.result._id}`} ><button className='btn id' type='submit' disabled={ verifyMessage !== '' && isChecked }  >
           {isChecked ? 'Get premium' : ''}
         </button>
         </Link>
            }
           </div>
        </div>
    );
};

export default Premium;

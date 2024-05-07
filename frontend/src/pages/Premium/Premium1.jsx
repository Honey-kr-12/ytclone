import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      <h1>Want to became Premium User ? {CurrentUser?.result.name}</h1> 
      <div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis reprehenderit quod hic dolore, aperiam quaerat error dicta perferendis cupiditate ratione fuga officia ipsam, voluptatum molestiae odit, aut laboriosam veritatis! Est, dolores voluptates!</p>
        </div>
        <label >Enter Your Aadhar Card</label>
       <div>
      <input
        type="text"
        value={aadharNumber}
        onChange={handleAadharChange}
        placeholder="Enter Aadhar Number"
      />
       <span>{verifyMessage !== '' ? "Invalid Aadhar" : <button type='submit' disabled={aadharNumber === ''} onClick={() => setTick(true)} >&#x2713;</button>}</span>
       {tick}
    </div>
        <div>
        <h2>Free for 30 days</h2>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          I accept the terms and conditions
        </label>
        <br />
      </div> 
      {
        tick && <Link to={`/success/${CurrentUser?.result._id}`} ><button type='submit'  disabled={ verifyMessage !== '' && isChecked }  >
        {isChecked ? 'Get premium' : ''}
      </button>
      </Link>
      }
    </div>
  );
};

export default Premium;

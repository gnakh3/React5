import React, { useEffect, useState } from 'react'
import FrontSide from './Card/FrontCard';
import BackSide from "./Card/BackCard"

const Source = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const exampleInfo = {
    name: "JANE APPLESEED",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000"
  };

  const [cardInfo, setCardInfo] = useState(exampleInfo);
  const [error, setError] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const regexValidation = {
    name:/^[A-Za-z ]{2,}$/,
    number:/^(\d{4} ?){4}$/,
    month:/^(0[1-9]|1[0-2])$/,
    year:/^\d{2}$/,
    cvc:/^\d{3}$/,
  };

  

  return (
    <div className='main'>
      <div className='background'></div>

      <div className='cards'>
        <FrontSide
          name={name || exampleInfo.name}
          number={number || exampleInfo.number}
          month={month || exampleInfo.month}
          year={year || exampleInfo.year}
        />

        <BackSide
          cvc={cvc || exampleInfo.cvc}
        />
      </div>
      <div className='input'>
        <div className='name'>
          <div className='inputText'>Cardholder Name</div>
          <input placeholder="e.g. Jane Appleseed" className='nameInput' maxLength={24} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className='number'>
          <div className='inputText'>Card Number</div>
          <input placeholder="e.g. 1234 5678 9123 0000" className='numberInput' onChange={(e) => setNumber(e.target.value)} />
        </div>

        <div className='footerInput'>
          <div className='expDate1'>
            <div className='inputText'>Exp. Date (MM/YY)</div>
            <div className='expDate'>
              <input placeholder="MM" maxLength={2} className='expInput' onChange={(e) => setMonth(e.target.value)} />
              <input placeholder="YY" maxLength={2} className='expInput' onChange={(e) => setYear(e.target.value)} />
            </div>
          </div>
          <div className='cvcSide'>
            <div className='inputText'>CVC</div>
            <input placeholder='e.g. 123' maxLength={3} className='cvcInput' onChange={(e) => setCvc(e.target.value)} />
          </div>
        </div>
        <button>Confirm</button>

      </div>
    </div>
  )



}

export default Source
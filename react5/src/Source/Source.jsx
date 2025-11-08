import React, { useState } from 'react';
import FrontSide from './Card/FrontCard';
import BackSide from "./Card/BackCard";
import done from "../Source/assets/done.svg"

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

  const [error, setError] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const regexValidation = {
    name: /^[A-Za-z ]{2,}$/,
    number: /^(\d{4} ?){4}$/,
    month: /^(0[1-9]|1[0-2])$/,
    year: /^\d{2}$/,
    cvc: /^\d{3}$/
  };

  const handleConfirm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Enter your name";
    else if (!regexValidation.name.test(name))
      newErrors.name = "Name must contain only letters and spaces";

    if (!number.trim()) newErrors.number = "Enter card number";
    else if (!regexValidation.number.test(number))
      newErrors.number = "Card number must be 16 digits in 4 4 4 4 format";

    if (!month.trim()) newErrors.month = "Enter month";
    else if (!regexValidation.month.test(month))
      newErrors.month = "Month must be 01-12";

    if (!year.trim()) newErrors.year = "Enter year";
    else if (!regexValidation.year.test(year))
      newErrors.year = "Year must be 2 digits";

    if (!cvc.trim()) newErrors.cvc = "Enter CVC";
    else if (!regexValidation.cvc.test(cvc))
      newErrors.cvc = "CVC must be 3 digits";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsConfirmed(true);
      localStorage.setItem(
        "Card Info:",
        JSON.stringify({ name, number, month, year, cvc })
      );
    }
  };

   const handleContinue = () => {
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvc("");
    setError({});
    setIsConfirmed(false);
  };

  return (
    <div className='Parent'>
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

      {!isConfirmed ? (
        <div className='input'>
          <div className='name'>
            <div className='inputText'>Cardholder Name</div>
            <input
              placeholder="e.g. Jane Appleseed"
              className='nameInput'
              maxLength={24}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error.name && <div className='errorDesign'>{error.name}</div>}
          </div>

          <div className='number'>
            <div className='inputText'>Card Number</div>
            <input
              placeholder="e.g. 1234 5678 9123 0000"
              className='numberInput'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {error.number && <div className='errorDesign'>{error.number}</div>}
          </div>

          <div className='footerInput'>
            <div className='expDate1'>
              <div className='inputText'>Exp. Date (MM/YY)</div>
              <div className='expDate'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder="MM"
                    maxLength={2}
                    className='expInput'
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />
                  {error.month && <div className='errorDesign'>{error.month}</div>}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder="YY"
                    maxLength={2}
                    className='expInput'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  {error.year && <div className='errorDesign'>{error.year}</div>}
                </div>
              </div>
            </div>

            <div className='cvcSide'>
              <div className='inputText'>CVC</div>
              <input
                placeholder='e.g. 123'
                maxLength={3}
                className='cvcInput'
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
              {error.cvc && <div className='errorDesign'>{error.cvc}</div>}
            </div>
          </div>

          <button onClick={handleConfirm}>Confirm</button>
        </div>
      ) : (
        <div className='afterSubmit'>
          <img src={done} alt="" />
          <div className='thankSubmit'>THANK YOU!</div>
          <div className='opacitySubmit'>We’ve added your card details</div>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
    </div>
  </div>
  );
};

export default Source;

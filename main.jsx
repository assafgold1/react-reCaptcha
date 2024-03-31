import { useState } from 'react';

const Captcha = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [userAnswer, setUserAnswer] = useState('');
  const [captchaResult, setCaptchaResult] = useState('');

  const generateNewCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setUserAnswer('');
    setCaptchaResult('');
  };

  const handleUserAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkCaptcha = () => {
    const expectedAnswer = num1 + num2;
    if (parseInt(userAnswer) === expectedAnswer) {
      setCaptchaResult('Correct!');
    } else {
      setCaptchaResult('Incorrect, please try again.');
    }
  };

  return (
    <div>
      <p>Please solve the following CAPTCHA:</p>
      <p>{num1} + {num2} = ?</p>
      <input type="text" value={userAnswer} onChange={handleUserAnswerChange} />
      <button onClick={checkCaptcha}>Submit</button>
      <button onClick={generateNewCaptcha}>Refresh</button>
      <p>{captchaResult}</p>
    </div>
  );
};

export default Captcha;

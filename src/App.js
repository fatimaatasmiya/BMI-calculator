import './App.css';
import './index.css';
import { useState } from 'react';

function App() {
  
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcbmi = (e)=>{
   e.preventDefault();
    if(weight === '' || height === '')
    {
      alert("please enter a valid value")
    }

    else{
      let bmi = (703*weight/(height*height))
      setBmi(bmi.toFixed(1))

      //message
      if(bmi <25){
        setMessage('you are underweight')
      }
      else if (bmi >= 25 && bmi <30){
        setMessage('your weight is normal')
      }
      else{
        setMessage('you are overweight')
      }
    }

  }
  let reload = ()=>{
    window.location.reload()
  }

  return (
    <div className="App">
      
      <div className='container'>
        <h2> BMI Calculator</h2>
        <form onSubmit={calcbmi}>

          <div>
            <label>Weight (lbs)</label>
            <input type="text" placeholder="enter your weight" value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (in)</label>
            <input type="text" placeholder="enter your height" value={height} onChange={(e)=> setHeight(e.target.value)}/>
          </div>
       
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>

        <div className='center'>
           <h3>Your BMI is : {bmi}</h3>
           <p>{message}</p>
        </div>

     </form>
      </div>
    </div>
  );
}

export default App;

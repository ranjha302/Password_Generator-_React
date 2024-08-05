import logo from './logo.svg';
import './App.css';
// import {UC , LC, NC , SC} from './Data/PasChar';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {

 

  // let n=p.charAt(Math.floor(Math.random()*p.length));
  // console.log(n)
  let [ucase, setUcase]=useState(false);
  let [Lcase, setLcase]=useState(false);
  let [Ncase, setNcase]=useState(false);
  let [Scase, setScase]=useState(false);
  let [passwordLength,setpasswordLength]=useState(10);
  let [finalPass,setfinalPass]=useState('');

    let createPassword=()=>{

    let finalPass=''    
    let Charset=''


    if (ucase||Lcase||Ncase||Scase){

      NotificationManager.success('Password generated successfully', 'Thanks!');

      
      if(ucase) Charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(Lcase) Charset+="abcdefghijklmnopqrstuvwxyz" ;
      if(Ncase) Charset+="0123456789";
      if(Scase) Charset+="!@#$%^&*0.";

      for(let i=0;i<passwordLength;i++){
        finalPass+=Charset.charAt(Math.floor(Math.random()*Charset.length))


      }
      
      setfinalPass(finalPass)


    } 

    
    
    else

     {
      NotificationManager.error('Please select at least one Check Box', 'Try Again!', 5000, () =>{
        alert('callback');
      });
     
       
    }

  }
  let copypass=()=>{
    if(navigator.clipboard.writeText(finalPass)){
      NotificationManager.info('Text Copied To clipboard');
    }
  }
   

  return (
    <>
      <div className='passwordBox'>
        <h2 style={{ textAlign: 'center', color: 'white' }}>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text' name='text' value={finalPass} readOnly /> <button onClick={copypass}>Copy</button>
        </div>

        <div className='passwordLength'>
          <label>Password Length : </label>
          <input type='number' value={passwordLength} onChange={(event)=>setpasswordLength(event.target.value)} max={20} min={10} />
        </div>

        <div className='passwordLength'>
          <label>Include Upper Letters : </label>
          <input type='checkbox' checked={ucase} onChange={() => setUcase(!ucase)} />
        </div>

        <div className="passwordLength">
          <label>Include Lower Letters : </label>
          <input type='checkbox' checked={Lcase} onChange={() => setLcase(!Lcase)} />
        </div>

        <div className='passwordLength'>
          <label>Include Numbers : </label>
          <input type='checkbox' checked={Ncase} onChange={() => setNcase(!Ncase)} />
        </div>

        <div className='passwordLength'>
          <label>Include Symbols: </label>
          <input type='checkbox' checked={Scase} onChange={() => setScase(!Scase)} />
        </div>

        <button className='btn' onClick={createPassword}>
          <h4>Generate Password</h4>
        </button>
      </div>

      <NotificationContainer />
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { useState } from "react";



export default function App(){

  const [birthDate,setBirthDate]= useState('');
  const [birthMonth,setBirtMonth]= useState('');
  const [birthYear,setBirthYear]= useState('');
  const [age,setAge]= useState('');
  const [month,setmonth]= useState('');
  const [day,setday]= useState('');
  const [error,setError]= useState({date:'', month:'', year:''});

  useEffect(()=>{
    calculateAge(age, month, day);
  })
  const calculateAge=()=>{
    const dateError=validateDate(birthDate);
    const monthError=validateMonth(birthMonth);
    const yearError=validateYear(birthYear);

    setError({date:dateError, month:monthError, year:yearError});
    if (!dateError && !monthError && !yearError){
      const today=new Date();
      const birth=new Date(birthYear, birthMonth, birthDate);
      const age=today.getUTCFullYear()-birth.getUTCFullYear();
      const month =today.getUTCMonth()-birth.getUTCMonth();
      const day=today.getUTCDate()-birth.getUTCDate();

      if (month < 0 || (month === 0 && day < 0) ){
        setAge(age-1);
        setmonth(12 + month)
        setday(30+day)
      }
      else if(birth>=today){
        setAge('0')
        setmonth('0')
        setday('0')
      }
      else if(day<=30|| month>0||age>0){
        setAge(age);
        setmonth(month+1)
        setday( day+29-30)
        
      }
      else if(day>=30|| month>0||age>0){
        setAge(age);
        setmonth(month+1)
        setday( day-29)
        
      }
    }
  };
  const validateDate=(date)=>{
    if (date<1 || date>31){
      return 'Must be a valid date';
    }
    
    return'';
  }
  const validateMonth=(month)=>{
    if (month<1 || month>12){
      return 'Must be a valid month';
    }
    
  }
  const validateYear=(year)=>{
    if (year<1900){
      return 'Must be a valid year';
    }
    else if(year> new Date().getFullYear())
    return'This is in the future';
  }
  return(
      <div className="container">
        <form action="" id="ageForm" >
        <div className="input"  >
          
          <div className="box">
            <h2>DAY</h2>
            <input type="number" max="31" min="1" id="dob" placeholder="DD" value={birthDate} required onChange={(e)=>setBirthDate(e.target.value)} /><br/>
            <h2 style={
              {
                fontSize:'9px',
                color:'red'
              }
            }>{error.date}</h2>
          </div>
          <div className="box">
            <h2>MONTH</h2>
            <input type="number" id="mob" max="12" min="1" placeholder="MM" required value={birthMonth} onChange={(e)=>setBirtMonth(e.target.value)} /><br/>
            <h2 style={
              {
                fontSize:'9px',
                color:'red'
              }
            }>{error.month}</h2>

          </div>
          <div className="box">
            <h2>YEAR</h2>
            <input type="number" max="2024" min="1900" placeholder="YY" id="yob" required value={birthYear} onChange={(e)=>setBirthYear(e.target.value)} /><br/>
            <h2 style={
              {
                fontSize:'9px',
                color:'red'
              }
            }>{error.year}</h2>
          </div>
          <br/>
        
          
          <div className="btn">
          <button  type="submit" onClick={calculateAge} ><svg style={{fontsize:'1px'}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg> </button>
          </div>
        </div>
        </form>
    
    
        <div className="output" id="result"><i>
          <h1> <span >{age}</span> year</h1>
          <h1> <span >{month}</span> months</h1>
          <h1> <span >{day}</span> day</h1>
          
          </i>
        </div>
      </div> 
  )
}



  



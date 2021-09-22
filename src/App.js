import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

      <UserDetails></UserDetails>


    </div>
  );
}

function UserDetails(props) {
  const [users,setusers]= useState([]);
useEffect(()=>{

// console.log('You clicked the button !');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setusers(data));



},[]);


  return(
    <div>

      <h2>Users Details</h2>
      {users.map(user=><User name={user.name} email={user.email} phone={user.phone}></User>)}

    </div>
  )
  
}

const User=(props)=>{
  return(
    
       <div className="user">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>

    </div>
   
  )
}

export default App;

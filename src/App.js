import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [usersList,setUserList]=useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUserList((prevList)=>{
      return(
        [...prevList,{name:uName,age:uAge,id:Math.random().toString()}]
      )
    })
  }
  return (
    <div className='p-4 h-100'>
      <AddUser onAdd={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;

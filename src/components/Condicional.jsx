import React from 'react'
import AdminPanel from './AdminPanel';
import LoginForm from './LoginForm';


export default function Condicional() {
    let content ;
   let isloggedIn = false;
   if (isloggedIn){
    content = <AdminPanel/>
   } else{
    content = <LoginForm/>
   }
    return (
        <div>
         {content}
        </div>
    
  )
}

import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React,{useState} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
  const[state,setState]=useState("hi alpha");
  console.log("state",state);
  const[email,setEmail]=useState(state+"gmail.com");
  console.log("email",email);
  const[password,setPassword]=useState("password123");
  console.log("Password",password);
  function handleState (event) {
    setState(event.target.value);
  }
  function handlePass(event) {
    setPassword(event.target.value);
  

}
function handleEmail(event) {
  setPassword(event.target.value);

}
function handleSubmit(){
  if (password.length < 8){
    alert("password  must contain atleast  8 char");
  }
console.log("ok")
}




  return (
    <>
    <h1>
      email={email}
      {password}
    </h1>
    <input type='text' onChange={handleState}/>
    <p>"enter your password"</p>
    <input type='password' onChange={handlePass}/>
    <p>"enter gmail</p>
    <input type='text' onChange={handleEmail}/>
    <button onClick={handleSubmit}> submit</button>

    </>
   
  
  );
}

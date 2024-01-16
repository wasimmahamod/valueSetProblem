import React from 'react'
import img from"../assets/work.jpg";
import { FaArrowRightToBracket } from "react-icons/fa6";
import {useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handaleSubmit =()=>{
    navigate("/list");
  }
  return (
    <div className='flex justify-center text-center'>
      <div>
      <img className='max-w-md' src={img} alt="" />
      <h1 className='font-semibold font-serif text-3xl mt-3 text-blue-800 w-96 text-center ml-20'>TASK MANAGEMENT & TO-DO LIST</h1>
      <p className='font-medium font-serif text-xl mt-2 text-center text-slate-400'>This tool help you batter manage your tasks and projects....</p>
      <button onClick={handaleSubmit} className='font-semibold font-serif text-3xl mt-20 text-white w-96  text-center py-2.5 rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/50 '>Let's Start<FaArrowRightToBracket className='inline-block ml-8' /></button>
      </div>
     
    </div>
  )
}

export default Home
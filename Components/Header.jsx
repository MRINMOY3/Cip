import React,{useState} from 'react'
import './Header.css'
import Particles from "react-tsparticles";
import particlesConfig from "./particles-config.js";


function Header() {

    function startTimer(){
        setInterval(()=>{
            settimeleft(timeleft=>timeleft-1)
        },1000)
    }


    const[timeleft,settimeleft]=useState(2*60);

    const min = Math.floor(timeleft/60)
        .toString()
        .padStart(2,'0');

    const sec=(timeleft-min*60).toString().padStart(2,'0');

    const curser = document.querySelector(".curser");
    document.addEventListener('mousemove', function(e){
        let X = e.clientX;
        let Y = e.clientY;

        curser.style.left = X + "px";
        curser.style.top = Y + "px";
    })


    const styles={

    }


    return (

        <div>

            <h1   className="Header1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Hello Human</h1>
            <h2  className="text-xl text-sky-500 " >Get ready to experience the future</h2>
            <div className="timer m-8" >
                <span className="text-xl">{min}</span>
                <span className="text-xl">:</span>
                <span className="text-xl">{sec}</span>
            </div>



            <div  className="buttons m-10">
                <button  onClick={startTimer} className="text-xxl text-pink-600">
                    <h1 className="text-xl text-cyan-300">Loading...</h1>
                </button>
            </div>
        </div>

    )
}

export default Header
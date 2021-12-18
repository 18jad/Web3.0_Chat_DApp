import {useState, useEffect} from 'react';
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Head from 'next/head';
import RingLoader from "react-spinners/RingLoader";
import Particles from "react-tsparticles";
import BarLoader from 'react-spinners/BarLoader';
import SyncLoader from 'react-spinners/SyncLoader';
import { motion } from "framer-motion"
import BeatLoader from 'react-spinners/BeatLoader';
import Signup from './Signup'
import LoginNC from './LoginNC'

function Login() {
	const [ loading, setLoading ] = useState(false); 
	const [ logInput, setLogInput ] = useState(true);
	const [ hide, setHide] = useState(true);
	const { authenticate, isAuthenticating, authError, hasAuthError } = useMoralis();
	const item = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -500 },
	}
	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 3000)
	}, [])
	if(!loading) 
		return (
			<div className="flex justify-center items-center h-screen bg-[#333] flex-col text-white space-y-6">
			<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet" />
			</Head>
				<RingLoader 
					color = {"#C715F3"}
					size = {200}
				/>
				<h1 className="text-[45px] text-[#C715F3] logo select-none">METAVERSE</h1>
				<BarLoader
					color = {"#C715F3"}
					size = {200}
				/>
			</div>
	    )
	return (
	
	<div className= "Main">
				<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css?family=Kanit&display=swap&effect=neon|3d-float|emboss" rel="stylesheet" />
			</Head>
    <div className="relative z-50">
	{/* https://i.ibb.co/ZhDGF0b/virtual-reality.jpg 
		https://i.ibb.co/8KW3VDN/oOvNR2.png
	*/}
 <Particles  
      id="tsparticles"
      options={{
        background: {
			"image":
			"url('https://i.ibb.co/VtTXdRZ/abstract-geometric-squares-pattern-design-with-lines-grid-on-dark-purple-background-and-texture-vect.jpg')",
			"size" : "cover"
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 90,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#A609FF",
          },
          links: {
            color: "#fff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1200,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> 
	{(authError) ?  
		alert(authError.message)
	: null
	}
	<motion.div 
		variants = {item}
		initial = "hidden"
		animate = "visible"
		transition = {{duration: .5}}
		className = "flex flex-col absolute z-10 items-center justify-center mainBox w-full ">
		{!(isAuthenticating) ? 
		<div className="">
		<div className="flex flex-col items-center justify-center mainBox logBox relative">
		<h1 className="mt-[-60px] text-4xl  text-white titleBox w-full text-center p-4 	font-effect-neon">WELCOME TO THE METAVERSE</h1>
		{(logInput) ?
		<div id="pp">
			<Image
				src = "https://i.ibb.co/fHpKZVy/41-416568-modern-vector-png-image-with-transparent-background-lion-removebg-preview.png"
				height = {250}
				width = {470}
				className = "lion"
				/>
				</div> 
				:
				<LoginNC />
		}
		{(hide) ?
				<button className = "btnA2 font-effect-3d-float p-2 rounded-full cursor-pointer w-full mt-2" onClick = {() => {
					setLogInput(false); 
					setHide(false)}}> Login with email
				</button>
				:
			null
		}
			<div className="absolute bottom-0">
				<button className="btnA" onClick = {() => authenticate()}>
				<span className = "absolute btnTxt  bold 	font-effect-3d-float">
					LOGIN WITH METAMASK
					</span>
				</button>
		</div>
		
		</div>
		</div>
		:
		<div className="flex flex-col items-center justify-center logBox2 py-20  space-y-10">
			
				<RingLoader 
					color = {"#fff"}
					size = {200}
				/>
			
			<div className="wrap logo text-4xl  select-none text-white">
				<span className ="animate-pulse">Logging in</span><BeatLoader size ={10} color = {"#fff"}/>
			</div>

			
		</div>
		}
		</motion.div>
    </div>
	</div>
  )
}

export default Login

import Head from 'next/head';
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Chat from "../components/Chat";
import Particles from "react-tsparticles";
import ModalX from '../components/ModalX';

export default function Home() {
	const { isAuthenticated, logout } = useMoralis();
	if(!isAuthenticated) return <Login />;
    return (
    <div className="h-screen bg">
      <Head>
        <title>Metaverse | Jad</title>
        <link rel="icon" href="/favicon.ico" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css?family=Kanit&display=swap&effect=neon|3d-float|emboss" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
      </Head>
	  
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
              value_area: 2800,
            },
            value: 40,
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
		<div className="max-w-screen-2xl mx-auto">
		<Header />
		<Chat />
		</div>
    </div>
  )
}

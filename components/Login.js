import Image from "next/image";
import { useMoralis } from "react-moralis";
import Particles from "react-tsparticles";
function Login() {
	const { authenticate } = useMoralis();
  return (
  
    <div className="relative z-50">
	 <Particles
      id="tsparticles"
      options={{
        background: {
			"image":
			"url('https://i.ibb.co/qmMvHVJ/virtual-reality.jpg')",
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
              value_area: 900,
            },
            value: 80,
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
		<div className = "flex flex-col absolute z-10 items-center justify-center h-4/6 w-full space-y-4">
			<Image
				src = "https://i.ibb.co/fHpKZVy/41-416568-modern-vector-png-image-with-transparent-background-lion-removebg-preview.png"
				height = {250}
				width = {470}
				/>
			<button className="bg-blue-300 rounded-lg p-4 shadow-lg shadow-purple-400 hover:bg-blue-400 transition duration-250" onClick = {authenticate}> Login to METAVERSE </button>
		</div>
		<div className="w-full h-screen">

		</div>
    </div>
  )
}

export default Login

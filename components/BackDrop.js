import {useState, useEffect} from 'react';
import { useMoralis } from "react-moralis";
import {motion} from 'framer-motion';

export default function BackDrop({children, onClick}) { 
	return (
		<motion.div 
			className="backdrop w-full h-screen"
			onClick={onClick}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			{children}
		</motion.div>
	)
}
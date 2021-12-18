import {useState, useEffect} from 'react';
import { useMoralis, ByMoralis } from "react-moralis";
import {motion} from 'framer-motion';
import BackDrop from './BackDrop';
import Avatar from './Avatar';
import Image from 'next/image';

const dropIn = {
	hidden: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: "0", 
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "100vh",
		opacity: 0,
	},
};

export default function ModalX2({handleClose, text}) { 
	const {setUserData, isUserUpdating, userError, user} = useMoralis();
	return (
		<BackDrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="modalF2"
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
			<div className="absolute top-0  h-16 w-16 m-5 border-purple-700">
				<Image 
				className=""
				src={`https://avatars.dicebear.com/api/bottts/${user?.get("username")}.svg`}
				layout="fill"
		/>
			</div>
			<div className="flex flex-col justify-center items-center gap-6 text-xl text-white font-effect-neon mt-16">
				<div>
					Username: {user?.getUsername()}
				</div>
				<div>
					Email: {user?.get('email')}
				</div>
				<div>
					Eth: {user?.get('ethAddress')}
				</div>
				<div>
					Verified: {user?.get('emailVerified') ? "true" : "false"}
				</div>
				<ByMoralis variant="dark" style={{marginLeft: "auto", marginRight:"auto"}} />
			</div>
			</motion.div>
		</BackDrop>
	)
}
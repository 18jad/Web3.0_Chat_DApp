import {useState, useEffect} from 'react';
import { useMoralis } from "react-moralis";
import Image from 'next/image';
import Avatar from './Avatar';
import ChangeUsername from '../components/ChangeUsername';
import ModalX from '../components/ModalX';
import ModalX2 from '../components/ModalX2';
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
	const { user, logout } = useMoralis();
	const [hide, setHide] = useState(false);
	const close = () => setHide(false);
	const open = () => setHide(true);
	const [hide2, setHide2] = useState(false);
	const close2 = () => setHide2(false);
	const open2 = () => setHide2(true);
	return (
	<div>
	<AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
	{hide && <ModalX hide={hide} handleClose={close}/>}
	</AnimatePresence>
		<AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
	{hide2 && <ModalX2 hide={hide2} handleClose={close2}/>}
	</AnimatePresence>
		<div className="sticky chatHeader top-0 p-5 z-[10] shadow-xl border-purple-700 border-b-4 text-pink-400">
			<div className="flex items-center justify-center flex-col">
				<div className="text-center">
					<div className="absolute right-5 top-2">
						<motion.button whileHover={{scale: 1.1}} className="" onClick={() => (hide  ? close() : open())}>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mt-2 text-[#8D00D2] hover:text-[#BE00E8] transition duration-120" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						</motion.button>
						<motion.button whileHover={{scale: 1.1}} onClick={() => logout()}>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#8D00D2] ml-2 hover:text-[#BE00E8] transition duration-120" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
							</svg>
						</motion.button>
					</div>
					<h1 className="text-xl font-effect-neon md:text-4xl">WELCOME TO METAVERSE</h1>
					<motion.div  onClick={() => (hide2  ? close2() : open2())} whileHover={{scale: 1.06}} className="relative headerLogo h-16 w-16 md:h-36 md:w-36 m-5 mx-auto border-purple-700 border-4 rounded-full hover:opacity-75">
						<Avatar logoutOnPress/>
					</motion.div>
					<div className="flex gap-4 items-center justify-center font-effect-3d-float text-pink-200">
						<h2 className="text-2xl bold truncate namePP">{user?.getUsername()}</h2>
					</div>
				</div>
			</div>
			</div>
	</div>
	)
}
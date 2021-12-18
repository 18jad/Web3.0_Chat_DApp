import {useState, useEffect} from 'react';
import { useMoralis } from "react-moralis";
import Image from 'next/image';

export default function Avatar({username, logoutOnPress}) {
	const {user, logout} = useMoralis();
	return (
		<Image 
			className="rounded-full cursor-pointer scale-90"
			src={`https://avatars.dicebear.com/api/bottts/${username || user?.get("username")}.svg`}
			layout="fill"
		/>
	)
}
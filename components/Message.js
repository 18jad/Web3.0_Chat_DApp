import {useState, useEffect, useRef} from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Avatar from './Avatar';

export default function Message({message}) {
	const {user} = useMoralis();
	const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
	return (
		<div className={`flex items-end space-x-2 relative ${
			isUserMessage && 'justify-end'
		}`}>
			<div className={`h-8 w-8 relative ${
				isUserMessage && 'order-last ml-2'
			}`}>
				<Avatar username={message?.get('username')}/>
			</div>
			<div className={`flex space-x-4 px-3 py-3 rounded-lg ${
				isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-purple-300'
			}`}>
				<p className="">{message.get('message')}</p>
			</div>
			<p className={`absolute -bottom-5 text-xs ${
				isUserMessage ? 'text-pink-300' : 'text-purple-300'
			}`}>
				{message?.get('username')}
			</p>
		</div>
	)
}
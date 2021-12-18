import {useState, useEffect} from 'react';
import { useMoralis, useMoralisQuery } from "react-moralis";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

export default function SendMessage({endOfMessagesRef}) { 
	const {user, Moralis} = useMoralis();
	const [message, setMessage] = useState("");
	const [ emoji, setEmoji] = useState(false);
	const sendMessage = (e) => {
		e.preventDefault();
		if(!message || message.replace(/ /g, "") < 1) return;
		const Messages = Moralis.Object.extend('Messages');
		const messages = new Messages();
		messages.save({
			message: message,
			username: user.getUsername(),
			ethAddress: user.get("ethAddress"),
		}).then((message) => {
			console.log("Message sent sucessfully")
		}, (error) => {
			alert(error.message);
			console.log(error.message);
		});
		endOfMessagesRef.current.scrollIntoView({behavior:"smooth"});
		setMessage("");
	}
 	return (
		<div className="flex w-11/12 border-4 border-purple-700 shadow-xl shadow-gray-800 bg-black opacity-60 fixed bottom-10 px-6 py-3 max-w-2xl rounded-full">
		<div className={`text-white absolute -top-[450px] ${emoji ? 'block' : 'hidden'}`}>
			<Picker set='apple' theme='dark'/>
		</div>
			<button onClick={(e) => {  
				setEmoji(!emoji) 
			}}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</button>
			<form className="flex items-center w-full">
			<input type="text" className="outline-none  flex-grow bg-transparent text-white placeholder-white pl-5 text-xl" placeholder="Enter a message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
			<button type="submit" onClick={sendMessage} className="font-bold text-white opacity-60">Send</button>
			</form>
		</div>
	)
}
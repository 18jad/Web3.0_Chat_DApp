import {useState, useEffect, useRef} from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from './SendMessage';
import Message from './Message';

const MIN_DURATION = 15;

export default function Chat() {
	const {user} = useMoralis();
	const endOfMessagesRef = useRef(null);
	const {data, loading, error} = useMoralisQuery(
		'Messages',
		(query) => query.ascending('createdAt').greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MIN_DURATION)), [] , {
			live: true,
		}
	);
	return (
		<div className="">
			<div className="fixed md:top-[300px] right-0 top-[200px] h-[550px] md:h[500px] left-0 lg:left-56 lg:right-56 overflow-y-scroll chatPart">
			<div className="space-y-10 p-4">
				{data.map(message => (
					<Message key={message.id} message={message}/>
				))}
			</div>
			<div className="mb-10 text-white z-50 text-center md:mb-20" ref={endOfMessagesRef}>
			UP TO DATE 🚀!
			<hr className="hrr"/>
			</div>
			</div>
			<div className="flex justify-center">
				<SendMessage endOfMessagesRef={endOfMessagesRef}/>
			</div>
		</div>
	)
}
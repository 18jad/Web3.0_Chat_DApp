import { useState } from "react";
import { useMoralis } from "react-moralis";
import LoginNC from "./LoginNC";

export default function Singup() {
  const { signup } = useMoralis();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showUp, setShowUp] = useState(true);
  return (
    <div>
      {showUp ? (
        <div className='flex flex-col items-center justify-center gap-4 mt-4'>
          <input
            required
            placeholder='Username'
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            type='text'
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
          <input
            required
            placeholder='Email'
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            type='email'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <input
            required
            placeholder='Password'
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <button
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            onClick={() => signup(username, password, email)}>
            {" "}
            Sign up{" "}
          </button>
          <button
            onClick={() => setShowUp(false)}
            className='underline font-effect-3d-float text-white'>
            Sign in
          </button>
        </div>
      ) : (
        <LoginNC />
      )}
    </div>
  );
}

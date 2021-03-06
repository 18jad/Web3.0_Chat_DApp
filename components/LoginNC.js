import { useState } from "react";
import { useMoralis } from "react-moralis";
import Signup from "./Signup";

export default function LoginNC() {
  const { login } = useMoralis();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showUp, setShowUp] = useState(true);
  return (
    <div className='flex flex-col items-center justify-center'>
      {showUp ? (
        <div className='flex flex-col items-center justify-center gap-4 mt-10'>
          <input
            placeholder='Username'
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            type='text'
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            required
          />
          <input
            required
            placeholder='Password'
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
          />
          <button
            className='ipt font-effect-3d-float hover:scale-105 transition duration-200'
            onClick={() => login(username, password)}>
            {" "}
            Log in{" "}
          </button>
          <button
            onClick={() => setShowUp(false)}
            className='underline font-effect-3d-float text-white'>
            Don't have an account yet? Sign up here
          </button>
        </div>
      ) : (
        <Signup />
      )}
    </div>
  );
}

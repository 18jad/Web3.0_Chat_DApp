import { useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { motion } from "framer-motion";
import BackDrop from "./BackDrop";

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

export default function ModalX({ handleClose, text }) {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const [newUser, setNewUser] = useState(user?.getUsername());
  const [newEmail, setNewEmail] = useState(user?.get("email"));
  const setUserName = () => {
    const username = newUser;
    const email = newEmail;
    if (username?.replace(/ /g, "").length < 3 || !username) {
      alert("Username is too small");
      return;
    } else if (userError) return;
    setUserData({
      username,
      email,
    });
  };
  return (
    <BackDrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modalF'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'>
        <h1 className='absolute top-10 text-2xl font-effect-neon'>
          Edit your profile
        </h1>
        <div className='flex mt-[90px] flex-col font-effect-neon'>
          {userError && <p className='text-center'>{userError.message}</p>}
          <p className='text-xl mb-2'>Your username:</p>
          <input
            value={newUser}
            type='text'
            className='w-[300px] ipt hover:scale-105 transition duration-200'
            onChange={(e) => setNewUser(e.target.value)}
          />
        </div>
        <div className='flex flex-col font-effect-neon'>
          <p className='text-xl mb-2'>Your email:</p>
          <input
            value={newEmail}
            type='text'
            className={`w-[300px] ipt2 hover:scale-105 transition duration-200 ${
              userError
                ? "border-red-500 border-4"
                : "border-[#ffffff80] border-[3px]"
            }`}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button
          className='btnA3 w-full'
          disabled={isUserUpdating}
          onClick={setUserName}>
          Save
        </button>
      </motion.div>
    </BackDrop>
  );
}

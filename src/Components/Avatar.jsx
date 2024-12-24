import { FaPowerOff } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
function Avatar(){
    const {userData,signOutUser} = useAuth();
  return (
    <>
      <section className="relative flex justify-center items-center bg-red-700/65 rounded-e-full rounded-s-full">
      <div className='avatar'>
        <div className='w-8 rounded-full'>
          <img
            className="object-cover h-full w-full"
            src={userData?.photoURL}
            alt='Tailwind-CSS-Avatar-component'
          />
        </div>
      </div>
      <button onClick={signOutUser} className="w-10 h-8 px-2 py-2 rounded-e-full text-lg whitespace-nowrap text-white">
      <FaPowerOff />
      </button>
      </section>
    </>
  );
}

export default Avatar;

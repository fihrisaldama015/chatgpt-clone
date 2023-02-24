import { signOut } from "next-auth/react";

function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="mt-auto flex justify-center hover:bg-red-400/75 hover:text-red-800 text-white hover:font-semibold rounded-lg px-5 py-1 transition-all duration-200 ease-out"
    >
      Log Out
    </button>
  );
}

export default Logout;

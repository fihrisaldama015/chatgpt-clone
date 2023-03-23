import { signOut } from "next-auth/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

function Logout() {
  return (
    <button
      onClick={() => signOut()}
      className="mt-auto flex justify-center items-center gap-2 hover:bg-red-500/75 hover:ring-red-400 ring-1 ring-gray-700 text-white hover:font-semibold rounded-lg px-5 py-2 transition-all duration-200 ease-out"
    >
      <ArrowLeftOnRectangleIcon className="w-5 h-5 text-gray-300" />
      Log Out
    </button>
  );
}

export default Logout;

import { signIn } from "next-auth/react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="h-screen flex flex-col bg-emerald-600 text-slate-50">
      <div className="flex flex-1 flex-col justify-center items-center space-y-4">
        <CubeTransparentIcon className="w-14 h-14 text-white" />
        <h1 className="text-2xl font-semibold">Welcome to ChatGPT-Clone</h1>
        <p className="text-lg animate-pulse duration-50">
          Sign In with your account to continue
        </p>
        <button
          onClick={() => signIn("google")}
          className="flex items-center gap-4 p-4 font-medium bg-white hover:bg-green-100 shadow-md hover:shadow-green-700 text-slate-900 rounded-lg transition-all duration-200 ease-out"
        >
          <img src="/google.svg" alt="g-icon" className="w-6 h-6" />
          Login with Google
        </button>
      </div>
      <footer className="flex gap-5 p-5 items-center justify-center">
        <a
          href="https://github.com/fihrisaldama015/chatgpt-clone"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.svg" alt="github" className="w-8 h-8" />
        </a>
        <div className="flex flex-col text-gray-50 text-sm">
          <p className="font-medium ">fihrisaldama015</p>
          <p className="font-light ">
            &copy;{new Date().getFullYear()}. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Login;

import { signIn } from "next-auth/react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="h-screen bg-emerald-600 flex flex-col justify-center items-center space-y-4 text-slate-50">
      <CubeTransparentIcon className="w-14 h-14 text-white" />
      <h1 className="text-2xl font-semibold">Welcome to ChatGPT-Clone</h1>
      <p className="text-lg animate-pulse duration-50">
        Sign In with your account to continue
      </p>
      <button
        onClick={() => signIn("google")}
        className="p-4 font-medium bg-white hover:bg-green-100 shadow-md hover:shadow-green-700 text-slate-900 rounded-lg transition-all duration-200 ease-out"
      >
        Login with Google
      </button>
    </div>
  );
}

export default Login;

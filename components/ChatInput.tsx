import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";
import useSWR from "swr";
import ModelSelection from "./ModelSelection";
type ChatInputProps = {
  chatId: string;
};
function ChatInput({ chatId }: ChatInputProps) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  // const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    })
      .then(() => {
        toast.success("ChatGPT answered!", { id: notification });
      })
      .catch((err) => {
        toast.error(err.message, { id: notification });
      });
  };
  return (
    <div className="bg-gray-800/50 text-sm xl:px-60 p-5 shadow-2xl shadow-black ring-1 ring-gray-600">
      <form
        onSubmit={sendMessage}
        className="flex gap-4 bg-gray-700/50 text-gray-100 py-2 px-4 rounded-lg"
      >
        <input
          className="bg-transparent focus:outline-none flex-1"
          value={prompt}
          autoComplete="off"
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          disabled={!prompt}
          className="bg-green-400/50 hover:opacity-80 disabled:bg-gray-500 transition-all px-4 py-2 rounded font-bold text-white disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
        </button>
      </form>
      <div className="sm:hidden mt-3">
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;

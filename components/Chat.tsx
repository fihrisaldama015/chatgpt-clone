import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, query, orderBy } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

type ChatProps = {
  chatId: string;
};
function Chat({ chatId }: ChatProps) {
  const { data: session } = useSession();
  const [messages, loading, error] = useCollection(
    session &&
      query(
        collection(
          db,
          "users",
          session?.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex-1 overflow-auto">
      {messages?.empty ? (
        <div className="flex flex-col h-full items-center justify-center text-gray-100 text-lg">
          <p>Type a question in the prompt below to start!</p>
          <ArrowDownCircleIcon className="w-8 h-8 mt-5 text-gray-100 animate-bounce" />
        </div>
      ) : null}
      {messages?.docs.map((chat) => (
        <Message key={chat.id} message={chat.data()} />
      ))}
    </div>
  );
}

export default Chat;

import Logout from "./LogoutButton";
import NewChat from "./NewChat";
import { useSession } from "next-auth/react";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";

function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1 flex flex-col gap-2">
        <NewChat />
        <div className="hidden sm:block">
          <ModelSelection />
        </div>
        {loading ? (
          <div className="animate-pulse text-center text-white py-5">
            Loading Chats...
          </div>
        ) : null}
        {chats?.docs.map((chat) => (
          <ChatRow key={chat.id} id={chat.id} />
        ))}
      </div>
      <div className="px-4 py-2 mx-auto flex gap-4 items-center">
        <img
          src={session?.user?.image!}
          alt="user-pic"
          className="h-8 w-8 rounded-full cursor-pointer mb-2 hover:opacity-50"
        />
        <p className="text-sm font-semibold tracking-wide hidden md:block text-gray-300">
          {session?.user?.name}
        </p>
      </div>
      <Logout />
    </div>
  );
}

export default SideBar;

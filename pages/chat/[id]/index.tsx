import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";
import { useRouter } from "next/router";

function ChatPage() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={`${id}`} />
      <ChatInput chatId={`${id}`} />
    </div>
  );
}

export default ChatPage;

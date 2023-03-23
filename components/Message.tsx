import { DocumentData } from "firebase/firestore";

type MessageProps = {
  message: DocumentData;
};

function Message({ message }: MessageProps) {
  const isChatGPT = message.user._id == "ChatGPT";
  return (
    <div className={`py-5 ${isChatGPT ? "bg-gray-600/30" : ""} text-gray-300`}>
      <p className="px-5 text-right text-xs text-gray-300/50 hidden md:block h-min">
        {message.user.name}
      </p>
      <div className="flex px-10 gap-5 max-w-3xl mx-auto">
        <img
          src={message.user.avatar}
          alt="profil"
          className="w-8 h-8 rounded-full"
        />
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
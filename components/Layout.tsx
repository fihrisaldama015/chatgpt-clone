import SideBar from "./SideBar";
import { useSession } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import Login from "./Login";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <div className="flex">
      <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
        <SideBar />
      </div>
      <Toaster position="top-right" />
      <div className="bg-[rgb(52,53,65)] flex-1">{children}</div>
    </div>
  );
}

export default Layout;

import SideBar from "./SideBar";
import { useSession } from "next-auth/react";
import Login from "./Login";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  const { data: session } = useSession();
  console.log("session => ", session);

  if (!session) return <Login />;

  return (
    <div className="flex">
      <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
        <SideBar />
      </div>
      <div className="bg-[#343541] dark:bg-gray-800 flex-1">{children}</div>
    </div>
  );
}

export default Layout;

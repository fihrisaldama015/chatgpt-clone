import Logout from "./LogoutButton";
import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <NewChat />
        <div>{/* model */}</div>
        {/* map */}
      </div>
      <Logout />
    </div>
  );
}

export default SideBar;

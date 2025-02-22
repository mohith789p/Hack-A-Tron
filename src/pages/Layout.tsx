import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/beautiful-ocean-pictures-1920-x-1080-r0yyh3qhk3284dqc.jpg')",
      }}
    >
      {/* ✅ Navbar / Sidebar */}
      <header className="bg-black/50 text-white py-4 px-6 fixed w-full">
        <h1 className="text-xl font-bold">FishMate</h1>
      </header>

      {/* ✅ This renders the page content inside the layout */}
      <main className="pt-16 px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

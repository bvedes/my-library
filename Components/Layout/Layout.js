import Header from "../Header/Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="container flex flex-col h-screen max-w-screen-lg mx-auto sm:text-lg md:px-6 text-gray-800 tracking-tighter px-4">
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

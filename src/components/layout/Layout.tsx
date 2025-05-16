
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-ece-dark to-ece-darker">
      <div className="circuit-overlay"></div>
      <Navbar />
      <main className="flex-grow container my-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default HomeLayout;

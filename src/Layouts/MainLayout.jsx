import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import Navbar from '../Components/Navbar';
import { useNavigationLoading } from '../hooks/useNavigationLoading';

const MainLayout = () => {
    const isLoading = useNavigationLoading();

    return (
        <div>
            {isLoading && <Loading />}
            <Navbar></Navbar>
            <div className='max-w-screen-2xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
             <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
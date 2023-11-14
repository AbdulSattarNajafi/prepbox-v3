import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PageLoader from '../components/elements/PageLoader';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Suspense fallback={<PageLoader />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default Layout;

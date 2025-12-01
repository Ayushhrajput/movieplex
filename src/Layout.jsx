import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { FavouritesProvider } from './context/FavouriteContext';

function Layout() {
    return (
        <FavouritesProvider>
            <Header className={`fixed left-0 right-0 z-20`} />
            <Outlet />
            <Footer />
        </FavouritesProvider>
    );
}

export default Layout;
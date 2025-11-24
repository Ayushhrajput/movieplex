import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function Layout() {
    return (
        <div>
            <Header className={`fixed left-0 right-0 z-20`} />
            <Home />
            <Footer />
        </div>
    );
}

export default Layout;
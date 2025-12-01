import { useEffect, useState } from 'react';
import './style.css'
import { Link, NavLink } from 'react-router-dom';

function Header({className}) {

    const [isSticky, setIsSticky] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [browse, setBrowse] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return (
        <div className={className}>
            <div className={`header ${isSticky? 'sticky': ''} flex text-white h-14 w-full justify-between`}>
                <div className='flex items-center w-full'>
                    <div className=' text-red-600 text-xl lg:text-2xl px-4 cursor-pointer font-bold'>MoviePlex</div>
                    <div
                    onClick={() => (
                        setBrowse((prev) => (!prev))
                        
                    )
                    }
                    className='flex items-center outline cursor-pointer lg:hidden'>
                        <span>Browse</span>
                        <i className={`${browse? 'rotate-180':''} fa-solid fa-caret-down`}></i>
                    </div>
                    <div className={`lg:hidden ${browse? 'inline-flex':'hidden'} backdrop-blur-2xl  bg-black/10 absolute top-16 left-10 w-40 flex justify-center rounded`}>
                        <ul className='flex flex-col gap-4 py-4'>
                            <Link to='/'><li>Movies</li></Link>
                            <Link to='/favourites'><li>Favourites</li></Link>
                        </ul>
                    </div>
                    <ul className=' w-lg justify-center hidden lg:inline-flex gap-10'>
                        <NavLink to='/'><li>Movies</li></NavLink>
                        <NavLink to='/favourites'><li>Favourites</li></NavLink>
                    </ul>
                </div>
                <div className='w-lg flex justify-end '>
                    
                </div>
                <div className='flex items-center mx-4 lg:mx-10'>
                    <i class="fa-solid text-white fa-user"></i>
                </div>
            </div>
        </div>
        
        
    );
}

export default Header;
import React, { useEffect, useState } from 'react';
import movieplex from '../assets/movieplex.png'
import './style.css'

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
                    <img src={movieplex} alt="" className='h-full' />
                    <div
                    onClick={() => 
                        setBrowse((prev) => (!prev))
                    }
                    className='flex items-center outline cursor-pointer lg:hidden'>
                        <span>Browse</span>
                        <i className={`${browse? 'rotate-180':''} fa-solid fa-caret-down`}></i>
                    </div>
                    <div className={`lg:hidden ${browse? 'inline-flex':'hidden'} backdrop-blur-2xl  bg-black/10 absolute top-16 left-28 w-40 flex justify-center rounded`}>
                        <ul className='flex flex-col gap-4 py-4'>
                            <li>Content</li>
                            <li>Movies</li>
                            <li>Popular</li>
                            <li>My list</li>
                        </ul>
                    </div>
                    <ul className=' w-lg justify-center hidden lg:inline-flex gap-10'>
                        <li>Content</li>
                        <li>Movies</li>
                        <li>Popular</li>
                        <li>My list</li>
                    </ul>
                </div>
                <div className='w-lg flex justify-end '>
                    <div className={`flex items-center ${showInput? 'outline': 'outline-0'} my-4`}>
                        <i class="fa-solid text-white fa-magnifying-glass "
                            onClick={() => {
                                setShowInput((prev) => (!prev))
                            }}
                        >
                        </i>
                        <input type="text" 
                            placeholder='title, category'
                            className={`outline-none px-2 ${(showInput)? 'w-40 lg:w-60': 'w-0'} transition-all duration-100 `}
                        />
                    </div>
                </div>
                <div className='flex items-center mx-4 lg:mx-10'>
                    <i class="fa-solid text-white fa-user"></i>
                </div>
            </div>
        </div>
        
        
    );
}

export default Header;
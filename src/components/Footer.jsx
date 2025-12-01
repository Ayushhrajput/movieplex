import { NavLink } from "react-router-dom";


function Footer(props) {
    return (
        <div className='bg-black/90 text-white px-1.5'>
            <div className=" min-h-xl py-6 w-full flex flex-col gap-10">
                <div className=' flex min-w-full justify-around px-4'>
                    
                    <div>
                        <ul className='flex flex-col gap-4'>
                            <NavLink to='/'><li>Movies</li></NavLink>
                            <NavLink to='/favourites'><li>Favourites</li></NavLink>
                        </ul>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <a href="https://github.com/Ayushhrajput">Github</a>
                        </div>
                    </div>
                </div>
                <div className='px-4 text-gray-400'>
                    <h1>© 2025 MoviePlex</h1>
                    <p>Built using - React, Tailwind CSS, JavaScript</p>
                    <p>Movie data provided by Open Movie Database API</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
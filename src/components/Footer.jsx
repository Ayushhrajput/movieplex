import React from 'react';
import movieplex from '../assets/movieplex.png'

function Footer(props) {
    return (
        <div className='bg-black/90 text-white px-1.5'>
            <div className=" min-h-xl py-6 w-full flex flex-col gap-10">
                <div className=' flex min-w-full justify-around px-4'>
                    
                    <div>
                        <ul className='flex flex-col gap-4'>
                            <li>Content</li>
                            <li>Movies</li>
                            <li>Recommendations</li>
                            <li>My list</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col'>
                            <li>Github</li>
                        </ul>
                    </div>
                </div>
                <div className='px-4 text-gray-400'>
                    <h1>© 2025 MoviePlex</h1>
                    <p>Built using - React • Tailwind CSS • JavaScript • Firebase</p>
                    <p>Movie data provided by OMDB API</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
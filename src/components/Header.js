import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import '../App.css';
import SivaImg from '../assets/Sivasubramani.jpeg';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-header ">
        <div className="flex items-center">
            <img className='md:w-1/4 mr-5 rounded-full headerimg' src={SivaImg} alt="Sivasubramani" />
            <a className="font-bold text-black" href="#">Sivasubramani</a>
        </div>
        <nav className="hidden md:block">
            <ul className="flex text-white ">

            <li><a href={process.env.PUBLIC_URL +'/'}>Home</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#about'}>About</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#about'}>Technical Skills</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#projects'}>Professional Experience</a></li>
                <li><a href={process.env.PUBLIC_URL + '/#resume'}>Resume</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#contact'}>Contact</a></li>
                
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
            <li><a href={process.env.PUBLIC_URL +'/#about'}>About</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#about'}>Technical Skills</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#projects'}>Professional Experience</a></li>
                <li><a href={process.env.PUBLIC_URL + '/#resume'}>Resume</a></li>
                <li><a href={process.env.PUBLIC_URL +'/#contact'}>Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
}
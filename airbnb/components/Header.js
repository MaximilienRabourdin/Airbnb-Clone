import Image from "next/image";
import {GlobalIcon, MenuIcon, UserCircleIcon, UserIcon, SearchIcon, GlobeAltIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header 
        className="
         sticky top-0 z-50 grid
         grid-cols-3 bg-white shadow-md 
         py-5 px-5 md:px-10">
  
        {/* Left section header */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                src='https://links.papareact.com/qd3'
                layout="fill" objectFit="contain"
                objectPosition="left" />
            </div>

        {/* Middle section header */}
            <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2 ">
                <input className="flex-grow text-sm pl-5 placeholder-gray-400 outline-none
                 bg-transparent text-gray-600" type="text" placeholder="Commencez votre recherche" />
                <SearchIcon 
                className="
                hidden md:inline-flex h-8 
                bg-red-400 text-white rounded-full 
                p-2 cursor-pointer outline-non"/> 
            </div>

        
        {/* Right section header */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Devenir un hôte</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6" />
                </div>
            </div>
        </header>
    )
}

export default Header

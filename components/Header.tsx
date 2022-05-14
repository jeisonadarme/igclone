import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/Solid'

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex justify-between max-w-5xl mx-5 mt-2 mb-2 cursor-pointer md:mb-0 md:mt-0 lg:mx-auto">
        <div className="flex items-center ">
          <img src="https://links.papareact.com/ocw" className="h-10" />
        </div>
        {/* <div className="relative flex-shrink-0 w-10 cursor-pointer md:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div> */}
        <div className="hidden max-w-xs md:inline-block">
          <div className="relative p-3 rounded-md">
            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full h-8 pl-10 bg-gray-100 border-gray-300 rounded-md focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="nav-btn" />
          {/* <MenuIcon className="h-6 cursor-pointer md:hidden" /> */}

          <PaperAirplaneIcon className="-mt-2 rotate-45 nav-btn" />
          <PlusCircleIcon className="nav-btn" />
          <UserGroupIcon className="nav-btn" />
          <HeartIcon className="nav-btn" />
          <img
            className="h-8 rounded-full cursor-pointer"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"
          />
        </div>
      </div>
    </div>
  )
}

export default Header

import Image from 'next/image'
import React from 'react'
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import { HiHome, HiChartBar, HiClock, HiDotsHorizontal } from "react-icons/hi";


const Sidebar = () => {
  return (
    <section className='fixed top-0 z-40 flex flex-col p-4 
    items-center bg-black w-[90px] h-screen space-y-8'>
    <Image src="https://media.discordapp.net/attachments/898544585167482891/900083852658225172/image0.png?width=619&height=637"
      width={56} height={56} objectFit="contain" alt='Spotify Logo'
    />
    <div className="flex flex-col space-y-8">
        <HiHome className="sidebarIcon text-white opacity-[0.85] w-6 h-6"/>
        <RiCompassFill className="sidebarIcon text-2xl" />
        <FaMicrophoneAlt className="sidebarIcon ml-1" />
        <HiChartBar className="sidebarIcon w-6 h-6" />
        <HiClock className="sidebarIcon w-6 h-6" />
        <HiDotsHorizontal className="sidebarIcon w-6 h-6" />
    </div>
    </section>
  )
}

export default Sidebar
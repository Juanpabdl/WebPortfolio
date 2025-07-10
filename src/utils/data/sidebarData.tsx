import {CircleUserIcon, GalleryHorizontal, Home, Send } from "lucide-react";

export const sideData = [
    {
        title: 'Home',
        path:'/',
        icon: <Home size={32} color="#158063" strokeWidth={2} className="menuIcon" />
    },
    {
        title: 'About Me',
        path: '/#aboutme',
        icon: <CircleUserIcon size={32} color="#158063" strokeWidth={2} className="menuIcon"/>
    },
    {
        title: 'My Projects',
        path: '/projects',
        icon: <GalleryHorizontal size={32} color="#158063" strokeWidth={2} className="menuIcon"/>
    },
    {
        title: 'Contact Me',
        path: '/contact',
        icon: <Send size={32} color="#158063" strokeWidth={2} className="menuIcon"/>
    }
]
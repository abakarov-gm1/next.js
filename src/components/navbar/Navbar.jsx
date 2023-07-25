'use client'
import React from 'react';
import Link from "next/link";
import style from './navbar.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];


const Navbar = () => {
    return (
        <div className={style.navbarContainer}>

            <Link
                href={links[0].url}
                className={style.logo}
            >
                {links[0].title}
            </Link>

            <div className={style.links}>
                {links.slice(1).map((item) => {return(
                    <Link
                        href={item.url}
                        key={item.id}
                        className={style.link}
                    >
                        {item.title}
                    </Link>
                )})}

                <button
                    className={style.logout}
                    onClick={() => {
                        console.log('yes')
                    }}>
                    Logout
                </button>

            </div>


        </div>
    );
};

export default Navbar;




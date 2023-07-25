import React from 'react';
import style from './footer.module.css';
import Image from "next/image";
import img1 from './../../../public/icon=vk, color=yes, round=no.png'
import img2 from './../../../public/icon=telegramm, color=yes, round=no.png'
import img3 from './../../../public/icon=twitter, color=yes, round=no.png'
import img4 from './../../../public/icon=youtube, color=yes, round=no.png'


const Footer = () => {
    return (
        <div className={style.container}>

            <div>@2023 Lamamia. All rights reserved.</div>

            <div className={style.listIcon}>
                <Image src={img1} width={25} height={25} alt='Lamadeo' className={style.icon} />
                <Image src={img2} width={25} height={25} alt='Lamadeo' className={style.icon} />
                <Image src={img3} width={25} height={25} alt='Lamadeo' className={style.icon} />
                <Image src={img4} width={25} height={25} alt='Lamadeo' className={style.icon} />
            </div>

        </div>
    );
};

export default Footer;



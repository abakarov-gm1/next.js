import hero from './../../public/hero.png';
import Image from 'next/image';
import style from './home.module.css'


export default function Home() {

  return (
      <div>

          <div></div>

          <Image
            src={hero}
            alt='hero'
            className={style.img}
            width={500}
            height={500}
          />

      </div>
  )
}






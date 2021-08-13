import Image from 'next/image'
import hero from './images/hero.webp'

export default function Hero(){
    return(
        <div>
            <Image width={hero.width} height={hero.height} src={hero.src} alt='' />
        </div>
    )
}
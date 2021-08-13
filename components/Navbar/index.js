import Image from "next/image"
import Link from "next/link"
import '../../styles/Navbar.module.css'

import {
	lastMinutes,
	quatation,
	purpleTag,
	logo,
	tiktok,
	telegram,
	twitter,
	instagram,
	facebook,
	available,
	pool,
	villa,
	prestigious,
	studentsSoldiers,
	druze,
	byTheHour,
	religious,
	kibbutz,
	attractions,
} from "./assets"

export default function Navbar() {
	return (
		<>
			<nav className="navTop flex flex-row justify-between">

					<div className="mt-4">
						<Image width="180px" height="45px" src={lastMinutes} alt='' />
					</div>

					<div className="mt-4">
						<Image width="180px" height="45px" src={quatation} alt='' />
					</div>

					<div className="mt-4">
						<Image width="180px" height="45px" src={purpleTag} alt='' />
					</div>

				<div className="block">
					
					<div className="flex-initial flex flex-row-reverse items-center justify-center py-3 px-1">

						<Link href="/" description='open myFavorit panel'>
							<a className="whitespace-nowrap px-2">המועדפים שלי</a>
						</Link>

						<Link href="/" description='standart link'>
							<a className="whitespace-nowrap px-2">צימרים בצפון</a>
						</Link>

						<Link href="/" description='standart link'>
							<a className="whitespace-nowrap px-2">צימרים לזוגות</a>
						</Link>

						<Link href="/" description='standart link'>
							<a className="whitespace-nowrap px-2">צימרים למשפחות</a>
						</Link>

						<Link href="/" description='switch to english'>
							<a className="whitespace-nowrap px-2">English</a>
						</Link>

					</div>

					<div className="flex-initial flex items-center justify-center -mt-2 px-1">

						<Link href="/">
							<a className="whitespace-nowrap px-2">צרו קשר</a>
						</Link>

						<Link href="/">
							<a className="whitespace-nowrap px-2">פרסמו אצלנו</a>
						</Link>

						<Link href="https://bit.ly/3rpJfAC">
							<a className="whitespace-nowrap px-2">
								<Image
									src={tiktok}
									alt="צימר בטיקטוק"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://t.me/zimmercoil">
							<a className="whitespace-nowrap px-2">
								<Image
									src={telegram}
									alt="צימר בטלגרם"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://twitter.com/zimmer_co_il">
							<a className="whitespace-nowrap px-2">
								<Image
									src={twitter}
									alt="צימר בטוויטר"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://www.instagram.com/zimmer.co.il/">
							<a className="whitespace-nowrap px-2">
								<Image
									src={instagram}
									alt="צימר באינסטגרם"
									width={26}
									height={26}
								/>
							</a>
						</Link>

						<Link href="https://www.facebook.com/zimmer.co.il">
							<a className="whitespace-nowrap px-2">
								<Image
									src={facebook}
									alt="צימר בפייסבוק"
									width={26}
									height={26}
								/>
							</a>
						</Link>

					</div>

				</div>

				<div className="mr-12">
					<Image width="85px" height="67px" src={logo.src} alt='' />
				</div>

			</nav>
		
			<nav className="flex flex-row-reverse justify-between">

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='צימר פנוי' src={available} />
					</div>
					<span className="place-self-center">צימר פנוי</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='צימר עם בריכה' src={pool} />
					</div>
					<span className="place-self-center">צימר עם בריכה</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='וילות נופש' src={villa} />
					</div>
					<span className="place-self-center">וילות נופש</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='צימר יוקרתי' src={prestigious} />
					</div>
					<span className="place-self-center">צימר יוקרתי</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='סטודנטים/חיילים' src={studentsSoldiers} />
					</div>
					<span className="place-self-center">סטודנטים/חיילים</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='אירוח דרוזי' src={druze} />
					</div>
					<span className="place-self-center">אירוח דרוזי</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='צימר לפי שעה' src={byTheHour} />
					</div>
					<span className="place-self-center">צימר לפי שעה</span>
				</button>   
				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='צימר לדתיים' src={religious} />
					</div>
					<span className="place-self-center">צימר לדתיים</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='צימר בקיבוץ' src={kibbutz} />
					</div>
					<span className="place-self-center">צימר בקיבוץ</span>
				</button>   

				<button className="hover:text-blue-800 text-gray-800 font-bold py-2 px-4">
					<div className="flex items-center justify-center">
						<Image width={30} height={30} alt='אטרקציות' src={attractions } />
					</div>
					<span className="place-self-center">אטרקציות</span>
				</button>   

			</nav>
			
		
		</>
	)
}

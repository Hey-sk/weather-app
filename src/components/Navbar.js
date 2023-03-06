import Link from 'next/link'
import nav from '@/styles/Navbar.module.css'
import { JetBrains_Mono } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/pro-regular-svg-icons'
import { faShapes } from '@fortawesome/pro-duotone-svg-icons';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500'] })

export default function navbar() {
    const username = 'stephen'
    return (
        <>
            <div className={jetBrainsMono.className}>
            <nav className={nav.navbar}>
                <div><FontAwesomeIcon icon={faShapes} size='2x' style={{"--fa-primary-color": "rgb(219, 154, 200)","--fa-secondary-color":"rgb(255,255,255)"}}/></div>

                <div style={{textAlign:'center'}}>
                    <h2>skeane.io &nbsp; | &nbsp;🌧️ &nbsp; weather &nbsp; ☀️</h2>
                </div>

                {/* <Link href={`/settings/${username}`}> <FontAwesomeIcon icon={faGear} size='2x'/></Link> */}
            </nav>
            </div>
        </>
    )
}
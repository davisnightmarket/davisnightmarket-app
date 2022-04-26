import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { AiFillHome, AiFillCompass } from 'react-icons/ai'
import { IoStatsChart } from 'react-icons/io5'
import { GiHamburgerMenu, GiStairsGoal } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { MdHandyman } from 'react-icons/md'
import Link from 'next/link';

export default function Navbar(props) {
    const [ btn1, btn2, btn3, btn4, btn5, btn6 ] = props.status;
    const [ btnClicked, setBtnClicked ] = useState(false)

    const homeNavbar = <React.Fragment>
                <Link href='/main'>
                    <div className={ styles.menuOption } style={ btn1 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiFillHome color={btn1 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn1 ? { color: '#000' } : { color: '#fff' } }>Home</p>
                    </div>
                </Link>
                <Link href='/explore'>
                    <div className={ styles.menuOption } style={ btn2 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiFillCompass color={btn2 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn2 ? { color: '#000' } : { color: '#fff' } }>Explore</p>
                    </div>
                </Link>
                <Link href='/archive'>
                    <div className={ styles.menuOption } style={ btn3 ? { backgroundColor: '#E7EDE9' } : null }>
                        <IoStatsChart color={btn3 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn3 ? { color: '#000' } : { color: '#fff' } }>Stats</p>
                    </div>
                </Link>
                <Link href='/mission'>
                    <div className={ styles.menuOption } style={ btn4 ? { backgroundColor: '#E7EDE9' } : null }>
                        <GiStairsGoal color={btn4 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn4 ? { color: '#000' } : { color: '#fff' } }>Mission</p>
                    </div>
                </Link>
                <Link href='/diy'>
                    <div className={ styles.menuOption } style={ btn5 ? { backgroundColor: '#E7EDE9' } : null }>
                        <MdHandyman color={btn5 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn5 ? { color: '#000' } : { color: '#fff' } }>DIY</p>
                    </div>
                </Link>
                <Link href='/team'>
                    <div className={ styles.menuOption } style={ btn6 ? { backgroundColor: '#E7EDE9' } : null }>
                        <BsFillPeopleFill color={btn6 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn6 ? { color: '#000' } : { color: '#fff' } }>Team</p>
                    </div>
                </Link>
    </React.Fragment>

    return (
        <div className={ styles.navbar } >
            <Link href={'/'}>
                <div className={ styles.logoSection }>
                    <img src='/images/logo.png' />
                </div>
            </Link>
            <div className={ styles.mobileNav }>
                <img className={ styles.mobileLogo } src='/images/logo.png' />
                <GiHamburgerMenu className={ styles.burgerBtn } size={ 50 } color={ '#fff' }
                onClick={ () => setBtnClicked( !btnClicked ) } />
            </div>
            <div className={styles.mobileMenu} style={ btnClicked ? { transform: 'translateY(0px)', height: '100%', transition: 'linear 0.3s' } : { transform: 'translateY(-400px)', height: '0%', transition: 'linear 0.3s' } }>
                { homeNavbar }
            </div>
            <div className={styles.menu}>
                { homeNavbar }
            </div>
        </div>
    )
}
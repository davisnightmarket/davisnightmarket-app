import React from 'react';
import styles from './Navbar.module.css'
import { AiFillHome, AiFillCompass, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai'
import { IoDocumentsOutline } from 'react-icons/io5'
import Link from 'next/link';

export default function Navbar(props) {
    const [ btn1, btn2, btn3 ] = props.status;

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
                <div className={ styles.line }></div>
                <Link href='/login'>
                    <div className={ styles.menuOption } style={ btn3 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiOutlineLogin color={btn3 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn3 ? { color: '#000' } : { color: '#fff' } }>Log In</p>
                    </div>
                </Link>
    </React.Fragment>

    const donorNavbar = <React.Fragment>
                <Link href='/main'>
                    <div className={ styles.menuOption } style={ btn1 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiFillHome color={btn1 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn1 ? { color: '#000' } : { color: '#fff' } }>Home</p>
                    </div>
                </Link>
                <Link href='/explore'>
                    <div className={ styles.menuOption } style={ btn2 ? { backgroundColor: '#E7EDE9' } : null }>
                        <IoDocumentsOutline color={btn2 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn2 ? { color: '#000' } : { color: '#fff' } }>Confirmation Receipts</p>
                    </div>
                </Link>
                <div className={ styles.line }></div>
                <Link href='/login'>
                    <div className={ styles.menuOption } style={ btn3 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiOutlineLogout color={btn3 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn3 ? { color: '#000' } : { color: '#fff' } }>Log Out</p>
                    </div>
                </Link>
    </React.Fragment>

    const receiverNavbar = <React.Fragment>
                <Link href='/main'>
                    <div className={ styles.menuOption } style={ btn1 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiFillHome color={btn1 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn1 ? { color: '#000' } : { color: '#fff' } }>Home</p>
                    </div>
                </Link>
                <Link href='/explore'>
                    <div className={ styles.menuOption } style={ btn2 ? { backgroundColor: '#E7EDE9' } : null }>
                        <IoDocumentsOutline color={btn2 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn2 ? { color: '#000' } : { color: '#fff' } }>Tax Documents</p>
                    </div>
                </Link>
                <div className={ styles.line }></div>
                <Link href='/login'>
                    <div className={ styles.menuOption } style={ btn3 ? { backgroundColor: '#E7EDE9' } : null }>
                        <AiOutlineLogout color={btn3 ? '#000' : '#fff'} size={30} style={{ margin: '0 1.5rem' }} />
                        <p style={ btn3 ? { color: '#000' } : { color: '#fff' } }>Log Out</p>
                    </div>
                </Link>
    </React.Fragment>

    return (
        <div className={ styles.navbar }>
            <div className={ styles.logoSection }>
                <img src='/images/logo.png' />
                <h4>Every Food Deserves A Second Chance</h4>
            </div>
            <div className={styles.menu}>
                { (!props.donor && !props.receiver) ? homeNavbar : null }
                { props.donor ? donorNavbar : null }
                { props.receiver ? receiverNavbar : null }
            </div>
        </div>
    )
}
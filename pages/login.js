import Head from 'next/head'
import Navbar from "../components/shared/navbar/navbar";
import styles from '../styles/Login.module.css'
import { FiHeart } from 'react-icons/fi';
import { AiOutlineSmile } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import { useState } from 'react';
import Link from 'next/link';

export default function Explore() {
    const [pageState, setPageState] = useState(0)

    const defaultPage = <div className={ styles.optionRow }>
          <div className={ styles.donorOption } onClick={() => setPageState(1)}>
              <FiHeart size={60} />
              <p>I'm a Donor</p>
          </div>
          <div className={ styles.receiveOption } onClick={() => setPageState(2)}>
            <AiOutlineSmile size={60} />
              <p>I'm a Receiver</p>
          </div>
      </div>

    const donorPage = <div className={ styles.loginBox }>
        <div className={ styles.goBackBox } onClick={() => setPageState(0)}>
          <BiArrowBack size={20} style={{ marginRight: '1rem' }} />
          <p>Back to selection</p>
        </div>
        <div className={ styles.credentialBox }>
          <p>Please enter your access code: </p>
          <input />
        </div>
        <Link href='/donor'>
          <div className={ styles.clickToLogin }>
            <p>Login!</p>
          </div>
        </Link>
      </div>

    const receiverPage = <div className={ styles.loginBox }>
        <div className={ styles.goBackBox } onClick={() => setPageState(0)}>
          <BiArrowBack size={20} style={{ marginRight: '1rem' }} />
          <p>Back to selection</p>
        </div>
        <div className={ styles.credentialBox }>
          <p>Please enter your access code: </p>
          <input />
        </div>
        <Link href='/receiver'>
          <div className={ styles.clickToLogin }>
            <p>Login!</p>
          </div>
        </Link>
      </div>

    return (
        <div className={styles.container}>
          <Head>
            <title>Food Redemption - Explore</title>
            <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar status={[ false, false, true ]} />
          <div className={ styles.main }>
            { pageState == 0 ? defaultPage : null }
            { pageState == 1 ? donorPage : null }
            { pageState == 2 ? receiverPage : null }
          </div>
        </div>
      )
}
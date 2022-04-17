import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Redemption</title>
        <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
      </Head>
      <div className={ styles.main }>
        <h1>Food Redemption</h1>
        <h4>Every Food Deserves A Second Chance</h4>
        <img src="/images/logo.png" alt='Main Logo' /> 
        <Link href='/main'>
          <div className={ styles.btn }>
            <p>Let's go!</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

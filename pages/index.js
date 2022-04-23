import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Redemption</title>
        <meta name="description" content="Food Redemption: All Food Deserves A Second Chance" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
      </Head>
      <div className={ styles.main }>
        <img src="/images/logo.png" alt='Main Logo' /> 
        <Link href='/main'>
          <div className={ styles.btn }>
            <p>Let&apos;s go!</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

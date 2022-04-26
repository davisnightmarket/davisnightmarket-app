import Head from 'next/head'
import DisplayProfile from '../components/shared/displayProfile/displayProfile';
import Navbar from '../components/shared/navbar/navbar';
import styles from '../styles/Team.module.css'
import * as data from '../components/shared/displayProfile/profileData' 

export default function Team() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Food Redemption | Team</title>
            <meta name="description" content="Food Redemption: All Food Deserves A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
            </Head>
            <Navbar status={[ false, false, false, false, true ]} />
            <div className={ styles.scrollable }>
                <div className={ styles.main }>
                    <h1>Meet Our Team!</h1>
                    <DisplayProfile data={data.beam_data} />
                    <DisplayProfile data={data.sejal_data} />
                    <DisplayProfile data={data.alexandra_data} />
                </div>
            </div>
        </div>
    )
}
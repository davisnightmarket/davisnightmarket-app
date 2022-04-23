import Head from 'next/head'
import Navbar from '../components/shared/navbar/navbar';
import styles from '../styles/Main.module.css'

export default function Mission() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food Redemption</title>
        <meta name="description" content="Food Redemption: All Food Deserves A Second Chance" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
      </Head>
      <Navbar status={[ false, false, false, true, false ]} />
      <div className={ styles.scrollable }>
        <div className={ styles.main }>
          <div className={ styles.missionSection }>
            <h1>Our Mission</h1>
            <div className={ styles.boxContainer }>
              <div className={ styles.textBox }>
                <p>
                  The Night Market is a community-based, environmentally-sustainable food recovery organization that recovers and redistributes cooked and non-perishable food that would otherwise go to waste in a stigma-free environment. The Night Market’s mission is to reduce a community’s carbon footprint and increase equitable access to food through organized collective action. We strive for a non-hierarchical, anti-racist, mutual aid operating structure steeped in the ideals of radical inclusivity, climate change awareness, and dance parties :) We aim to ignite a movement of sustainable, inclusive food waste recovery and redistribution that can be replicated anywhere, empowering people and building community in the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

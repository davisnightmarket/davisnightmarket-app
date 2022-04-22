import Head from 'next/head'
import Navbar from '../components/shared/navbar/navbar';
import styles from '../styles/Main.module.css'

export default function Main() {
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
      <Navbar status={[ true, false, false, false ]} />
      <div className={ styles.scrollable }>
        <div className={ styles.main }>
          <div className={ styles.mapSection }>
            <h1>Where to find us?</h1>
            <p>1133 Olive Dr, Davis, CA 95616</p>
            <div className={ styles.mapFrame }>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5796213870935!2d-121.7380283843882!3d38.54345747962678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80852928744d769f%3A0xcbdd8fb47e44c451!2sRyder%20on%20Olive!5e0!3m2!1sen!2sus!4v1650142158507!5m2!1sen!2sus" width="90%" height="90%" style={{ border: 0, borderRadius: '1rem' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className={ styles.missionSection }>
            <h1>Our Mission</h1>
            <div className={ styles.boxContainer }>
              <div className={ styles.textBox }>
                <p>
                Every year one out of eight Americans experience food insecurity. This problem persists for college students, with 38% of students struggling to put food on the table. Looking at these statistics, it may seem as though there is a food shortage, but it’s actually just the opposite: America has a large food waste problem. Actually, restaurants end up disposing of 85% of their unused food. That’s 22 to 33 billion pounds of food waste each year. Regardless of the excess food, people still go hungry while waste and garbage piles up. We at Food Redemption hope to bridge this gap by taking on the challenge of combating food insecurity and wastage. How do we plan to do this? By allowing restaurants to donate their excess food! Giving people access to food, and allowing restaurants to lower their overall waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

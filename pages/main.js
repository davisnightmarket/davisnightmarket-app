import Head from 'next/head'
import Navbar from '../components/shared/navbar/navbar';
import styles from '../styles/Main.module.css'

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Davis Night Market</title>
        <meta name="description" content="The Davis Night Market: Nobody goes to bed hungry" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
      </Head>
      <Navbar status={[ true, false, false, false, false ]} />
      <div className={ styles.scrollable }>
        <div className={ styles.main }>
          <div className={ styles.mapSection }>
            <h1>Where to find us?</h1>
            <p>4th St & C St, Davis, CA 95616</p>
            <div className={ styles.mapFrame }>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.500766408288!2d-121.74668118465996!3d38.54527477962652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085290afd5583df%3A0x309bf3bbfa6b7ba2!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1650669958333!5m2!1sen!2sus" width="90%" height="90%" style={{ border: 0, borderRadius: '1rem' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className={ styles.donorPanel }>
            <h1>Our Donors</h1>
            <p>Meet the amazing businesses that are contributing to their community in Davis, CA. Thank you all!!</p>
            <div className={ styles.donorRow }>
              <a href='https://www.gochickpeas.com/' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/chickpeas.png' alt='chick peas restaurant' />
              </a>
              <a href='https://www.sophiasthaikitchen.com/' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/sophias-thai.png' alt='chick peas restaurant' />
              </a>
              <a href='https://davisfood.coop/' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/co-op.png' alt='chick peas restaurant' />
              </a>
            </div>
            <div className={ styles.donorRow }>
              <a href='https://locations.peets.com/ll/US/CA/Davis/231-E-Street' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/peets.png' alt='chick peas restaurant' />
              </a>
              <a href='https://locations.panerabread.com/ca/davis/609-3rd-st.html' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/panera.png' alt='chick peas restaurant' />
              </a>
              <a href='https://locations.noahs.com/us/ca/davis/1411-w-covell-blvd' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/noahs.png' alt='chick peas restaurant' />
              </a>
            </div>
            <div className={ styles.donorRow }>
              <a href='https://www.capayfarms.com/' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/capay-farms.png' alt='chick peas restaurant' />
              </a>
              <a href='https://www.yelp.com/biz/village-bakery-davis' target='_blank' referrerPolicy='no-referrer' >
                <img src='/images/donors/village-bakery.png' alt='chick peas restaurant' />
              </a>
            </div>
            <h1>Become a Donor!</h1>
            <p>Please fill out this form, and we'll get back to you ASAP!!</p>
            <h1 style={{ margin: '1rem 0' }} >Support Us Financially!</h1>
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="hosted_button_id" value="8SMBVXH9MHNQ2" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            </form>
          </div>
          <div className={ styles.volunteerPanel }>
            <h1>Become a Volunteer!</h1>
            <p>Fill out this <a>form</a> or come visit us the night market (M-F 9-11pm) and chat with us!! We're nice, we promise :)</p>
            <div className={ styles.volunteerImg }>
              <img src='/images/volunteer.jpeg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

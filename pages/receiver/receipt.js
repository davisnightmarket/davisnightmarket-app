import Head from 'next/head'
import Navbar from "../../components/shared/navbar/navbar";
import styles from '../../styles/Receiver.module.css'

export async function getServerSideProps(context) {
    const id = context.query.id;
    return { props: { id } }
}

export default function Donor(props) {
    return (
        <div className={ styles.container }>
          <Head>
            <title>Food Redemption - Explore</title>
            <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar receiver id={props.id} status={[ false, true, false ]} />
          <div className={ styles.main }>
            <h1>Previous Donations</h1>
            <h1>Tax Documents</h1>
          </div>
        </div>
    )
}
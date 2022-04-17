import Head from 'next/head'
import DisplayFood from '../../components/shared/displayFood/displayFood';
import Navbar from "../../components/shared/navbar/navbar";
import { GetAllFood, GetAllReceiverRecords } from '../../firebase_ops/query';
import styles from '../../styles/Receiver.module.css'

export async function getServerSideProps(context) {
    const id = context.query.id;
    let allClaimed = await GetAllReceiverRecords();
    allClaimed = allClaimed.filter(x => x.claimer_id == id)
    const allFood = await GetAllFood();
    const allFoodList = []
    const previousFood = []
    allFood.forEach(x => {
        const extracted = x.data();
        extracted.id = x.id
        allFoodList.push(extracted)
    })
    for (let i = 0; i < allClaimed.length; i++) {
        previousFood.push((allFoodList.filter(x => x.id == allClaimed[i].food_id))[0])
    }
    return { props: { id, previousFood } }
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
          <div className={ styles.receiptMain }>
            <h1>Previously Claimed Donations</h1>
            <div className={ styles.foodSection }>
                {
                    props.previousFood.map(x => <DisplayFood data={x} showReceipt claim_date={x.date_added} />)
                }
            </div>
          </div>
        </div>
    )
}
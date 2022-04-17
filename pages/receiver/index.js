import Head from 'next/head'
import { useState, useEffect } from 'react';
import DisplayFood from '../../components/shared/displayFood/displayFood';
import Navbar from "../../components/shared/navbar/navbar";
import { GetAllFood } from '../../firebase_ops/query';
import styles from '../../styles/Receiver.module.css'

export async function getServerSideProps(context) {
  const id = context.query.id;
  return { props: { id } }
}

export default function Receiver(props) {
    const [foodData, setFoodData] = useState(null)

    const getFoodData = async () => {
      const data = await GetAllFood();
      const initialData = []
      data.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        initialData.push(extracted)
      })
      setFoodData(initialData);
    }
  
    useEffect(() => {
      getFoodData()
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Food Redemption - Explore</title>
                <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar receiver id={props.id} status={[ true, false, false ]} />
            <div className={ styles.main }>
                <h1>Hello, Beam!</h1>
                <h4>Start exploring food options!</h4>
                <div className={ styles.scrollable }>
                    {
                        foodData ? foodData.map(x => <DisplayFood claimable data={x} />) : null
                    }
                </div>
            </div>
        </div>
      )
}
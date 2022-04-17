import React from 'react'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import DisplayFood from '../../components/shared/displayFood/displayFood';
import Navbar from "../../components/shared/navbar/navbar";
import { AddReceiptRecord, GetAllFood, GetAllReceiverRecords } from '../../firebase_ops/query';
import styles from '../../styles/Receiver.module.css'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const id = context.query.id;
  let allClaimed = await GetAllReceiverRecords();
  allClaimed = allClaimed.filter(x => (x.claimer_id == id && x.date_claimed == '04/17/2022'))
  const hasClaimed = allClaimed.length > 0 ? true : false;
  return { props: { id, hasClaimed } }
}

export default function Receiver(props) {
    const [foodData, setFoodData] = useState(null)
    const [selectedFood, setSelectedFood] = useState(null)

    const router = useRouter();

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

    const addReceiverRecord = async () => {
      const date = new Date()
      const data = {
        claimer_id: props.id,
        food_id: selectedFood.id,
        date_claimed: `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${date.getFullYear()}`
      }
      await AddReceiptRecord(data)
      router.reload()
    }

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
                {
                  props.hasClaimed ?
                  <div className={ styles.foodClaimed }>
                    <p>You have claimed your food for today!</p>
                  </div>
                  :
                  <React.Fragment>
                    <h4>Start exploring food options!</h4>
                    <div className={ styles.selectionBar }>
                      <h4>Your Selection</h4>
                      { 
                        selectedFood ? 
                        <DisplayFood claim data={selectedFood} addFood={addReceiverRecord} selectFood={setSelectedFood} />
                        :
                        <p style={{ marginBottom: '2rem' }}>Choose the food you want to claim below!</p>
                      }
                    </div>
                    <div className={ styles.scrollable }>
                        {
                          foodData ? foodData.map(x => <DisplayFood claimable data={x} key={x.id} selectFood={setSelectedFood} />) : null
                        }
                    </div>
                  </React.Fragment>
                }
            </div>
        </div>
      )
}
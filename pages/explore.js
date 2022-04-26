import { useState, useEffect } from 'react';
import Head from 'next/head'
import Navbar from "../components/shared/navbar/navbar";
import styles from '../styles/Explore.module.css'
import DisplayFood from '../components/shared/displayFood/displayFood';
import { GetAllFood } from '../firebase_ops/query';

export default function Explore() {
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
          <meta name="description" content="Food Redemption: All Food Deserves A Second Chance" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar status={[ false, true, false, false, false ]} />
        <div className={ styles.main }>
            <h1>Availability for April {(new Date()).getDate()}th, 2022</h1>
            <div className={ styles.scrollable }>
              <div className={ styles.mainContainer }>
                {
                  foodData ? foodData.filter(x => Math.floor(Math.abs(new Date(x.date_added) - new Date()) / (1000 * 60 * 60 * 24)) == 0).map(x => <DisplayFood data={x} key={x.id} />) : null
                }
              </div>
            </div>
        </div>
      </div>
    )
}
import Head from 'next/head'
import { useState } from 'react';
import DisplayFood from '../components/shared/displayFood/displayFood';
import { AddField, GetAllFood } from '../firebase_ops/query';
import styles from '../styles/Admin.module.css'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const foodData = await GetAllFood();
    const allFoods = []
    foodData.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        allFoods.push(extracted)
    })

    return { props: { allFoods } };
}

export default function Admin(props) {
    const [foodName, setFoodName] = useState('')
    const [restaurantName, setRestaurantName] = useState('')
    const [foodQuantity, setFoodQuantity] = useState('')

    const router = useRouter();

    const returnDay = (offset) => {
      const date = new Date(new Date().setDate(new Date().getDate()-offset));
      return `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${date.getFullYear()}`
    }

    const addNewDonation = async () => {
        const data = {
            date_added: returnDay(0),
            name: foodName,
            owner: restaurantName,
            quantity_available: foodQuantity,
        }
        await AddField(data);
        router.reload()
    }

    return (
        <div className={ styles.container }>
          <Head>
            <title>Food Redemption - Explore</title>
            <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={ styles.main }>
            <h1>Hello, The Davis Night Market Volunteers!</h1>
            <h4>Thank you for contributing to this amazing cause!</h4>
            <p className={ styles.titleCaption } >What are we donating today? Check out uploaded results in real-time 
            <a className={ styles.redirectBtn } href='/explore' target={'_blank'}> here</a>!</p>
            <div className={ styles.donate }>
                <div className={ styles.donateBox }>
                    <div className={ styles.despSection }>
                        <h4>Food Descriptions</h4>
                        <div className={ styles.rowCenter } style={{ marginBottom: '1rem' }}>
                            <p>Food name:</p>
                            <input className={ styles.textInput } list='foodList' onChange={x => setFoodName(x.target.value)} />
                            <datalist id='foodList'>
                              <option value={'Bread'} />
                            </datalist>
                        </div>
                        <div className={ styles.rowCenter } style={{ marginBottom: '1rem' }}>
                            <p>Restaurant name:</p>
                            <input className={ styles.textInput } list='restaurantList' onChange={x => setRestaurantName(x.target.value)} />
                            <datalist id='restaurantList'>
                              {['Village Bakery', "Sophia's Thai Kitchen"].map(x => <option value={x} />)}
                            </datalist>
                        </div>
                        <div className={ styles.rowCenter }>
                            <p>Quantity: </p>
                            <input className={ styles.textInput } type={'number'} onChange={x => setFoodQuantity(x.target.value)} />
                        </div>
                    </div>
                    <div className={ styles.dietSection }>
                        <h4>Quantity Type: </h4>
                        <select>
                          <option value=''>Item (s)</option>
                          <option value=''>Lb (s)</option>
                          <option value=''>Kg (s)</option>
                        </select>
                    </div>
                </div>
                <div className={ styles.submitRow }>
                    <div className={ styles.donateBtn } onClick={() => addNewDonation()}>
                        <p>Donate!</p>
                    </div>
                </div>
            </div>
            <div className={ styles.donate }>
                <div className={ styles.attendanceBox }>
                    <div className={ styles.despSection }>
                        <div className={ styles.rowCenter }>
                            <p>How many people came today? </p>
                            <input className={ styles.textInput } type={'number'} onChange={x => setFoodQuantity(x.target.value)} />
                        </div>
                    </div>
                    <div className={ styles.donateBtn } onClick={() => addNewDonation()}>
                        <p>Submit!</p>
                    </div>
                </div>
            </div>
            <h1 className={ styles.donateHeader } >Donation(s) Today</h1>
            <div className={ styles.donatedFood }>
                { props.allFoods.filter(x => Math.floor(Math.abs(new Date(x.date_added) - new Date()) / (1000 * 60 * 60 * 24)) == 0).map(x => <DisplayFood data={x} key={x.id} />) }
            </div>
          </div>
        </div>
      )
}
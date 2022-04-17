import Head from 'next/head'
import { useState } from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import DisplayFood from '../../components/shared/displayFood/displayFood';
import Navbar from "../../components/shared/navbar/navbar";
import { AddField, GetAllDonorCredentials, GetAllFood } from '../../firebase_ops/query';
import styles from '../../styles/Donor.module.css'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const id = context.query.id;
    const donorsData = await GetAllDonorCredentials();
    const foodData = await GetAllFood();
    const allFoods = []
    const allDonors = []
    donorsData.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        allDonors.push(extracted)
    })
    foodData.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        allFoods.push(extracted)
    })
    const loggedInDonor = (allDonors.filter(x => x.id == context.query.id))[0]
    const donorDonatedFood = allFoods.filter(x => x.owner_id == loggedInDonor.id)

    return { props: { loggedInDonor, donorDonatedFood, id } };
}

export default function Donor(props) {
    const [imgUrl, setImgUrl] = useState('')
    const [foodName, setFoodName] = useState('')
    const [foodQuantity, setFoodQuantity] = useState('')
    const [gf, setGf] = useState(false)
    const [df, setDf] = useState(false)
    const [vg, setVg] = useState(false)
    const [ve, setVe] = useState(false)

    const router = useRouter();

    const addNewDonation = async () => {
        const data = {
            date_added: '04/16/2022',
            dietary_restrictions: `${gf ? 'GF;' : ''}${df ? 'DF;' : ''}${vg ? 'VG;' : ''}${ve ? 'VE;' : ''}`,
            img_url: imgUrl,
            name: foodName,
            owner: props.loggedInDonor.name,
            owner_id: props.loggedInDonor.id,
            quantity_available: foodQuantity,
            quantity_claimed: '0'
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
          <Navbar donor id={props.id} status={[ true, false, false ]} />
          <div className={ styles.main }>
            <h1>Hello, { props.loggedInDonor.name }!</h1>
            <h4>Thank you for contributing to this amazing cause!</h4>
            <p>What would you like to donate today?</p>
            <div className={ styles.donate }>
                <div className={ styles.donateBox }>
                    <div className={ styles.imageSection }>
                        <IoFastFoodOutline size={40} style={{ marginBottom: '2rem' }} />
                        <div className={ styles.rowCenter }>
                            <p>Image URL: </p>
                            <input className={ styles.textInput } onChange={x => setImgUrl(x.target.value)} />
                        </div>
                    </div>
                    <div className={ styles.despSection }>
                        <h4>Food Descriptions</h4>
                        <div className={ styles.rowCenter } style={{ marginBottom: '1rem' }}>
                            <p>Enter food name:</p>
                            <input className={ styles.textInput } onChange={x => setFoodName(x.target.value)} />
                        </div>
                        <div className={ styles.rowCenter }>
                            <p>Quantity: </p>
                            <input className={ styles.textInput } type={'number'} onChange={x => setFoodQuantity(x.target.value)} />
                        </div>
                    </div>
                    <div className={ styles.dietSection }>
                        <h4>Dietary Restrictions</h4>
                        <div className={ styles.checkBox }>
                            <p>Gluten Free</p>
                            <input type={'checkbox'} onChange={() => setGf(!gf)} />
                        </div>
                        <div className={ styles.checkBox }>
                            <p>Dairy Free</p>
                            <input type={'checkbox'} onChange={() => setDf(!df)} />
                        </div>
                        <div className={ styles.checkBox }>
                            <p>Vegan</p>
                            <input type={'checkbox'} onChange={() => setVg(!vg)} />
                        </div>
                        <div className={ styles.checkBox }>
                            <p>Vegetarian</p>
                            <input type={'checkbox'} onChange={() => setVe(!ve)} />
                        </div>
                    </div>
                </div>
                <div className={ styles.submitRow }>
                    <div className={ styles.donateBtn } onClick={() => addNewDonation()}>
                        <p>Donate!</p>
                    </div>
                </div>
            </div>
            <h1>Donation(s) Today</h1>
            <div className={ styles.donatedFood }>
                { props.donorDonatedFood.map(x => <DisplayFood data={x} />) }
            </div>
          </div>
        </div>
      )
}
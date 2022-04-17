import Head from 'next/head'
import { IoFastFoodOutline } from 'react-icons/io5';
import DisplayFood from '../components/shared/displayFood/displayFood';
import Navbar from "../components/shared/navbar/navbar";
import styles from '../styles/Donor.module.css'

export default function Donor() {
    return (
        <div className={ styles.container }>
          <Head>
            <title>Food Redemption - Explore</title>
            <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar donor status={[ false, false, true ]} />
          <div className={ styles.main }>
            <h1>Hello, Dumpling House!</h1>
            <h4>Thank you for contributing to this amazing cause!</h4>
            <p>What would you like to donate today?</p>
            <div className={ styles.donate }>
                <div className={ styles.donateBox }>
                    <div className={ styles.imageSection }>
                        <IoFastFoodOutline size={40} style={{ marginBottom: '1rem' }} />
                        <div className={ styles.rowCenter }>
                            <p>Image URL: </p>
                            <input />
                        </div>
                    </div>
                    <div className={ styles.despSection }>
                        <div className={ styles.rowCenter } style={{ marginBottom: '1rem' }}>
                            <p>Enter food name:</p>
                            <input />
                        </div>
                        <div className={ styles.rowCenter }>
                            <p>Quantity: </p>
                            <select>
                                <option value={1}>1</option>
                            </select>
                        </div>
                    </div>
                    <div className={ styles.dietSection }>
                        <div className={ styles.checkBox }>
                            <p>Gluten Free</p>
                            <input type={'checkbox'} />
                        </div>
                        <div className={ styles.checkBox }>
                            <p>Dairy Free</p>
                            <input type={'checkbox'} />
                        </div>
                        <div className={ styles.checkBox }>
                            <p>Vegan</p>
                            <input type={'checkbox'} />
                        </div>
                        <div className={ styles.checkBox }>
                            <p>Vegetarian</p>
                            <input type={'checkbox'} />
                        </div>
                    </div>
                </div>
                <div className={ styles.submitRow }>
                    <div className={ styles.donateBtn }>
                        <p>Donate!</p>
                    </div>
                </div>
            </div>
            <h1>Donation(s) Today</h1>
            <div className={ styles.donatedFood }>
                <DisplayFood data={[]} />
            </div>
          </div>
        </div>
      )
}
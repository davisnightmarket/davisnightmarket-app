import Head from 'next/head'
import Navbar from "../components/shared/navbar/navbar";
import styles from '../styles/Login.module.css'
import { BiArrowBack } from 'react-icons/bi'
import { useState, useEffect } from 'react';
import { GetAllDonorCredentials, GetAllReceiverCredentials } from '../firebase_ops/query';
import { useRouter } from 'next/router';

export default function Explore() {
    const [donorData, setDonorData] = useState(null)
    const [donorUserInput, setDonorUserInput] = useState('')
    const [receiverUserInput, setRecieverUserInput] = useState('')
    const [pageState, setPageState] = useState(0)
    const [receiverData, setReceiverData] = useState(null)
    const [errorMsg, setErrorMsg] = useState(false)
    
    const router = useRouter();

    const checkDonorCredential = () => {
      const res = donorData.filter(x => x.access_code == donorUserInput)
      if (res.length == 1) {
        router.replace(`/donor?id=${res[0].id}`)
      } else {
        setErrorMsg(true);
      }
    }

    const checkReceiverCredential = () => {
      const res = receiverData.filter(x => x.access_code == receiverUserInput)
      if (res.length == 1){
        router.replace(`/receiver?id=${res[0].id}`)
      } else {
        setErrorMsg(true);
      }
    }

    const defaultPage = <div className={ styles.optionRow }>
          <div className={ styles.donorOption } onClick={() => setPageState(1)}>
              <img src='/images/donor.png' />
              <p>I&apos;m a Donor</p>
          </div>
          <div className={ styles.receiveOption } onClick={() => setPageState(2)}>
              <img src='./images/receiver.png' />
              <p>I&apos;m a Receiver</p>
          </div>
      </div>

    const donorPage = <div className={ styles.loginBox }>
        <div className={ styles.goBackBox } onClick={() => {
          setPageState(0);
          setErrorMsg(false);
          }}>
          <BiArrowBack size={20} style={{ marginRight: '1rem' }} />
          <p>Back to selection</p>
        </div>
        <div className={ styles.credentialBox }>
          <p>Please enter your access code: </p>
          <input onChange={ x => setDonorUserInput(x.target.value) } />
          { errorMsg ? <p className={ styles.error }>Incorrect Access Code!</p> : null }
        </div>
        <div className={ styles.clickToLogin } onClick={() => checkDonorCredential()}>
          <p>Login!</p>
        </div>
      </div>

    const receiverPage = <div className={ styles.loginBox }>
        <div className={ styles.goBackBox } onClick={() => {
          setPageState(0);
          setErrorMsg(false);
        }}>
          <BiArrowBack size={20} style={{ marginRight: '1rem' }} />
          <p>Back to selection</p>
        </div>
        <div className={ styles.credentialBox }>
          <p>Please enter your access code: </p>
          <input onChange={ x => setRecieverUserInput(x.target.value) } />
        </div>
        <div className={ styles.clickToLogin } onClick={() => checkReceiverCredential()}>
          <p>Login!</p>
        </div>
      </div>

    const getDonorCredential = async () => {
      const data = await GetAllDonorCredentials();
      const initialData = []
      data.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        initialData.push(extracted)
      })
      setDonorData(initialData);
    }
    
    const getReceiverCredential = async () => {
      const data = await GetAllReceiverCredentials();
      const initialData = []
      data.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        initialData.push(extracted)
      })
      setReceiverData(initialData);
    }

    useEffect(() => {
      getDonorCredential();
      getReceiverCredential();
    }, [])

    return (
        <div className={styles.container}>
          <Head>
            <title>Food Redemption - Explore</title>
            <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar status={[ false, false, false, true ]} />
          <div className={ styles.main }>
            { pageState == 0 ? defaultPage : null }
            { pageState == 1 ? donorPage : null }
            { pageState == 2 ? receiverPage : null }
          </div>
        </div>
      )
}
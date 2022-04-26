import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import LineChart from '../components/shared/charts/lineChart';
import Navbar from '../components/shared/navbar/navbar';
import styles from '../styles/Archive.module.css'
import { FaCrown } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io';

export default function Archive() {
    const [timeFrame, setTimeFrame] = useState('7')
    
    const returnDay = (offset) => {
        const date = new Date(new Date().setDate(new Date().getDate()-offset));
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }
    
    const returnHTMLDate = (offset) => {
        const date = new Date(new Date().setDate(new Date().getDate()-offset));
        return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
    }

    const returnDifference = (startDay, endDay) => {
        const date1 = new Date(startDay);
        const date2 = new Date(endDay);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays;
    }

    const [customStart, setCustomStart] = useState(returnHTMLDate(7))
    const [customEnd, setCustomEnd] = useState(returnHTMLDate(0))
    const [customDateDiff, setCustomDateDiff] = useState(7)

    useEffect(() => {
        setCustomDateDiff(returnDifference(customStart, customEnd))
    }, [customStart, customEnd])

    return (
    <div className={ styles.container }>
        <Head>
            <title>The Davis Night Market</title>
            <meta name="description" content="The Davis Night Market: Nobody goes to bed hungry" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
        </Head>
        <Navbar status={[ false, false, true, false, false, false ]} />
            <div className={ styles.scrollable }>
                <div className={ styles.main }>
                    <h1 className={ styles.title } >Historical Accomplishments By Our Donors!</h1>
                    <div className={ styles.timeFrame }>
                        <p>Please choose the timeframe: </p>
                        <select value={timeFrame} onChange={x => setTimeFrame(x.target.value)}>
                            <option value='7'>Past Week</option>
                            <option value='30'>Past Month</option>
                            <option value='90'>Past 3 Month</option>
                            <option value='custom'>Custom</option>
                        </select>
                        { 
                            timeFrame == 'custom' ? 
                            <React.Fragment>
                                <p>From: </p>
                                <input type={'date'} value={customStart} max={customEnd}
                                    onChange={x => setCustomStart(x.target.value)} />
                                <p>To: </p>
                                <input type={'date'} value={customEnd} min={customStart}
                                    onChange={x => setCustomEnd(x.target.value)} /> 
                            </React.Fragment>
                            : null 
                        }
                    </div>
                    <LineChart timeframe={timeFrame} dateDiff={customDateDiff} />
                    <h1 className={ styles.title } >Our Top Donors!</h1>
                    <h4 className={ styles.subTitle } >TimeFrame: {timeFrame == 'custom' ? returnDay(customDateDiff) : returnDay(timeFrame)} - {returnDay(0)}</h4>
                    {
                        [
                            {name: 'Village Bakery', donate: 10}, 
                            {name: "Sophia's Thai Kitchen", donate: 8},
                            {name: 'UCD Dining Commons', donate: 5}
                        ].map((x, ind) =>
                            {
                                let color = ['gold', 'silver', '#CD7F32']
                                return <div className={ styles.donorBar }>
                                <div className={ styles.section1 }>
                                    { ind <= 2 ? <FaCrown size={50} color={color[ind]} /> : null }
                                </div>
                                <div className={ styles.section2 }>
                                    <p>{x.name}</p>
                                </div>
                                <div className={ styles.section3 }>
                                    <p>Donated: {x.donate} Nights!</p>
                                </div>
                                <div className={ styles.section4 }>
                                    <div className={ styles.detailBtn } >
                                        <p>Full Details</p>
                                        <IoIosArrowDown size={30} />
                                    </div>
                                </div>
                            </div>
                            }
                        )
                    }
                </div>
        </div>
    </div>
    )
}
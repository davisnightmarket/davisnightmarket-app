import React from 'react'
import styles from './DisplayFood.module.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { ImCross } from 'react-icons/im'
import { useState } from 'react';

export default function DisplayFood(props) {
    const [cancelHover, setCancelHover] = useState(false)

    return (
        <div className={ styles.mainCover } style={ props.claimable ? null : { height: '8rem' } }>
            <div className={ styles.foodContainer }>
                <div className={ styles.imgSection }>
                { props.data.img_url == "" ? <IoFastFoodOutline size={40} /> : <img src={ props.data.img_url } alt='food image' /> }
                </div>
                <div className={ styles.foodDesp }>
                    <h4>{ props.data.name }</h4>
                    <div className={ styles.foodMap } style={{ marginLeft: '2rem' }}>
                        <HiOutlineLocationMarker style={{ marginRight: '1rem' }} />
                        <p>{ props.data.owner }</p>
                    </div>
                </div>
                {   
                    props.claimable ?
                    null
                    :
                    (
                        props.claim ?
                        <div className={ styles.submitClaim }>
                            <div className={ styles.submitClaimBtn } onClick={() => props.addFood()}>Submit Selection!</div>
                            <ImCross size={cancelHover ? 32 : 30} color={cancelHover ? 'red' : '#C4C4C4'} 
                            style={{ cursor: 'pointer', transition: 'linear 0.2s' }}
                            onMouseEnter={() => setCancelHover(true)}
                            onMouseLeave={() => setCancelHover(false)}
                            onClick={() => props.selectFood(null)} />
                        </div>
                        :
                        (
                            props.showReceipt ?
                            <div>
                                <p>Claimed on {props.claim_date}</p>
                            </div>
                            :
                            <div>
                                <p>{props.data.quantity_available - props.data.quantity_claimed} Available!</p>
                            </div>
                        )
                    )
                }
            </div>
            {
                props.claimable ? 
                <div className={ styles.claimRow }>
                    <div className={ styles.claimBtn } onClick={() => props.selectFood(props.data)}>Claim!</div>
                </div> : null
            }
        </div>
    )
}
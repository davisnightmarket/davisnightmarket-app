import React from 'react'
import styles from './DisplayFood.module.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoFastFoodOutline } from 'react-icons/io5'

export default function DisplayFood(props) {
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
                <div>
                    <p>{props.data.quantity_available - props.data.quantity_claimed} Available!</p>
                </div>
            </div>
            {
                props.claimable ? 
                <div className={ styles.claimRow }>
                    <div className={ styles.claimBtn }>Claim!</div>
                </div> : null
            }
        </div>
    )
}
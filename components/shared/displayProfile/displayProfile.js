import React from 'react'
import styles from './DisplayProfile.module.css'
import { IoLogoLinkedin } from 'react-icons/io'

export default function DisplayProfile(props) {
    return (
        <div className={ styles.profileBar }>
            <div className={ styles.imageSection } >
                <img src={props.data.img_path} />
            </div>
            <div className={ styles.detailSection } >
                <h4>{props.data.name}</h4>
                <p>{props.data.role}</p>
                <a href={ props.data.linkedin_url } target="_blank" >
                    <IoLogoLinkedin size={40} style={{ cursor: 'pointer', marginLeft: '1rem' }} />
                </a>
            </div>
        </div>
    )
}
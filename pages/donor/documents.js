import Head from 'next/head'
import Navbar from "../../components/shared/navbar/navbar";
import styles from '../../styles/Donor.module.css'
import { AiOutlineDownload } from 'react-icons/ai'
import jsPDF from 'jspdf';
import { GetAllDonationRecords, GetAllDonorCredentials } from '../../firebase_ops/query';

export async function getServerSideProps(context) {
    const id = context.query.id;
    const donorsData = await GetAllDonorCredentials();
    let donationRecord = await GetAllDonationRecords();
    const allDonors = []
    donorsData.forEach(x => {
        const extracted = x.data()
        extracted.id = x.id
        allDonors.push(extracted)
    })
    const loggedInDonor = (allDonors.filter(x => x.id == context.query.id))[0]
    donationRecord = donationRecord.filter(x => x.donor_id == id)
    return { props: { id, loggedInDonor, donationRecord } }
}

export default function Donor(props) {
    const doc = new jsPDF()

    const save = (index) => {
        doc.addImage('/images/logo.png', 'PNG', 95, 10, 20, 20)
        doc.setFontSize(12)
        doc.text("Donation Receipt", 90, 40)
        doc.text("Date: April 17, 2022", 10, 50)
        doc.text("Name of Non-Profit Organization: Food Redemption", 10, 60)
        doc.text("Donation Information", 85, 70)
        doc.text(`Donor's Name: ${props.loggedInDonor.name}`, 10, 80)
        doc.text(`Donor's Mailing Address: ${props.loggedInDonor.addressLine1}, ${props.loggedInDonor.city}, ${props.loggedInDonor.state} ${props.loggedInDonor.postal}`, 10, 90)
        doc.text(`Donation Value: $${props.donationRecord[index].donation_value}`, 10, 100)
        doc.text(`Donation Description: ${props.donationRecord[index].description}`, 10, 110)
        doc.text(`I, the undersigned representative, declare (or 
certify, verify, or state) under penalty of perjury under the laws of the United States of 
America that there were no goods or services provided as part of this donation. Furthermore, 
as of the date of this receipt the above-mentioned organization is a current and valid 
501(c)(3) non-profit organization in accordance with the standards and regulations of 
the Internal Revenue Service (IRS).

Sincerely,`, 10, 130)
        doc.setFontSize(20)
        doc.text("Food Redemption Organization", 30, 180)
        doc.setFontSize(12) 
        doc.text("Thank you for your generosity. We appreciate your support!", 10, 200)
        doc.save('save.pdf')
    }

    return (
        <div className={ styles.container }>
          <Head>
            <title>Food Redemption - Explore</title>
            <meta name="description" content="Food Redemption: Every Food Needs A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar donor id={props.id} status={[ false, true, false ]} />
          <div className={ styles.main }>
            <h1>Previous Donations</h1>
            <p>No History of Donations At This Moment!</p>
            <h1>Tax Documents</h1>
            <div className={ styles.taxRecords }>
                {
                    props.donationRecord.map((x, ind) => <div className={ styles.donationRow }>
                        <p>Donation for {x.date_donated}</p>
                        <div className={ styles.donationBtn } onClick={() => save(ind)}>
                            <p style={{ marginRight: '1rem' }}>Download PDF</p>
                            <AiOutlineDownload size={30} />
                        </div>
                    </div>)
                }
                
            </div>
          </div>
        </div>
    )
}
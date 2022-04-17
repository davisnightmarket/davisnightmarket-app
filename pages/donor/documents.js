import Head from 'next/head'
import ReactDOMServer from "react-dom/server";
import Navbar from "../../components/shared/navbar/navbar";
import styles from '../../styles/Donor.module.css'
import { AiOutlineDownload } from 'react-icons/ai'
import jsPDF from 'jspdf';

export async function getServerSideProps(context) {
    const id = context.query.id;
    return { props: { id } }
}

export default function Donor(props) {
    const doc = new jsPDF()
    const pdfText = <div>
        <p>Hahaha</p>
        <p>Hello</p>
    </div>

    const save = () => {
        doc.html(ReactDOMServer.renderToStaticMarkup(pdfText), {
            callback: () => {
            doc.save("myDocument.pdf");
            }
        });
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
                <div className={ styles.donationRow }>
                    <p>Donation for </p>
                    <div className={ styles.donationBtn } onClick={() => save()}>
                        <p style={{ marginRight: '1rem' }}>Download PDF</p>
                        <AiOutlineDownload size={30} />
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
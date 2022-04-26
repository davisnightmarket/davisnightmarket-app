import Head from 'next/head'
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineFoodBank } from 'react-icons/md';
import { HiOutlineDocumentSearch } from 'react-icons/hi'
import Navbar from '../../components/shared/navbar/navbar';
import styles from '../../styles/Diy.module.css'
import Link from 'next/link';

export default function DIY() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Food Redemption</title>
            <meta name="description" content="Food Redemption: All Food Deserves A Second Chance" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
        </Head>
        <Navbar status={[ false, false, false, false, true, false ]} />
        <div className={ styles.scrollable }>
            <div className={ styles.main }>
                <Link href='/diy/food-recovery'>
                    <div className={ styles.menuOption }>
                        <IoFastFoodOutline size={50} />
                        <p>How to do food recovery?</p>
                    </div>
                </Link>
                <Link href='/diy/build-stuff'>
                    <div className={ styles.menuOption }>
                        <MdOutlineFoodBank size={50} />
                        <p>How to build night market stuff?</p>
                    </div>
                </Link>
                <Link href='diy/start-legally'>
                    <div className={ styles.menuOption }>
                        <HiOutlineDocumentSearch size={50} />
                        <p>How to do night market legally (optional)</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
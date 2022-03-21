import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
import {useRouter} from 'next/router'

export default function Layout({title, keywords, description, children}) {

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='descriptioon' content={description} /> 
                <meta name='keywords' content={keywords} />
                <link rel="shortcut icon" href="/football.png" />
            </Head>

<Header />


 {router.pathname === '/' && <Showcase/>}

<div className={styles.container}>

            {children}

            </div>

<Footer/>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Africheza | Elite Sports Academy', 
    description: 'A football academy committed to delivering top quality intensive sports training programs and learning experiences by qualified, experienced coaches',
    keywords: 'music, dj, edm, events',
}
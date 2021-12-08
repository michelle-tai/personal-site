import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Navbar from './navbar'

const name = 'Your Name'
export const siteTitle = 'meme.'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta
          name="description"
          content="Michelle Tai's personal website!"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar />
      
      <main className={`ps-sm-5 pe-sm-5 mb-sm-5 m-auto ${styles.bodyContent}`}>{children}</main>
{/*         
      {!home && (
        <div classNameName={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  )
}
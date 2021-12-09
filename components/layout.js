import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Navbar from './navbar'
import Script from 'next/script'
import { useContext, useEffect, useState } from 'react'
import UIContext from './colorContext'

const name = 'Your Name'
export const siteTitle = 'meme.'


export default function Layout({ children, home }) {
  const {colorify, setColorify} = useContext(UIContext);
  useEffect(() => {
    document.getElementById("colorifyToggle").checked = colorify;
    updateSVGs();
  })
  const toggleClick = (e) => {
    setColorify(!colorify);
    updateSVGs();
    console.log(colorify)
  }

  const updateSVGs = () => {
    let allSVG = document.querySelectorAll('svg');
    allSVG.forEach( svg => {
      if(colorify){
        svg.style.visibility = "visible";
        svg.classList.add("svg-show");
      }
      else{
        svg.style.visibility = "hidden";
        svg.classList.remove("svg-show");
      }
    })
  }
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>
      {home ? <></> : <Navbar className="position-absolute top-0 start-0"/>}
      
      <main className={`${styles.bodyContent}`}>{children}</main>
      <div id={styles.idColorify} className="d-flex flex-row-reverse">
            <div className="form-check form-switch p-3">
              <input className="form-check-input" type="checkbox" role="switch" id="colorifyToggle" onClick={toggleClick}/>
              <label className="form-check-label" htmlFor="colorifyToggle">Colorify?</label>
            </div>
        </div>
    </div>
  )
}
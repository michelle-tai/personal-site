import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import expStyles from "../styles/exp.module.css"
import { useContext, useEffect } from 'react'
import UIContext from '../components/colorContext'
import Image from "next/image"

export default function About(){
    const {colorify, setColorify} = useContext(UIContext);
    useEffect(() => {
        addStyling(colorify);
    })

    const addStyling = (colorify) => {
        let memeshellHeader = document.getElementById("expHeaderID");
        if(colorify){
            memeshellHeader.classList.add(expStyles.expHeader);
        } else {
            memeshellHeader.classList.remove(expStyles.expHeader);
        }
    }
    return (
        <>
        <svg className={utilStyles.svgTL} width="311" height="149" viewBox="0 0 311 149" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M310 -24.5482C314.785 -103.224 92.0299 -129.772 -30.9552 -127.909C-70.4301 -96.9298 -138.863 -6.91309 -96.7942 105.319C-85.8744 134.451 45 153.451 133.5 146.951C182.952 143.319 300 139.874 310 -24.5482Z" fill="#e8ffe5"/>
        </svg>
        {/* <svg className={utilStyles.svgBR} id={expStyles.bottomRight} width="438" height="520" viewBox="0 0 438 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.358 710.136C292.627 683.847 440.734 571.546 507.28 417.53C543.232 334.322 652.786 -32.7891 487.401 2.82562C261.077 51.5634 239.943 103.013 80.3769 357.327C7.48763 473.497 -67.9115 736.426 112.358 710.136Z" fill="#FFEDF5"/>
        </svg> */}
        <svg className={utilStyles.svgBR}  width="1440" height="959" viewBox="0 0 1440 959" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M713.5 174C855 156.5 1064 -47.5 1188.5 10.5C1313 68.5 1027.5 269 1094 359C1160.5 449 1530 206 1577.5 320C1625 434 1274.5 833.5 1152 857.5C1029.5 881.5 889.5 787 674.5 810.5C459.5 834 249.5 1076.5 81.5 1003.5C-86.5 930.5 159 812.5 182.5 750C206 687.5 -45.5 543.5 -9.00003 404C27.5 264.5 298.5 270.5 358.5 247C418.5 223.5 384 152.5 459.5 116C535 79.5 572 191.5 713.5 174Z" fill="#EFFFED"/>
        </svg>


        <Layout>
        <div className={`${utilStyles.bodyContent}`}>
            <div className="mt-sm-4">
                <h1 className={"mb-3 " + utilStyles.headingH1}><span id={"expHeaderID"}>Experimental</span></h1>
            </div>
            
            <div className="mb-4" style={{textAlign: "center"}}>
                <p>sorry dont have much yet :( but enjoy this picture of me and my foster kittens!</p>
                <Image className={utilStyles.roundedCorners} src="/images/mecats.jpg" width="350" height="500" responsive="true" quality="25" />
            </div>
          </div>
        </Layout>
        </>
    )
}
import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import aboutStyles from "../styles/about.module.css"
import { useContext, useEffect } from 'react'
import UIContext from '../components/colorContext'

export default function About(){
    const {colorify, setColorify} = useContext(UIContext);
    useEffect(() => {
        addStyling(colorify);
    })

    const addStyling = (colorify) => {
        let memeshellHeader = document.getElementById("aboutHeaderID");
        if(colorify){
            memeshellHeader.classList.add(aboutStyles.aboutHeader);
        } else {
            memeshellHeader.classList.remove(aboutStyles.aboutHeader);
        }
    }
    return (
        <>
        <svg className={utilStyles.svgTL} width="311" height="149" viewBox="0 0 311 149" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M310 -24.5482C314.785 -103.224 92.0299 -129.772 -30.9552 -127.909C-70.4301 -96.9298 -138.863 -6.91309 -96.7942 105.319C-85.8744 134.451 45 153.451 133.5 146.951C182.952 143.319 300 139.874 310 -24.5482Z" fill="#FFEDF5"/>
        </svg>
        <svg className={utilStyles.svgBR} id={aboutStyles.bottomRight} width="438" height="520" viewBox="0 0 438 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.358 710.136C292.627 683.847 440.734 571.546 507.28 417.53C543.232 334.322 652.786 -32.7891 487.401 2.82562C261.077 51.5634 239.943 103.013 80.3769 357.327C7.48763 473.497 -67.9115 736.426 112.358 710.136Z" fill="#FFEDF5"/>
        </svg>

        <Layout>
        <div className={`${utilStyles.bodyContent}`}>
            <div className="mt-sm-4">
                {/* <svg className={utilStyles.headingDiv} width="215" height="37" viewBox="0 0 215 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="215" height="37" fill="#FFEDF5"/>
                </svg> */}
                <h1 className={"mb-3 " + utilStyles.headingH1}><span id={"aboutHeaderID"}>About</span></h1>
            </div>
            
            <div className="mb-4">
                <p>
                    Okay, my name isn’t actually "memeshell" or "meme", but that’s a nickname my friends call me. 
                </p>
                <div>
                    My real name is <strong>Michelle Tai</strong>, and when I’m not busy dying from my engineering classes or lack of sleep (yes, despite my love for napping), you can find me: 
                    <ul>
                        <li>running after my foster kittens</li>
                        <li>feeding Dunn too many treats at the Duke Puppy Kindergarten</li>
                        <li>or making some sort of handcraft</li>
                    </ul>
                </div>
            </div>
            
            <div className="mb-4">
                <h2 className="mb-3">Things I’m passionate about</h2>
                <ul>
                    <li>diversity and inclusion</li>
                    <li>animal care</li>
                    <li>anything that combines design and engineering and/or using my hands–crocheting, beading, circuitry</li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="mb-3">Things on my ever-growing to-do list</h2>
                <ul>
                    <li>ideate for the pet tech space</li>
                    <li>read all the design books I bought </li>
                    <li>play with more frontend/fullstack, as well as experimental, coding</li>
                    <li>learn more about lifting</li>
                </ul>
            </div>

            <div className="mb-4">
                <h2 className="mb-3">Things I’m involved in on campus</h2>
                <ul>
                    <li>alpha Kappa Delta Phi, an Asian-interest sorority</li>
                    <li>The Cube, Duke’s premier entrepreneurship group</li>
                    <li>Duke Technology Scholars</li>
                    <li>Duke Puppy Kindergarten</li>
                    <li>Women’s Club Volleyball</li>
                </ul>
            </div>
        </div>
        </Layout>
        </>
    )
}
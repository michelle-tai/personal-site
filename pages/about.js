import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css'

export default function About(){
    return (
        <Layout>
        <div className="ps-sm-5 pe-sm-5 mb-sm-5 m-auto mt-4">
            <h1 className={"mb-3 " + utilStyles.headingH1}>About</h1>
            <div className="mb-4">
                <p>
                    Okay, my name isn’t actually "memeshell" or "meme", but that’s a nickname my friends call me. 
                </p>
                <p>
                    My real name is <strong>Michelle Tai</strong>, and when I’m not busy dying from my engineering classes or lack of sleep (yes, despite my love for napping), you can find me: 
                    <ul>
                        <li>running after my foster kittens</li>
                        <li>feeding Dunn too many treats at the Duke Puppy Kindergarten</li>
                        <li>or making some sort of handcraft</li>
                    </ul>
                </p>
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
    )
}
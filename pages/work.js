import Layout from "../components/layout"
import WorkCard from "../components/workcard"
import utilStyles from '../styles/utils.module.css'
import workStyles from '../styles/work.module.css'
import { getAllProjectsData } from '../lib/posts'
import { useContext, useEffect } from 'react'
import UIContext from '../components/colorContext'

export async function getStaticProps() {
  const allProjectsData = getAllProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}


export default function Work({allProjectsData}){
  // console.log(allProjectsData)
  const {colorify, setColorify} = useContext(UIContext);
    useEffect(() => {
        addStyling(colorify);
    })

    const addStyling = (colorify) => {
        let memeshellHeader = document.getElementById("workHeaderID");
        if(colorify){
            memeshellHeader.classList.add(workStyles.workHeader);
        } else {
            memeshellHeader.classList.remove(workStyles.workHeader);
        }
    }
  return(
    <>
    <svg className={utilStyles.svgTL} width="311" height="149" viewBox="0 0 311 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M310 -24.5482C314.785 -103.224 92.0299 -129.772 -30.9552 -127.909C-70.4301 -96.9298 -138.863 -6.91309 -96.7942 105.319C-85.8744 134.451 45 153.451 133.5 146.951C182.952 143.319 300 139.874 310 -24.5482Z" fill="#EDF4FF"/>
    </svg>
    <svg id={workStyles.rightBg} width="739" height="422" viewBox="0 0 739 422" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M849.277 289.987C830.745 157.274 690.099 115.373 490.489 77.8343C382.649 57.5537 150.301 -102.349 12.5297 107.723C-95.5296 272.491 570.598 416.51 676.419 415.095C751.993 432.073 867.81 422.699 849.277 289.987Z" fill="#EDF4FF"/>
    </svg>

    <svg id={workStyles.leftBg} width="661" height="370" viewBox="0 0 661 370" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M631.989 75.7487C554.445 -33.5347 410.298 -5.98707 215.816 52.5762C110.745 84.2154 -169.13 49.2213 -194.731 299.133C-214.811 495.149 442.837 316.356 536.127 266.386C611.033 246.668 709.534 185.032 631.989 75.7487Z" fill="#EDF4FF"/>
    </svg>

    <Layout>
      <div className={`mt-sm-4 ${utilStyles.bodyContent}`}>
        {/* <svg className={utilStyles.headingDiv} width="215" height="37" viewBox="0 0 215 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="215" height="37" fill="#EDF4FF"/>
        </svg> */}
        <h1 className={"mb-3 " + utilStyles.headingH1} id="workHeaderID">Work</h1>
        <h2 className={"mb-3 " + utilStyles.headingH2}>Internship Projects</h2>
        <div className="container-fluid mb-4">
          <div className="row">
            {allProjectsData.map(({ id, title, company, image }) => (
              <WorkCard urlRef={`/work/${id}`} image={image} title={title} company={company} key={id}></WorkCard>
            ))}
          </div>
        </div>            
      </div>
    </Layout>
    </>
  )
}
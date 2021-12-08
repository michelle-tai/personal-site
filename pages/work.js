import Layout from "../components/layout"
import Image from "next/image"
import WorkCard from "../components/workcard"
import styles from '../styles/utils.module.css'
import { getAllProjectsData } from '../lib/posts'

export async function getStaticProps() {
  const allProjectsData = getAllProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}


export default function Work({allProjectsData}){
  console.log(allProjectsData)
  return(
    <Layout>
      <div className="ps-sm-5 pe-sm-5 mb-sm-5 m-auto mt-4" id="body-content">
        <h1 className={"mb-3 " + styles.headingH1}>Work</h1>
        <h2 className={"mb-3 " + styles.headingH2}>Internship Projects</h2>
        <div className="container-fluid mb-4">
          <div className="row">
            {allProjectsData.map(({ id, title, company, image }) => (
              <WorkCard urlRef={`/work/${id}`} image={image} title={title} company={company}></WorkCard>
            ))}
            {/* <WorkCard ref={`/work/${allProjectsData.id}`} image="/images/dropbox.png" title="Editable Signature Templates" company="HelloSign, a Dropbox Company"></WorkCard>
            <WorkCard image="/images/dropbox.png" title="Editable Signature Templates" company="HelloSign, a Dropbox Company"></WorkCard>
            <WorkCard image="/images/dropbox.png" title="Editable Signature Templates" company="HelloSign, a Dropbox Company"></WorkCard>
            <WorkCard image="/images/dropbox.png" title="Editable Signature Templates" company="HelloSign, a Dropbox Company"></WorkCard> */}
          </div>
        </div>            
      </div>
    </Layout>
  )
}
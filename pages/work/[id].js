import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import workStyles from '../../styles/work.module.css'
import Image from 'next/image'

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
      props: {
        projectData
      }
    }
  }

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export default function InternshipProject({ projectData }) {
  console.log(projectData)
    return (
      <>
      <svg className={utilStyles.svgTL} width="311" height="149" viewBox="0 0 311 149" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M310 -24.5482C314.785 -103.224 92.0299 -129.772 -30.9552 -127.909C-70.4301 -96.9298 -138.863 -6.91309 -96.7942 105.319C-85.8744 134.451 45 153.451 133.5 146.951C182.952 143.319 300 139.874 310 -24.5482Z" fill="#EDF4FF"/>
    </svg>
    <svg id={workStyles.rightBg} width="739" height="422" viewBox="0 0 739 422" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M849.277 289.987C830.745 157.274 690.099 115.373 490.489 77.8343C382.649 57.5537 150.301 -102.349 12.5297 107.723C-95.5296 272.491 570.598 416.51 676.419 415.095C751.993 432.073 867.81 422.699 849.277 289.987Z" fill="#EDF4FF" stroke="white"/>
    </svg>
    <svg id={workStyles.leftBg} width="633" height="411" viewBox="0 0 633 411" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M577.905 35.1242C470.371 -44.8289 341.805 25.9371 174.959 141.762C84.8187 204.338 -192.162 257.592 -139.24 503.174C-97.7302 695.793 472.413 322.426 545.683 246.06C610.822 204.148 685.439 115.077 577.905 35.1242Z" fill="#EDF4FF" stroke="white"/>
    </svg>
      <Layout>
        {/* <Head>
          <title>{projectData.title}</title>
        </Head> */}
        <article className={`${utilStyles.bodyContent}`} style={{maxWidth:"40em"}}>
          <div  style={{backgroundColor: "white", borderRadius: "20px", padding: "15px 20px"}}>
          <div className={utilStyles.centerOnMobile}>
            <div className={`mb-2 mt-2 ${utilStyles.lightText}`}>
              {`Work > Internship Projects > ${projectData.title}`}
            </div>
            <h1 className={`mb-4 ${utilStyles.headingH1}`}>{projectData.title}</h1>
            <div className="container-fluid mb-4">
              <div className="row align-items-center">
                      {/* <img class="col-sm-2 col-xs-12" style="max-width: 300px;" src="../images/ofx.jpeg"> */}
                <div className="col-md-2 col-sm-3 col-12" >
                  <Image quality="30" src={projectData.image} width="200" height="200" responsive="true" />
                </div>
                <div className="col-md-9 col-sm-8 col-12">
                  <div>{projectData.company}</div>
                  <div>{projectData.position}</div>
                  <div>{projectData.date}</div>
                </div>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} /> 
          </div>
        </article>
      </Layout>
      </>
    )
  }
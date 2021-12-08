import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
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
      <Layout>
        {/* <Head>
          <title>{projectData.title}</title>
        </Head> */}
        <article>
        <div class={`mb-2 mt-2 ${utilStyles.lightText}`}>
          {`Work > Internship Projects > ${projectData.title}`}
        </div>
        <h1 class={`mb-4 ${utilStyles.headingH1}`}>{projectData.title}</h1>
        <div class="container-fluid mb-4">
            <div class="row align-items-center">
                    {/* <img class="col-sm-2 col-xs-12" style="max-width: 300px;" src="../images/ofx.jpeg"> */}
                    <div className="col-md-2 col-sm-12" >
                      <Image src={projectData.image} width="200" height="200" responsive="true" />
                    </div>
                <div class="col-md-9 col-sm-12">
                    <div>{projectData.company}</div>
                    <div>{projectData.position}</div>
                    <div>{projectData.date}</div>
                </div>
            </div>
              
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} /> 
        </article>
      </Layout>
    )
  }
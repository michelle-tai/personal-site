import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { getAllProjectsData } from '../lib/posts'

export async function getStaticProps() {
  const allProjectsData = getAllProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}


export default function Home({ allProjectsData }) {
  console.log(allProjectsData)
    return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   {title}
            //   <br />
            //   {id}
            //   <br />
            //   {date}
            // </li>
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/work/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <div>{date}</div>
              {/* <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
import 'bootstrap/dist/css/bootstrap.css'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navigation from '../components/navigation'


export default function Home() {
  // console.log(allProjectsData)
    return (
    <Layout home>
        <svg className={utilStyles.svgTL} width="596" height="440" viewBox="0 0 596 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M595 -15C595 -171.091 140.047 -77.4114 -16.4296 -73.7227C-66.6544 -12.3733 -152.525 84.7444 -99.0001 307C-45.4753 529.256 290.748 419.639 397 348C452.846 299.464 595 141.091 595 -15Z" fill="#FFEDF5" stroke="white"/>
        </svg>
        <svg className={utilStyles.svgTR} width="821" height="649" viewBox="0 0 821 649" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M304.278 -45.3883C194.606 -21.4204 33.5 -8.86909 33.5 113C33.5 212.379 117 168.5 276 138.5C435 108.5 433.001 273.619 561.371 285.02C685 296 757.595 529.556 886 386.907C943.17 323.395 952.451 37.334 797.758 -42.3691C642.299 -122.467 383.567 -62.716 304.278 -45.3883Z" fill="#EDF4FF"/>
        </svg>
        <svg className={utilStyles.svgBR} width="717" height="612" viewBox="0 0 717 612" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.0002 635C52.3948 817.207 590.245 720.954 723.5 616C795.492 559.298 1030.61 437.405 829.5 231.5C671.761 70.001 347.17 323.304 303 391C249.114 429.173 10.924 530.927 26.0002 635Z" fill="#EFFFED"/>
        </svg>
        <svg className={utilStyles.svgBL} width="815" height="633" viewBox="0 0 815 633" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M592.393 626.503C694.77 580.445 812.589 432.882 733.396 371.485C654.855 310.594 631.62 356.766 496.185 397.239C429.744 410.954 342.732 420.142 267.919 410.12C194.347 400.264 49.8256 202.052 -46.4203 368.104C-89.2722 442.035 -58.9127 679.156 108.887 725.263C277.517 771.598 518.378 659.801 592.393 626.503Z" fill="#FFFBED"/>
        </svg>
        
        <div className={`container d-flex justify-content-center ${utilStyles.homeContainer}`}>
          <div className={`row ${utilStyles.temp}`}>
            <main className={`container d-flex ${utilStyles.homeMainContent}`}>
              <div className={`col align-self-center`}>
                <div className={`row align-items-center mb-3`}>
                    <h1 className={utilStyles.headingH1}>Hi, I'm <span>memeshell</span>.</h1>
                </div>
                <div className="row align-items-center mb-3">
                    <p>
                        Duke University undergrad studying ECE/CS and Visual and Media Studies.
                        Avid animal-lover. Mediocre handcrafter. Nap afficionado.
                    </p>
                </div>
                <Navigation />
              </div>
            </main>
          </div>
        </div>
    </Layout>
  )
}
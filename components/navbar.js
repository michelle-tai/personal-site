import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import styles from './navbar.module.css'

export default function Navbar(){
  return(
    <header className="container-fluid ps-sm-5 pe-sm-5">
      <div className="row justify-content-between align-items-center">
        <Link href="/">
          <a id={styles.logo} className="col-2">
            <span>meme.</span>
          </a>
        </Link>
        <div className="col-md-6 col-lg-5 col-sm-8">
          <nav className="row align-items-center justify-content-end d-flex nav">
            <Link href="/about">
              <a className="col-4 d-flex justify-content-end">
                <div id={styles.about}>
                  About
                </div>
              </a>
            </Link>
            <Link href="/work">
              <a className="col-4 d-flex justify-content-end">
                <div id={styles.work}>
                  Work
                </div>
              </a>
            </Link>
            <Link href="/">
              <a className="col-4 d-flex justify-content-end">
                <div id={styles.exp}>
                  ???
                </div>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

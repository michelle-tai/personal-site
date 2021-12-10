import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navigation(){
  return(
    <nav className="row align-items-center justify-content-end d-flex nav">
      <Link href="/about">
        <a className="col-4 d-flex justify-content-end mb-2 mt-1">
          <div id={styles.about}>
            About
          </div>
        </a>
      </Link>
      <Link href="/work">
        <a className="col-4 d-flex justify-content-end mb-2 mt-1">
          <div id={styles.work}>
            Work
          </div>
        </a>
      </Link>
      <Link href="/experimental">
        <a className="col-4 d-flex justify-content-end mb-2 mt-1">
          <div id={styles.exp}>
            ???
          </div>
        </a>
      </Link>
    </nav>
  )
}

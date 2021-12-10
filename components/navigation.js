import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navigation(){
  return(
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
  )
}

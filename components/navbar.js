import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Navigation from './navigation'

export default function Navbar(){
  return(
    <header id={styles.navBarID} className="container-fluid ps-sm-5 ps-3 pe-sm-5 pe-2 pt-sm-4 pt-2 mt-sm-0 mb-sm-0 mt-2 mb-3">
      <div className="row justify-content-between align-items-center">
        <Link href="/">
          <a id={styles.logo} className="col-sm-2 col-12">
            <span>meme.</span>
          </a>
        </Link>
        <div className="col-md-6 col-lg-5 col-sm-8 col-12">
          <Navigation />
        </div>
      </div>
    </header>
  )
}

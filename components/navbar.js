import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import styles from './navbar.module.css'
import Navigation from './navigation'

export default function Navbar(){
  return(
    <header className="container-fluid ps-sm-5 pe-sm-5 pt-sm-4">
      <div className="row justify-content-between align-items-center">
        <Link href="/">
          <a id={styles.logo} className="col-2">
            <span>meme.</span>
          </a>
        </Link>
        <div className="col-md-6 col-lg-5 col-sm-8">
          <Navigation />
        </div>
      </div>
    </header>
  )
}

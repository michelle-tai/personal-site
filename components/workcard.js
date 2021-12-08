import Link from "next/link";
import styles from "./workcard.module.css";
import Image from "next/image";

export default function WorkCard(props){
  // console.log(title + " " + image + " " + company);
  return(
    <div className="col-md-4 col-sm-6 mb-3 ps-2 pe-2">
      <Link href={props.urlRef}>
        <a className={styles.workCardA}>
          <div className={"container-fluid justify-content-center " + styles.workCard}>
            <div className="ps-1 pe-1">
              <div className="row pt-3">
                <Image src={props.image} width="500" height="500" responsive="true"/>
              </div>
              <div className={"row mt-2 " + styles.workCardHeader}>
                {props.title}
              </div>
              <div className="row mb-3">
                {props.company}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
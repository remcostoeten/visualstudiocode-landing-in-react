import Link from "next/link"

import Illustration from "../components/icons/Illustrations"
import styles from "../styles/modules/Homepage.module.css"

export default function HomePage() {
  return (
    <>
      <div className="pl-12">
        <div className={styles.container}>
          <div className={styles.background}>
            <h1>I BUILD</h1>
            <h1>WEBSITES</h1>
          </div>
          <div className={styles.foreground}>
            <div className={styles.content}>
              <h1 className={styles.name}>Remco Stoeten</h1>
              <h6 className={styles.bio}>Creative front-end developer</h6>
              <Link href="/projects">
                <button className={styles.button}>View kanban</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
            <Illustration className={styles.illustration} />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  }
}

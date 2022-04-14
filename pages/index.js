import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <img src={"about_background.svg"}></img>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>VIET NAM AND THE DIASPORA SILICON VALLEY CONNECTIONS</p>
          </div>
        </div>
    </div>

    <div className={styles.circle}>
      <div className={styles.flyer}>Flyer</div>
    </div>


    <div className={styles.main2}>
      <div className={styles.paper_side}>
        <div className={styles.download_file}>Download (title of white paper)</div>
        <div className={styles.document}>DOCUMENT GOES HERE</div>
      </div>

          <div className={styles.tabs_container}>
              <div className={styles.diversity}>Diversity</div>
              <div className={styles.environment}>Environment</div>
              <div className={styles.APPI_tab}>APPI</div>
          </div>

          <div className={styles.authors_container}>
              <div className={styles.authors_title}>Authors</div>
              <div className={styles.authors_names}>
                <li className={styles.authors_list}>Name</li>
                <li className={styles.authors_list}>Name</li>
              </div>

       </div>

    </div>



      {/* FOOTER DONT TOUCH */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stefan Bondzulic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my personal site
        </h1>

        <p className={styles.description}>My name is Stefan, and this is just a simple test of serverless framework</p>
      </main>
    </div>
  )
}

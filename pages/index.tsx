import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Woop! <span style={{color: 'blue'}}>Next.js, without the JS</span>
        </h1>
        <h2 className={styles.description}>
            A static site, with an opt-in 2kb runtime + granual SSR hydration
        </h2>
          <p className={styles.description}>This page has ZERO JavaScript - as it didn't need any</p>
          <p className={styles.description}>But <Link href={"/with-js"}>this page</Link> contains a SSR'd JS component, and that component alone will be hydrated by Preact</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/shaneosbourne"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by crazy ideas... and module federation.
        </a>
      </footer>
    </div>
  )
}

export const config = {
  unstable_runtimeJS: process.env.NODE_ENV === "development"
};


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const date = new Date();
  const currTime = date.getHours();


  const [showResults, setShowResults] = useState(false)
  const showMore = () => setShowResults(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Garv's Portfolio</title>
        <meta name="Garv Pandey" content="Computer Science Engineer with an interest in Web Dev, Cloud, IoT" />
        <link rel="icon" href="/namaste.ico" />
      </Head>
      <main className={styles.main}>

        <h1>Hello, I'm <button onClick={showMore}>Garv</button></h1>
        {showResults ? <Results /> : null}
      </main>

    </div>
  )
}


const Results = () => (
  <div id="results" className="search-results">
    <p>I'm a Computer Science Engineer Graduated from G.D Goenka University in 2022</p>
  </div>)


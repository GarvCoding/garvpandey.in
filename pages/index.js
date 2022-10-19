import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const date = new Date();
  const currTime = date.getHours();

  const [dayMode, setDayMode] = useState(false)
  const changeMode = () => {
    (!dayMode ? setDayMode(true) : setDayMode(false))
    console.log(dayMode)
  }

  const [showResults, setShowResults] = useState(false)
  const showMore = () => setShowResults(true)

  const [showAll, setShowAll] = useState(false)
  const showRest = () => setShowAll(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Garv's Portfolio</title>
        <meta name="Garv Pandey" content="Computer Science Engineer with an interest in Web Dev, Cloud, IoT" />
        <link rel="icon" href="/namaste.ico" />
      </Head>
      <main className={styles.main}>

        <p><button onClick={changeMode}>Namastey <div className='btn'>🙏</div></button></p>

        <h1>I'm <button className='name' onClick={showMore}>Garv Pandey</button></h1>
        {showResults ? <div id="results" className="search-results">
          <p>I'm a Computer Science Engineer mostly into making Web-Applications<button className='normal-btn' onClick={showRest}>Know More About me</button></p>
        </div> : null}
        {showAll ? <div id="allContent" className='all-rest'>
          <p>I'm a Computer Science Engineer graduated from GD Goenka University in 2022</p>
        </div> : null}


      </main>

    </div>
  )
}





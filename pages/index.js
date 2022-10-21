import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {

  const techArr = ["Web-Development", "Devops", "Cloud", "IoT"];
  const [tech, setTech] = useState(techArr[0]);
  var i = 0;

  const shuffle = useCallback(() => {

    i = (i === techArr.length) ? 0 : i
    var item = techArr[i];

    setTech(techArr[i]);
    i++;
  }, [])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);
    return () => clearInterval(intervalID);
  }, [shuffle])


  const [dayMode, setDayMode] = useState(false)
  const changeMode = () => {
    (!dayMode ? setDayMode('true') : setDayMode(false))
    console.log(dayMode)
  }

  const [showResults, setShowResults] = useState(false)
  const showMore = () => setShowResults(true)

  const [showAll, setShowAll] = useState(false)
  const showRest = () => setShowAll(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Garv's Space</title>
        <meta name="Garv Pandey" content="Some text about a tech Enthusiast named Garv" />
        <link rel="icon" href="/namaste.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Hello, I'm Garv Pandey,</h2>
        <div><h2>I talk about</h2>  <h2 className='gif-text'>{tech}</h2></div>
        {showResults ? <div id="results" className="search-results">
          <p>I'm a Computer Science Engineer <img src="/thumbs-up-engineer.gif" alt="" /><button className='normal-btn' onClick={showRest}>Know More About me</button></p>
        </div> : null}
        {showAll ? <div id="allContent" className='all-rest'>
          <p>I'm a Computer Science Engineer graduated from GD Goenka University in 2022</p>
        </div> : null}


      </main>

    </div>
  )
}





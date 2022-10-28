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

  const [showDetail, setShowDetail] = useState(false)
  const showDetails = () => setShowDetail(true)

  const [showAll, setShowAll] = useState(false)
  const showRest = () => setShowAll(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Garv's Space</title>
        <meta name="Garv Pandey" content="Some text about Garv Pandey" />
        <link rel="icon" href="/namaste.ico" />
      </Head>
      <main className={styles.main}>
        <div className='Landing-Body'>
          <h2>Hello, I'm <button className='gif-text' onClick={showDetail}>Garv Pandey</button></h2>
          <div><h2>A student who talks about</h2>  <h2 className='gif-text'>{tech}</h2></div>
        </div>

        <div className='Body-2-Light'>
          <h2>You're still here?</h2>
          <div id="allContent" className='all-rest'>
            <h2>I'm a Computer Science Engineer graduated from GD Goenka University in 2022</h2>
          </div>
        </div>
        <div className='Body-3-Light'>
          <h2>You're still here?</h2>
          <div id="allContent" className='all-rest'>
            <h2>I'm a Computer Science Engineer graduated from GD Goenka University in 2022</h2>
          </div>
        </div>
        <div className='Body-4-Light'>
          <h2 className='FjQZh'>You're still here?</h2>
          <div id="allContent" className='all-rest'>
            <h2>I'm a Computer Science Engineer graduated from GD Goenka University in 2022</h2>
          </div>
        </div>

      </main>

    </div>
  )
}





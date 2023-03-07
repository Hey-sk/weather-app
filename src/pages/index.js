import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Weather from '@/components/Weather'

export async function getStaticProps() {
  const locRes = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=01453,US&appid=c71fff6ff8aaa6bfef85d0cf02d3ef5e`)
  const locationData = await locRes.json()
  const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${locationData.lat}&lon=${locationData.lon}&units=imperial&appid=${process.env.OPENWEATHER}`)
  const weatherData = await weatherRes.json()
  return {
    props: {
      locationData,
      weatherData,
    },
  }
}

export default function Home({weatherData}) {
  return (
    <>
      <Head>
        <title>skeane.io</title>
        <meta name="description" content="skeane.io: created by Stephen Keane" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Weather
          weatherData={weatherData}
        />
      </main>
    </>
  )
}

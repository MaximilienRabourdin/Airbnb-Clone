import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className="">

     
      <Head>
        <title>AirbnbClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <Header />
  <Banner />  

  <main>
    <section>
      <h2 className ="after:"> 
        Explorez nos distations ...
      </h2>
    </section>
  </main>


    </div>
  )
}

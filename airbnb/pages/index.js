import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardHome from "../components/CardHome";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>AirbnbClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">
            Explorez nos distations ...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 -ml-3">
            {exploreData?.map(({ img, distance, location }) => (
              <CardHome
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">
            Voyager ou vous le souhaitez
          </h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
           img="https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          title="Venez découvrir les nouveaux ateliers du mois de décembre"
          description="les ateliers sur AirBnb"
          buttonText="Je veux dessiner"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

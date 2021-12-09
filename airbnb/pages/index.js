import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import CardHome from "../components/CardHome";

export default function Home({ exploreData }) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <CardHome
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}

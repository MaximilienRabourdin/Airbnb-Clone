import Header from "../components/Header"
import Footer from "../components/Footer"


function Search() {
    return (
        <div>
           <Header />

           <main className="flex">
            <section>
                <p className="text-xs mt-2">+300 reservation for 5 membres des visiteurs</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6"> Rester dans le meilleur endroit de la ville </h1>

                <div className="flex">
                    <p className="button"> Annulation de la réservation  </p>
                    <p className="button"> Avis </p>
                    <p className="button"> Type de logement </p>
                    <p> </p>
                </div>
            </section>
           </main>

           <Footer />
        </div>
    )
}

export default Search

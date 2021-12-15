import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import {format} from "date-fns";


function Search() {


    // ES6 desctucturing
    const router = useRouter();
    const {location, startDate, endDate, noOfGuest} = router.query;


    const {format} = require('date-fns');
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");


    return (
        <div>
           <Header />

           <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs mt-2">+300 reservation for {noOfGuest} membres des visiteurs</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6"> Rester dans le meilleur endroit : {location} </h1>

                <div className="hidden lg:inline-flex justify-between mb-5 space-x-
            3 text-gray-800 whitespace-nowrap">
                    <p className="button"> Annulation de la réservation  </p>
                    <p className="button"> Avis </p>
                    <p className="button"> Type de logement </p>
                    <p className="button"> Nombre de chambres </p>
                    <p className="button"> Plus de filtres </p>
                    <p> </p>
                </div>
            </section>
           </main>

           <Footer />
        </div>
    )
}

export default Search

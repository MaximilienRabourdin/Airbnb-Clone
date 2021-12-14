import Image from "next/image";
import {
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";

//Styled Calendar
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  //on cherche à recupérer l'info dans le input de la recherche donc add value + onChange
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  //permet d'avoir la tranche des dates selectionnées
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // ranges.selection.startDate vient de la librairie "react-date-range"
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  // permet de renitialiser la recherche en indiquant que setSearchInput devient vide
  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header
      className="
         sticky top-0 z-50 grid
         grid-cols-3 bg-white shadow-md 
         py-5 px-5 md:px-10"
    >
      {/* Left section header */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle section header */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm py-2 ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow text-sm pl-5 placeholder-gray-400 outline-none
                 bg-transparent text-gray-600"
          type="text"
          placeholder="Commencez votre recherche"
        />
        <SearchIcon
          className="
                hidden md:inline-flex h-8 
                bg-red-400 text-white rounded-full 
                p-2 cursor-pointer outline-non"
        />
      </div>

      {/* Right section header */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Devenir un hôte</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Si searchInput est utilisé alors affiche la balise h1 */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-8">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Nombre de personnes
            </h2>

            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex justify-between">
            <button className="flex-grow text-gray-500" onClick={resetInput}> Annuler </button>
            <button className="flex-grow text-red-400"> Valider</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

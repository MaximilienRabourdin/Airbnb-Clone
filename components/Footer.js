import Image from "next/image";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> A PROPOS</h5>
        <p>Recrutement</p>
        <p>Devenir hôte</p>
        <p>Airbnb Luxe</p>
        <p>Animations</p>
        <p>Contact</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> INFORMATION</h5>
        <p href="https://maximilien-rabourdin.com/ ">Portfolio</p>
        <p>Maximilien</p>
        <p>Rabourdin</p>
        <p>Next Js</p>
        <p>Tailwind</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> INFORMATION</h5>
        <p>Aide</p>
        <p>Sécurité</p>
        <p>Vacances</p>
        <p>Voyage</p>
        <p>Japon</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">VISITER</h5>
        <p>Paris</p>
        <p>Poznan</p>
        <p>Christchurch</p>
        <p>Waike island</p>
        <p>Montreal</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
      <h5 className="font-bold"> ATELIER</h5>
        <p>Peinture</p>
        <p>Mécanique</p>
        <p>Electrique</p>
        <p>Couvreur</p>
        <p>Ebeniste</p>
      </div>
    </div>
  );
}

export default Footer;

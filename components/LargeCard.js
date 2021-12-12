import Image from "next/image";

function LargeCard({ img,title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-10 ">
        <h3 className="text-white text-4xl nb-3 w-64">{title}</h3>
        <p className="text-red-500">{description}</p>
        <button className=" text-sm text-white bg-gray-900 px-2 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;

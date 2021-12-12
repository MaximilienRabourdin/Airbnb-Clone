import Image from "next/image";


function Banner() {
  return (
    //Mobile first = banner responsive
    <div className="relative h-[300px] sm:h_[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-white font-bold">
          {" "}
          Vous souhaitez partir pour NÖEL ?{" "}
        </p>
        <button className="text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl hover:text-red-400 active:scale-90 transition duration-150">
          {" "}
          N'attendez plus !{" "}
        </button>
      </div>
    </div>
  );
}

export default Banner;

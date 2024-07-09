import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const img = "/ux-design.png";
  return (
    <section
      className="bg-gray-900 text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex">
        <div className=" text-left ">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Service Status.
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
        </div>
      </div>
    </section>
  );
}

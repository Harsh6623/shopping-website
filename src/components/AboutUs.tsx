import Link from "next/link";
import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-1 justify-start items-center flex-col gap-6 p-4">
      <h1 className="font-bold text-4xl">About Us</h1>
      <p className="w-3/5 text-center text-1xl">
        We are an ecommerce website that sells a variety of products. We are
        committed to providing our customers with the best possible shopping
        experience.  
      </p>
      <div className="flex justify-center items-center gap-6">
        <Image className="w-1/4 shadow-lg hover:shadow-2xl" src="a1.jpg" alt="" />
        <Image className="w-1/4 shadow-lg hover:shadow-2xl" src="a2.jpg" alt="" />
        <Image className="w-1/4 shadow-lg hover:shadow-2xl" src="a3.jpg" alt=""  />
      </div>
      <Link href="Contact">
      <button className="border-green-700 border-2 p-2 rounded-md">
            Contact us
      </button>
      </Link>
    </div>
        
  );
};

export default AboutUs;
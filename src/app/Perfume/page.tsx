import React from "react";
import PerfumeProduct from "@/components/PerfumeProduct";

const productsData = [
  {
    img: "/p1.jpg",
    title: "Perfume",
    desc: "YSL Black Opium Eau de Parfum.",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/p11.webp",
    title: "Perfume",
    desc: "Mugler Goddess ",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/p3.jpg",
    title: "Perfume",
    desc: "Carolina Girl Eau de Parfum.",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/p4.jpg",
    title: "Perfume",
    desc: "Viktor & Rolf Eau de Parfum.",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/p6.jpg",
    title: "Perfume",
    desc: "Paco Rabanne Lady Million Eau de Parfum.",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/p7.webp",
    title: "Perfume",
    desc: "Lancome La Vie Est Belle Eau de Parfum.",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/p8.webp",
    title: "Perfume",
    desc: "Jean Paul Gaultier Scandal Cloud Le Parfum.",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/p9.webp",
    title: "Perfume",
    desc: "Ariana Grande Cloud Eau de Parfum",
    rating: 4,
    price: "120.00",
  }
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-8">
        <h2 className="font-medium text-2xl pb-5 text-center">Perfume Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <PerfumeProduct
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
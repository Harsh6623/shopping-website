import React from "react";
import WoMenProduct from "@/components/WomenProduct";

const productsData = [
  {
    img: "/ms1.jpg",
    title: "saree",
    desc: "Tometo Color Desinging Sarre ",
    rating: 4,
    price: "45.00",
  },
  { 
    img: "/ms2.jpg",
    title: "saree",
    desc: "Full Black Super Aeligent Sarre",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/ms3.jpg",
    title: "saree",
    desc: "Blure Sarre With White Chex Pattern",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/ms4.jpg",
    title: "saree",
    desc: "Dark And Light Yellow Mix sarre",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/w1.webp",
    title: "Shirt",
    desc: "Simple Pink Shirt with round neck.",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/w2.webp",
    title: "Shirt",
    desc: "Branded Black Shirt With Uniqe Desing",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/w3.webp",
    title: "Shirt",
    desc: "Blue Chex Shirt ",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/w4.webp",
    title: "Shirt",
    desc: "Branded White Shirt",
    rating: 4,
    price: "120.00",
  }
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-8">
        <h2 className="font-medium text-2xl pb-5 text-center">Women Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <WoMenProduct
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
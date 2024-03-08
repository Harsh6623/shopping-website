import React from "react";
import JewelleryProduct from "@/components/JewelleryProduct";

const productsData = [
  {
    img: "/r1.png",
    title: "Ring",
    desc: "22 carat gold And Daimond Ring ",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/r2.png",
    title: "Ring",
    desc: "Diamond Ring With Uniq Desing",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/b1.png",
    title: "bracelet",
    desc: "Chain Bracelet with Diamonds",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/b2.png",
    title: "bracelet",
    desc: "Light weight Chain Bracelet",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/n1.png",
    title: "neklesh",
    desc: "22 K Gold Necklace with Pearl",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/n2.png",
    title: "neklesh",
    desc: "22 K Gold Necklace with Gemstone",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/c1.jpg",
    title: "chain",
    desc: "22 k Gold chain for men .",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/c2.webp",
    title: "chain",
    desc: "om Printed gold chain.",
    rating: 4,
    price: "120.00",
  }
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-8">
        <h2 className="font-medium text-2xl pb-5 text-center">Jewellery Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <JewelleryProduct
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
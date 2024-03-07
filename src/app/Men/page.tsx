import React from "react";
import MenProduct from "@/components/MenProduct";

const productsData = [
  {
    img: "/t1.png",
    title: "T-Shirt",
    desc: "MEN Yarn Fleece Red T-Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/t2.png",
    title: "T-Shirt",
    desc: "MEN Yarn Fleece Black T-Shirt",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/t3.png",
    title: "T-Shirt",
    desc: "MEN Yarn Fleece White T-Shirt",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/t4.jpg",
    title: "T-Shirt",
    desc: "MEN Yarn Fleece Printed T-Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/s1.avif",
    title: "Shirt",
    desc: "Simple Pink Shirt with round neck.",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/s2.webp",
    title: "Shirt",
    desc: "Branded Black Shirt With Uniqe Desing",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/s3.webp",
    title: "Shirt",
    desc: "Blue Chex Shirt ",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/s4.jpg",
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
        <h2 className="font-medium text-2xl pb-5 text-center">Men Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <MenProduct
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
import React, { useState } from 'react';
import Img from "../../assets/caducee.png";
import BadgeCard from "./BadgeCard";

const products = [
  { id: 1, alt: "img", img: Img, product: "Médecin dentiste", stock: 8 },
  { id: 2, alt: "img", img: Img, product: "Médecin", stock: 4 },
  { id: 3, alt: "img", img: Img, product: "Infirmier", stock: 25 },
  { id: 4, alt: "img", img: Img, product: "Steg", stock: 5 },
  { id: 5, alt: "img", img: Img, product: "Physiothérapeute", stock: 2 },
];

const BadgesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stockFilter, setStockFilter] = useState("");

  // Filter products based on search and stock filter
  const filteredProducts = products.filter((data) => {
    // Search by product name
    const matchesSearch = data.product.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by stock
    let matchesStock = true;
    if (stockFilter === "<5") {
      matchesStock = data.stock < 5;
    } else if (stockFilter === "<10") {
      matchesStock = data.stock < 10;
    }

    return matchesSearch && matchesStock;
  });

  return (
    <div className=''>
      {/* menu*/}
      <div className='flex gap-2  px-2 lg:px-10 mb-4 '>
      {/* Search Input */}
      <div className="flex  items-center  w-[50%] lg:w-fit">
        <input
          type="text"
          placeholder="Search by product name..."
          className="p-2 border rounded-md  w-[100%] lg:w-80 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Filter Dropdown */}      
      <div className='flex w-[50%] lg:w-fit'>
        <select
          className="p-2 border rounded-md w-[100%] lg:w-80"
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
        >
          <option value="">All Stock</option>
          <option value="<5">Stock &lt; 5</option>
          <option value="<10">Stock &lt; 10</option>
        </select>       
      </div>
      </div>

      {/* Badge Cards */}
      <div className="flex gap-1 flex-wrap justify-center">
        {filteredProducts.map((data, index) => (
          <BadgeCard
            key={index}
            img={data.img}
            alt={data.alt}
            product={data.product}
            stock={data.stock}
          />
        ))}
      </div>
    </div>
  );
};

export default BadgesList;

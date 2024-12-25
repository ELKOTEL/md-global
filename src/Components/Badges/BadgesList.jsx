import React from 'react'
import Img from "../../assets/caducee.png"
import BadgeCard from "./BadgeCard"

const products = [
    {
      id: 1,
      alt:"img" ,
      img: Img,
      product: "Médecin dentiste",
      stock: "8"
    },
    {
      id: 2,
      alt:"img" ,
      img: Img,
      product: "Médecin",
      stock: "4"
    },
    {
      id: 3,
      alt:"img" ,
      img: Img,
      product: "Infirmier",
      stock: "25"
    },
    {
      id: 3,
      alt:"img" ,
      img: Img,
      product: "Steg",
      stock: "5"
    },
    {
      id: 4,
      alt:"img" ,
      img: Img,
      product: "Physiothérapeute",
      stock: "2"
    },
  ];
  


const BadgesList = () => {
  return (
    <div className="flex gap-1 flex-wrap justify-center">
            {products.map((data,index) => (
                <BadgeCard key= {index}   img={data.img}    alt={data.alt} product={data.product} stock={data.stock} />
                

            ))} 
 

    </div>
  )
}

export default BadgesList
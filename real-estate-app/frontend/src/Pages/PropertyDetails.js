
import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();

  const property = {
    id,
    title: "Beautiful Family House",
    description: "This is a lovely 3 bedroom family house with a beautiful garden.",
    price: "$300,000",
    image: "https://via.placeholder.com/600x400"
  };

  return (
    <div className="container mt-5">
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} className="img-fluid" />
      <p>{property.description}</p>
      <h4>Price: {property.price}</h4>
    </div>
  );
};

export default PropertyDetails;


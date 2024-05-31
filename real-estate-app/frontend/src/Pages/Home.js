import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const [properties] = useState([
    {
      id: 1,
      title: 'Beautiful Family House',
      image: 'https://via.placeholder.com/150',
      description: 'A beautiful family house in the suburbs.',
      price: 300000,
    },
    {
      id: 2,
      title: 'Modern Apartment',
      image: 'https://via.placeholder.com/150',
      description: 'A modern apartment in the city center.',
      price: 450000,
    },
    {
      id: 3,
      title: 'Cozy Cottage',
      image: 'https://via.placeholder.com/150',
      description: 'A cozy cottage in the countryside.',
      price: 200000,
    },
    {
      id: 4,
      title: 'Luxurious Villa',
      image: 'https://via.placeholder.com/150',
      description: 'A luxurious villa with a private pool.',
      price: 1200000,
    },
    {
      id: 5,
      title: 'Spacious Bungalow',
      image: 'https://via.placeholder.com/150',
      description: 'A spacious bungalow with a large garden.',
      price: 500000,
    },
    {
      id: 6,
      title: 'Penthouse Suite',
      image: 'https://via.placeholder.com/150',
      description: 'A penthouse suite with a stunning view.',
      price: 750000,
    },
    {
      id: 7,
      title: 'Charming Townhouse',
      image: 'https://via.placeholder.com/150',
      description: 'A charming townhouse in a quiet neighborhood.',
      price: 350000,
    },
    {
      id: 8,
      title: 'Rustic Farmhouse',
      image: 'https://via.placeholder.com/150',
      description: 'A rustic farmhouse with lots of land.',
      price: 400000,
    },
    {
      id: 9,
      title: 'Elegant Manor',
      image: 'https://via.placeholder.com/150',
      description: 'An elegant manor with historical charm.',
      price: 1800000,
    },
    {
      id: 10,
      title: 'Seaside Villa',
      image: 'https://via.placeholder.com/150',
      description: 'A seaside villa with panoramic ocean views.',
      price: 1600000,
    },
  ]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleFilter = () => {
    const filtered = properties.filter(property => property.price >= minPrice && property.price <= maxPrice);
    setFilteredProperties(filtered);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Filter Properties</h5>
              <form onSubmit={e => { e.preventDefault(); handleFilter(); }}>
                <div className="form-group">
                  <label htmlFor="minPrice">Min Price:</label>
                  <input type="number" id="minPrice" className="form-control" value={minPrice} onChange={e => setMinPrice(parseInt(e.target.value))} />
                </div>
                <div className="form-group">
                  <label htmlFor="maxPrice">Max Price:</label>
                  <input type="number" id="maxPrice" className="form-control" value={maxPrice} onChange={e => setMaxPrice(parseInt(e.target.value))} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Apply Filter</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            {filteredProperties.map(property => (
              <div className="col-md-6 mb-4" key={property.id}>
                <Link to={`/property/${property.id}`}>
                  <PropertyCard property={property} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

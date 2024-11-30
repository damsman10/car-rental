import CarCompo from "../reusables/CarCompo";
import PagesHero from "../reusables/PagesHero";
import { useState } from 'react';
import car1 from '../assets/car-1.png';
import car2 from '../assets/car-2.png';
import car3 from '../assets/car-3.png';
import car4 from '../assets/car-4.png';
import car5 from '../assets/car-5.jpg';
import car6 from '../assets/car-6.jpg';
import car7 from '../assets/car-7.jpg';
import car8 from '../assets/car-8.jpg';
import car9 from '../assets/car-9.jpg';
import car10 from '../assets/car-10.jpg';

const Rent = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);

  // Example car data with missing fields handled
  const cars = [
    { id: 1, name: 'Car 1', rate: '20%', price: '$233', originalprice: '$339', img: car1, rating: 5, popularity: 10, featured: true },
    { id: 2, name: 'Car 2', rate: '15%', price: '$249', originalprice: '$349', img: car2, rating: 4, popularity: 15, featured: false },
    { id: 3, name: 'Car 3', rate: '30%', price: '$279', originalprice: '$379', img: car3, rating: 3, popularity: 8, featured: true },
    { id: 4, name: 'Car 4', rate: '20%', price: '$299', originalprice: '$399', img: car4, rating: 2, popularity: 5, featured: false },
    { id: 5, name: 'Car 5', rate: '35%', price: '$319', originalprice: '$419', img: car5, rating: 4, popularity: 12, featured: true },
    { id: 6, name: 'Car 6', rate: '25%', price: '$229', originalprice: '$399', img: car6, rating: 5, popularity: 20, featured: false },
    { id: 7, name: 'Car 7', rate: '50%', price: '$359', originalprice: '$459', img: car7, rating: 1, popularity: 4, featured: false },
    { id: 8, name: 'Car 8', rate: '40%', price: '$399', originalprice: '$499', img: car8, rating: 3, popularity: 7, featured: true },
    { id: 9, name: 'Car 9', rate: '60%', price: '$389', originalprice: '$499', img: car9, rating: 4, popularity: 9, featured: true },
    { id: 10, name: 'Car 10', rate: '55%', price: '$309', originalprice: '$409', img: car10, rating: 5, popularity: 14, featured: false },
  ];

  const sortCars = (cars) => {
    if (sortBy === 'popular') {
      return [...cars].sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'top-rated') {
      return [...cars].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'featured') {
      return cars.filter(car => car.featured);
    }
    return cars;
  };

  const paginateCars = (cars) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return cars.slice(startIndex, startIndex + itemsPerPage);
  };

  const sortedCars = sortCars(cars);
  const paginatedCars = paginateCars(sortedCars);

  return (
    <>
      <PagesHero />
      <div className="mt-8 w-4/5 m-auto">
        <div className="top flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="left w-[20%]">
            <div className="rounded-3xl flex items-center justify-center bg-[#fffdf5] border-2 border-[#dedede] p-2 w-[12rem] sm:w-full">
            {/* Check if all cars are being displayed */}
            {paginatedCars.length === cars.length 
              ? "Showing all results" 
              : `Showing ${paginatedCars.length} results`}
          </div>
          </div>
          <div className="right sm:w-[80%] flex justify-start sm:justify-end gap-4">
            {/* Items per page dropdown */}
            <select className="rounded-3xl px-2 bg-white border-2 border-[#dedede]" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value="16">16 Products</option>
              <option value="32">32 Products</option>
              <option value="48">48 Products</option>
              <option value="64">64 Products</option>
              <option value="128">128 Products</option>
            </select>
            {/* Sorting Dropdown */}
            <select className="rounded-3xl p-2 bg-white border-2 border-[#dedede]" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popular">Popular</option>
              <option value="top-rated">Top Rated</option>
              <option value="featured">Featured</option>
            </select>
          </div>
        </div>

        <div className="body mt-8 flex justify-between items-center gap-6 flex-wrap">
          {/* Render cars */}
          {paginatedCars.map((car, index) => (
            <div key={car.id} className="car-item">
              <CarCompo
                rate={car.rate}
                price={car.price}
                originalprice={car.originalprice}
                img={car.img}
                showRate={index===0}
              />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-8 mt-10">
          <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>Previous</button>
          <button onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(cars.length / itemsPerPage)))}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Rent;

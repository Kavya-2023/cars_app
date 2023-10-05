import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown,faSearch} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import CardCar from './components/CardCar' ;
import car1Image from './img/car1.jpg';
import car2Image from './img/car2.jpg';
import car3Image from './img/car3.jpg';
import car4Image from './img/car4.jpg';
import car5Image from './img/car5.jpg';
import car6Image from './img/car6.jpg';
const carsList=[
  {
    id:1,
    name:"Toyoto RAV4",
    feature1:"4 people",
    feature2:"Automatic",
    feature3:"6.1",
    feature4:"hybrid",
    cost:"440",
    year:"2021",
    imgUrl:car1Image,
  },
  {
    id:2,
    name:"BMW 3 Series",
    feature1:"4 people",
    feature2:"Automatic",
    feature3:"8.2",
    feature4:"Gasoline",
    cost:"350",
    year:"2019",
    imgUrl:car2Image,
  },
  {
    id:3,
    name:"Volkswagen",
    feature1:"4 people",
    feature2:"Automatic",
    feature3:"5.3",
    feature4:"Gasoline",
    cost:"400",
    year:"2020",
    imgUrl:car3Image,
  },
  {
    id:4,
    name:"Cadillac Esclade",
    feature1:"4 people",
    feature2:"Automatic",
    feature3:"7.7",
    feature4:"Gasoline",
    cost:"530",
    year:"2021",
    imgUrl:car4Image,
  },
  {
    id:5,
    name:"BMW 4 Series GTI",
    feature1:"4 people",
    feature2:"Automatic",
    feature3:"7.6",
    feature4:"Gasoline",
    cost:"530",
    year:"2021",
    imgUrl:car5Image,
  },
  {
    id:6,
    name:"BMW 4 Series",
    feature1:"4 people",
    feature2:"Automatic",
    feature3:"7.2",
    feature4:"Gasoline",
    cost:"490",
    year:"2019",
    imgUrl:car6Image,
  },
  
]
function HomePage(){
    const [search, setSearch] = useState('');

  const searchCars= (event) => {
    setSearch(event.target.value);
  };
    return(
        <div className="App">
      <div className='big-container'>
        <div className='header-container d-flex justify-content-start flex-direction-row p-3'>
          <div className='input-container'>
            <input
              type='text'
              placeholder='Search here...'
              value={search}
              onChange={searchCars}
            />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <p>Relevance<FontAwesomeIcon icon={faChevronDown} /></p>
          <p>All Brands<FontAwesomeIcon icon={faChevronDown} /></p>
        </div>
        <ul className='list-container d-flex flex-direction-column justify-content-space-between flex-wrap m-3 p-3'>
          {carsList
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <CardCar car={item} key={item.id} />
            ))}
        </ul>
      </div>
    </div>
    )
}
export default HomePage;
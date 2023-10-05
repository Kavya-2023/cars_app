import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart,faUser,faTachometerAlt} from '@fortawesome/free-solid-svg-icons';

class CardCar extends Component {
  render() {
    const {car}=this.props;
    return (
      <li className='card-container card col-3 d-flex justify-content-center flex-direction-column p-3 m-3'>
        <div className='img-container '>
            <img src={car.imgUrl} alt={car.name} className='img w-100 h-60'/>
        </div>
        <div className='details-container'>
            <div className='inner-details'>
                <p className='name'>{car.name}</p>
                <p className='year'>{car.year}</p>
            </div>
            <div className='inner-details features'>
                <p><FontAwesomeIcon icon={faUser} className='text-primary'/> {car.feature1}</p>
                <p>{car.feature2}</p>
            </div>
            <div className='inner-details features'>
               <p><FontAwesomeIcon icon={faTachometerAlt} className='text-primary'/> {car.feature3}km/1-Litre</p>
               <p><FontAwesomeIcon icon={faTachometerAlt} className=' text-primary'/> {car.feature4}</p>
            </div>
        </div>
        <div className='inner-details footer'>
            <p>${car.cost}<span>/month</span></p>
            <div className='likes-container'>
                <button className='love-icon'><FontAwesomeIcon icon={faHeart} className=' text-primary'/></button>
                <button className='btn btn-primary'>Rent Now</button>
            </div>
        </div>
      </li>
    );
  }
}

export default CardCar;

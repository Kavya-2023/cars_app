import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
function BottomPage(){
    return(
        <div className='bottom-container'>
          <p>6 from 129</p>
          <div className='btns-container'>
            <button className='f-btn'><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button className='f-btn'><Link to="/page/1" className="link">1</Link></button>
            <button className='f-btn'><Link to="/page/2" className="link">2</Link></button>
            <button className='f-btn'><Link to="/page/3" className="link">3</Link></button>
            <button className='f-btn'><Link to="/page/4" className="link">4</Link></button>
            <button className='f-btn'><Link to="/page/5" className="link">5</Link></button>
            <button className='f-btn'><Link to="/page/6" className="link">6</Link></button>
            <button className='f-btn'><Link to="/page/7" className="link">7</Link></button>
            <button className='f-btn'><Link to="/page/8" className="link">8</Link></button>
            <button className='f-btn'><Link to="/page/9" className="link">9</Link></button>
            <button className='f-btn'><Link to="/page/10" className="link">10</Link></button>
            <button className='f-btn'><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
    )
}
export default BottomPage;
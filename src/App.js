import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
import Page10 from './components/Page10';
import BottomPage from './components/BottomPage';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className='total-container'>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/page/1" component={Page1}/>
          <Route path="/page/2" component={Page2}/>
          <Route path="/page/3" component={Page3}/>
          <Route path="/page/4" component={Page4}/>
          <Route path="/page/5" component={Page5}/>
          <Route path="/page/6" component={Page6}/>
          <Route path="/page/7" component={Page7}/>
          <Route path="/page/8" component={Page8}/>
          <Route path="/page/9" component={Page9}/>
          <Route path="/page/10" component={Page10}/>
        </Switch>
        <BottomPage/>
        </div>
    </BrowserRouter>
  );
}
export default App;

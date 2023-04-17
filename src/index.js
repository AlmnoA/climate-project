import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Title from './Components/Nav';
import Article from './Components/Articles';
import pic1 from './images/flame nado.gif';
import pic2 from './images/hey-vsauce-michael-fab562e778.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Title />
  <Article author="Roeth" title="Is Anmol Going To Far?" Image={pic1} alt="his crimes" disc="In 2012 he did this but today?"/>
  <Article author="V. Sauce" title="Are People Getting Hotter?" Image={pic2} alt="his crimes" disc="No :("/>
  <Article author="John Climate" title="The Point of No Return?" Image={pic1} alt="his crimes" disc="Have We reached the Point of no return?"/>
  <Article author="roeth" title="Is Anmol Going To Far?" Image={pic1} alt="his crimes" disc="In 2012 he did this but today?"/>

</>
);


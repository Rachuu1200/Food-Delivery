import React from 'react';  
import PizzaMenu from './components/PizzaMenu';
import PopularFoodItems from './components/PopularFoodItems';
import Nike from './components/Nike';
import Sindhulibazarhome from './components/Sindhulibazarhome';
import FeaturedProduct from './components/FeaturedProduct';
import CourierCard from './components/CourierCard';                                        
import FeaturedProduct1 from './components/FeaturedProduct1';

function App() {
  return (
    <div>
       <Sindhulibazarhome />
      <PopularFoodItems />
      <PizzaMenu />
      <Nike />
      <FeaturedProduct />
      <CourierCard />
     <FeaturedProduct1 />
    </div>
  );
}

export default App;

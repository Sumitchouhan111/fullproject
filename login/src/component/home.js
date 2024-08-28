import React from 'react'
import logocha from '../logocha.png';
import { Routes,Route } from 'react-router';
import Notification from './notification';
import RecipeReviewCard from './cardpost';
function Home() {
    console.log(121212121221);
    
  return (
 


   
      <Routes>
    <Route path='/' element={<RecipeReviewCard/>}/> 
  </Routes>


  
  
  
  


  
  

  )
}

export default Home
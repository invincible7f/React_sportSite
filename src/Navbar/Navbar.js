import React from 'react';
import './Navbar.css'
class Navbar extends React.Component{

  constructor(props){

  super(props)

  this.state ={
   
  imageTraining:'images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png',
  imageNutrition:'images/nutrition.png',
  imageShedul:'images/shedul.png'
  }

  }

render(){

  

    return(
     <nav>
      <div className='LogoName'>
       <img  src='images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png' alt='picture'/>
        <h2>FitPower</h2>
      
      </div>

       <div className='navMenu'>
       <ul>

        <li> <img src={this.state.imageTraining} alt='trainings'/> <a href='#'>Тренировки</a></li> 
        <li> <img src={this.state.imageNutrition} alt='nutrition'/> <a href='#'>Питание</a></li> 
        <li> <img className='shedul' src={this.state.imageShedul} alt='pict'/> <a href='#'>Расписание</a></li> 
   
       </ul>
       <button type='submit'>Войти</button>
       </div>
     </nav>
     


    )

}


}

export default Navbar

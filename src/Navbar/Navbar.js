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



 changeColor = (e) => {
 
  
  if(e.target.className =="trainings"){
   console.log('h')
   this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png"})
  }

 else if(e.target.className =="nutrition"){
    this.setState({ imageNutrition:"images/nutrition_r.png"})


  }

 else if(e.target.className =="shedul"){
    this.setState({ imageShedul:"images/Shedul_r.png"})


  }
  
    e.target.style.color = "rgb(199, 45, 45)"
  
 }

 backColor = (e)=>{
   
  if(e.target.className =="trainings"){
    console.log('h')
    this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png"})
   }
 
  else if(e.target.className =="nutrition"){
     this.setState({ imageNutrition:"images/nutrition.png"})
 
 
   }
 
  else if(e.target.className =="shedul"){
     this.setState({ imageShedul:"images/shedul.png"})
 
 
   }

   e.target.style.color = ""
   

 }

render(){

  

    return(
     <nav>
      <div className='LogoName'>
       <img  src='images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png' alt='picture'/>
        <h2>FitPower</h2>
      
      </div>

       <div className='navMenu'>
       <ul >

        <li ><img src={this.state.imageTraining} alt='trainings'/> <a href='#' className ="trainings" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Тренировки</a></li> 
        <li ><img src={this.state.imageNutrition} alt='nutrition'/> <a href='#' className="nutrition" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Питание</a></li> 
        <li ><img className='shedul' src={this.state.imageShedul} alt='pict'/> <a href='#' className = "shedul" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Расписание</a></li> 
   
       </ul>
       <button type='submit'>Войти</button>
       </div>
     </nav>
     


    )

}


}

export default Navbar

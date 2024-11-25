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
   
   this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png"})
   document.querySelector(".dumbbell").style.filter ="brightness(150%)"

  }

 else if(e.target.className =="nutrition"){
    this.setState({ imageNutrition:"images/nutrition_r.png"})
    document.querySelector(".meat").style.filter ="brightness(150%)"


  }

 else if(e.target.className =="shedul"){
    this.setState({ imageShedul:"images/Shedul_r.png"})
    document.querySelector(".list").style.filter ="brightness(150%)"
       

  }
  
    e.target.style.color = "rgb(199, 45, 45)"
    e.target.style.filter ="brightness(150%)"
 }

 backColor = (e)=>{
   
  if(e.target.className =="trainings"){
    console.log('h')
    this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png"})
    document.querySelector(".dumbbell").style.filter ="brightness(100%)"

   }
 
  else if(e.target.className =="nutrition"){
     this.setState({ imageNutrition:"images/nutrition.png"})
     document.querySelector(".meat").style.filter ="brightness(100%)"

 
   }
 
  else if(e.target.className =="shedul"){
     this.setState({ imageShedul:"images/shedul.png"})
     document.querySelector(".list").style.filter ="brightness(100%)"

 
   }

   e.target.style.color = ""
    e.target.style.filter ="brightness(100%)"

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

        <li ><img src={this.state.imageTraining} alt='trainings' className='dumbbell'/><a href='#' className ="trainings" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Тренировки</a></li> 
        <li ><img src={this.state.imageNutrition} alt='nutrition' className='meat'/><a href='#' className="nutrition" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Питание</a></li> 
        <li ><img className='list' src={this.state.imageShedul} alt='pict'/> <a href='#' className = "shedul" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Расписание</a></li> 
   
       </ul>
       <button type='submit'>Войти</button>
       </div>
     </nav>
     


    )

}


}

export default Navbar

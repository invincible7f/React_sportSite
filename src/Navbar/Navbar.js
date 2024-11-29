import React from 'react';
import './Navbar.css'
// import DropdownMenu from '../dropdownMenu/DropdownMenu';

class Navbar extends React.Component{

  constructor(props){

  super(props)

  this.state ={
   
  imageTraining:'images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png',
  trainingDropMenuOpcity:0, 
  trainingDropMenuTop:'-600px', 
  imageNutrition:'images/nutrition.png',
  nutritionDropDownMenuOpcity:0, 
  nutritionDropDownMenuTop:'-600px',
  imageShedul:'images/shedul.png',
  shedulDropMenuOpcity:0,
  shedulDropMenuTop:'-600px'
  }

  }


// -------------------------------------------------------

changeColor = (e) => {

  let bright =150
  if(e.target.name =="trainings"){
      this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png"})
      document.querySelector(".dumbbell").style.filter = `brightness(${bright}%)`
      this.setState({trainingDropMenuOpcity:1})
      this.setState({trainingDropMenuTop:'-8px'})
      console.log(this.state.trainingDropMenu)
  }

 else if(e.target.name =="nutrition"){
    this.setState({imageNutrition:"images/nutrition_r.png"})
    document.querySelector(".meat").style.filter =` brightness(${bright}%)`
   
    this.setState({nutritionDropDownMenuOpcity:1})
    this.setState({nutritionDropDownMenuTop:'-8px'})

  }

 else if(e.target.name =="shedul"){
    this.setState({ imageShedul:"images/Shedul_r.png"})
    document.querySelector(".list").style.filter =`brightness(${bright}%)`
       

  }
  
    e.target.style.color = "rgb(199, 45, 45)"
    e.target.style.filter =`brightness(${bright}%)`

 }

// ------------------------------------------------------
 
backColor = (e)=>{
   
  if(e.target.name =="trainings"){
    console.log('h')
    this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png"})
    this.setState({trainingDropMenuOpcity:0})
    this.setState({trainingDropMenuTop:'600px'})
    document.querySelector(".dumbbell").style.filter ="brightness(100%)"

   }
 
  else if(e.target.name =="nutrition"){
     this.setState({imageNutrition:"images/nutrition.png"})
     document.querySelector(".meat").style.filter ="brightness(100%)"
     this.setState({nutritionDropDownMenuOpcity:0})
    this.setState({nutritionDropDownMenuTop:'-600px'})
     
 
   }
 
  else if(e.target.name =="shedul"){
     this.setState({ imageShedul:"images/shedul.png"})
     document.querySelector(".list").style.filter ="brightness(100%)"

 
   }

   if(e.target.className =="dropDownMenu"){

    this.setState({trainingDropMenuOpcity:0})


   }

   e.target.style.color = ""
    e.target.style.filter ="brightness(100%)"

 }
// ------------------------------------------------

dropdownMenuMouseEnter = (e)=>{
  this.setState({trainingDropMenuOpcity:1})
  this.setState({trainingDropMenuTop:'-8px'})
 console.log('hi')

 }

 dropdownMenuMouseLeave = (e)=>{
  this.setState({trainingDropMenuOpcity:0})
  this.setState({trainingDropMenuTop:'-600px'})
 console.log('hi')

 }

//  ----------------------------------------------------

 nutritionDropDownMenuMouseEnter = (e)=>{
  this.setState({nutritionDropDownMenuOpcity:1})
  this.setState({nutritionDropDownMenuTop:'-8px'})

 }
 

 nutritionDropDownMenuMouseLeave = (e)=>{
  this.setState({nutritionDropDownMenuOpcity:0})
  this.setState({nutritionDropDownMenuTop:'-600px'})
  
 }
 
// ------------------------------------------------

render(){

  let nutritionDropDownMenu = ['Диета', 'Витамины', 'Минералы']
    return(
     <nav>
      <div className='LogoName'>
       <img  src='images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png' alt='picture'/>
        <h2>FitPower</h2>
      
      </div>

       <div className='navMenu'>
       <ul >

        <li ><img src={this.state.imageTraining} alt='trainings' className='dumbbell'/><a href='#' name="trainings" className ="reference" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Тренировки</a>
        {/* <DropdownMenu op ={this.state.trainingDropMenuOpcity} top ={this.state.trainingDropMenuTop}/> */}
        <ul className='dropDownMenu' style={{opacity: this.state.trainingDropMenuOpcity, top:this.state.trainingDropMenuTop}} onMouseEnter={this.dropdownMenuMouseEnter} onMouseLeave={this.dropdownMenuMouseLeave}>
          <li><a href='#'>Бодибилдинг</a></li>
          <li><a href='#'>Кроссфит</a></li>
          <li><a href='#'>Калистеника</a></li>
          <li><a href='#'>ЛФК</a></li>
          </ul>
       </li> 
        <li className='nutrition'><img src={this.state.imageNutrition} alt='nutrition' className='meat'/><a href='#' name ='nutrition' className="reference" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Питание</a>
         <ul className='nutritionDropDownMenu' style={{opacity:this.state.nutritionDropDownMenuOpcity, top:this.state.nutritionDropDownMenuTop}} onMouseEnter={this.nutritionDropDownMenuMouseEnter} onMouseLeave={this.nutritionDropDownMenuMouseLeave}>
          {nutritionDropDownMenu.map((paragraph, index) => (

          <li  key={index}><a href='#'>{paragraph}</a></li>

          ))}
         </ul>
        </li> 
        <li ><img className='list' src={this.state.imageShedul} alt='pict'/> <a href='#'name='shedul' className = "reference" onMouseEnter={this.changeColor} onMouseLeave={this.backColor}>Расписание</a></li> 
   
       </ul>
       <button type='submit'>Войти</button>
       </div>
     </nav>
     
    

    )

}


}

export default Navbar

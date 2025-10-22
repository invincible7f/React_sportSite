import React from 'react';
import './Navbar.css'
import { User } from 'lucide-react';
import Flying_Window from '../Flying_Window/Flying_Window';
import { Menu } from 'lucide-react';
// import DropdownMenu from '../dropdownMenu/DropdownMenu';

class Navbar extends React.Component{

  constructor(props){

  super(props)

  this.state ={
   
  imageTraining:'images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png',
  imageNutrition:'images/nutrition.png',
  imageShedul:'images/shedul.png',
  flyingWindowTop:'-500px',
  flyingWindowOpacity:0,
  show:false,


  }

  }


// -------------------------------------------------------

changeColor = (e) => {

  let bright =150
  if(e.target.name =="trainings"){
      this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png"})
      document.querySelector(".dumbbell").style.filter = `brightness(${bright}%)`
     
  }

 else if(e.target.name =="nutrition"){
    this.setState({imageNutrition:"images/nutrition_r.png"})
    document.querySelector(".meat").style.filter =` brightness(${bright}%)`
   
    

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
    this.setState({ imageTraining:"images/1118213_dumbbell_exercise_fitness_muscle_weight_icon.png"})

    document.querySelector(".dumbbell").style.filter ="brightness(100%)"

   }
 
  else if(e.target.name =="nutrition"){
     this.setState({imageNutrition:"images/nutrition.png"})
     document.querySelector(".meat").style.filter ="brightness(100%)"
    
     
 
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

// ------------------------------------

 scrollTarget = (e)=>{
  
  if(e.target.name === 'trainings'){
  window.scrollTo({
  
  top:800,
  behavior:'smooth'

  })
 


}
else if(e.target.name ==='nutrition' ){

  window.scrollTo({
  
    top:1330,
    behavior:'smooth'
  
    })

}

else if(e.target.name ==='shedul' ){

  window.scrollTo({
  
    top:2500,
    behavior:'smooth'
  
    })

}
 }
// ----------------------------------------


 buttonBacklight = (event)=>{
  event.target.style.transition ='0.3s'
  event.target.style.scale = 0.95
  

 }


 buttonBack = (event)=>{
  event.target.style.transition ='0.3s'
  event.target.style.scale = 1
  

 }

 showWindow = () =>{

 this.setState({ flyingWindowTop:'180px', flyingWindowOpacity:1}) 

 }

 menuToggle=()=>{
 this.setState(prev => ({
    show: !prev.show,
    showMenu: !prev.show ? 'flex' : 'none'
  }));
   
 }

render(){


    return(
     <nav>
      <Flying_Window m_top ={this.state.flyingWindowTop} fw_opacity ={this.state.flyingWindowOpacity} />
      <div className='container-nav'>
        <div className='burger'  onClick={this.menuToggle}> <Menu color='white' size={70}/> </div>
      <div className='LogoName'>
       <img  src='images/1118213_dumbbell_exercise_fitness_muscle_weight_icon2.png' alt='picture'/>
        <h2>FitPower</h2>
      
      </div>

       <div className='navMenu'>
       <ul >

        <li ><img src={this.state.imageTraining} alt='trainings' className='dumbbell'/><a href='#' name="trainings" className ="reference" onMouseEnter={this.changeColor} onMouseLeave={this.backColor} onClick={this.scrollTarget}>Тренування</a>
    
       </li> 
        <li className='nutrition'><img src={this.state.imageNutrition} alt='nutrition' className='meat'/><a href='#' name ='nutrition' className="reference" onMouseEnter={this.changeColor} onMouseLeave={this.backColor} onClick={this.scrollTarget}>Харчування</a>
      
        </li> 
        <li ><img className='list' src={this.state.imageShedul} alt='pict'/> <a href='#'name='shedul' className = "reference" onMouseEnter={this.changeColor} onMouseLeave={this.backColor} onClick={this.scrollTarget}>Розклад</a></li> 
   
       </ul>
       <button type='submit' onMouseEnter={this.buttonBacklight} onMouseLeave={this.buttonBack} onClick={this.showWindow}> Війти</button>
       </div>
      </div>
     </nav>
     
    

    )

}


}

export default Navbar

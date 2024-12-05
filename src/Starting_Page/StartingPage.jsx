
import React,{useState} from "react";
import'./StartingPage.css'



class StartingPage extends React.Component{

   constructor(useState){
   
    super(useState)

   
 }
  
 buttonBacklight = (event)=>{
   event.target.style.transition ='0.3s'
   event.target.style.scale = 0.95
   
 
  }


  buttonBack = (event)=>{
   event.target.style.transition ='0.3s'
   event.target.style.scale = 1
   
 
  }
    render(){
     let arrow = '→'





        return(
  
           <section className="startingPage">
            <div className="darkLayer"></div>
             <div className="startingPageContainer">
             <h1>Побудуй тіло своєї мрії </h1>
            <p>Професійні програми тренувань та харчування для досягнення ваших цілей </p>
            <button onMouseEnter={this.buttonBacklight} onMouseLeave={this.buttonBack}>Почати зараз →</button>
            </div>
           </section>  

        )

    }



}

export default StartingPage
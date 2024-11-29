
import React,{useState} from "react";
import'./StartingPage.css'



class StartingPage extends React.Component{

   constructor(useState){
   
    super(useState)

   
 }
  
    render(){
     let arrow = '→'





        return(
  
           <section className="startingPage">
            <div className="darkLayer"></div>
             <div className="startingPageContainer">
             <h1>Побудуй тіло своєї мрії </h1>
            <p>Професійні програми тренувань та харчування для досягнення ваших цілей </p>
            <button >Почати зараз →</button>
            </div>
           </section>  

        )

    }



}

export default StartingPage
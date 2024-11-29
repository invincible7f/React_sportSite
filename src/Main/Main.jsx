import React from "react";
import'./Main.css'
import StartingPage from "../Starting_Page/StartingPage";
import TrainingPrograms from "../Training_Programs/TrainingPrograms";
import PreferentialNutrition from "../Preferential_Nutrition/PreferentialNutrition";

class Main extends React.Component{

   

    render(){
    
        return(
  
           <main>
          <StartingPage />
            <TrainingPrograms />
            <PreferentialNutrition/>
           </main>  

        )

    }



}

export default Main
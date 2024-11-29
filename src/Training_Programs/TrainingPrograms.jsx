import React from "react";
import './TrainingPrograms.css'
import { Dumbbell, Timer, Trophy, Target } from 'lucide-react';






class TrainingPrograms extends React.Component{

   constructor(){
   
   super()
   this.size = 40
   this.programs = [

     { 
        icon:<Dumbbell color="red" size={this.size}  />,
        title: 'Силові тренеровки',   
        description: 'Програми для набору м`язевої масси массы та збільшення сили'
     },
     
     { 
        icon:<Timer color="red" size={this.size}/>,
        title: 'Кардио',
        description: 'Эффективные кардио тренировки для сжигания жира'
     },

     { 
        icon:<Trophy color="red" size={this.size}/>,
        title: 'Соревновательный',
        description: 'Подготовка к соревнованиям по бодибилдингу'
     },

     { 
        icon:<Target color="red" size={this.size}/>,
        title: 'Персональный',
        description: 'Индивидуальные программы под ваши цели'
     }
   
    ]
   
 }
  
    render(){






        return(
  
           <section className="trainingPrograms"> 

           <h1>Програми тренувань</h1>
             <div className="trainingProgramsContainer"> 
                   
             {this.programs.map((program, index) => (
                <div key={index} className="mainContainer">
                <div className="container">
              <div className="programIcon">{program.icon}</div>
              <h3 >{program.title}</h3>
              <p >{program.description}</p>
              </div>
            </div>
                    
                                      
                    
                    ))}

             </div>
           </section>  

        )

    }



}

export default TrainingPrograms
import React from "react";
import'./Flying_Window.css'
class Flying_Window extends React.Component{

   constructor(props){
  
    super(props)

   }

    render(){
    
        return(
  
         <div className="flyingWindow" style={{marginTop:this.props.m_top, opacity:this.props.fw_opacity }}>
            <div className="flyingWindowContainer">
                <h2>Вхід</h2>
                <p>Для доступу дo акаунту введіть Email та пароль</p>
                <form action="">
                <label htmlFor=""> Email</label>
                <input type="text" placeholder="Введіть Email" />
                <label htmlFor=""> Пароль</label>
                <input type="numbers" placeholder="Введіть пароль" />
                <button>Вхід</button>
                </form>
            </div>
            

         </div>

        )

    }



}

export default Flying_Window
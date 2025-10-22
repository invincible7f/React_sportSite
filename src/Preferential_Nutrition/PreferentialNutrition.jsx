import React from "react";
import "./PreferentialNutrition.css";
import { Apple, Coffee, Fish, Beef } from "lucide-react";

class PreferentialNutrition extends React.Component {
  render() {
    let size = 32;
    const nutrition = [
      {
        img: <Apple color="red" size={size} />,
        title: "Чисте  харчування",
        description: "Натуральні продукти для здоров`я",
      },

      {
        img: <Coffee color="red" size={size} />,
        title: "Метаболізм",
        description: "Пришвидшення обміну речовин",
      },

      {
        img: <Fish color="red" size={size} />,
        title: "Омега-3",
        description: "Корисні жири та протеїн",
      },

      {
        img: <Beef color="red" size={size} />,
        title: "Протеїн",
        description: "Ріст м`язевої масси",
      },
    ];

    return (
      <section className="preferential_Nutrition">
        <div className="preferential_Nutrition_Content">
          <div className="preferential_Nutrition_Content_Container">
            <h2>Правильне харчування</h2>
            <p>
              Досягнення ваших фітнес-цілей на 70% залежить від правильного
              харчування. Наші експерти розробили програми харчування, які
              допоможуть досягти максимальних результатів.
            </p>
            <div className="preferential_Nutrition_Variant">
              {nutrition.map((pref_nutrition, index) => (
                <div
                  className="preferential_Nutrition_Variant_Item"
                  key={index}
                >
                  <div className="preferential_Nutrition_Variant_Item_Img">
                    {pref_nutrition.img}
                  </div>
                  <div className="title_description">
                    <h3>{pref_nutrition.title}</h3>
                    <p>{pref_nutrition.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="preferential_Nutrition_Img"></div>
      </section>
    );
  }
}

export default PreferentialNutrition;

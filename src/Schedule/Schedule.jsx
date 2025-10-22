import React from "react";
import "./Schedule.css";
import { Apple, Coffee, Fish, Beef } from "lucide-react";

const schedule = [
  { time: "07:00", class: "Ранкова кардіо-тренировка", trainer: "Олександр" },
  { time: "09:00", class: "Силова тренировка", trainer: "Михайло" },
  { time: "11:00", class: "Функціональний тренинг", trainer: "Олена" },
  { time: "15:00", class: "Бодібілдинг", trainer: "Дмитро" },
  { time: "17:00", class: "Кроссфіт", trainer: "Анна" },
  { time: "19:00", class: "Вечірня силова", trainer: "Сергій" },
];

const training_schedul_sections = ["Час", "Тренування", "Тренер"];

class Schedule extends React.Component {
  render() {
    return (
      <section id="schedule">
        <div id="schedule_container">
          <h2>Розклад тренувань</h2>
          <div className="training_schedul">
            <div className="training_schedul_sections">
              <ul>
                {training_schedul_sections.map((schedule, index) => (
                  <li>{schedule}</li>
                ))}
              </ul>
            </div>

            <div className="schedul_item">
              <ul className="schedul_item_time">
                {schedule.map((item, index) => (
                  <>
                    <li className="schedul_time" key={index}>
                      {item.time}
                    </li>
                  </>
                ))}
              </ul>

              <ul className="schedul_item_class">
                {schedule.map((item, index) => (
                  <>
                    <li className="schedul_class" key={index}>
                      {item.class}
                    </li>
                  </>
                ))}
              </ul>

              <ul className="schedul_item_trainer">
                {schedule.map((item, index) => (
                  <>
                    <li className="schedul_trainer" key={index}>
                      {item.trainer}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Schedule;

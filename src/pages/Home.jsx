import React, { useState } from 'react';
import founderImg from '../assets/founder.jpg';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const correct_answer = "ракета";

  const checkAnswer = () => {
    if (userAnswer.trim().toLowerCase() === correct_answer) {
      setFeedback("Правильно! Дякуємо за відповідь!");
      setIsCorrect(true);
      setTimeout(() => {
          setIsModalOpen(false);
          setFeedback("");
          setUserAnswer("");
          setIsCorrect(false);
      }, 2000);
    } else {
      setFeedback("Неправильно. Спробуйте ще раз.");
      setIsCorrect(false);
    }
  };

  return (
    <>
      <article className="mission">
        <div className="mission-content">
            <h2>Мета створення RocketLaunch Tech</h2>
            <p>Наша мета - революціонізувати космічні запуски,
                роблячи їх доступними та ефективними для комерційних і наукових місій.</p>
            <p>Ми фокусуємося на розробці інноваційних ракетних технологій для доставлення вантажів на орбіту.</p>
            <p>Для досягнення цієї мети ми ставимо перед собою такі завдання:</p>
            <ul>
                <li>Розробка багаторазових ракетних систем для зменшення витрат на запуски.</li>
                <li>Інтеграція штучного інтелекту для оптимізації траєкторій польотів.</li>
                <li>Співпраця з міжнародними партнерами для спільних космічних проєктів.</li>
                <li>Проведення тестів на екологічність палива для зменшення впливу на довкілля.</li>
            </ul>
        </div>
      </article>

      <article>
        <h2>Інформація про засновника та керівництво</h2>

        <section id="founder">
           <h3>Засновник компанії</h3>
           <img
             src={founderImg}
             alt="Фото засновника Івана Петренка"
             id="founder-photo"
             className="founder-photo"
             onMouseEnter={() => setIsModalOpen(true)}
             onClick={() => setIsModalOpen(true)}
           />
           <p><strong>Іван Петренко</strong> — засновник та генеральний директор RocketLaunch Tech.</p>
        </section>

        <table id="founders-table" border="1">
            <caption>Керівництво компанії RocketLaunch Tech</caption>
            <thead>
              <tr>
                <th>Ім'я</th>
                <th>Посада</th>
                <th>Досвід (роки)</th>
                <th>Спеціалізація</th>
                <th>Контакт</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Марія Сидоренко</td>
                <td>CTO</td>
                <td>12</td>
                <td>Програмне забезпечення для космічних систем</td>
                <td>maria@rocketlaunch.tech</td>
              </tr>
              <tr>
                <td>Олексій Коваленко</td>
                <td>CFO</td>
                <td>10</td>
                <td>Фінанси в tech-стартапах</td>
                <td>oleksiy@rocketlaunch.tech</td>
              </tr>
              <tr>
                <td>Анна Бондаренко</td>
                <td>Головний інженер</td>
                <td>8</td>
                <td>Дизайн ракет</td>
                <td>anna@rocketlaunch.tech</td>
              </tr>
              <tr>
                <td>Сергій Іванов</td>
                <td>Маркетолог</td>
                <td>7</td>
                <td>Просування космічних технологій</td>
                <td>sergiy@rocketlaunch.tech</td>
              </tr>
              <tr>
                <td>Ольга Шевченко</td>
                <td>HR-менеджер</td>
                <td>9</td>
                <td>Рекрутинг в аерокосмічній галузі</td>
                <td>olga@rocketlaunch.tech</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5">Всього керівників: 5</td>
              </tr>
            </tfoot>
        </table>
      </article>

      <p>Ми пишаємося нашими досягненнями в <span style={{color: 'darkviolet'}}>
        <u>запусках ракет у космос</u></span>, де інновації зустрічаються з реальністю.
      </p>

      <aside className="contact-info">
        <h3>Посилання на сайти партнерів:</h3>
        <a href="https://www.nasa.gov" className="button" target="_blank" rel="noreferrer">Відвідати NASA</a>
        <a href="https://www.spacex.com" className="button" target="_blank" rel="noreferrer">Відвідати SpaceX</a>
      </aside>

      {isModalOpen && (
        <div
            id="riddle-modal-overlay"
            style={{display: 'flex'}}
            onClick={(e) => {
                if (e.target.id === 'riddle-modal-overlay') setIsModalOpen(false);
            }}
        >
            <div id="riddle-modal">
                <span className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
                <h3>Загадка від Івана Петренка</h3>
                <p id="riddle-text">Я вириваюсь із Землі, щоб не впасти назад. Мене створюють люди, щоб дістатись зірок. Хто я?</p>
                <input
                    type="text"
                    id="riddle-answer-input"
                    placeholder="Введіть Вашу відповідь тут"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => { if(e.key === 'Enter') checkAnswer() }}
                />
                <button id="riddle-check-btn" onClick={checkAnswer} disabled={isCorrect}>
                    Перевірити
                </button>
                <p id="riddle-feedback" className={`feedback-text ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {feedback}
                </p>
            </div>
        </div>
      )}
    </>
  );
}

export default Home;
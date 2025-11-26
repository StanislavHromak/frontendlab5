import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contacts() {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Дякуємо! Ваше повідомлення відправлено (імітація).");
  };

  return (
    <article style={{ textAlign: 'center' }}>
        <h2>Зворотній зв’язок</h2>
        <p>Заповніть форму нижче, щоб зв’язатися з нами. Ми цінуємо ваш відгук і пропозиції!</p>

        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Персональна інформація</legend>

                <label htmlFor="full-name">Прізвище та ім’я:</label>
                <input type="text" id="full-name" name="full-name" required />

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="age">Вік:</label>
                <input type="number" id="age" name="age" min="1" max="100" required />

                <label htmlFor="education">Освіта:</label>
                <select id="education" name="education" required defaultValue="">
                    <option value="" disabled>Виберіть освіту</option>
                    <option value="full">Повна</option>
                    <option value="incomplete">Неповна</option>
                    <option value="higher">Вища</option>
                    <option value="professional">Професійна</option>
                </select>

                <label>Інтереси (виберіть один або кілька):</label>
                <div className="checkbox-group">
                    <input type="checkbox" id="scientist" name="interests" value="scientist" />
                    <label htmlFor="scientist" style={{display: 'inline', marginLeft: '5px'}}>Науковець</label><br />

                    <input type="checkbox" id="investor" name="interests" value="investor" />
                    <label htmlFor="investor" style={{display: 'inline', marginLeft: '5px'}}>Інвестор</label><br />

                    <input type="checkbox" id="promoter" name="interests" value="promoter" />
                    <label htmlFor="promoter" style={{display: 'inline', marginLeft: '5px'}}>Промоутер</label><br />

                    <input type="checkbox" id="official" name="interests" value="official" />
                    <label htmlFor="official" style={{display: 'inline', marginLeft: '5px'}}>Держслужбовець</label>
                </div>
            </fieldset>

            <fieldset style={{position: 'relative'}}>
                <legend>Мета зворотного зв’язку</legend>

                <label htmlFor="purpose">Оберіть мету:</label>
                <select id="purpose" name="purpose" required defaultValue="">
                    <option value="" disabled>Виберіть мету</option>
                    <option value="collaboration">Співпраця</option>
                    <option value="complaint">Скарга на порушення права власності</option>
                    <option value="suggestion">Пропозиція</option>
                    <option value="error">Наявність помилки</option>
                </select>

                <label htmlFor="comment">Докладніше:</label>

                {showTooltip && (
                    <span style={{
                        position: "absolute",
                        background: "#333",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "0.9em",
                        marginLeft: "10px",
                        top: "10px",
                        left: "100%",
                        display: "none"
                    }}>
                        Вдячні за Ваш час! Конкретизуйте мету звернення, будь ласка.
                    </span>
                )}

                <textarea
                    id="comment"
                    name="comment"
                    maxLength="500"
                    placeholder="Введіть ваш коментар (максимум 500 символів)"
                    required
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    style={showTooltip ? {
                        backgroundColor: "#222",
                        boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                        border: "2px solid #fff",
                        color: "#fff"
                    } : {}}
                ></textarea>
            </fieldset>

            <label htmlFor="consent" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <input type="checkbox" id="consent" name="consent" required />
                Я даю згоду на обробку моїх персональних даних.
            </label>

            <div className="button-row">
                <button type="submit" className="button">Відправити</button>
                <Link to="/" className="button">Повернутися на головну</Link>
            </div>
        </form>
    </article>
  );
}

export default Contacts;
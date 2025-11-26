import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import falcon9 from '../assets/falcon9.png';
import starship from '../assets/starship.png';
import ariane6 from '../assets/ariane6.png';
import electron from '../assets/electron.png';
import h3 from '../assets/h3.png';
import zenit from '../assets/zenit-3sl.png';

function Projects() {
  const slides = [falcon9, starship, ariane6, electron, h3, zenit];
  const [currentSlide, setCurrentSlide] = useState(0);

  const projectsData = [
    {
      id: 'falcon9',
      name: 'Falcon 9',
      image: falcon9,
      country: 'США',
      specs: [
        'Вантажопідйомність: 22 800 кг на низьку навколоземну орбіту.',
        'Тип палива: Рідкий кисень і гас (RP-1).',
        'Висота ракети: 70 м.',
        'Технологія: Багаторазова перша ступінь з можливістю посадки.',
        'Статус: Активно використовується для комерційних і наукових місій.'
      ]
    },
    {
      id: 'starship',
      name: 'Starship',
      image: starship,
      country: 'США',
      specs: [
        'Вантажопідйомність: 150 000 кг на низьку навколоземну орбіту.',
        'Тип палива: Рідкий метан і рідкий кисень.',
        'Висота ракети: 120 м.',
        'Технологія: Повністю багаторазова система для міжпланетних польотів.',
        'Статус: У стадії тестування.'
      ]
    },
    {
      id: 'ariane6',
      name: 'Ariane 6',
      image: ariane6,
      country: 'Європа (Франція)',
      specs: [
        'Вантажопідйомність: 21 650 кг на низьку навколоземну орбіту.',
        'Тип палива: Рідкий водень і рідкий кисень.',
        'Висота ракети: 63 м.',
        'Технологія: Модульна конструкція для різних типів місій.',
        'Статус: Перший запуск відбувся у 2024 році.'
      ]
    },
    {
      id: 'electron',
      name: 'Electron',
      image: electron,
      country: 'Нова Зеландія/США',
      specs: [
        'Вантажопідйомність: 300 кг на низьку навколоземну орбіту.',
        'Тип палива: Рідкий кисень і гас (RP-1).',
        'Висота ракети: 18 м.',
        'Технологія: Легка ракета для запуску малих супутників.',
        'Статус: Активно використовується.'
      ]
    },
    {
      id: 'h3',
      name: 'H3',
      image: h3,
      country: 'Японія',
      specs: [
        'Вантажопідйомність: 6 500 кг на геостаціонарну орбіту.',
        'Тип палива: Рідкий водень і рідкий кисень.',
        'Висота ракети: 63 м.',
        'Технологія: Високоефективна система для комерційних запусків.',
        'Статус: У стадії активного використання.'
      ]
    },
    {
      id: 'zenit',
      name: 'Zenit-3SL',
      image: zenit,
      country: 'Україна/міжнародна співпраця',
      specs: [
        'Вантажопідйомність: 6 000 кг на геостаціонарну орбіту.',
        'Тип палива: Рідкий кисень і гас (RP-1).',
        'Висота ракети: 59.6 м.',
        'Технологія: Запуск із морської платформи.',
        'Статус: Обмежене використання через геополітичні фактори.'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <div className="carousel-viewport" style={{ position: 'relative', overflow: 'hidden' }}>
         <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>

         <div className="carousel-track" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img
                src={slides[currentSlide]}
                alt="Space Rocket"
                style={{ maxHeight: '20vw', maxWidth: '100%', objectFit: 'contain', borderRadius: '10px', transition: 'all 0.5s ease' }}
            />
         </div>

         <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>

      <article className="our_projects">
        <div className="projects-header">
            <h2>Наші проєкти</h2>
            <p>Нижче представлено список наших ключових проєктів у сфері космічних запусків.</p>
            <p>Кожен проєкт демонструє наші інноваційні підходи до розробки ракетних технологій.</p>
        </div>

        <div className="projects-grid">
            {projectsData.map((project) => (
                <section className="project" key={project.id}>
                    <h3>{project.name}</h3>
                    <img src={project.image} alt={`Ракета ${project.name}`} width="250" />
                    <p><b>Країна:</b> {project.country}</p>
                    <p><b>Основні характеристики:</b></p>
                    <ul>
                        {project.specs.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>

        <div className="projects-footer" style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <Link to="/" className="button">Повернутися на Головну</Link>
        </div>
      </article>
    </>
  );
}

export default Projects;
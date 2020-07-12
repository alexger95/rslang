import React from 'react';

import {PromoCard} from '../../Components/Promo/PromoCard';
import { GamesCard } from '../../Components/Promo/GamesCard';

class Promo extends React.Component{
  render(){
    return(
      <React.Fragment>
       <div className="container">
          <div className="row">
            <div className="col-12 pt-5">
              <div className="settingsContainer pt-5">
              <div className="jumbotron border border-primary">
                <p>
                  Играть и изучать английский одновременно?
                  Легко! Особенно вместе c  rslang. Чем удобно
                  это приложение? Все самое необходимое для
                  увлекательного изучения английского языка 
                  в одном месте. Обо всем по порядку.
                </p>
              </div>
              <PromoCard 
                cardTitle='ИЗУЧЕНИЕ СЛОВ'
                cardImg ="https://i.gifer.com/ONHF.gif"
                cardText='Каждый раз вспоминания то или иное 
                            слово на английском, хочется, чтобы оно 
                            не вертелось где-то на языке, а сразу же 
                            красиво вливалось в речь. Именно поэтому так важно 
                            пополнять свой словарный запас. Раздел «Изучение слов» 
                            поможет как следует встряхнуть ваш активный и пассивный 
                            словарь. Здесь необходимо правильно вписать подходящее по смыслу 
                            слово в предложении. Отличная возможность проверить орфографию! 
                            После написания слова можно проверить себя, а также прослушать 
                            верный вариант на английском. В случае затруднения можно нажать 
                            на «показать ответ» и произнести вслух то самое «Я так и знал!»'
                btnText='Попробовать'
                link="/play-zone"
              />

              <PromoCard 
                cardTitle='СТАТИСТИКА'
                cardImg ="https://i.gifer.com/ONHF.gif"
                cardText='М-мотивация! Ключ к успеху в любом деле! Не терять свою 
                  мотивацию в изучении английского поможет отслеживание результатов 
                  в разделе «Статистика». Простой для восприятия график покажет ваш 
                  прогресс: изученные слова в день, новые слова из словаря. 
                  Шаг за шагом на пути к успеху!'
                btnText='Ваши успехи'
                link="/long-stats"
              />

              <PromoCard 
                cardTitle='СЛОВАРЬ'
                cardImg ="https://i.gifer.com/ONHF.gif"
                cardText='Куда без него? Словарь с транскрипцией и примерами употребления 
                  слов в контексте. Для лучшего запоминания есть наглядности в виде картинок, 
                  а также звуковое оформление слов. Формула проста: прослушал +прочел 
                  в предложении +увидел = 100% запоминание!'
                btnText='Посмотреть'
                link="learning-words"
              />
              <div class="row">
                <GamesCard
                  gameTitle ='Sprint'
                  gameDescription='Как играть: дано слово на английском 
                    и его перевод. Если они совпадают, нажми "Yes", 
                    если нет, нажми "No". Комбо из четырёх правильных 
                    ответов удваивает награду. Три ошибки ведут к проигрышу. 
                    Можно выставлять уровень сложности. Ох и мозговая встряска! '
                  gameLink='/SprintGame'
                />
                 <GamesCard
                  gameTitle ='Savannah'
                  gameDescription='Все просто: чем больше слов знаете, 
                    тем больше очков зарабатываете. Идеально для прокачки 
                    словарного запаса.'
                  gameLink='/Savanna'
                />
                 <GamesCard
                  gameTitle ='Speak It'
                  gameDescription='Говорить как носитель английского языка? 
                    Все возможно!  Практика устной речи при помощи 
                    технологии распознавания речи Google Web Speech 
                    API для проверки правильности произношения. It’s easy!'
                  gameLink='/speakIt-start'
                />
                <GamesCard
                  gameTitle ='Поле Чудес'
                  gameDescription='Открывая правильные буквы на табло, 
                  чувствуешь себя суперфиналистом знаменитой телевизионной 
                  игры. Так и хочется крутануть барабан!'
                  gameLink='/fortune-game'
                />
              </div>
            
             </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Promo;
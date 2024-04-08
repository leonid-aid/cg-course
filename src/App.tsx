import './App.scss';
import { Tabs } from './assets/Tabs/Tabs.tsx';
import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as Burger } from './assets/images/burger.svg';
import { createGlobalStyle } from 'styled-components';
import * as S from './UserStyles.tsx'

/* import TelegramModal from "./assets/TelegramForm/TelegramForm.tsx";
import GoogleMapsModal from "./assets/GoogleMapsForm/GoogleMapsForm.tsx";
import TelegramGroup from "./assets/TelegramGroup/TelegramGroup.tsx"; */
import { Helmet } from 'react-helmet';



const GlobalStyle = createGlobalStyle`

/* body {

  background-color:yellow;
  font-family: sans-serif;
}

span {
  background-color: blue;
  text-decoration: none;
} */
`;



const App = () => {


  const ColorDate = ({ date }: { date: Date }): string => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const startDate = new Date(2024, 1, 12); // 10 июля 2023 года
    const endDate = new Date(2024, 3, 4); // 2 сентября 2023 года

    // Проверяем, попадает ли дата в указанный диапазон
    if (date >= startDate && date <= endDate) {
      // Если день - понедельник или суббота, добавляем класс "ColorDatestyle"
      if (day === 1 || day === 3 || day === 4 || day === 6) {
        return 'ColorDatestyle';
      }
    }

    return '';
  };

  const tabs = [
    { id: 1, title:<span id="AOne">Уровень А1</span>, content: <div id="Tab-Content"><p>— Не понимаю на слух</p>  <p>— Не могу объясниться на языке</p> <p>— Не могу ничего написать</p> <p>— Пробую читать, получается не очень</p></div> },
    { id: 2, title: <span id="ATwo">Уровень А2</span>, content: <div id="Tab-Content"><p>— Понимаю на слух отдельные слова, в целом угадываю тему разговора</p>  <p> — Могу объясниться парой типовых фраз</p> <p>— Не очень получается что-то написать</p> <p>— В тексте понимаю некоторые слова и общую тему прочитанного</p></div> },
  ];

const ButtonClick =(url:string)=>{
  window.location.href=url;
}

    const ColorDateCalendar = ({ date, view }) => {
      if (date.getDay() === 0) {
        return 'ColorDate';
      }
      return null;
    };

    const [MenuActive, setMenuActive]=useState(false);
    
    const Clickck=()=>{
      setMenuActive(!MenuActive);
    }

const CommemtsAnchor = useRef<HTMLDivElement>(null);
const CommemtsAnchorClick=()=>{
  if(CommemtsAnchor.current){
    CommemtsAnchor.current.scrollIntoView({behavior:'smooth'})
  }
}

  return (
    <div>
        <GlobalStyle/>
  
      <div id="Wrapper">
      <Burger id="Burger" onClick={Clickck}/>
      {MenuActive ? 
      <div id="MenuContainer">
        <span ><a href="https://t.me/Crnogorski_Casovi_Bot">Записаться</a></span>
        <span onClick={CommemtsAnchorClick} ><a>Отзывы</a></span>
        <span><a href="https://t.me/+LVL3eSQpRfBmNDAy">Socials</a></span>
      </div>:null}
      <div id="MenuContainerB">

        <span ><a href="https://t.me/Crnogorski_Casovi_Bot">Записаться</a></span>
        <span onClick={CommemtsAnchorClick} ><a>Отзывы</a></span>

        <span><a href="https://t.me/+LVL3eSQpRfBmNDAy">Socials</a></span>
      </div>

       <div id="Header"> 

          <div id= "WrapperImg">
          <img src={require("./assets/images/Fon1.jpg")}/>  
          </div>

        <div id="LearnFrom0">
          <p>Обучение</p><p>черногорскому</p><p>с нуля</p>
        </div>
        <span id="Cetinje">ОНЛАЙН</span>
          <button className='ButtonHeader' onClick={()=>ButtonClick("https://t.me/Crnogorski_Casovi_Bot")}><a href="https://t.me/Crnogorski_Casovi_Bot">Записаться</a></button>
      </div> 

        <div id="Header2">
        <div className='WrapInside'>
        <div id="THuman">
          <span>Онлайн группы по 6-8 человек</span>
          <img src={require("./assets/images/People.jpg")}/>
          </div>
        </div>
        </div>
         <div id="Tabs">
         <div className='WrapInside'>
          <div id="LvlLabelWrap">
          <span id="LvlLabel">Набор по уровню языка</span>
          </div>
        <div id="TabDisplay">
          <Tabs/>
        </div>
        </div>
        </div>
        <div id="ShortTargetTraining">
        <div className='WrapInside'>
        <span id="TargetTrainingSpan">Короткое целевое обучение - спринт</span>
          <div id="sprintTextBlock">
            <div id="sprint">
              <p>Идёт набор на спринт</p>
              <p>*Спринт - это короткий временной интервал, в течение которого группа приходит к заданным результатам.</p>
{/*               <p className='A1t'>А1: время занятий в будни 18.00-18.40, по субботам 10.00-10.40</p>
              <p className='A2t'>А2: время занятий в будни 18.50-19.30, по субботам 10.50-11.30</p> */}
            </div>
            <div id="sprintRightBlock">
              <p>32 занятия за два месяца -</p>
              <p>16 занятий в месяц - </p>
              <p>4 занятия в неделю.</p>
            </div>
            </div>
          <div id="CalendarBlock">
            <div id="Calendar">
              <Calendar tileClassName={ColorDate}/>
              <div id="sprintPS">
                <p>P.S. Успешное изучение языка возможно при минимум 3 занятиях в неделю.</p>
              </div>
            </div>
            <div id="CalendartextBlock">
            <p>Цели спринта:</p>
            <p>— Различаю на слух часто используемые слова и общий смысл разговора в потоке речи</p>
            <p>— Говорю самыми простыми фразами</p>
            <p>— Пишу под диктовку или переписываю так, чтобы носитель языка понял</p>
            <p> — Понимаю часто используемые слова и общий смысл прочитанного</p>
            </div>
          </div>
           <div id="Button2EnrollDisplay"> 
          <button className='ButtonEnroll' onClick={()=>ButtonClick("https://t.me/Crnogorski_Casovi_Bot")} ><a href="https://t.me/Crnogorski_Casovi_Bot">Записаться</a></button>
           </div> 
        </div>

        </div>


      <div id="Whythis">

      <div className='WrapInside'>
          <div id="Why"><p>Почему эти курсы</p></div>
          <div id="list">
            <li id="li1"><img src={require("./assets/images/1.jpg")}/><span>Краткосрочный интенсив, разработанный с учетом всех методических требований к обучению языкам</span></li>
            <li id="li2"><img src={require("./assets/images/2.jpg")}/><span>Живые занятия в группах увеличивают скорость освоения языка</span></li>
            <li id="li3"><img src={require("./assets/images/3.jpg")}/><span>Занятия в вечернее время и выходные, частые (4 раза в неделю) и не долгие (40 минут)</span></li>
            <li id="li4"><img src={require("./assets/images/4.jpg")}/><span>Сквозное восстановление пропущенных тем</span></li>
            <li id="li5"><img src={require("./assets/images/5.jpg")}/><span>При средней в Черногории цене 15 евро за занятие — цена разового занятия 10 евро, цена занятия по абонементу 6,25 евро</span></li>
        </div> 
        </div>
        </div>

        <div id="Teachers">
        <div className='WrapInside'>
          <div id="OrbiDis">
          <span className='OrangeBig'>Наши преподаватели</span>
          </div>
            <div id="listTeachers">
            <li><img src={require("./assets/images/phEl.jpg")}/><span>Елена</span><p>Научный руководитель,<p>методист.</p></p><p>Высшее профессиональное образование </p></li>
            <li><img src={require("./assets/images/phSo.jpg")}/><span>София</span><p>Русскоязычная.<p>С начальной школы в Черногории.</p></p><p>Высшее профессиональное образование </p></li>
            </div>
        </div>
        </div>

        <div id="Price">

        <div id="Pricetable">
          <div id="rate"><p id="zag1">Тарифы</p>  <p>Цена</p><p>Доступ к занятиям</p><p>Восстановление пропущенных занятий</p><p>Домашние задания</p><p>Экономия</p></div>
          <div id="subscription"><p id="zag">Абонемент</p><p>100 евро/мес</p><p>16 занятий</p><p>+</p><p>+</p><p>+</p></div>
          <div id="one-time"><p id="zag">Разовый</p><p>10 евро/занятие</p><p>1 занятие</p><p>-</p><p>-</p><p>-</p></div>
          <div id="trial"><p id="zag">Пробный</p><p>30 евро/неделя</p><p>4 занятия</p><p>-</p><p>-</p><p>+</p></div>

        </div>
        <div id="ButtonEnroll3Display">
        <button className="ButtonEnroll3" onClick={()=>ButtonClick("https://t.me/Crnogorski_Casovi_Bot")} ><a href="https://t.me/Crnogorski_Casovi_Bot">Записаться</a></button> 
        </div>
        </div>

        <div className="WrapInside" ref={CommemtsAnchor}>
        <S.CommentsHeader><S.CommentHeaderText> <span>Отзывы</span></S.CommentHeaderText></S.CommentsHeader>  
        <S.NameStyle> <span> Cпринт 1</span></S.NameStyle>  
          <S.UlCommentStyle>
            <S.LiCommentStyle> <S.NameStyle>Мецензева Наталья</S.NameStyle> <S.TextCommentStyled>Переехала в начале года в Черногорию и столкнулась с почти нулевым пониманием местных. В чате города Цетине Елена Птицина начала собирать курс для начинающих. Зашла на сайт, увидела, что у нас будет русскоговорящая преподавательница, которая переехала в Черногорию ещё в детстве и училась в местной школе, и обещали практику с носителями языка, так что понадеялась на разнообразную практику. Так и вышло! С первого же занятия у меня получилось законнектиться с преподавателями, что сделало процесс гораздо приятнее и легче. Софья и Елена подходили к урокам с юмором, внимательно относились к каждому, кто был на занятии. По итогу я могу общаться на черногорском на простые темы, могу рассказать о себе, чем я занимаюсь, могу составить связный рассказ и чувствую себя гораздо увереннее на новом месте. У меня теперь есть структура и база в голове, которая позволяет гораздо проще воспринимать новую информацию по языку.</S.TextCommentStyled></S.LiCommentStyle>
            <S.LiCommentStyle> <S.NameStyle>Душин Григорий</S.NameStyle> <S.TextCommentStyled> Начальный курс по черногорскому языку оставил только положительное впечатление. Преподаватели продемонстрировали высокий профессионализм и терпимость, что сделало обучение эффективным и комфортным. Занятия проходили в дружеской атмосфере , содержание курса охватывало как базовые лингвистические навыки , так и культурные аспекты Черногории. В результате этого курса я приобрел не только языковые навыки и уверенность в общении, но и понимание культурного контекста. Я рекомендую этот курс всем, кто интересуется черногорским языком и стремится углубить свои знания о Черногории. </S.TextCommentStyled></S.LiCommentStyle>
  
          </S.UlCommentStyle> 
            <S.CommentsHeader><S.CommentHeaderText> <span>Спринт 2</span></S.CommentHeaderText></S.CommentsHeader> 
          <S.UlCommentStyle>
            <S.LiCommentStyle> <S.NameStyle>Шурыгин Александр</S.NameStyle> <S.TextCommentStyled> Елена проводит занятия в популярном среди ИТ формате спринтов - короткий курс, быстрый результат. Содержание самого начального уровня нацелено на слом языкового барьера самым коротким путем. Для тех, кто привык учить язык по учебнику, это покажется очень странным и не удобным, однако спустя пару недель в голове начинает прорисовываться вполне себе целостная картина. Регулярность встреч достаточно плотная, однако голова не успевает перетрудиться за счет коротких уроков (по 40 минут) и небольшого домашнего задания.
<p></p>Приятно, что контекст урока берется не из учебника, а из реальных ситуаций, с которыми релоканты сталкиваются каждый день - муп, банк, аренда жилья и продажа авто. Уроки без записи, но Елена делится своими материалами, по которым достаточно не сложно повторить пройденный материал.
Курсы стоит воспринимать как обязательную, но не единственную компоненту обучения, без самостоятельного творчества здесь не обойтись. </S.TextCommentStyled></S.LiCommentStyle>
 
            <S.LiCommentStyle> <S.NameStyle>Шадловский Борис</S.NameStyle> <S.TextCommentStyled> Сначала курс прошла моя жена, на следующий спринт подтянулся я, по совету жены. Понравилась четкая
система, все кубики встают на свои места. Занятия 4 раза в неделю - это эффективно, но на короткой
временной дистанции, два месяца - самое то, длиннее я бы не выдержал. В процессе курса я затопил
соседей, и мне пришлось объясняться. Слава богу, что это было уже после первой половины курса. А теперь
мы сдружились с этими залитыми соседями-черногорцами! В начале курса я мог понимать только самые
типовые фразы, если мне говорят ровно так, как я знаю. Сам почти не говорил. Сейчас я понимаю большую
часть того, что мне хотят сказать, если черногорцы не ускоряют нарочно речь, и сам что-то говорю соседям,
не только отвечаю “ага”, но и доношу какие-то свои мысли. Как старт в говорении по-черногорски - самое то!
Быстро и эффективно. </S.TextCommentStyled></S.LiCommentStyle>
<S.LiCommentStyle> <S.NameStyle>Юровских Дмитрий</S.NameStyle> <S.TextCommentStyled>Хочу поделиться своими впечатлениями и результатами от курсов Черногорского языка “Спринт А1” от Елены Птициной.
Я уже знал, наверное, до сотни слов на сербско-хорватском, однако совершенно не умел строить фразы, задавать вопросы и только слегка догадывался, как сделать прошедшее или будущее время. На данных курсах, очень ненапряжно и быстро я увеличил свой словарный запас до примерно 500 слов, научился говорить так, что бы черногорцы меня понимали и, самое главное, что бы я мог понимать, что мне говорят. После курсов я вполне сносно объяснился с полицейским (был длинный разговор в течение 3-х часов), спокойно прошел медосмотр на водительские права, стал понимать продавцов в магазине и на рынке, вполне спокойно звоню во всякие службы доставки и прочий сервисы, и могу объяснить, что мне нужно и понять, что мне делать, что бы  получить желаемое. Конечно, на том уровне, который я получил, взаимопонимание с черногорцами возможно, только если они хотят меня понять и хотят, чтобы я их понял. Но это уже немало. Зато, теперь, меня часто русскоговорящие люди принимают за черногорца, хотя я владею всего несколькими сотнями слов и имею чудовищный акцент.
В общем, если у вас стоит цель обрести уверенность в себе при общении с черногорцами, если вы хотите спокойно ходить на почту, в банк, в офис мобильного оператора, в МУП, пользоваться услугами автосервиса и т.п... Если вы хотите, что бы вас лучше обслуживали в магазине и на рынке, то я рекомендую эти курсы. 
Большое достоинство их, то, что можно заниматься он-лайн, в удобное время. Сами занятия занимают всего полтора часа в день (вместе с выполнением домашнего задания) четыре раза в неделю. Такой темп позволяет не забыть к середине курса, о чем шла речь в начале и иметь возможность сразу пользоваться полученными знаниями.
Сейчас подумываю пойти на следующий этап – A2. Если решу оставаться в Черногории, ну или где-то на Балканах, то обязательно пойду учиться дальше.
Кстати, оказалось, что после этого курса я могу вполне сносно читать даже по болгарски – у меня есть контрагенты в Болгарии и я уже не переключаю их веб сайты на английский язык, а читаю в оригинале...
Ах да, и цена! На мой взгляд, цена одна из самых низких из того, что можно найти тут... </S.TextCommentStyled></S.LiCommentStyle>


          </S.UlCommentStyle>
        </div>




        </div>
    </div>
  );

}

export default () => (

    <App />

);

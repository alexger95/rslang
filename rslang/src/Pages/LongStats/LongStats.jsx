import React from 'react';
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
import './longStats.scss';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { setSavannaStats } from '../../Store/Savanna/actions';
import { getCookie } from '../../Components/Tools/GetCoocke';

=======
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
// import showStats from '../../Store/Longs/actions';
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
import ProgressBar from 'react-bootstrap/ProgressBar';
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
import BtnsBar from './BtnsBar/BtnsBar';
import MiniStats from './MiniStats/MiniStats';

const miniGameStats = (store) => {
  const { minigameSavannaStats } = store.savanna;
  
  const { difficulty } = store.fortuneGame;
  return {
    minigameSavannaStats: minigameSavannaStats,
    difficulty: difficulty,
}}
=======
import './longStats.scss';
import BtnsBar from './BtnsBar/BtnsBar';
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js

<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
const changeMiniStats = {
  setSavannaStats,
=======
const miniGameStats = (store) => {
  const { newWordsCount } = store.appSettings;
  return {
    newWordsCount: newWordsCount,
}}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
}

// const token = getCookie("token");
// const userId = getCookie("userId");

const getStats = async () => {
  const rawResponse = await fetch(`https://afternoon-falls-25894.herokuapp.com/users/${getCookie("userId")}/statistics`, {
    method: 'GET',
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${getCookie("token")}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const content = await rawResponse.json();
  let stats = content.optional.optional;
  return stats;
};

const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">Изучено слов из словаря</div>
  )
}

<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
// const ShowTest = ({ count }) => {
//   return(
//     <p>{count}</p>
//   )
// }

=======
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
class LongStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
      wordsNow: 0,// Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
=======
      clicked: false,
      wordsNow: 0, // Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords),
>>>>>>> mini games BTNs:rslang/src/Pages/LongStats/LongStats.js
      labels: [], // props.dataLabels,
      datasets: [
        {
          label: 'Прогресс',
          borderColor: 'rgba(0,0,0,1)',
          backgroundColor: 'orange',
          borderWidth: 2,
          data: [] //...props.totalNewWords
        },
        {
          label: 'Слов изучено в день',
          borderColor: 'tomato',
          backgroundColor: 'tomato',
          data: [], //...props.dailyNew,
          fill: false,
        }
      ],
      items: [
        { 'id': 1, label: 'Аудио Вызов', 'visible': false },
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
        { 'id': 2, label: 'Спринт', 'visible': false },
        { 'id': 3, label: 'Саванна', 'visible': false },
        { 'id': 4, label: 'Паззл', 'visible': false },
        { 'id': 5, label: 'Скажи Слово', 'visible': false },
        { 'id': 6, label: 'Поле Чудес', 'visible': false },
      ],
<<<<<<< HEAD
=======

>>>>>>> mini stats test
      count: [
        {"timestamp":1593114322795,"newWords":7},
        {"timestamp":1593224622795,"newWords":2},
        {newWords: 4, timestamp: 1593375922795},
      ],
<<<<<<< HEAD
      
=======
>>>>>>> mini stats test
=======
        { 'id': 2, label: 'Паззлы', 'visible': false },
        { 'id': 3, label: 'Саванна', 'visible': false }
      ]
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
    }
    // this.count = 0;
  }

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = { ...arr[idx], [propName]: value };
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ]
  };

  showStats = (id) => {
    this.setState((state) => {
      const items = this.toggleProp(state.items, id, 'visible');
<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
      switch (id) {
        case 2 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
<<<<<<< HEAD
          state.count = this.state.count;
=======
          state.count = this.props.counter;
>>>>>>> mini stats test
          break;
        case 3: 
          console.log(`Clicked ${id} ${items[id-1].label} ${this.props.minigameSavannaStats}`); 
          break; 
        case 4 :
          console.log(`Clicked ${id} ${items[id-1].label}`);
          this.props.setSavannaStats([10,20,30]);
          console.log(`${this.props.minigameSavannaStats}`);
          break;  
        case 5 :
          state.count = (state.count).map(elem => elem.newWords + 2);
          break;
        case 6 : 
          console.log(`${id} ${items[id-1].label} ${this.props.difficulty}`);
          state.count = this.props.minigameSavannaStats;
          break;  
      }   
      return { items };  
=======
      console.log(`Clicked ${id} ${items[id-1].label} ${this.props.newWordsCount}`);
      return { items };
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js
    })
  }

  getSum(arr) {
    let prev = 0;
    return arr.map((elem) => {
      prev += elem;
      return prev;
    })
  }

  componentDidMount() {   
    this._asyncRequest = getStats().then(
      result => {
        const resultWords = result.wordStat.map((item) => {
          const elem = item.newWords;
          return elem;
        }); 
        const resultDate = result.wordStat.map((item) => {
          const date = new Date(item.timestamp).toString().slice(4, 15);
          return date;
        })
        this.state.datasets[0].data = this.getSum(resultWords);
        this.state.datasets[1].data = resultWords;
        this.state.labels = resultDate;
        this.state.wordsNow = Math.ceil((this.state.datasets[0].data[this.state.datasets[0].data.length-1] * 100) / this.props.totalWords);
        this._asyncRequest = null;
        this.setState({result});
      }
    );
  }

  
  render() {    
    const { items } = this.state;  
    return ( 
      <React.Fragment>
      <div className="graph longStatsElem col-md-9">
          <Line
            data={this.state}
            options={{
              title: {
                display: true,
                text: 'Все слова',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'bottom'
              },
              tooltips: {
                mode: 'index',
                intersect: true
              }
            }}
          />
        </div>
        <div className="longStatsElem row d-flex justify-content-center">
          <div className="col-md-8">
            <ProgressBar variant="success" min={0} now={this.state.wordsNow} label={`${this.state.wordsNow}%`} />
            <ProgressLabel />
           
            <div className="longStatsElem">
              <BtnsBar items={items} showStats={this.showStats} />
              <div className="longStatsElem-field">
              <MiniStats count={this.state.count} />
              </div>
            </div>     
            </div>     
        </div>
      </React.Fragment>
    );
  }
}

<<<<<<< HEAD:rslang/src/Pages/LongStats/LongStats.jsx
<<<<<<< HEAD
export default connect(miniGameStats, changeMiniStats)(LongStats);
=======
export default connect(miniGameStats, changeMiniStats)(LongStats);
>>>>>>> mini stats test
=======
export default connect(miniGameStats)(LongStats);
>>>>>>> fix:rslang/src/Pages/LongStats/LongStats.js

import React from 'react';
import {Line} from 'react-chartjs-2';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './longStats.scss';

const state = {
  labels: [],
  datasets: [
    {
      label: 'Прогресс',
      borderColor: 'rgba(0,0,0,1)',
      backgroundColor: 'orange',
      borderWidth: 2,
      data: []
    },
    {
      label: 'Слов изучено в день',
      borderColor: 'tomato',
      backgroundColor: 'tomato',
      data: [4, 2, 7, 5, 5, 2, 6, 5, 4, 5],
      fill: false,
    }
  ]
}

const ProgressLabel = () => {
  return (
    <div className="longStatsElem-label d-flex justify-content-center">Изучено слов из словаря</div>
  )
}

export default class LongStats extends React.Component {
  constructor(props) {
    super(props);
    this.wordsNow = Math.ceil((props.totalNewWords[props.totalNewWords.length - 1] * 100) / this.props.totalWords);
    this.dataLabels = props.dataLabels;
    state.labels = this.dataLabels;
    state.datasets[0].data = props.totalNewWords;
    console.log(this.totalWords, props.totalNewWords);
  }

  render() {      
<<<<<<< HEAD
    return (
      <div className="graph">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Всего слов',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
=======
    return ( 
      <div>
        <div className="graph longStatsElem">
          <Line
            data={state}
            // getElementAtEvent={dataset => console.log(dataset, dataset[0]._index)} // shows the dataset elements
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
          <div className="col-md-8 ">
            <ProgressBar variant="success" animated min={0} now={this.wordsNow} label={`${this.wordsNow}%`} />
            <ProgressLabel />
          </div>
        </div>
      </div>  
>>>>>>> feat: progress bar
    );
  }
 }
  

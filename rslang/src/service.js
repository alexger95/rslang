import React from 'react';

import { fetchAPI } from './Components/Tools/fetchAPI';
import { getWordsById } from './Components/Tools/userWordsApi';

export const filterOutDeletedWords = (words, userWords) => {
  const wordIds = userWords
    .filter((wordProps) => wordProps.value.optional.delete)
    .map((wordProps) => wordProps.value.wordId);
  return words.filter((word) => wordIds.includes(word.id));
}

export const addStandardUserWords = () => {
  fetchAPI("words", { page: 1, group: 1 }).then((standardUserWords) => {
    standardUserWords.map((obj) => createUserWordsById(obj.id));
  });
}

export const filterOutDifficultWords = (words, userWords) => {
  const wordIds = userWords
    .filter((wordProps) => wordProps.value.optional.hard)
    .map((wordProps) => wordProps.value.wordId);
  return words.filter((word) => wordIds.includes(word.id));
}

export const putUserWordsById = (wordId, hard, deleted, coefficient) => {
  const obj = {
    "hard": hard ? hard : false,
    "delete": deleted ? deleted : false,
    "coefficient": coefficient ? coefficient : 1, 
}
  fetchAPI('updateUserWordsById', obj, wordId).then(() => console.log("wordId ", wordId, "re-write"))
}

export const updateUserWordsById = (wordId, hard, deleted, coefficient) => {
  const obj = {
    "hard": hard ? hard : false,
    "delete": deleted ? deleted : false,
    "coefficient": coefficient ? coefficient : 1, 
}
  fetchAPI('updateUserWordsById', obj, wordId).then(() => console.log("wordId ", wordId, "re-write"))
}

export const createUserWordsById = (wordId, hard = false, deleted = false, coefficient = 1) => {
  const obj = {
    "hard": hard,
    "delete": deleted,
    "coefficient": coefficient, 
}
  fetchAPI('createUserWordsById', obj, wordId).then(() => console.log("wordId ", wordId, "re-write"))
}

export const getRandomPage = (max) => Math.floor(Math.random() * Math.floor(max));

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const getUserWordsById = (array) => {
  const promise = [];
  for (let i = 0; i < array.length; i += 1) {
    promise.push(getWordsById(array[i].value.wordId));
  }
  return Promise.allSettled(promise).then((wordLists) => wordLists.flatMap((wordList) => wordList.value));
}

export const getWords = (group, numberOfWords) => {
  const wordsToGet = Math.min(numberOfWords, 600);
  const count = Math.ceil(wordsToGet / 20);
  const proms = [];

  for (let i = 0; i < count; i += 1) {
    proms.push(fetch(`https://afternoon-falls-25894.herokuapp.com/words?group=${group}&page=${ getRandomPage(20) }`).then((res) => res.json()));
  }
  return Promise.allSettled(proms).then((wordLists) => wordLists.flatMap((wordList) => wordList.value).slice(0, numberOfWords));
}

export const imageRender = (src) => {
  return `https://raw.githubusercontent.com/krukovich/rslang-data/master/${src}`;
}

export const playExampleSound = (src) => {
  const myAudio = new Audio();
  myAudio.src = `https://raw.githubusercontent.com/krukovich/rslang-data/master/${src}`;
  myAudio.play();
}

export const playAudio = (src) => {
  const myAudio = new Audio();
  myAudio.src = `../${src}`;
  myAudio.play();
}

export const renderPlayString = (data, handlerChange) => {
  const regexp = /<b>([^<]+)<\/b>/;
  const word = data.textExample.match(regexp)[1];
  const inputStyle = { width: `${word.length}0px` };
  const input =
    <span className="pl-1" key={data.id}>
      <input
        className="WordInput"
        type="text"
        autoFocus
        onChange={handlerChange}
        maxLength={word.length}
        style={inputStyle}
      />
    </span>
  const parts = data.textExample.split(regexp).map((part) => <span key={part} className="pl-1">{part}</span>)
  parts.splice(1, 1, input);
  return parts;
}

export const checkDeleteWords = (array, w) => {
  return array.find((word) => word.word === w);
}

export const saveWordsInLocalStorage = (startWords) => {
  localStorage.setItem('startWords', JSON.stringify(startWords));
}

export const checkString = (agreeString) => {
  const list = [...document.querySelectorAll('.word')];
  const agree = [];
  const playStringArray = list.map((li) => li.innerText);
  const agreeStringArray = agreeString.split(' ');
  agreeStringArray.forEach((word, index) => {
    if (playStringArray.indexOf(word) !== index) {
      list[index].classList.remove('btn-danger', 'btn-success')
      list[index].classList.add('btn-danger');
      agree.push(false);
    } else {
      list[index].classList.remove('btn-danger', 'btn-success')
      list[index].classList.add('btn-success');
      playStringArray[index] = null;
      agree.push(true);
    }
  });
  return agree.every((item) => item === true);
}

export const colorLevelPoint = (movePoint, agreeAnswer) => {
  const levelList = [...document.querySelectorAll('.level-point')];
  if (agreeAnswer) {
    levelList.forEach((span) => {
      if (+span.innerHTML === movePoint + 1) {
        span.classList.remove('badge-secondary', 'badge-danger');
        span.classList.add('badge-success');
      }
    });
  } else {
    levelList.forEach((span) => {
      if (+span.innerHTML === movePoint + 1) {
        span.classList.remove('badge-secondary', 'badge-success');
        span.classList.add('badge-danger');
      }
    });
  }
}

export const getData = async (group, page) => {
  const prepareList = [];
  const maxLength = 10;
  const maxPage = 20;

  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group - 1}&page=${page}`;
  const res = await fetch(url);
  const words = await res.json();
  prepareList.push(...sortData(words));

  if (prepareList.length < maxLength) {
    const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${group - 1}&page=${getRandomPage(maxPage)}`;
    const res = await fetch(url);
    const words = await res.json();
    prepareList.push(...sortData(words));
  }
  return prepareList.slice(0, maxLength);
}

export const moveImageMask = (point) => {
  const mask = document.querySelector(".mask-image");
  if (point < 0) {
    mask.style.transform = `translateY(0)`;
  } else {
    mask.style.transform = `translateY(${point}0%)`;
  }
}

export const removeColorLevelPoint = () => {
  const levelList = [...document.querySelectorAll('.level-point')];
  levelList.forEach((span) => {
    span.classList.remove('badge-success', 'badge-danger');
    span.classList.add('badge-secondary');
  });
}

export const removeColorOnWord = () => {
  const list = [...document.querySelectorAll('.word')];
  list.forEach((li) => li.classList.remove('btn-danger', 'btn-success'));
}

export const shuffleString = (str) => {
  return str.split(' ').filter(word => word).reduce((a, e) => (a.splice(Math.random() * (a.length + 1), 0, e), a), []).join(' ');
}

export const sortData = (words) => {
  const regexp = /<[^<>]+>/g;
  const newArray = [];
  const maxLength = 10;
  for (let i = 0; i < words.length; i += 1) {
    const data = {};
    data.string = words[i].textExample.replace(regexp, '');
    if (data.string.split(' ').length > maxLength) {
      continue;
    } else {
      data.stringTranslate = words[i].textExampleTranslate;
      data.sound = words[i].audioExample;
    }
    newArray.push(data);
  }
  return newArray;
}

export const removeTagsFromString = (str) => {
  const regexp = /<[^<>]+>/g;
  const newStr = str.replace(regexp, '');
  return newStr
}

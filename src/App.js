import './App.css';
import './components/Header';
import Diary from './components/Diary';
import Header from './components/Header';
import History from './components/History';
import Calendar from './components/Calendar';

import React, { useState, useRef } from 'react';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  //새로운 일기 추가하는 함수
  const onCreate = (date, rating, content) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      created_date,
      rating,
      content,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div>
      <Header></Header>
      <div id="main">
        <div id="left">
          <Calendar></Calendar>
          <History></History>
        </div>
        <Diary onCreate={onCreate} />
      </div>
    </div>
  );
}

export default App;

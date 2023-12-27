import './Calendar.css';
import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Calendar({ myData }) {
  console.log(myData);
  const [startDate, setStartDate] = useState(new Date());
  const dateFormat = 'yyyy-MM-dd';

  const historyRef = useRef(null);

  const [percent, setPercent] = useState();
  const [content, setContent] = useState();

  const DateToString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  //일기가 기록된 날짜들 하이라이트
  let highlight = [];
  myData.forEach((item) => {
    highlight.push(new Date(item.date));
  });

  //날짜 클릭 시 해당 날짜에 해당하는 일기가 있는지 확인하고 표시하는 함수
  const setHistory = (date) => {
    console.log(date);
    console.log(DateToString(date));

    const stringDate = DateToString(date);
    const checkItem = myData.find((item) => item.date === stringDate);

    console.log(checkItem);

    if (checkItem) {
      setPercent(checkItem.rating);
      setContent(checkItem.content);
      historyRef.current.style.visibility = 'visible';
    } else {
      historyRef.current.style.visibility = 'hidden';
    }
  };

  return (
    <div>
      <div id="container">
        <DatePicker
          selected={startDate}
          dateFormat={dateFormat}
          calendarClassName="calendar"
          onChange={(date) => {
            setStartDate(date);
            setHistory(date);
          }}
          inline
          highlightDates={highlight}
        />
      </div>
      <div id="history" ref={historyRef}>
        <div
          id="percent"
          style={{ color: percent >= 50 ? '#e62677' : '#ffa4b3' }}
        >
          행복지수 : {percent}%
        </div>
        <div id="content">{content}</div>
      </div>
    </div>
  );
}

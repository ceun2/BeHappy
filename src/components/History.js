import './History.css';
import React, { useState } from 'react';

const History = (props) => {
  const [percent, setPercent] = useState('98');
  const [content, setContent] = useState('어쩌구저쩌구');

  return (
    <div id="history">
      <div id="percent">행복지수 : {percent}%</div>
      <div id="content">{content}</div>
    </div>
  );
};

export default History;

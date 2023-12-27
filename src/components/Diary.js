import { useState, useRef } from 'react';
import './Diary.css';

const Diary = ({ onCreate }) => {
  //기록하기 버튼을 눌렀을 때 데이터의 아이템을 추가하는 역할
  const dateInput = useRef();
  const ratingInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    date: '',
    rating: 0,
    content: '',
  });

  //폼 입력값 처리
  const handleChangeState = (e) => {
    const value =
      e.target.name === 'rating'
        ? parseInt(e.target.value, 10)
        : e.target.value;

    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(state.date, state.rating, state.content);
    setState({
      date: '',
      rating: 0,
      content: '',
    });
  };
  return (
    <div id="diary">
      <form>
        <input
          type="date"
          ref={dateInput}
          name="date"
          value={state.date}
          onChange={handleChangeState}
        />
        <div style={{ marginTop: '20px' }}>
          행복 지수를 퍼센트로 입력하세요!
        </div>
        <input
          id="rating"
          ref={ratingInput}
          name="rating"
          value={state.rating}
          onChange={handleChangeState}
        />
        <div style={{ marginTop: '40px' }}>오늘의 일기</div>
        <textarea
          id="write"
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
        <button onClick={handleSubmit}>기록하기</button>
      </form>
    </div>
  );
};

export default Diary;

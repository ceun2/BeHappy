import './Diary.css';

const Diary = () => {
  return (
    <div id="diary">
      <form>
        <input type="date" />
        <div style={{ marginTop: '20px' }}>
          행복 지수를 퍼센트로 입력하세요!
        </div>
        <input id="rating"></input>
        <textarea id="write"></textarea>
        <button type="submit">기록하기</button>
      </form>
    </div>
  );
};

export default Diary;

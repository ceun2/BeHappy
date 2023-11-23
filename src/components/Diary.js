import './Diary.css';

const Diary = () => {
  return (
    <div id="diary">
      <form>
        <input type="date" />
        <div id="star"></div>
        <textarea id="write"></textarea>
        <button type="submit">기록하기</button>
      </form>
    </div>
  );
};

export default Diary;

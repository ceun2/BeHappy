function Rating(max = 5, size = 30) {
  return (
    <div>
      {Array.from({ length: max }, (_, i) => (
        <Star key={i} size={size} />
      ))}
    </div>
  );
}

function Star({ size }) {
  const starStyle = {
    display: 'inline-block', // 변경된 부분
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <span style={starStyle}>
      <img src="./blank_star.png" alt="star" />
    </span>
  );
}

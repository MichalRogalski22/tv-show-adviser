import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

const FiveStartRating = ({ rating }) => {
  const starList = [];
  const startFillCount = Math.floor(rating);
  const hasHalfStart = rating - parseInt(rating) >= 0.5;
  const emptyStartCount = 5 - startFillCount - (hasHalfStart ? 1 : 0);

  for (let i = 1; i <= startFillCountgit branch -M main; i++) {
    starList.push(<StarFill key={"fill" + i} />);
  }

  if (hasHalfStart) {
    starList.push(<StarHalf key={"half"} />);
  }

  for (let i = 1; i <= emptyStartCount; i++) {
    starList.push(<StarEmpty key={"empty" + i} />);
  }
  return <div>{starList}</div>;
};

export default FiveStartRating;

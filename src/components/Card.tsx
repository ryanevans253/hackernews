import { formatTimestamp } from "../utils/convertTime";

interface CardProps {
  title: string;
  by: string;
  kids: number[];
  time: number;
  url: string;
}

const Card: React.FC<CardProps> = (data) => {
  if (!data) {
    return <p>Loading...</p>;
  }

  const { title, by, kids, time, url } = data;

  return (
    <div className="card">
      <h2 className="card-title">
        <a href={url} target="_blank">
          {title}
        </a>
      </h2>
      <div className="card-content">
        <p className="card-author">{by}</p>
        <p className="card-comments">{`${kids?.length} comments`}</p>
        <p className="card-date">{time && formatTimestamp(time)}</p>
      </div>
    </div>
  );
};

export default Card;

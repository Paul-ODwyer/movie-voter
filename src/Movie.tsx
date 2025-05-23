// Movie.tsx
import Button from "./Button";
import { useState } from "react";
import "./Movie.css";

type MovieProps = {
  title: string;
};

const Movie: React.FC<MovieProps> = ({ title }) => {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <section className="movie">
      <h2>{title}</h2>
      <p>Number of votes: {votes}</p>
      <section className="voting-buttons">
        <Button title="-1" handleClick={handleDownvote} />
        <Button title="+1" handleClick={handleUpvote} />
      </section>
    </section>
  );
};

export default Movie;

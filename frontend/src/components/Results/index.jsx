import propTypes from "prop-types";
import SResults from "./style";

export default function Results({ round, playerName }) {
  return (
    <SResults>
      <div className="date">
        {" "}
        Point {round} : remporté par {playerName}
      </div>
    </SResults>
  );
}

Results.propTypes = {
  round: propTypes.number.isRequired,
  playerName: propTypes.string.isRequired,
};

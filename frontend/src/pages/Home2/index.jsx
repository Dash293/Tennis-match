import { useState } from "react";
import SHome2 from "./style";

function Home2() {
  const [player, setPlayer] = useState({
    player1: "",
    levelPlayer1: 0,
    player2: "",
    levelPlayer2: 0,
    scores: [],
  });
  const hChangeFormData = (evt) => {
    const newData = { ...player };
    newData[evt.target.name] = evt.target.value;
    newData[evt.target.name] = evt.target.value;
    setPlayer(newData);
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    const play = { ...player };
    const scores = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 150; i++) {
      scores.push(
        Math.random() * player.levelPlayer1 >
          Math.random() * player.levelPlayer2
          ? player.player1
          : player.player2
      );
    }
    play.scores = scores;
    setPlayer(play);
  };

  return (
    <SHome2>
      <div className="Home">
        <form className="registerForm" onSubmit={hSubmit}>
          <input
            className="inputForm"
            type="text"
            name="player1"
            placeholder="joueur 1"
            onChange={hChangeFormData}
          />
          <select
            name="levelPlayer1"
            className="pet-select"
            onChange={hChangeFormData}
          >
            <option value="levelPlayer1">niveau</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input
            className="inputForm"
            type="text"
            name="player2"
            placeholder="joueur 2"
            onChange={hChangeFormData}
          />
          <select
            name="levelPlayer2"
            className="pet-select"
            onChange={hChangeFormData}
          >
            <option value="levelPlayer2">niveau</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button type="submit" className="button">
            Commencez la partie
          </button>
        </form>
        MARCHE PAAS
        <ul>
          <li>
            {player.scores.map((result, round) => {
              return `Point ${round + 1} remporté par : ${result}`;
            })}
          </li>
        </ul>
      </div>
    </SHome2>
  );
}

export default Home2;

import Style from "./style";

export default function Home() {
  return (
    <Style>
      <form>
        <div className="select-players">
          <div className="player1">
            <div className="name-player1">
              <label htmlFor="player1">Nom joueur 1</label>
              <input type="text" id="player1" placeholder="Exemple : Novak" />
            </div>
            <div className="select-level-player1">
              <label htmlFor="level-player1">Niveau joueur 1</label>
              <select name="level1" id="level-player1">
                <option value="1">Niveau 1</option>
                <option value="2">Niveau 2</option>
                <option value="3">Niveau 3</option>
                <option value="4">Niveau 4</option>
                <option value="5">Niveau 5</option>
                <option value="6">Niveau 6</option>
                <option value="7">Niveau 7</option>
                <option value="8">Niveau 8</option>
                <option value="9">Niveau 9</option>
                <option value="10">Niveau 10</option>
              </select>
            </div>
          </div>
          <div className="player2">
            <div className="name-player2">
              <label htmlFor="player2">Nom joueur 2</label>
              <input type="text" id="player2" placeholder="Exemple : Rafael" />
            </div>
            <div className="select-level-player2">
              <label htmlFor="level-player2">Niveau joueur 2</label>
              <select name="level2" id="level-player2">
                <option value="1">Niveau 1</option>
                <option value="2">Niveau 2</option>
                <option value="3">Niveau 3</option>
                <option value="4">Niveau 4</option>
                <option value="5">Niveau 5</option>
                <option value="6">Niveau 6</option>
                <option value="7">Niveau 7</option>
                <option value="8">Niveau 8</option>
                <option value="9">Niveau 9</option>
                <option value="10">Niveau 10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="start-game">
          <input type="submit" value="Commencer le match" />
        </div>
      </form>
    </Style>
  );
}

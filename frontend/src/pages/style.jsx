import styled from "styled-components";

export default styled.section`
  form {
    margin-top: 3rem;
  }
  .select-players {
    display: flex;
    justify-content: space-between;
  }
  .player1,
  .player2 {
    margin-bottom: 1rem;
  }
  .name-player1,
  .name-player2 {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
  }
  .select-level-player1,
  .select-level-player2 {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 0.2rem;
  }
  .start-game {
    display: flex;
    justify-content: center;
  }
  input[type="submit"] {
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

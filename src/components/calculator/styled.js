import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  min-width: 280px;
  min-height: 480px;
  max-width: 280px;
  max-height: 480px;
  background-color: black;
  border-radius: 30px;
  .fullDiv {
    margin: 0px 10px 0px 22px;
  }
  .allCharacters {
    font-weight: bolder;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .allCharacters > button {
    background-color: #303030;
  }

  .allCharacters > button:nth-child(1),
  .allCharacters > button:nth-child(2),
  .allCharacters > button:nth-child(3) {
    color: black;
    background-color: #9d9d9d;
  }

  .allCharacters > button:nth-child(17) {
    width: 117px;
    border-radius: 30px;
  }

  .allCharacters > button:nth-child(4),
  .allCharacters > button:nth-child(8),
  .allCharacters > button:nth-child(12),
  .allCharacters > button:nth-child(16),
  .allCharacters > button:nth-child(19) {
    background-color: #f59906;
  }
`;

import { useContext } from "react";
import { ResultContext } from "../../providers/results";
import ButtonsCalculator from "../buttons";
import Results from "../resultsComponent";
import { Container } from "./styled";

const Calculator = () => {
  const númericCharacters = [
    "AC",
    "+/-",
    "%",
    "÷",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ",",
    "=",
  ];

  return (
    <Container>
      <div className="fullDiv">
        <Results />
        <div className="allCharacters">
          {númericCharacters.map((character, index) => (
            <ButtonsCalculator
              key={index}
              character={character}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Calculator;

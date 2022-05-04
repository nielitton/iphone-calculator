import { useContext, useEffect } from "react";
import { ResultContext } from "../../providers/results";
import { Container } from "./styled";

const ButtonsCalculator = ({ character }) => {
  const { setValue, value, results, setResults } = useContext(ResultContext);

  useEffect(() => {
    const newValue = [...results, value];
    return setResults(newValue);
  }, [value]);

  return <Container onClick={() => setValue(character)}>{character}</Container>;
};

export default ButtonsCalculator;

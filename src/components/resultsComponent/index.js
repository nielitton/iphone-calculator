import { useContext } from "react";
import { ResultContext } from "../../providers/results";
import { Container } from "./styled";

const Results = () => {
  const { results } = useContext(ResultContext);

  return (
    <Container>
      <div>{results}</div>
    </Container>
  );
};

export default Results;

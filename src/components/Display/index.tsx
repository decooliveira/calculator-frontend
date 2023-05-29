import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import { Container, Input } from "./styles";

export const Display = () => {
  const { operation } = useContext(CalculatorContext);

  const toLocaleString = (num: string) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

  const content = operation.num
    ? toLocaleString(String(operation.num))
    : toLocaleString(String(operation.result));

  return (
    <Container>
      <Input
        type="text"
        maxLength={5}
        value={content}
        length={content.length}
        onChange={() => {
          return;
        }}
      />
    </Container>
  );
};

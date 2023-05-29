import { InputNumberContainer } from './styles';

interface InputNumberProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: number;
  min?: number;
  max: number;
}
export const InputNumber = ({
  value,
  onChange,
  min = 1,
  max,
  step = 5,
}: InputNumberProps) => {
  return (
    <InputNumberContainer
      type="number"
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

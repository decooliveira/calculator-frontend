import { LCDDisplay } from './styles';

interface DisplayProps {
  value: string | number;
}

export const Display = ({ value }: DisplayProps) => {
  return <LCDDisplay value={value} max={70} readOnly></LCDDisplay>;
};

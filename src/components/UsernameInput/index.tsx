import { InputWrapper } from '../InputWrapper';
import { EnvelopeIcon, Username } from './styles';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UsernameInput = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputWrapper>
      <EnvelopeIcon />
      <Username placeholder={placeholder} value={value} onChange={onChange} />
    </InputWrapper>
  );
};

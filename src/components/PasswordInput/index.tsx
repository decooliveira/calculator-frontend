import { InputWrapper } from '../InputWrapper';
import { LockIcon, Password } from './styles';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const PasswordInput = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputWrapper>
      <LockIcon />
      <Password
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="password"
      />
    </InputWrapper>
  );
};

import { InputWrapper } from '../InputWrapper';
import { LockIcon, Password } from './styles';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};
export const PasswordInput = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}: Props) => {
  return (
    <InputWrapper>
      <LockIcon />
      <Password
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="password"
      />
    </InputWrapper>
  );
};

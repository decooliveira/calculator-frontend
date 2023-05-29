import { SearchBarInput, SearchBarWrapper } from './styles';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export const SearchBar = ({ value, placeholder, onChange }: SearchBarProps) => {
  return (
    <SearchBarWrapper>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </SearchBarWrapper>
  );
};

import { InputLabel } from '../InputLabel';
import { InputNumber } from '../InputNumber';
import {
  Checkbox,
  FormButton,
  PageControlsContainer,
  SelectOperation,
  SelectOperationOption,
} from './styles';

interface Props {
  operationSelected: string;
  pageSize: number;
  includeDeleted: boolean;
  handleIncludeDeleted: () => void;
  handleOperationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePageSize: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetAllFilters: () => void;
}

export const PaginationControls = ({
  operationSelected,
  pageSize,
  includeDeleted,
  handleIncludeDeleted,
  handleOperationChange,
  handlePageSize,
  resetAllFilters,
}: Props) => {
  const operations = [
    { value: '', text: 'All operations' },
    { value: 'addition', text: 'Addition' },
    { value: 'subtraction', text: 'Subtraction' },
    { value: 'multiplication', text: 'Multiplication' },
    { value: 'division', text: 'Division' },
    { value: 'square_root', text: 'Square Root' },
    { value: 'random_string', text: 'Random String' },
  ];
  return (
    <PageControlsContainer>
      <InputLabel>
        <span>Filtered by:</span>
        <SelectOperation
          value={operationSelected}
          onChange={handleOperationChange}
        >
          {operations.map((option) => (
            <SelectOperationOption key={option.value} value={option.value}>
              {option.text}
            </SelectOperationOption>
          ))}
        </SelectOperation>
      </InputLabel>
      <InputLabel>
        <span>Records per page:</span>
        <InputNumber
          step={5}
          min={5}
          max={20}
          value={pageSize}
          onChange={(e) => handlePageSize(e)}
        />
      </InputLabel>

      <InputLabel>
        <Checkbox
          type="checkbox"
          checked={includeDeleted}
          onChange={handleIncludeDeleted}
          aria-label="include"
        />
        <span>Include deleted records</span>
      </InputLabel>

      <FormButton onClick={resetAllFilters}>Reset all filters</FormButton>
    </PageControlsContainer>
  );
};

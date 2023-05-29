import { InputNumber } from '../InputNumber';
import {
  Highlight,
  JumpWrapper,
  PageButtonsBar,
  PaginationButton,
  PaginationContainer,
  Summary,
} from './styles';

interface PageData {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
}
interface Props {
  data: PageData;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handleCurrentPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPage: (page: number) => void;
}

export const Pagination = ({
  data,
  handlePreviousPage,
  handleNextPage,
  handleCurrentPage,
  setPage,
}: Props) => {

  const getPageRange = () => {
    const range = [];
    let startPage;
    let endPage;

    if (data.totalPages <= 5) {
      startPage = 1;
      endPage = data.totalPages;
    } else {
      if (data.currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (data.currentPage + 1 >= data.totalPages) {
        startPage = data.totalPages - 4;
        endPage = data.totalPages;
      } else {
        startPage = data.currentPage - 2;
        endPage = data.currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  };
    
  return (
    <PaginationContainer>
      <Summary>
        <Highlight>{data.totalRecords}</Highlight> records in{' '}
        <Highlight>{data.totalPages}</Highlight> pages
      </Summary>
      <PageButtonsBar>
        {data.currentPage > 1 && (
          <PaginationButton onClick={handlePreviousPage}>
            &lt; Previous
          </PaginationButton>
        )}
        {getPageRange().map((page) => (
          <PaginationButton
            key={page}
            active={page === data.currentPage}
            onClick={() => setPage(page)}
          >
            {page}
          </PaginationButton>
        ))}
        {data.currentPage < data.totalPages && (
          <PaginationButton onClick={handleNextPage}>
            Next &gt;
          </PaginationButton>
        )}
      </PageButtonsBar>
      <JumpWrapper>
        <span>Or jump to page:</span>
        <InputNumber
          step={1}
          min={1}
          max={data.totalPages}
          value={data.currentPage}
          onChange={handleCurrentPage}
        />
      </JumpWrapper>
    </PaginationContainer>
  );
};

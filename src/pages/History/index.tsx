/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { HistoryContainer, InputWrapper } from './styles';
import { useAuthContext } from '../../contexts/AuthContext';
import { Api } from '../../utils/Api';
import { SearchBar } from '../../components/SearchBar';
import { RecordsList } from '../../components/RecordsList';
import { Pagination } from '../../components/Pagination';
import { PaginationControls } from '../../components/PaginationControls';
type Record = {
  id: string;
  operationType: string;
  operationResult: string;
  createdAt: string;
  isDeleted: boolean;
};

export function History() {
  const { user } = useAuthContext();

  const DEFAULT_PAGE_SIZE = 5;
  const INITIAL_PAGE = 1;
  const [paginatedRecords, setPaginatedRecords] = useState<Record[]>([]);

  const [searchKeyword, setSearchKeyword] = useState('');

  const [isAscending, setIsAscending] = useState<boolean>(false);
  const [sortByField, setSortByField] = useState<
    'date' | 'operation' | 'result'
  >('date');
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const [includeDeleted, setIncludeDeleted] = useState<boolean>(false);
  const [operationSelected, setOperationSelected] = useState<string>('');

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOperationSelected(e.target.value);
  };

  const handleIncludeDeleted = () => {
    setIncludeDeleted((previousState) => !previousState);
  };

  const handleOrderBy = (field: 'date' | 'operation' | 'result') => {
    setIsAscending((previouState) => !previouState);
    setSortByField(field);
  };

  const handlePageSize = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newPageSize = Number(e.target.value);
    setPageSize(newPageSize);
  };

  const handleCurrentPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let page = Number(e.target.value);
    if (page > totalPages) {
      page = totalPages;
    } else if (page < 1) {
      page = 1;
    }
    setCurrentPage(page);
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  const loadRecords = async (): Promise<Record[]> => {
    try {
      const direction = isAscending ? 'asc' : 'desc';
      let uri = `records?pageSize=${pageSize}&page=${currentPage}&sortBy=${sortByField}&direction=${direction}`;
      if (includeDeleted) {
        uri = uri.concat(`&includeDeleted=${includeDeleted}`);
      }
      if (operationSelected) {
        uri = uri.concat(`&operation=${operationSelected}`);
      }

      const response = await Api.get({
        endpoint: uri,
        token: user.token,
      });
      const { records, total, pages } = response.data.result;
      setTotalRecords(total);
      setTotalPages(pages);
      setPaginatedRecords(records);
    } catch (error) {
      console.error(error);
    }

    return [];
  };

  useEffect(() => {
    if (user.token) {
      loadRecords();
    }
  }, [
    user.token,
    pageSize,
    currentPage,
    includeDeleted,
    isAscending,
    sortByField,
    operationSelected,
  ]);

  const resetAllFilters = () => {
    setPageSize(DEFAULT_PAGE_SIZE);
    setCurrentPage(INITIAL_PAGE);
    setIncludeDeleted(false);
    setIsAscending(false);
    setSortByField('date');
    setOperationSelected('');
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword) {
      setSearchKeyword(keyword);

      const filteredRecords = paginatedRecords.filter((record) => {
        if (
          record.operationType.toLowerCase().includes(keyword.toLowerCase())
        ) {
          return record;
        } else if (
          record.operationResult.toLowerCase().includes(keyword.toLowerCase())
        ) {
          return record;
        }
      });

      setPaginatedRecords(filteredRecords);

      setCurrentPage(1);
    } else {
      setSearchKeyword('');

      loadRecords();
    }
  };

  return (
    <HistoryContainer>
      <h1>Operation records</h1>

      <SearchBar
        placeholder="Search by operation type or result"
        value={searchKeyword}
        onChange={handleSearch}
      />

      <PaginationControls
        includeDeleted={includeDeleted}
        pageSize={pageSize}
        operationSelected={operationSelected}
        handleIncludeDeleted={handleIncludeDeleted}
        handleOperationChange={handleOperationChange}
        handlePageSize={handlePageSize}
        resetAllFilters={resetAllFilters}
      />
      <RecordsList
        handleOrderBy={handleOrderBy}
        loadRecords={loadRecords}
        paginatedRecords={paginatedRecords}
        isAscending={isAscending}
      />
      {!searchKeyword && (
        <InputWrapper>
          <Pagination
            data={{
              totalRecords,
              totalPages,
              currentPage,
            }}
            handleCurrentPage={handleCurrentPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            setPage={setPage}
          />
        </InputWrapper>
      )}
    </HistoryContainer>
  );
}

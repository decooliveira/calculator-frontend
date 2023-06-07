import { useAuthContext } from '../../contexts/AuthContext';
import { Api } from '../../utils/Api';
import { DirectionIcon } from '../DirectionIcon';
import { Head, RecordsTable, TrashIcon } from './styles';
import { format } from 'date-fns';

interface Record {
  id: string;
  operationType: string;
  operationResult: string;
  createdAt: string;
  isDeleted: boolean;
}

interface Props {
  paginatedRecords: Record[];
  loadRecords: () => void;
  handleOrderBy: (field: 'date' | 'operation' | 'result') => void;
  isAscending: boolean;
}

export const RecordsList = ({
  paginatedRecords,
  loadRecords,
  handleOrderBy,
  isAscending,
}: Props) => {
  const { user } = useAuthContext();

  const formatOperationLabel = (operationName: string): string => {
    if (operationName.includes('square_root')) {
      return 'Square Root';
    } else if (operationName.includes('random_string')) {
      return 'Random String';
    }
    return operationName;
  };

  const deleteRecord = async (id: string): Promise<void> => {
    const uri = `records/${id}`;
    const response = await Api.delete({
      endpoint: uri,
      token: user.token,
    });
    loadRecords();
    return response.data;
  };

  return (
    <RecordsTable>
      <table>
        <thead>
          <tr>
            <th>
              <Head onClick={() => handleOrderBy('operation')}>
                <DirectionIcon isAscending={isAscending} />
                Type
              </Head>
            </th>
            <th>
              <Head onClick={() => handleOrderBy('result')}>
                <DirectionIcon isAscending={isAscending} />
                Result
              </Head>
            </th>
            <th>
              <Head onClick={() => handleOrderBy('date')}>
                <DirectionIcon isAscending={isAscending} />
                Date
              </Head>
            </th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRecords.map((record) => {
            return (
              <tr key={record.id}>
                <td>
                  {formatOperationLabel(record.operationType).toUpperCase()}
                </td>
                <td>{record.operationResult}</td>
                <td>
                  {format(new Date(record.createdAt), 'MMM, dd yyyy.  h:mm a ')}
                </td>
                <td>
                  <TrashIcon
                    onClick={() => deleteRecord(record.id)}
                    aria-disabled={record.isDeleted ? true : false}
                    opacity={record.isDeleted ? 0.2 : 1.0}
                    cursor={record.isDeleted ? 'not-allowed' : 'pointer'}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </RecordsTable>
  );
};

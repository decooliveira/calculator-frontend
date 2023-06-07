import { AxiosError } from 'axios';
import { MathOperationRequest } from '../@types/interfaces/MathOperationRequest';
import { MathOperationResponse } from '../@types/interfaces/MathOperationResponse';
import { StringOperationRequest } from '../@types/interfaces/StringOperationRequest';
import { StringOperationResponse } from '../@types/interfaces/StringOperationResponse';
import { Api } from './Api';

class OperationsService {
  constructor(private token: string) {}

  performMathOperations = async ({
    a,
    b,
    operation: operation,
  }: MathOperationRequest): Promise<MathOperationResponse> => {
    try {
      const result = await Api.post({
        endpoint: `math-operations?perform=${operation}`,
        payload: { a, b },
        token: this.token,
      });

      return result.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { message } = error.response.data;
        return { result: message };
      } else {
        return { result: 'Oops, error. Try again!' };
      }
    }
  };

  performStringOperations = async ({
    operation,
  }: StringOperationRequest): Promise<StringOperationResponse> => {
    try {
      const result = await Api.post({
        endpoint: `string-operations?perform=${operation}`,
        token: this.token,
      });

      return result.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { message } = error.response.data;
        return { result: message, balance: 0 };
      } else {
        return { result: 'Oops, error. Try again!', balance: 0 };
      }
    }
  };
}
export { OperationsService };

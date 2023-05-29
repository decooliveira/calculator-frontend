import { Api } from './Api';
import { OperationsService } from './OperationsService';

// Mock Api.post method
jest.mock('./Api', () => ({
  Api: {
    post: jest.fn(),
  },
}));

describe('OperationsService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('performs math operations correctly', async () => {
    const token = 'test-token';
    const service = new OperationsService(token);
    const operationRequest = {
      a: 5,
      b: 7,
      operation: 'addition',
    };
    const operationResponse = {
      result: 12,
      message: 'Operation successful',
    };

    // Mock the Api.post method
    Api.post = jest.fn().mockResolvedValue({ data: operationResponse });

    // Perform the math operation
    const result = await service.performMathOperations(operationRequest);

    // Assertions
    expect(Api.post).toHaveBeenCalledWith({
      endpoint: 'math-operations?perform=addition',
      payload: { a: 5, b: 7 },
      token: token,
    });
    expect(result).toEqual(operationResponse);
  });

  test('performs string operations correctly', async () => {
    const token = 'test-token';
    const service = new OperationsService(token);
    const operationRequest = {
      operation: 'random-string',
    };
    const operationResponse = {
      result: 'ABC123',
      message: 'Operation successful',
    };

    // Mock the Api.post method
    Api.post = jest.fn().mockResolvedValue({ data: operationResponse });

    // Perform the string operation
    const result = await service.performStringOperations(operationRequest);

    // Assertions
    expect(Api.post).toHaveBeenCalledWith({
      endpoint: 'string-operations?perform=random-string',
      token: token,
    });
    expect(result).toEqual(operationResponse);
  });
});

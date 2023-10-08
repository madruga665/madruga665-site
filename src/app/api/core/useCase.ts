interface UseCase<TRequest, TResponse> {
  execute(input: TRequest): Promise<TResponse>;
}

export default UseCase;

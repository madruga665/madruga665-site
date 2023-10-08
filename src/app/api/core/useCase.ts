export default interface UseCase<TRequest, TResponse> {
  execute(input: TRequest): Promise<TResponse>;
}

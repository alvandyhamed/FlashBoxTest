export interface IAddRequestState {
  type: String;
  username: string;
  password: string;
}

interface IResponse {
  id: number;
}

export interface IAddResponseState {
  type: String;
  response: IResponse;
}

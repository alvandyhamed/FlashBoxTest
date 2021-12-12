export interface IAddResponse {
  status: Istatus;
  data: Idata;
}

export interface Istatus {
  elapsed: number;
  timestamp: string;
}
export interface Idata {
  id: string;
  symbol: string;
  name: string;
  slug: string;
  contract_addresses?: string;
  _internal_temp_agora_id: string;
}

export interface IAddRequestState {
  type: String;
  cryptoId: string;
}

export interface IAddResponseState {
  type: String;
  response: IAddResponse;
}

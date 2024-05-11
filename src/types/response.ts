//common interface for response and errors
interface Common {
  isError: boolean;
  status: number;
  message: string;
}

//array response interface
export interface Response<T> extends Common {
  data: T[];
}

//single response interface
export interface SingleResponse<T> extends Common {
  data: T;
}

//delete response interface
export interface DeleteResponse extends Common {
  data: { count: number };
}

//update response interface
export interface UpdateResponse extends Common {
  data: { count: number };
}

export interface InsuranceProvider {
  id: string;
  insuranceProviderName: string;
}
//Insurance Providers response
export interface InsurancesProviders extends Common {
  data: InsuranceProvider[];
}

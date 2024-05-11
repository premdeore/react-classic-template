//Interface to handle indexes for AvailabilityTimes
export interface Time {
  key: number;
  value: string;
}

//Interface to handle indexes for AvailabilityTimes
export interface Index {
  startIndex: number;
  endIndex: number;
}

//Time Error Interface
export interface TimeError {
  startTime: boolean;
  endTime: boolean;
}

//Providers API Error Interface


export interface APIMessage {
  postMessage: string;
  updateMessage: string;
  deleteMessage: string;
  listMessage: string;
}
// API interface
export interface APIResponse {
  errors: boolean;
  success: boolean;
  pending: boolean;
  messages: APIMessage;
}

export interface GetParameters {
  message:  string;
  status:   number;
  response: Parameters;
}

export interface Parameters {
  id:          number;
  temperatura: string;
  ph:          string;
}

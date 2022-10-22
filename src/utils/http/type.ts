export interface RequestOptions {
  // Whether to process the request param
  isTransformResponse?: boolean;
}

// 返回res.data的interface
export interface IResponse<T = any> {
  code: number | string;
  param: T;
  message: string;
  status: string | number;
}

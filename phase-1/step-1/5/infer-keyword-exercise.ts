type Unwrap_Array<T> = T extends (infer U)[] ? U : T;

type Result = Unwrap_Array<string>;
type Result_2 = Unwrap_Array<string[]>;
type Result_3 = Unwrap_Array<[string]>;
type Result_4 = Unwrap_Array<Array<string | number>>;
type Result_5 = Unwrap_Array<Array<string> | Array<number>>;
type Result_6 = Unwrap_Array<[]>;

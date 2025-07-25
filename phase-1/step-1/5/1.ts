type Is_String<T> = T extends string ? "yes, it is a string" : "no, it is not a string";

type Result_1 = Is_String<"hello">;
type Result_2 = Is_String<123>;
type Result_3 = Is_String<string>;
type Result_4 = Is_String<any>;

type To_Array<T> = T extends any ? T[] : never;

type Result_A = To_Array<string>;
type Result_B = To_Array<string | number>;
type Result_C = To_Array<string | number | boolean>;

type Result = Exclude<"a" | "b" | "c", "c">;
type Type_Result = Exclude<string | number | boolean, boolean | string>;

type Extract_Result = Extract<"a" | "b" | "c", "c">;
type Extract_Result_1 = Extract<string | boolean | number, number | null>;

type Non_Nullable_1 = NonNullable<string | null | undefined>;
type Return_Type_1 = ReturnType<() => string>;

type Parameter_Type_1 = Parameters<(a: number, b: string) => boolean>;

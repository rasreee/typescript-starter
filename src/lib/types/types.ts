export type Negate<T extends boolean> = T extends true ? false : true;

export type IsType<V, TargetType> = V extends TargetType ? true : false;

export type IsNotType<T, TargetType> = Negate<IsType<T, TargetType>>;

export type Subtract<T, U> = T & Exclude<T, U>;

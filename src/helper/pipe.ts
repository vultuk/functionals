export const pipe = <I, O>(...fns) => (value: I): O => fns.reduce((v, f) => f(v), value);

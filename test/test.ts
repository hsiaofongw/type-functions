import { TypeMerge } from "type-functions/objects";
// type MakeTupleImpl<
//   Len extends number,
//   T extends [...any]
// > = T["length"] extends Len ? T : MakeTupleImpl<Len, [undefined, ...T]>;
// type MakeTuple<Len extends number> = MakeTupleImpl<Len, []>;

// type Zero = 0;
// type One = Increase<Zero>; // 1
// type Two = Increase<One>; // 2
// type Three = Increase<Two>; // 3

// type Test3_2 = EqualTest<Decrease<Three>, Two>; // true
// type Test2_1 = EqualTest<Decrease<Two>, One>; // true
// type Test1_0 = EqualTest<Decrease<One>, Zero>; // true

// type Five = Plus<3, 2>; // 5
// type Eight = Plus<5, 3>; // 8

// type SubtractTestsImpl<A extends number, Bs extends number> = {
//   [B in Bs as `${A}-${B}`]: Subtract<A, B>;
// };

// type SubtractTests = SubtractTestsImpl<
//   10,
//   1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
// >;

// type TimesTestImpl<A extends number, Bs extends number> = {
//   [B in Bs as `${A} * ${B}`]: Times<A, B>;
// };

// type TimesTests = TimesTestImpl<6, 1 | 2 | 3 | 4 | 5>;
// enum A {
//   value = -1,
// }
// type B = A.value;
// type Te = B extends -1 ? true : false;

// type Foo = {
//   foo: number[];
//   foo1: string[][];
//   foo2: boolean;
//   foo3: { b: boolean };
// };
// type Bar = { foo: object; foo1: number[] };

// type Foo_Bar = TypeMerge<Foo, Bar>;

type Foo = {
  foo: number[];
  foo1: string[][];
  foo2: boolean;
  foo3: { b: boolean };
};
type Bar = { foo: object; foo1: number[] };

type Foo_Bar = TypeMerge<Foo, Bar>;

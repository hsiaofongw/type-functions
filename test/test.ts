import { Rest, EqualTest } from "type-functions";

type MakeTupleImpl<
  Len extends number,
  T extends [...any]
> = T["length"] extends Len ? T : MakeTupleImpl<Len, [undefined, ...T]>;
type MakeTuple<Len extends number> = MakeTupleImpl<Len, []>;

type Increase<N extends number> = [...MakeTuple<N>, undefined]["length"];
type Decrease<N extends number> = N extends 0
  ? never
  : Rest<MakeTuple<N>> extends [...any]
  ? Rest<MakeTuple<N>>["length"]
  : never;

type Zero = 0;
type One = Increase<Zero>; // 1
type Two = Increase<One>; // 2
type Three = Increase<Two>; // 3

type Test3_2 = EqualTest<Decrease<Three>, Two>; // true
type Test2_1 = EqualTest<Decrease<Two>, One>; // true
type Test1_0 = EqualTest<Decrease<One>, Zero>; // true

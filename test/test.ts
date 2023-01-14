type PlusOne<T extends string> = `1${T}`;
type SubtractOne<T extends string> = T extends `1${infer RemainderT}`
  ? RemainderT
  : Zero;
type Plus<A extends string, B extends string> = B extends Zero
  ? A
  : Plus<PlusOne<A>, SubtractOne<B>>;

type Zero = "";
type One = PlusOne<Zero>;
type Two = Plus<One, One>;
type Three = PlusOne<Two>;
type Four = Plus<Two, Two>;
type Five = PlusOne<Four>;
type Six = PlusOne<Five>;
type Seven = PlusOne<Six>;
type Eight = Plus<Four, Four>;
type Nine = PlusOne<Eight>;
type Ten = Plus<Eight, Two>;
type Sixteen = Plus<Eight, Eight>;

type PowerOfTwoImpl<
  Sum extends string = One,
  Count extends string = Zero
> = Count extends Zero
  ? Sum
  : PowerOfTwoImpl<Plus<Sum, Sum>, SubtractOne<Count>>;
type PowerOfTwo<N extends string> = PowerOfTwoImpl<PlusOne<One>, N>;
type N512 = PowerOfTwo<Nine>;

type TimesImpl<
  A extends string,
  B extends string,
  C extends string
> = B extends Zero ? C : TimesImpl<A, SubtractOne<B>, Plus<C, A>>;
type Times<A extends string, B extends string> = TimesImpl<A, B, Zero>;
type Twelve = Times<Three, Four>;
type Forty = Times<Five, Eight>;

type DigitMap = [
  Zero,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten
];

type StrToNumImpl<
  Str extends string,
  SumValue extends string
> = Str extends Zero
  ? SumValue
  : Str extends `0${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[0]>>
  : Str extends `1${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[1]>>
  : Str extends `2${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[2]>>
  : Str extends `3${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[3]>>
  : Str extends `4${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[4]>>
  : Str extends `5${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[5]>>
  : Str extends `6${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[6]>>
  : Str extends `7${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[7]>>
  : Str extends `8${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[8]>>
  : Str extends `9${infer RestStr}`
  ? StrToNumImpl<RestStr, Plus<Times<SumValue, Ten>, DigitMap[9]>>
  : never;

type FirstChar<T extends string> = T extends `${infer HeadChar}${infer _}`
  ? HeadChar
  : never;

type RestStr<T extends string> = T extends `${infer _}${infer R}` ? R : never;

type StrToChars<T extends string> = T extends ""
  ? []
  : FirstChar<T> extends string
  ? RestStr<T> extends string
    ? [FirstChar<T>, ...StrToChars<RestStr<T>>]
    : [FirstChar<T>]
  : [];

type StrToNum<Str extends string> = StrToNumImpl<Str, Zero> extends string
  ? StrToChars<StrToNumImpl<Str, Zero>>["length"]
  : never;

type S0 = StrToNum<"0">; // 0
type S1 = StrToNum<"1">; // 1
type S2 = StrToNum<"2">; // 2
type S3 = StrToNum<"3">; // 3
type S21 = StrToNum<"21">; // 21
type S22 = StrToNum<"22">; // 22
type S23 = StrToNum<"23">; // 23
type S24 = StrToNum<"24">; // 24
type S123 = StrToNum<"40">; // 40

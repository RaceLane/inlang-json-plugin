var wn = Object.create;
var Qe = Object.defineProperty;
var xn = Object.getOwnPropertyDescriptor;
var vn = Object.getOwnPropertyNames;
var An = Object.getPrototypeOf;
var Fn = Object.prototype.hasOwnProperty;
var Xe = (u, e) => () => (e || u((e = {
  exports: {}
}).exports, e), e.exports);
var $n = (u, e, i, a) => {
  if (e && typeof e == "object" || typeof e == "function") {
    for (let T of vn(e)) if (!Fn.call(u, T) && T !== i) {
      Qe(u, T, {
        get: () => e[T],
        enumerable: !(a = xn(e, T)) || a.enumerable
      });
    }
  }
  return u;
};
var Ze = (u, e, i) => (i = u != null ? wn(An(u)) : {}, $n(e || !u || !u.__esModule ? Qe(i, "default", {
  value: u,
  enumerable: true
}) : i, u));
var rn = Xe(o => {
  "use strict";

  Object.defineProperty(o, "__esModule", {
    value: true
  });
  o.Type = o.JsonType = o.JavaScriptTypeBuilder = o.JsonTypeBuilder = o.TypeBuilder = o.TypeBuilderError = o.TransformEncodeBuilder = o.TransformDecodeBuilder = o.TemplateLiteralDslParser = o.TemplateLiteralGenerator = o.TemplateLiteralGeneratorError = o.TemplateLiteralFinite = o.TemplateLiteralFiniteError = o.TemplateLiteralParser = o.TemplateLiteralParserError = o.TemplateLiteralResolver = o.TemplateLiteralPattern = o.TemplateLiteralPatternError = o.UnionResolver = o.KeyArrayResolver = o.KeyArrayResolverError = o.KeyResolver = o.ObjectMap = o.Intrinsic = o.IndexedAccessor = o.TypeClone = o.TypeExtends = o.TypeExtendsResult = o.TypeExtendsError = o.ExtendsUndefined = o.TypeGuard = o.TypeGuardUnknownTypeError = o.ValueGuard = o.FormatRegistry = o.TypeBoxError = o.TypeRegistry = o.PatternStringExact = o.PatternNumberExact = o.PatternBooleanExact = o.PatternString = o.PatternNumber = o.PatternBoolean = o.Kind = o.Hint = o.Optional = o.Readonly = o.Transform = undefined;
  o.Transform = Symbol.for("TypeBox.Transform");
  o.Readonly = Symbol.for("TypeBox.Readonly");
  o.Optional = Symbol.for("TypeBox.Optional");
  o.Hint = Symbol.for("TypeBox.Hint");
  o.Kind = Symbol.for("TypeBox.Kind");
  o.PatternBoolean = "(true|false)";
  o.PatternNumber = "(0|[1-9][0-9]*)";
  o.PatternString = "(.*)";
  o.PatternBooleanExact = `^${o.PatternBoolean}$`;
  o.PatternNumberExact = `^${o.PatternNumber}$`;
  o.PatternStringExact = `^${o.PatternString}$`;
  var Ve;
  (function (u) {
    let e = new Map();
    function i() {
      return new Map(e);
    }
    u.Entries = i;
    function a() {
      return e.clear();
    }
    u.Clear = a;
    function T(g) {
      return e.delete(g);
    }
    u.Delete = T;
    function c(g) {
      return e.has(g);
    }
    u.Has = c;
    function l(g, U) {
      e.set(g, U);
    }
    u.Set = l;
    function f(g) {
      return e.get(g);
    }
    u.Get = f;
  })(Ve || (o.TypeRegistry = Ve = {}));
  var M = class extends Error {
    constructor(e) {
      super(e);
    }
  };
  o.TypeBoxError = M;
  var nn;
  (function (u) {
    let e = new Map();
    function i() {
      return new Map(e);
    }
    u.Entries = i;
    function a() {
      return e.clear();
    }
    u.Clear = a;
    function T(g) {
      return e.delete(g);
    }
    u.Delete = T;
    function c(g) {
      return e.has(g);
    }
    u.Has = c;
    function l(g, U) {
      e.set(g, U);
    }
    u.Set = l;
    function f(g) {
      return e.get(g);
    }
    u.Get = f;
  })(nn || (o.FormatRegistry = nn = {}));
  var O;
  (function (u) {
    function e(y) {
      return Array.isArray(y);
    }
    u.IsArray = e;
    function i(y) {
      return typeof y == "bigint";
    }
    u.IsBigInt = i;
    function a(y) {
      return typeof y == "boolean";
    }
    u.IsBoolean = a;
    function T(y) {
      return y instanceof globalThis.Date;
    }
    u.IsDate = T;
    function c(y) {
      return y === null;
    }
    u.IsNull = c;
    function l(y) {
      return typeof y == "number";
    }
    u.IsNumber = l;
    function f(y) {
      return typeof y == "object" && y !== null;
    }
    u.IsObject = f;
    function g(y) {
      return typeof y == "string";
    }
    u.IsString = g;
    function U(y) {
      return y instanceof globalThis.Uint8Array;
    }
    u.IsUint8Array = U;
    function I(y) {
      return y === undefined;
    }
    u.IsUndefined = I;
  })(O || (o.ValueGuard = O = {}));
  var Je = class extends M {};
  o.TypeGuardUnknownTypeError = Je;
  var s;
  (function (u) {
    function e(r) {
      try {
        new RegExp(r);
        return true;
      } catch {
        return false;
      }
    }
    function i(r) {
      if (!O.IsString(r)) {
        return false;
      }
      for (let v = 0; v < r.length; v++) {
        let B = r.charCodeAt(v);
        if (B >= 7 && B <= 13 || B === 27 || B === 127) {
          return false;
        }
      }
      return true;
    }
    function a(r) {
      return l(r) || $(r);
    }
    function T(r) {
      return O.IsUndefined(r) || O.IsBigInt(r);
    }
    function c(r) {
      return O.IsUndefined(r) || O.IsNumber(r);
    }
    function l(r) {
      return O.IsUndefined(r) || O.IsBoolean(r);
    }
    function f(r) {
      return O.IsUndefined(r) || O.IsString(r);
    }
    function g(r) {
      return O.IsUndefined(r) || O.IsString(r) && i(r) && e(r);
    }
    function U(r) {
      return O.IsUndefined(r) || O.IsString(r) && i(r);
    }
    function I(r) {
      return O.IsUndefined(r) || $(r);
    }
    function y(r) {
      return N(r, "Any") && f(r.$id);
    }
    u.TAny = y;
    function P(r) {
      return N(r, "Array") && r.type === "array" && f(r.$id) && $(r.items) && c(r.minItems) && c(r.maxItems) && l(r.uniqueItems) && I(r.contains) && c(r.minContains) && c(r.maxContains);
    }
    u.TArray = P;
    function d(r) {
      return N(r, "AsyncIterator") && r.type === "AsyncIterator" && f(r.$id) && $(r.items);
    }
    u.TAsyncIterator = d;
    function b(r) {
      return N(r, "BigInt") && r.type === "bigint" && f(r.$id) && T(r.exclusiveMaximum) && T(r.exclusiveMinimum) && T(r.maximum) && T(r.minimum) && T(r.multipleOf);
    }
    u.TBigInt = b;
    function R(r) {
      return N(r, "Boolean") && r.type === "boolean" && f(r.$id);
    }
    u.TBoolean = R;
    function j(r) {
      return N(r, "Constructor") && r.type === "Constructor" && f(r.$id) && O.IsArray(r.parameters) && r.parameters.every(v => $(v)) && $(r.returns);
    }
    u.TConstructor = j;
    function w(r) {
      return N(r, "Date") && r.type === "Date" && f(r.$id) && c(r.exclusiveMaximumTimestamp) && c(r.exclusiveMinimumTimestamp) && c(r.maximumTimestamp) && c(r.minimumTimestamp) && c(r.multipleOfTimestamp);
    }
    u.TDate = w;
    function S(r) {
      return N(r, "Function") && r.type === "Function" && f(r.$id) && O.IsArray(r.parameters) && r.parameters.every(v => $(v)) && $(r.returns);
    }
    u.TFunction = S;
    function A(r) {
      return N(r, "Integer") && r.type === "integer" && f(r.$id) && c(r.exclusiveMaximum) && c(r.exclusiveMinimum) && c(r.maximum) && c(r.minimum) && c(r.multipleOf);
    }
    u.TInteger = A;
    function K(r) {
      return N(r, "Intersect") && !(O.IsString(r.type) && r.type !== "object") && O.IsArray(r.allOf) && r.allOf.every(v => $(v) && !se(v)) && f(r.type) && (l(r.unevaluatedProperties) || I(r.unevaluatedProperties)) && f(r.$id);
    }
    u.TIntersect = K;
    function pe(r) {
      return N(r, "Iterator") && r.type === "Iterator" && f(r.$id) && $(r.items);
    }
    u.TIterator = pe;
    function N(r, v) {
      return ne(r) && r[o.Kind] === v;
    }
    u.TKindOf = N;
    function ne(r) {
      return O.IsObject(r) && o.Kind in r && O.IsString(r[o.Kind]);
    }
    u.TKind = ne;
    function te(r) {
      return J(r) && O.IsString(r.const);
    }
    u.TLiteralString = te;
    function de(r) {
      return J(r) && O.IsNumber(r.const);
    }
    u.TLiteralNumber = de;
    function Ke(r) {
      return J(r) && O.IsBoolean(r.const);
    }
    u.TLiteralBoolean = Ke;
    function J(r) {
      return N(r, "Literal") && f(r.$id) && (O.IsBoolean(r.const) || O.IsNumber(r.const) || O.IsString(r.const));
    }
    u.TLiteral = J;
    function fe(r) {
      return N(r, "Never") && O.IsObject(r.not) && Object.getOwnPropertyNames(r.not).length === 0;
    }
    u.TNever = fe;
    function C(r) {
      return N(r, "Not") && $(r.not);
    }
    u.TNot = C;
    function re(r) {
      return N(r, "Null") && r.type === "null" && f(r.$id);
    }
    u.TNull = re;
    function ie(r) {
      return N(r, "Number") && r.type === "number" && f(r.$id) && c(r.exclusiveMaximum) && c(r.exclusiveMinimum) && c(r.maximum) && c(r.minimum) && c(r.multipleOf);
    }
    u.TNumber = ie;
    function W(r) {
      return N(r, "Object") && r.type === "object" && f(r.$id) && O.IsObject(r.properties) && a(r.additionalProperties) && c(r.minProperties) && c(r.maxProperties) && Object.entries(r.properties).every(([v, B]) => i(v) && $(B));
    }
    u.TObject = W;
    function oe(r) {
      return N(r, "Promise") && r.type === "Promise" && f(r.$id) && $(r.item);
    }
    u.TPromise = oe;
    function ye(r) {
      return N(r, "Record") && r.type === "object" && f(r.$id) && a(r.additionalProperties) && O.IsObject(r.patternProperties) && (v => {
        let B = Object.getOwnPropertyNames(v.patternProperties);
        return B.length === 1 && e(B[0]) && O.IsObject(v.patternProperties) && $(v.patternProperties[B[0]]);
      })(r);
    }
    u.TRecord = ye;
    function Ee(r) {
      return O.IsObject(r) && o.Hint in r && r[o.Hint] === "Recursive";
    }
    u.TRecursive = Ee;
    function ge(r) {
      return N(r, "Ref") && f(r.$id) && O.IsString(r.$ref);
    }
    u.TRef = ge;
    function Ie(r) {
      return N(r, "String") && r.type === "string" && f(r.$id) && c(r.minLength) && c(r.maxLength) && g(r.pattern) && U(r.format);
    }
    u.TString = Ie;
    function Oe(r) {
      return N(r, "Symbol") && r.type === "symbol" && f(r.$id);
    }
    u.TSymbol = Oe;
    function q(r) {
      return N(r, "TemplateLiteral") && r.type === "string" && O.IsString(r.pattern) && r.pattern[0] === "^" && r.pattern[r.pattern.length - 1] === "$";
    }
    u.TTemplateLiteral = q;
    function be(r) {
      return N(r, "This") && f(r.$id) && O.IsString(r.$ref);
    }
    u.TThis = be;
    function se(r) {
      return O.IsObject(r) && o.Transform in r;
    }
    u.TTransform = se;
    function F(r) {
      return N(r, "Tuple") && r.type === "array" && f(r.$id) && O.IsNumber(r.minItems) && O.IsNumber(r.maxItems) && r.minItems === r.maxItems && (O.IsUndefined(r.items) && O.IsUndefined(r.additionalItems) && r.minItems === 0 || O.IsArray(r.items) && r.items.every(v => $(v)));
    }
    u.TTuple = F;
    function Ue(r) {
      return N(r, "Undefined") && r.type === "undefined" && f(r.$id);
    }
    u.TUndefined = Ue;
    function Be(r) {
      return H(r) && r.anyOf.every(v => te(v) || de(v));
    }
    u.TUnionLiteral = Be;
    function H(r) {
      return N(r, "Union") && f(r.$id) && O.IsObject(r) && O.IsArray(r.anyOf) && r.anyOf.every(v => $(v));
    }
    u.TUnion = H;
    function Y(r) {
      return N(r, "Uint8Array") && r.type === "Uint8Array" && f(r.$id) && c(r.minByteLength) && c(r.maxByteLength);
    }
    u.TUint8Array = Y;
    function E(r) {
      return N(r, "Unknown") && f(r.$id);
    }
    u.TUnknown = E;
    function me(r) {
      return N(r, "Unsafe");
    }
    u.TUnsafe = me;
    function ue(r) {
      return N(r, "Void") && r.type === "void" && f(r.$id);
    }
    u.TVoid = ue;
    function ke(r) {
      return O.IsObject(r) && r[o.Readonly] === "Readonly";
    }
    u.TReadonly = ke;
    function De(r) {
      return O.IsObject(r) && r[o.Optional] === "Optional";
    }
    u.TOptional = De;
    function $(r) {
      return O.IsObject(r) && (y(r) || P(r) || R(r) || b(r) || d(r) || j(r) || w(r) || S(r) || A(r) || K(r) || pe(r) || J(r) || fe(r) || C(r) || re(r) || ie(r) || W(r) || oe(r) || ye(r) || ge(r) || Ie(r) || Oe(r) || q(r) || be(r) || F(r) || Ue(r) || H(r) || Y(r) || E(r) || me(r) || ue(r) || ne(r) && Ve.Has(r[o.Kind]));
    }
    u.TSchema = $;
  })(s || (o.TypeGuard = s = {}));
  var tn;
  (function (u) {
    function e(i) {
      return i[o.Kind] === "Intersect" ? i.allOf.every(a => e(a)) : i[o.Kind] === "Union" ? i.anyOf.some(a => e(a)) : i[o.Kind] === "Undefined" ? true : i[o.Kind] === "Not" ? !e(i.not) : false;
    }
    u.Check = e;
  })(tn || (o.ExtendsUndefined = tn = {}));
  var Pe = class extends M {};
  o.TypeExtendsError = Pe;
  var p;
  (function (u) {
    u[u.Union = 0] = "Union";
    u[u.True = 1] = "True";
    u[u.False = 2] = "False";
  })(p || (o.TypeExtendsResult = p = {}));
  var z;
  (function (u) {
    function e(n) {
      return n === p.False ? n : p.True;
    }
    function i(n) {
      throw new Pe(n);
    }
    function a(n) {
      return s.TNever(n) || s.TIntersect(n) || s.TUnion(n) || s.TUnknown(n) || s.TAny(n);
    }
    function T(n, t) {
      return s.TNever(t) ? N(n, t) : s.TIntersect(t) ? S(n, t) : s.TUnion(t) ? Me(n, t) : s.TUnknown(t) ? Ye(n, t) : s.TAny(t) ? c(n, t) : i("StructuralRight");
    }
    function c(n, t) {
      return p.True;
    }
    function l(n, t) {
      return s.TIntersect(t) ? S(n, t) : s.TUnion(t) && t.anyOf.some(L => s.TAny(L) || s.TUnknown(L)) ? p.True : s.TUnion(t) ? p.Union : s.TUnknown(t) || s.TAny(t) ? p.True : p.Union;
    }
    function f(n, t) {
      return s.TUnknown(n) ? p.False : s.TAny(n) ? p.Union : s.TNever(n) ? p.True : p.False;
    }
    function g(n, t) {
      return s.TObject(t) && q(t) ? p.True : a(t) ? T(n, t) : s.TArray(t) ? e(x(n.items, t.items)) : p.False;
    }
    function U(n, t) {
      return a(t) ? T(n, t) : s.TAsyncIterator(t) ? e(x(n.items, t.items)) : p.False;
    }
    function I(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TBigInt(t) ? p.True : p.False;
    }
    function y(n, t) {
      return s.TLiteral(n) && O.IsBoolean(n.const) || s.TBoolean(n) ? p.True : p.False;
    }
    function P(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TBoolean(t) ? p.True : p.False;
    }
    function d(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TConstructor(t) ? n.parameters.length > t.parameters.length ? p.False : n.parameters.every((L, D) => e(x(t.parameters[D], L)) === p.True) ? e(x(n.returns, t.returns)) : p.False : p.False;
    }
    function b(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TDate(t) ? p.True : p.False;
    }
    function R(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TFunction(t) ? n.parameters.length > t.parameters.length ? p.False : n.parameters.every((L, D) => e(x(t.parameters[D], L)) === p.True) ? e(x(n.returns, t.returns)) : p.False : p.False;
    }
    function j(n, t) {
      return s.TLiteral(n) && O.IsNumber(n.const) || s.TNumber(n) || s.TInteger(n) ? p.True : p.False;
    }
    function w(n, t) {
      return s.TInteger(t) || s.TNumber(t) ? p.True : a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : p.False;
    }
    function S(n, t) {
      return t.allOf.every(L => x(n, L) === p.True) ? p.True : p.False;
    }
    function A(n, t) {
      return n.allOf.some(L => x(L, t) === p.True) ? p.True : p.False;
    }
    function K(n, t) {
      return a(t) ? T(n, t) : s.TIterator(t) ? e(x(n.items, t.items)) : p.False;
    }
    function pe(n, t) {
      return s.TLiteral(t) && t.const === n.const ? p.True : a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TString(t) ? ue(n, t) : s.TNumber(t) ? J(n, t) : s.TInteger(t) ? j(n, t) : s.TBoolean(t) ? y(n, t) : p.False;
    }
    function N(n, t) {
      return p.False;
    }
    function ne(n, t) {
      return p.True;
    }
    function te(n) {
      let [t, L] = [n, 0];
      for (; s.TNot(t);) {
        t = t.not;
        L += 1;
      }
      return L % 2 === 0 ? t : o.Type.Unknown();
    }
    function de(n, t) {
      return s.TNot(n) ? x(te(n), t) : s.TNot(t) ? x(n, te(t)) : i("Invalid fallthrough for Not");
    }
    function Ke(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TNull(t) ? p.True : p.False;
    }
    function J(n, t) {
      return s.TLiteralNumber(n) || s.TNumber(n) || s.TInteger(n) ? p.True : p.False;
    }
    function fe(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TInteger(t) || s.TNumber(t) ? p.True : p.False;
    }
    function C(n, t) {
      return Object.getOwnPropertyNames(n.properties).length === t;
    }
    function re(n) {
      return q(n);
    }
    function ie(n) {
      return C(n, 0) || C(n, 1) && "description" in n.properties && s.TUnion(n.properties.description) && n.properties.description.anyOf.length === 2 && (s.TString(n.properties.description.anyOf[0]) && s.TUndefined(n.properties.description.anyOf[1]) || s.TString(n.properties.description.anyOf[1]) && s.TUndefined(n.properties.description.anyOf[0]));
    }
    function W(n) {
      return C(n, 0);
    }
    function oe(n) {
      return C(n, 0);
    }
    function ye(n) {
      return C(n, 0);
    }
    function Ee(n) {
      return C(n, 0);
    }
    function ge(n) {
      return q(n);
    }
    function Ie(n) {
      let t = o.Type.Number();
      return C(n, 0) || C(n, 1) && "length" in n.properties && e(x(n.properties.length, t)) === p.True;
    }
    function Oe(n) {
      return C(n, 0);
    }
    function q(n) {
      let t = o.Type.Number();
      return C(n, 0) || C(n, 1) && "length" in n.properties && e(x(n.properties.length, t)) === p.True;
    }
    function be(n) {
      let t = o.Type.Function([o.Type.Any()], o.Type.Any());
      return C(n, 0) || C(n, 1) && "then" in n.properties && e(x(n.properties.then, t)) === p.True;
    }
    function se(n, t) {
      return x(n, t) === p.False || s.TOptional(n) && !s.TOptional(t) ? p.False : p.True;
    }
    function F(n, t) {
      return s.TUnknown(n) ? p.False : s.TAny(n) ? p.Union : s.TNever(n) || s.TLiteralString(n) && re(t) || s.TLiteralNumber(n) && W(t) || s.TLiteralBoolean(n) && oe(t) || s.TSymbol(n) && ie(t) || s.TBigInt(n) && ye(t) || s.TString(n) && re(t) || s.TSymbol(n) && ie(t) || s.TNumber(n) && W(t) || s.TInteger(n) && W(t) || s.TBoolean(n) && oe(t) || s.TUint8Array(n) && ge(t) || s.TDate(n) && Ee(t) || s.TConstructor(n) && Oe(t) || s.TFunction(n) && Ie(t) ? p.True : s.TRecord(n) && s.TString(H(n)) ? t[o.Hint] === "Record" ? p.True : p.False : s.TRecord(n) && s.TNumber(H(n)) ? C(t, 0) ? p.True : p.False : p.False;
    }
    function Ue(n, t) {
      return a(t) ? T(n, t) : s.TRecord(t) ? E(n, t) : s.TObject(t) ? (() => {
        for (let L of Object.getOwnPropertyNames(t.properties)) {
          if (!(L in n.properties) && !s.TOptional(t.properties[L])) {
            return p.False;
          }
          if (s.TOptional(t.properties[L])) {
            return p.True;
          }
          if (se(n.properties[L], t.properties[L]) === p.False) {
            return p.False;
          }
        }
        return p.True;
      })() : p.False;
    }
    function Be(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) && be(t) ? p.True : s.TPromise(t) ? e(x(n.item, t.item)) : p.False;
    }
    function H(n) {
      return o.PatternNumberExact in n.patternProperties ? o.Type.Number() : o.PatternStringExact in n.patternProperties ? o.Type.String() : i("Unknown record key pattern");
    }
    function Y(n) {
      return o.PatternNumberExact in n.patternProperties ? n.patternProperties[o.PatternNumberExact] : o.PatternStringExact in n.patternProperties ? n.patternProperties[o.PatternStringExact] : i("Unable to get record value schema");
    }
    function E(n, t) {
      let [L, D] = [H(t), Y(t)];
      return s.TLiteralString(n) && s.TNumber(L) && e(x(n, D)) === p.True ? p.True : s.TUint8Array(n) && s.TNumber(L) || s.TString(n) && s.TNumber(L) || s.TArray(n) && s.TNumber(L) ? x(n, D) : s.TObject(n) ? (() => {
        for (let Ln of Object.getOwnPropertyNames(n.properties)) if (se(D, n.properties[Ln]) === p.False) {
          return p.False;
        }
        return p.True;
      })() : p.False;
    }
    function me(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? x(Y(n), Y(t)) : p.False;
    }
    function ue(n, t) {
      return s.TLiteral(n) && O.IsString(n.const) || s.TString(n) ? p.True : p.False;
    }
    function ke(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TString(t) ? p.True : p.False;
    }
    function De(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TSymbol(t) ? p.True : p.False;
    }
    function $(n, t) {
      return s.TTemplateLiteral(n) ? x(V.Resolve(n), t) : s.TTemplateLiteral(t) ? x(n, V.Resolve(t)) : i("Invalid fallthrough for TemplateLiteral");
    }
    function r(n, t) {
      return s.TArray(t) && n.items !== undefined && n.items.every(L => x(L, t.items) === p.True);
    }
    function v(n, t) {
      return s.TNever(n) ? p.True : s.TUnknown(n) ? p.False : s.TAny(n) ? p.Union : p.False;
    }
    function B(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) && q(t) || s.TArray(t) && r(n, t) ? p.True : s.TTuple(t) ? O.IsUndefined(n.items) && !O.IsUndefined(t.items) || !O.IsUndefined(n.items) && O.IsUndefined(t.items) ? p.False : O.IsUndefined(n.items) && !O.IsUndefined(t.items) || n.items.every((L, D) => x(L, t.items[D]) === p.True) ? p.True : p.False : p.False;
    }
    function Un(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TUint8Array(t) ? p.True : p.False;
    }
    function mn(n, t) {
      return a(t) ? T(n, t) : s.TObject(t) ? F(n, t) : s.TRecord(t) ? E(n, t) : s.TVoid(t) ? jn(n, t) : s.TUndefined(t) ? p.True : p.False;
    }
    function Me(n, t) {
      return t.anyOf.some(L => x(n, L) === p.True) ? p.True : p.False;
    }
    function Pn(n, t) {
      return n.anyOf.every(L => x(L, t) === p.True) ? p.True : p.False;
    }
    function Ye(n, t) {
      return p.True;
    }
    function Rn(n, t) {
      return s.TNever(t) ? N(n, t) : s.TIntersect(t) ? S(n, t) : s.TUnion(t) ? Me(n, t) : s.TAny(t) ? c(n, t) : s.TString(t) ? ue(n, t) : s.TNumber(t) ? J(n, t) : s.TInteger(t) ? j(n, t) : s.TBoolean(t) ? y(n, t) : s.TArray(t) ? f(n, t) : s.TTuple(t) ? v(n, t) : s.TObject(t) ? F(n, t) : s.TUnknown(t) ? p.True : p.False;
    }
    function jn(n, t) {
      return s.TUndefined(n) || s.TUndefined(n) ? p.True : p.False;
    }
    function Nn(n, t) {
      return s.TIntersect(t) ? S(n, t) : s.TUnion(t) ? Me(n, t) : s.TUnknown(t) ? Ye(n, t) : s.TAny(t) ? c(n, t) : s.TObject(t) ? F(n, t) : s.TVoid(t) ? p.True : p.False;
    }
    function x(n, t) {
      return s.TTemplateLiteral(n) || s.TTemplateLiteral(t) ? $(n, t) : s.TNot(n) || s.TNot(t) ? de(n, t) : s.TAny(n) ? l(n, t) : s.TArray(n) ? g(n, t) : s.TBigInt(n) ? I(n, t) : s.TBoolean(n) ? P(n, t) : s.TAsyncIterator(n) ? U(n, t) : s.TConstructor(n) ? d(n, t) : s.TDate(n) ? b(n, t) : s.TFunction(n) ? R(n, t) : s.TInteger(n) ? w(n, t) : s.TIntersect(n) ? A(n, t) : s.TIterator(n) ? K(n, t) : s.TLiteral(n) ? pe(n, t) : s.TNever(n) ? ne(n, t) : s.TNull(n) ? Ke(n, t) : s.TNumber(n) ? fe(n, t) : s.TObject(n) ? Ue(n, t) : s.TRecord(n) ? me(n, t) : s.TString(n) ? ke(n, t) : s.TSymbol(n) ? De(n, t) : s.TTuple(n) ? B(n, t) : s.TPromise(n) ? Be(n, t) : s.TUint8Array(n) ? Un(n, t) : s.TUndefined(n) ? mn(n, t) : s.TUnion(n) ? Pn(n, t) : s.TUnknown(n) ? Rn(n, t) : s.TVoid(n) ? Nn(n, t) : i(`Unknown left type operand '${n[o.Kind]}'`);
    }
    function Sn(n, t) {
      return x(n, t);
    }
    u.Extends = Sn;
  })(z || (o.TypeExtends = z = {}));
  var m;
  (function (u) {
    function e(g) {
      return g.map(U => c(U));
    }
    function i(g) {
      return new Date(g.getTime());
    }
    function a(g) {
      return new Uint8Array(g);
    }
    function T(g) {
      let U = Object.getOwnPropertyNames(g).reduce((y, P) => ({
        ...y,
        [P]: c(g[P])
      }), {});
      let I = Object.getOwnPropertySymbols(g).reduce((y, P) => ({
        ...y,
        [P]: c(g[P])
      }), {});
      return {
        ...U,
        ...I
      };
    }
    function c(g) {
      return O.IsArray(g) ? e(g) : O.IsDate(g) ? i(g) : O.IsUint8Array(g) ? a(g) : O.IsObject(g) ? T(g) : g;
    }
    function l(g) {
      return g.map(U => f(U));
    }
    u.Rest = l;
    function f(g, U = {}) {
      return {
        ...c(g),
        ...U
      };
    }
    u.Type = f;
  })(m || (o.TypeClone = m = {}));
  var qe;
  (function (u) {
    function e(d) {
      return d.map(b => {
        let {
          [o.Optional]: R,
          ...j
        } = m.Type(b);
        return j;
      });
    }
    function i(d) {
      return d.every(b => s.TOptional(b));
    }
    function a(d) {
      return d.some(b => s.TOptional(b));
    }
    function T(d) {
      return i(d.allOf) ? o.Type.Optional(o.Type.Intersect(e(d.allOf))) : d;
    }
    function c(d) {
      return a(d.anyOf) ? o.Type.Optional(o.Type.Union(e(d.anyOf))) : d;
    }
    function l(d) {
      return d[o.Kind] === "Intersect" ? T(d) : d[o.Kind] === "Union" ? c(d) : d;
    }
    function f(d, b) {
      let R = d.allOf.reduce((j, w) => {
        let S = y(w, b);
        return S[o.Kind] === "Never" ? j : [...j, S];
      }, []);
      return l(o.Type.Intersect(R));
    }
    function g(d, b) {
      let R = d.anyOf.map(j => y(j, b));
      return l(o.Type.Union(R));
    }
    function U(d, b) {
      let R = d.properties[b];
      return O.IsUndefined(R) ? o.Type.Never() : o.Type.Union([R]);
    }
    function I(d, b) {
      let R = d.items;
      if (O.IsUndefined(R)) {
        return o.Type.Never();
      }
      let j = R[b];
      return O.IsUndefined(j) ? o.Type.Never() : j;
    }
    function y(d, b) {
      return d[o.Kind] === "Intersect" ? f(d, b) : d[o.Kind] === "Union" ? g(d, b) : d[o.Kind] === "Object" ? U(d, b) : d[o.Kind] === "Tuple" ? I(d, b) : o.Type.Never();
    }
    function P(d, b, R = {}) {
      let j = b.map(w => y(d, w.toString()));
      return l(o.Type.Union(j, R));
    }
    u.Resolve = P;
  })(qe || (o.IndexedAccessor = qe = {}));
  var Q;
  (function (u) {
    function e(I) {
      let [y, P] = [I.slice(0, 1), I.slice(1)];
      return `${y.toLowerCase()}${P}`;
    }
    function i(I) {
      let [y, P] = [I.slice(0, 1), I.slice(1)];
      return `${y.toUpperCase()}${P}`;
    }
    function a(I) {
      return I.toUpperCase();
    }
    function T(I) {
      return I.toLowerCase();
    }
    function c(I, y) {
      let P = Z.ParseExact(I.pattern);
      if (!G.Check(P)) {
        return {
          ...I,
          pattern: l(I.pattern, y)
        };
      }
      let R = [...h.Generate(P)].map(S => o.Type.Literal(S));
      let j = f(R, y);
      let w = o.Type.Union(j);
      return o.Type.TemplateLiteral([w]);
    }
    function l(I, y) {
      return typeof I == "string" ? y === "Uncapitalize" ? e(I) : y === "Capitalize" ? i(I) : y === "Uppercase" ? a(I) : y === "Lowercase" ? T(I) : I : I.toString();
    }
    function f(I, y) {
      if (I.length === 0) {
        return [];
      }
      let [P, ...d] = I;
      return [U(P, y), ...f(d, y)];
    }
    function g(I, y) {
      return s.TTemplateLiteral(I) ? c(I, y) : s.TUnion(I) ? o.Type.Union(f(I.anyOf, y)) : s.TLiteral(I) ? o.Type.Literal(l(I.const, y)) : I;
    }
    function U(I, y) {
      return g(I, y);
    }
    u.Map = U;
  })(Q || (o.Intrinsic = Q = {}));
  var X;
  (function (u) {
    function e(l, f) {
      return o.Type.Intersect(l.allOf.map(g => T(g, f)), {
        ...l
      });
    }
    function i(l, f) {
      return o.Type.Union(l.anyOf.map(g => T(g, f)), {
        ...l
      });
    }
    function a(l, f) {
      return f(l);
    }
    function T(l, f) {
      return l[o.Kind] === "Intersect" ? e(l, f) : l[o.Kind] === "Union" ? i(l, f) : l[o.Kind] === "Object" ? a(l, f) : l;
    }
    function c(l, f, g) {
      return {
        ...T(m.Type(l), f),
        ...g
      };
    }
    u.Map = c;
  })(X || (o.ObjectMap = X = {}));
  var Re;
  (function (u) {
    function e(U) {
      return U[0] === "^" && U[U.length - 1] === "$" ? U.slice(1, U.length - 1) : U;
    }
    function i(U, I) {
      return U.allOf.reduce((y, P) => [...y, ...l(P, I)], []);
    }
    function a(U, I) {
      let y = U.anyOf.map(P => l(P, I));
      return [...y.reduce((P, d) => d.map(b => y.every(R => R.includes(b)) ? P.add(b) : P)[0], new Set())];
    }
    function T(U, I) {
      return Object.getOwnPropertyNames(U.properties);
    }
    function c(U, I) {
      return I.includePatterns ? Object.getOwnPropertyNames(U.patternProperties) : [];
    }
    function l(U, I) {
      return s.TIntersect(U) ? i(U, I) : s.TUnion(U) ? a(U, I) : s.TObject(U) ? T(U, I) : s.TRecord(U) ? c(U, I) : [];
    }
    function f(U, I) {
      return [...new Set(l(U, I))];
    }
    u.ResolveKeys = f;
    function g(U) {
      return `^(${f(U, {
        includePatterns: true
      }).map(P => `(${e(P)})`).join("|")})$`;
    }
    u.ResolvePattern = g;
  })(Re || (o.KeyResolver = Re = {}));
  var je = class extends M {};
  o.KeyArrayResolverError = je;
  var ae;
  (function (u) {
    function e(i) {
      return Array.isArray(i) ? i : s.TUnionLiteral(i) ? i.anyOf.map(a => a.const.toString()) : s.TLiteral(i) ? [i.const] : s.TTemplateLiteral(i) ? (() => {
        let a = Z.ParseExact(i.pattern);
        if (!G.Check(a)) {
          throw new je("Cannot resolve keys from infinite template expression");
        }
        return [...h.Generate(a)];
      })() : [];
    }
    u.Resolve = e;
  })(ae || (o.KeyArrayResolver = ae = {}));
  var He;
  (function (u) {
    function* e(a) {
      for (let T of a.anyOf) if (T[o.Kind] === "Union") {
        yield* e(T);
      } else {
        yield T;
      }
    }
    function i(a) {
      return o.Type.Union([...e(a)], {
        ...a
      });
    }
    u.Resolve = i;
  })(He || (o.UnionResolver = He = {}));
  var Ne = class extends M {};
  o.TemplateLiteralPatternError = Ne;
  var Se;
  (function (u) {
    function e(c) {
      throw new Ne(c);
    }
    function i(c) {
      return c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function a(c, l) {
      return s.TTemplateLiteral(c) ? c.pattern.slice(1, c.pattern.length - 1) : s.TUnion(c) ? `(${c.anyOf.map(f => a(f, l)).join("|")})` : s.TNumber(c) ? `${l}${o.PatternNumber}` : s.TInteger(c) ? `${l}${o.PatternNumber}` : s.TBigInt(c) ? `${l}${o.PatternNumber}` : s.TString(c) ? `${l}${o.PatternString}` : s.TLiteral(c) ? `${l}${i(c.const.toString())}` : s.TBoolean(c) ? `${l}${o.PatternBoolean}` : e(`Unexpected Kind '${c[o.Kind]}'`);
    }
    function T(c) {
      return `^${c.map(l => a(l, "")).join("")}$`;
    }
    u.Create = T;
  })(Se || (o.TemplateLiteralPattern = Se = {}));
  var V;
  (function (u) {
    function e(i) {
      let a = Z.ParseExact(i.pattern);
      if (!G.Check(a)) {
        return o.Type.String();
      }
      let T = [...h.Generate(a)].map(c => o.Type.Literal(c));
      return o.Type.Union(T);
    }
    u.Resolve = e;
  })(V || (o.TemplateLiteralResolver = V = {}));
  var ce = class extends M {};
  o.TemplateLiteralParserError = ce;
  var Z;
  (function (u) {
    function e(d, b, R) {
      return d[b] === R && d.charCodeAt(b - 1) !== 92;
    }
    function i(d, b) {
      return e(d, b, "(");
    }
    function a(d, b) {
      return e(d, b, ")");
    }
    function T(d, b) {
      return e(d, b, "|");
    }
    function c(d) {
      if (!(i(d, 0) && a(d, d.length - 1))) {
        return false;
      }
      let b = 0;
      for (let R = 0; R < d.length; R++) {
        if (i(d, R)) {
          b += 1;
        }
        if (a(d, R)) {
          b -= 1;
        }
        if (b === 0 && R !== d.length - 1) {
          return false;
        }
      }
      return true;
    }
    function l(d) {
      return d.slice(1, d.length - 1);
    }
    function f(d) {
      let b = 0;
      for (let R = 0; R < d.length; R++) {
        if (i(d, R)) {
          b += 1;
        }
        if (a(d, R)) {
          b -= 1;
        }
        if (T(d, R) && b === 0) {
          return true;
        }
      }
      return false;
    }
    function g(d) {
      for (let b = 0; b < d.length; b++) {
        if (i(d, b)) {
          return true;
        }
      }
      return false;
    }
    function U(d) {
      let [b, R] = [0, 0];
      let j = [];
      for (let S = 0; S < d.length; S++) {
        if (i(d, S)) {
          b += 1;
        }
        if (a(d, S)) {
          b -= 1;
        }
        if (T(d, S) && b === 0) {
          let A = d.slice(R, S);
          if (A.length > 0) {
            j.push(y(A));
          }
          R = S + 1;
        }
      }
      let w = d.slice(R);
      if (w.length > 0) {
        j.push(y(w));
      }
      return j.length === 0 ? {
        type: "const",
        const: ""
      } : j.length === 1 ? j[0] : {
        type: "or",
        expr: j
      };
    }
    function I(d) {
      function b(w, S) {
        if (!i(w, S)) {
          throw new ce("TemplateLiteralParser: Index must point to open parens");
        }
        let A = 0;
        for (let K = S; K < w.length; K++) {
          if (i(w, K)) {
            A += 1;
          }
          if (a(w, K)) {
            A -= 1;
          }
          if (A === 0) {
            return [S, K];
          }
        }
        throw new ce("TemplateLiteralParser: Unclosed group parens in expression");
      }
      function R(w, S) {
        for (let A = S; A < w.length; A++) {
          if (i(w, A)) {
            return [S, A];
          }
        }
        return [S, w.length];
      }
      let j = [];
      for (let w = 0; w < d.length; w++) {
        if (i(d, w)) {
          let [S, A] = b(d, w);
          let K = d.slice(S, A + 1);
          j.push(y(K));
          w = A;
        } else {
          let [S, A] = R(d, w);
          let K = d.slice(S, A);
          if (K.length > 0) {
            j.push(y(K));
          }
          w = A - 1;
        }
      }
      return j.length === 0 ? {
        type: "const",
        const: ""
      } : j.length === 1 ? j[0] : {
        type: "and",
        expr: j
      };
    }
    function y(d) {
      return c(d) ? y(l(d)) : f(d) ? U(d) : g(d) ? I(d) : {
        type: "const",
        const: d
      };
    }
    u.Parse = y;
    function P(d) {
      return y(d.slice(1, d.length - 1));
    }
    u.ParseExact = P;
  })(Z || (o.TemplateLiteralParser = Z = {}));
  var Le = class extends M {};
  o.TemplateLiteralFiniteError = Le;
  var G;
  (function (u) {
    function e(l) {
      throw new Le(l);
    }
    function i(l) {
      return l.type === "or" && l.expr.length === 2 && l.expr[0].type === "const" && l.expr[0].const === "0" && l.expr[1].type === "const" && l.expr[1].const === "[1-9][0-9]*";
    }
    function a(l) {
      return l.type === "or" && l.expr.length === 2 && l.expr[0].type === "const" && l.expr[0].const === "true" && l.expr[1].type === "const" && l.expr[1].const === "false";
    }
    function T(l) {
      return l.type === "const" && l.const === ".*";
    }
    function c(l) {
      return a(l) ? true : i(l) || T(l) ? false : l.type === "and" ? l.expr.every(f => c(f)) : l.type === "or" ? l.expr.every(f => c(f)) : l.type === "const" ? true : e("Unknown expression type");
    }
    u.Check = c;
  })(G || (o.TemplateLiteralFinite = G = {}));
  var we = class extends M {};
  o.TemplateLiteralGeneratorError = we;
  var h;
  (function (u) {
    function* e(l) {
      if (l.length === 1) {
        return yield* l[0];
      }
      for (let f of l[0]) for (let g of e(l.slice(1))) yield `${f}${g}`;
    }
    function* i(l) {
      return yield* e(l.expr.map(f => [...c(f)]));
    }
    function* a(l) {
      for (let f of l.expr) yield* c(f);
    }
    function* T(l) {
      return yield l.const;
    }
    function* c(l) {
      return l.type === "and" ? yield* i(l) : l.type === "or" ? yield* a(l) : l.type === "const" ? yield* T(l) : (() => {
        throw new we("Unknown expression");
      })();
    }
    u.Generate = c;
  })(h || (o.TemplateLiteralGenerator = h = {}));
  var ze;
  (function (u) {
    function* e(c) {
      let l = c.trim().replace(/"|'/g, "");
      return l === "boolean" ? yield o.Type.Boolean() : l === "number" ? yield o.Type.Number() : l === "bigint" ? yield o.Type.BigInt() : l === "string" ? yield o.Type.String() : yield (() => {
        let f = l.split("|").map(g => o.Type.Literal(g.trim()));
        return f.length === 0 ? o.Type.Never() : f.length === 1 ? f[0] : o.Type.Union(f);
      })();
    }
    function* i(c) {
      if (c[1] !== "{") {
        let l = o.Type.Literal("$");
        let f = a(c.slice(1));
        return yield* [l, ...f];
      }
      for (let l = 2; l < c.length; l++) {
        if (c[l] === "}") {
          let f = e(c.slice(2, l));
          let g = a(c.slice(l + 1));
          return yield* [...f, ...g];
        }
      }
      yield o.Type.Literal(c);
    }
    function* a(c) {
      for (let l = 0; l < c.length; l++) {
        if (c[l] === "$") {
          let f = o.Type.Literal(c.slice(0, l));
          let g = i(c.slice(l));
          return yield* [f, ...g];
        }
      }
      yield o.Type.Literal(c);
    }
    function T(c) {
      return [...a(c)];
    }
    u.Parse = T;
  })(ze || (o.TemplateLiteralDslParser = ze = {}));
  var xe = class {
    constructor(e) {
      this.schema = e;
    }
    Decode(e) {
      return new ve(this.schema, e);
    }
  };
  o.TransformDecodeBuilder = xe;
  var ve = class {
    constructor(e, i) {
      this.schema = e;
      this.decode = i;
    }
    Encode(e) {
      let i = m.Type(this.schema);
      return s.TTransform(i) ? (() => {
        let c = {
          Encode: l => i[o.Transform].Encode(e(l)),
          Decode: l => this.decode(i[o.Transform].Decode(l))
        };
        return {
          ...i,
          [o.Transform]: c
        };
      })() : (() => {
        let a = {
          Decode: this.decode,
          Encode: e
        };
        return {
          ...i,
          [o.Transform]: a
        };
      })();
    }
  };
  o.TransformEncodeBuilder = ve;
  var Cn = 0;
  var Ae = class extends M {};
  o.TypeBuilderError = Ae;
  var Fe = class {
    Create(e) {
      return e;
    }
    Throw(e) {
      throw new Ae(e);
    }
    Discard(e, i) {
      return i.reduce((a, T) => {
        let {
          [T]: c,
          ...l
        } = a;
        return l;
      }, e);
    }
    Strict(e) {
      return JSON.parse(JSON.stringify(e));
    }
  };
  o.TypeBuilder = Fe;
  var le = class extends Fe {
    ReadonlyOptional(e) {
      return this.Readonly(this.Optional(e));
    }
    Readonly(e) {
      return {
        ...m.Type(e),
        [o.Readonly]: "Readonly"
      };
    }
    Optional(e) {
      return {
        ...m.Type(e),
        [o.Optional]: "Optional"
      };
    }
    Any(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Any"
      });
    }
    Array(e, i = {}) {
      return this.Create({
        ...i,
        [o.Kind]: "Array",
        type: "array",
        items: m.Type(e)
      });
    }
    Boolean(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Boolean",
        type: "boolean"
      });
    }
    Capitalize(e, i = {}) {
      return {
        ...Q.Map(m.Type(e), "Capitalize"),
        ...i
      };
    }
    Composite(e, i) {
      let a = o.Type.Intersect(e, {});
      let c = Re.ResolveKeys(a, {
        includePatterns: false
      }).reduce((l, f) => ({
        ...l,
        [f]: o.Type.Index(a, [f])
      }), {});
      return o.Type.Object(c, i);
    }
    Enum(e, i = {}) {
      if (O.IsUndefined(e)) {
        return this.Throw("Enum undefined or empty");
      }
      let a = Object.getOwnPropertyNames(e).filter(l => isNaN(l)).map(l => e[l]);
      let c = [...new Set(a)].map(l => o.Type.Literal(l));
      return this.Union(c, {
        ...i,
        [o.Hint]: "Enum"
      });
    }
    Extends(e, i, a, T, c = {}) {
      switch (z.Extends(e, i)) {
        case p.Union:
          return this.Union([m.Type(a, c), m.Type(T, c)]);
        case p.True:
          return m.Type(a, c);
        case p.False:
          return m.Type(T, c);
      }
    }
    Exclude(e, i, a = {}) {
      return s.TTemplateLiteral(e) ? this.Exclude(V.Resolve(e), i, a) : s.TTemplateLiteral(i) ? this.Exclude(e, V.Resolve(i), a) : s.TUnion(e) ? (() => {
        let T = e.anyOf.filter(c => z.Extends(c, i) === p.False);
        return T.length === 1 ? m.Type(T[0], a) : this.Union(T, a);
      })() : z.Extends(e, i) !== p.False ? this.Never(a) : m.Type(e, a);
    }
    Extract(e, i, a = {}) {
      return s.TTemplateLiteral(e) ? this.Extract(V.Resolve(e), i, a) : s.TTemplateLiteral(i) ? this.Extract(e, V.Resolve(i), a) : s.TUnion(e) ? (() => {
        let T = e.anyOf.filter(c => z.Extends(c, i) !== p.False);
        return T.length === 1 ? m.Type(T[0], a) : this.Union(T, a);
      })() : z.Extends(e, i) !== p.False ? m.Type(e, a) : this.Never(a);
    }
    Index(e, i, a = {}) {
      return s.TArray(e) && s.TNumber(i) ? m.Type(e.items, a) : s.TTuple(e) && s.TNumber(i) ? (() => {
        let c = (O.IsUndefined(e.items) ? [] : e.items).map(l => m.Type(l));
        return this.Union(c, a);
      })() : (() => {
        let T = ae.Resolve(i);
        let c = m.Type(e);
        return qe.Resolve(c, T, a);
      })();
    }
    Integer(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Integer",
        type: "integer"
      });
    }
    Intersect(e, i = {}) {
      if (e.length === 0) {
        return o.Type.Never();
      }
      if (e.length === 1) {
        return m.Type(e[0], i);
      }
      if (e.some(l => s.TTransform(l))) {
        this.Throw("Cannot intersect transform types");
      }
      let a = e.every(l => s.TObject(l));
      let T = m.Rest(e);
      let c = s.TSchema(i.unevaluatedProperties) ? {
        unevaluatedProperties: m.Type(i.unevaluatedProperties)
      } : {};
      return i.unevaluatedProperties === false || s.TSchema(i.unevaluatedProperties) || a ? this.Create({
        ...i,
        ...c,
        [o.Kind]: "Intersect",
        type: "object",
        allOf: T
      }) : this.Create({
        ...i,
        ...c,
        [o.Kind]: "Intersect",
        allOf: T
      });
    }
    KeyOf(e, i = {}) {
      return s.TRecord(e) ? (() => {
        let a = Object.getOwnPropertyNames(e.patternProperties)[0];
        return a === o.PatternNumberExact ? this.Number(i) : a === o.PatternStringExact ? this.String(i) : this.Throw("Unable to resolve key type from Record key pattern");
      })() : s.TTuple(e) ? (() => {
        let T = (O.IsUndefined(e.items) ? [] : e.items).map((c, l) => o.Type.Literal(l.toString()));
        return this.Union(T, i);
      })() : s.TArray(e) ? this.Number(i) : (() => {
        let a = Re.ResolveKeys(e, {
          includePatterns: false
        });
        if (a.length === 0) {
          return this.Never(i);
        }
        let T = a.map(c => this.Literal(c));
        return this.Union(T, i);
      })();
    }
    Literal(e, i = {}) {
      return this.Create({
        ...i,
        [o.Kind]: "Literal",
        const: e,
        type: typeof e
      });
    }
    Lowercase(e, i = {}) {
      return {
        ...Q.Map(m.Type(e), "Lowercase"),
        ...i
      };
    }
    Never(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Never",
        not: {}
      });
    }
    Not(e, i) {
      return this.Create({
        ...i,
        [o.Kind]: "Not",
        not: m.Type(e)
      });
    }
    Null(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Null",
        type: "null"
      });
    }
    Number(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Number",
        type: "number"
      });
    }
    Object(e, i = {}) {
      let a = Object.getOwnPropertyNames(e);
      let T = a.filter(g => s.TOptional(e[g]));
      let c = a.filter(g => !T.includes(g));
      let l = s.TSchema(i.additionalProperties) ? {
        additionalProperties: m.Type(i.additionalProperties)
      } : {};
      let f = a.reduce((g, U) => ({
        ...g,
        [U]: m.Type(e[U])
      }), {});
      return c.length > 0 ? this.Create({
        ...i,
        ...l,
        [o.Kind]: "Object",
        type: "object",
        properties: f,
        required: c
      }) : this.Create({
        ...i,
        ...l,
        [o.Kind]: "Object",
        type: "object",
        properties: f
      });
    }
    Omit(e, i, a = {}) {
      let T = ae.Resolve(i);
      return X.Map(this.Discard(m.Type(e), ["$id", o.Transform]), c => {
        if (O.IsArray(c.required)) {
          c.required = c.required.filter(l => !T.includes(l));
          if (c.required.length === 0) {
            delete c.required;
          }
        }
        for (let l of Object.getOwnPropertyNames(c.properties)) if (T.includes(l)) {
          delete c.properties[l];
        }
        return this.Create(c);
      }, a);
    }
    Partial(e, i = {}) {
      return X.Map(this.Discard(m.Type(e), ["$id", o.Transform]), a => {
        let T = Object.getOwnPropertyNames(a.properties).reduce((c, l) => ({
          ...c,
          [l]: this.Optional(a.properties[l])
        }), {});
        return this.Object(T, this.Discard(a, ["required"]));
      }, i);
    }
    Pick(e, i, a = {}) {
      let T = ae.Resolve(i);
      return X.Map(this.Discard(m.Type(e), ["$id", o.Transform]), c => {
        if (O.IsArray(c.required)) {
          c.required = c.required.filter(l => T.includes(l));
          if (c.required.length === 0) {
            delete c.required;
          }
        }
        for (let l of Object.getOwnPropertyNames(c.properties)) if (!T.includes(l)) {
          delete c.properties[l];
        }
        return this.Create(c);
      }, a);
    }
    Record(e, i, a = {}) {
      return s.TTemplateLiteral(e) ? (() => {
        let T = Z.ParseExact(e.pattern);
        return G.Check(T) ? this.Object([...h.Generate(T)].reduce((c, l) => ({
          ...c,
          [l]: m.Type(i)
        }), {}), a) : this.Create({
          ...a,
          [o.Kind]: "Record",
          type: "object",
          patternProperties: {
            [e.pattern]: m.Type(i)
          }
        });
      })() : s.TUnion(e) ? (() => {
        let T = He.Resolve(e);
        if (s.TUnionLiteral(T)) {
          let c = T.anyOf.reduce((l, f) => ({
            ...l,
            [f.const]: m.Type(i)
          }), {});
          return this.Object(c, {
            ...a,
            [o.Hint]: "Record"
          });
        } else {
          this.Throw("Record key of type union contains non-literal types");
        }
      })() : s.TLiteral(e) ? O.IsString(e.const) || O.IsNumber(e.const) ? this.Object({
        [e.const]: m.Type(i)
      }, a) : this.Throw("Record key of type literal is not of type string or number") : s.TInteger(e) || s.TNumber(e) ? this.Create({
        ...a,
        [o.Kind]: "Record",
        type: "object",
        patternProperties: {
          [o.PatternNumberExact]: m.Type(i)
        }
      }) : s.TString(e) ? (() => {
        let T = O.IsUndefined(e.pattern) ? o.PatternStringExact : e.pattern;
        return this.Create({
          ...a,
          [o.Kind]: "Record",
          type: "object",
          patternProperties: {
            [T]: m.Type(i)
          }
        });
      })() : this.Never();
    }
    Recursive(e, i = {}) {
      if (O.IsUndefined(i.$id)) {
        i.$id = `T${Cn++}`;
      }
      let a = e({
        [o.Kind]: "This",
        $ref: `${i.$id}`
      });
      a.$id = i.$id;
      return this.Create({
        ...i,
        [o.Hint]: "Recursive",
        ...a
      });
    }
    Ref(e, i = {}) {
      return O.IsString(e) ? this.Create({
        ...i,
        [o.Kind]: "Ref",
        $ref: e
      }) : (O.IsUndefined(e.$id) && this.Throw("Reference target type must specify an $id"), this.Create({
        ...i,
        [o.Kind]: "Ref",
        $ref: e.$id
      }));
    }
    Required(e, i = {}) {
      return X.Map(this.Discard(m.Type(e), ["$id", o.Transform]), a => {
        let T = Object.getOwnPropertyNames(a.properties).reduce((c, l) => ({
          ...c,
          [l]: this.Discard(a.properties[l], [o.Optional])
        }), {});
        return this.Object(T, a);
      }, i);
    }
    Rest(e) {
      return s.TTuple(e) && !O.IsUndefined(e.items) ? m.Rest(e.items) : s.TIntersect(e) ? m.Rest(e.allOf) : s.TUnion(e) ? m.Rest(e.anyOf) : [];
    }
    String(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "String",
        type: "string"
      });
    }
    TemplateLiteral(e, i = {}) {
      let a = O.IsString(e) ? Se.Create(ze.Parse(e)) : Se.Create(e);
      return this.Create({
        ...i,
        [o.Kind]: "TemplateLiteral",
        type: "string",
        pattern: a
      });
    }
    Transform(e) {
      return new xe(e);
    }
    Tuple(e, i = {}) {
      let [a, T, c] = [false, e.length, e.length];
      let l = m.Rest(e);
      let f = e.length > 0 ? {
        ...i,
        [o.Kind]: "Tuple",
        type: "array",
        items: l,
        additionalItems: a,
        minItems: T,
        maxItems: c
      } : {
        ...i,
        [o.Kind]: "Tuple",
        type: "array",
        minItems: T,
        maxItems: c
      };
      return this.Create(f);
    }
    Uncapitalize(e, i = {}) {
      return {
        ...Q.Map(m.Type(e), "Uncapitalize"),
        ...i
      };
    }
    Union(e, i = {}) {
      return s.TTemplateLiteral(e) ? V.Resolve(e) : (() => {
        if (e.length === 0) {
          return this.Never(i);
        }
        if (e.length === 1) {
          return this.Create(m.Type(e[0], i));
        }
        let T = m.Rest(e);
        return this.Create({
          ...i,
          [o.Kind]: "Union",
          anyOf: T
        });
      })();
    }
    Unknown(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Unknown"
      });
    }
    Unsafe(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: e[o.Kind] || "Unsafe"
      });
    }
    Uppercase(e, i = {}) {
      return {
        ...Q.Map(m.Type(e), "Uppercase"),
        ...i
      };
    }
  };
  o.JsonTypeBuilder = le;
  var $e = class extends le {
    AsyncIterator(e, i = {}) {
      return this.Create({
        ...i,
        [o.Kind]: "AsyncIterator",
        type: "AsyncIterator",
        items: m.Type(e)
      });
    }
    Awaited(e, i = {}) {
      let a = T => T.length > 0 ? (() => {
        let [c, ...l] = T;
        return [this.Awaited(c), ...a(l)];
      })() : T;
      return s.TIntersect(e) ? o.Type.Intersect(a(e.allOf)) : s.TUnion(e) ? o.Type.Union(a(e.anyOf)) : s.TPromise(e) ? this.Awaited(e.item) : m.Type(e, i);
    }
    BigInt(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "BigInt",
        type: "bigint"
      });
    }
    ConstructorParameters(e, i = {}) {
      return this.Tuple([...e.parameters], {
        ...i
      });
    }
    Constructor(e, i, a) {
      let [T, c] = [m.Rest(e), m.Type(i)];
      return this.Create({
        ...a,
        [o.Kind]: "Constructor",
        type: "Constructor",
        parameters: T,
        returns: c
      });
    }
    Date(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Date",
        type: "Date"
      });
    }
    Function(e, i, a) {
      let [T, c] = [m.Rest(e), m.Type(i)];
      return this.Create({
        ...a,
        [o.Kind]: "Function",
        type: "Function",
        parameters: T,
        returns: c
      });
    }
    InstanceType(e, i = {}) {
      return m.Type(e.returns, i);
    }
    Iterator(e, i = {}) {
      return this.Create({
        ...i,
        [o.Kind]: "Iterator",
        type: "Iterator",
        items: m.Type(e)
      });
    }
    Parameters(e, i = {}) {
      return this.Tuple(e.parameters, {
        ...i
      });
    }
    Promise(e, i = {}) {
      return this.Create({
        ...i,
        [o.Kind]: "Promise",
        type: "Promise",
        item: m.Type(e)
      });
    }
    RegExp(e, i = {}) {
      let a = O.IsString(e) ? e : e.source;
      return this.Create({
        ...i,
        [o.Kind]: "String",
        type: "string",
        pattern: a
      });
    }
    RegEx(e, i = {}) {
      return this.RegExp(e, i);
    }
    ReturnType(e, i = {}) {
      return m.Type(e.returns, i);
    }
    Symbol(e) {
      return this.Create({
        ...e,
        [o.Kind]: "Symbol",
        type: "symbol"
      });
    }
    Undefined(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Undefined",
        type: "undefined"
      });
    }
    Uint8Array(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Uint8Array",
        type: "Uint8Array"
      });
    }
    Void(e = {}) {
      return this.Create({
        ...e,
        [o.Kind]: "Void",
        type: "void"
      });
    }
  };
  o.JavaScriptTypeBuilder = $e;
  o.JsonType = new le();
  o.Type = new $e();
});
var Tn = Xe((Xn, ln) => {
  ln.exports = Te;
  Te.flatten = Te;
  Te.unflatten = cn;
  function an(u) {
    return u;
  }
  function Te(u, e) {
    e = e || {};
    let i = e.delimiter || ".";
    let a = e.maxDepth;
    let T = e.transformKey || an;
    let c = {};
    function l(f, g, U) {
      U = U || 1;
      Object.keys(f).forEach(function (I) {
        let y = f[I];
        let P = e.safe && Array.isArray(y);
        let d = Object.prototype.toString.call(y);
        let b = y && y.constructor && typeof y.constructor.isBuffer == "function" && y.constructor.isBuffer(y);
        let R = d === "[object Object]" || d === "[object Array]";
        let j = g ? g + i + T(I) : T(I);
        if (!P && !b && R && Object.keys(y).length && (!e.maxDepth || U < a)) {
          return l(y, j, U + 1);
        }
        c[j] = y;
      });
    }
    l(u);
    return c;
  }
  function cn(u, e) {
    e = e || {};
    let i = e.delimiter || ".";
    let a = e.overwrite || false;
    let T = e.transformKey || an;
    let c = {};
    if (u && u.constructor && typeof u.constructor.isBuffer == "function" && u.constructor.isBuffer(u) || Object.prototype.toString.call(u) !== "[object Object]") {
      return u;
    }
    function f(I) {
      let y = Number(I);
      return isNaN(y) || I.indexOf(".") !== -1 || e.object ? I : y;
    }
    function g(I, y, P) {
      return Object.keys(P).reduce(function (d, b) {
        d[I + i + b] = P[b];
        return d;
      }, y);
    }
    function U(I) {
      let y = Object.prototype.toString.call(I);
      let P = y === "[object Array]";
      let d = y === "[object Object]";
      if (I) {
        if (P) {
          return !I.length;
        }
        if (d) {
          return !Object.keys(I).length;
        }
      } else {
        return true;
      }
    }
    u = Object.keys(u).reduce(function (I, y) {
      let P = Object.prototype.toString.call(u[y]);
      return !(P === "[object Object]" || P === "[object Array]") || U(u[y]) ? (I[y] = u[y], I) : g(y, I, Te(u[y], e));
    }, {});
    Object.keys(u).forEach(function (I) {
      let y = I.split(i).map(T);
      let P = f(y.shift());
      let d = f(y[0]);
      let b = c;
      for (; d !== undefined;) {
        if (P === "__proto__") {
          return;
        }
        let R = Object.prototype.toString.call(b[P]);
        let j = R === "[object Object]" || R === "[object Array]";
        if (!a && !j && typeof b[P] < "u") {
          return;
        }
        if (a && !j || !a && b[P] == null) {
          b[P] = typeof d == "number" && !e.object ? [] : {};
        }
        b = b[P];
        if (y.length > 0) {
          P = f(y.shift());
          d = f(y[0]);
        }
      }
      b[P] = cn(u[I], e);
    });
    return c;
  }
});
var he = {
  en: "JSON translation files"
};
var en = {
  en: "This plugin enables using JSON files for messages. It is not library specific and can be used with any framework."
};
var k = Ze(rn(), 1);
var on = k.Type.String({
  pattern: "^(\\./|\\../|/)[^*]*\\{languageTag\\}[^*]*\\.json",
  title: "Path to language files",
  description: "Specify the pathPattern to locate language files in your repository. It must include `{languageTag}` and end with `.json`.",
  examples: ["./{languageTag}/file.json", "../folder/{languageTag}/file.json", "./{languageTag}.json"]
});
var sn = k.Type.Object({
  pathPattern: k.Type.Union([on, k.Type.Record(k.Type.String({
    pattern: "^[^.]+$",
    description: "Dots are not allowd ",
    examples: ["website", "app", "homepage"]
  }), on)]),
  variableReferencePattern: k.Type.Optional(k.Type.Array(k.Type.String(), {
    title: "Variable reference pattern",
    description: "The pattern to match content in the messages. You can define an opening and closing pattern. The closing pattern is not required. The default is '{{' and '}}'.",
    examples: ["{ and }", "{{ and }}", "< and >", "@:"]
  })),
  ignore: k.Type.Optional(k.Type.Array(k.Type.String(), {
    title: "Ignore paths",
    description: "Set a path that should be ignored."
  }))
});
function ee(u, e, i) {
  return u.replace(new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), i);
}
function Kn(u) {
  return u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var Ce = Ze(Tn(), 1);
var En = u => {
  let e = pn(u, 0);
  if (e === undefined || !(u[e] === "{" || u[e] === "[")) {
    return;
  }
  let i = pn(u, e + 1);
  if (i !== undefined) {
    return Dn(u, e, i);
  }
};
var pn = (u, e) => {
  for (let i = e; i < u.length; i += 1) {
    let a = u[i];
    if (!(a === " " || a === "	" || a === `
` || a === "\r")) {
      return i;
    }
  }
};
var Bn = u => u === " " || u === "	" || u === `
` || u === "\r";
var kn = u => u === "{" || u === "[";
var Dn = (u, e, i) => {
  let a;
  for (let T = i - 1; T > e; T -= 1) {
    let c = u[T];
    if (c === "\r") {
      return;
    }
    if (c === `
`) {
      return a === undefined ? 0 : a[0] === " " ? a.length : a;
    }
    if (a === undefined) {
      a = c;
    } else if (a[0] === c) {
      a += c;
    } else {
      return;
    }
  }
};
var Mn = u => u === undefined ? 0 : u[0] === " " ? u.length : u;
var _e = u => {
  let e = u.endsWith(`
`);
  let i = En(u);
  return (a, T) => JSON.stringify(a, T, i) + (e ? `
` : "");
};
var On;
var We = false;
var bn = {
  id: "plugin.inlang.json",
  displayName: he,
  description: en,
  settingsSchema: sn,
  loadMessages: async ({
    settings: u,
    nodeishFs: e
  }) => (u["plugin.inlang.json"].variableReferencePattern = u["plugin.inlang.json"].variableReferencePattern || ["{", "}"], Vn({
    nodeishFs: e,
    pluginSettings: u["plugin.inlang.json"],
    languageTags: u.languageTags,
    sourceLanguageTag: u.sourceLanguageTag
  })),
  saveMessages: async ({
    messages: u,
    settings: e,
    nodeishFs: i
  }) => (e["plugin.inlang.json"].variableReferencePattern = e["plugin.inlang.json"].variableReferencePattern || ["{", "}"], qn({
    nodeishFs: i,
    pluginSettings: e["plugin.inlang.json"],
    messages: u
  }))
};
async function Vn(u) {
  let e = [];
  for (let i of Jn(u.languageTags, u.sourceLanguageTag)) if (typeof u.pluginSettings.pathPattern != "string") {
    for (let [a, T] of Object.entries(u.pluginSettings.pathPattern)) {
      let c = await fn(T, i, u.sourceLanguageTag, u.nodeishFs);
      for (let [l, f] of Object.entries(c)) if (Object.keys(f).length !== 0) {
        let g = a + "." + l.replace(new RegExp("u002E".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), ".");
        yn(e, g, i, f, u.pluginSettings);
      }
    }
  } else {
    let a = await fn(u.pluginSettings.pathPattern, i, u.sourceLanguageTag, u.nodeishFs);
    for (let [T, c] of Object.entries(a)) if (Object.keys(c).length !== 0) {
      yn(e, T.replace(new RegExp("u002E".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "."), i, c, u.pluginSettings);
    }
  }
  return e;
}
async function fn(u, e, i, a) {
  let T = u.replace("{languageTag}", e);
  try {
    let c = await a.readFile(T, {
      encoding: "utf-8"
    });
    if (i === e) {
      On = _e(c);
    }
    let l = JSON.parse(c);
    if (Object.values(l).some(g => typeof g == "object")) {
      We = true;
    }
    return We ? (0, Ce.flatten)(l, {
      transformKey: function (g) {
        return g.replace(new RegExp(".".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "u002E");
      }
    }) : l;
  } catch (c) {
    if (c.code === "FileNotFound" || c.code === "ENOENT") {
      return {};
    }
    throw c;
  }
}
var Jn = (u, e) => {
  let i = u.filter(a => a !== e);
  i.unshift(e);
  return i;
};
var yn = (u, e, i, a, T) => {
  let c = u.findIndex(l => l.id === e);
  if (c !== -1) {
    let l = {
      languageTag: i,
      match: [],
      pattern: gn(a, T.variableReferencePattern)
    };
    u[c]?.variants.push(l);
  } else {
    let l = {
      id: e,
      alias: {},
      selectors: [],
      variants: []
    };
    l.variants = [{
      languageTag: i,
      match: [],
      pattern: gn(a, T.variableReferencePattern)
    }];
    u.push(l);
  }
};
function gn(u, e) {
  let i = e[1] ? new RegExp(`(\\${e[0]}[^\\${e[1]}]+\\${e[1]})`, "g") : new RegExp(`(${e}\\w+)`, "g");
  return u.split(i).filter(T => T !== "").map(T => i.test(T) && e[0] ? {
    type: "VariableReference",
    name: e[1] ? T.slice(e[0].length, -e[1].length) : T.slice(e[0].length)
  } : {
    type: "Text",
    value: T
  });
}
async function qn(u) {
  if (typeof u.pluginSettings.pathPattern == "object") {
    let e = {};
    for (let i of u.messages) for (let a of i.variants) {
      let T = i.id.includes(".") ? i.id.split(".")[0] : Object.keys(u.pluginSettings.pathPattern)[0];
      let c = i.id.replace(T + ".", "");
      e[a.languageTag] ??= {};
      e[a.languageTag][T] ??= {};
      e[a.languageTag][T][c] = a.pattern;
    }
    for (let [i, a] of Object.entries(e)) {
      for (let T of Object.values(u.pluginSettings.pathPattern)) {
        let c = T.replace("{languageTag}", i).split("/").slice(0, -1).join("/");
        try {
          await u.nodeishFs.readdir(c);
        } catch {
          await u.nodeishFs.mkdir(c);
        }
      }
      for (let [T, c] of Object.entries(a)) {
        let l = u.pluginSettings.pathPattern[T].replace("{languageTag}", i);
        await u.nodeishFs.writeFile(l, In(c, u.pluginSettings.variableReferencePattern));
      }
    }
  } else {
    let e = {};
    for (let i of u.messages) for (let a of i.variants) {
      e[a.languageTag] ??= {};
      e[a.languageTag][i.id] = a.pattern;
    }
    for (let [i, a] of Object.entries(e)) {
      let T = u.pluginSettings.pathPattern.replace("{languageTag}", i);
      try {
        await u.nodeishFs.readdir(T.split("/").slice(0, -1).join("/"));
      } catch {
        await u.nodeishFs.mkdir(T.split("/").slice(0, -1).join("/"), {
          recursive: true
        });
      }
      await u.nodeishFs.writeFile(T, In(a, u.pluginSettings.variableReferencePattern));
    }
  }
}
function In(u, e) {
  let i = {};
  for (let [a, T] of Object.entries(u)) {
    let c = a.replace(new RegExp("..".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "u002E.");
    if (c.slice(-1) === ".") {
      c = c.replace(/.$/, "u002E");
    }
    i[c] = Hn(T, e);
  }
  if (We) {
    0;
    i = Ce.unflatten(i, {
      object: true
    });
  }
  return On(i).replace(new RegExp("u002E".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), ".");
}
function Hn(u, e) {
  let i = [];
  for (let a of u) switch (a.type) {
    case "Text":
      i.push(a.value);
      break;
    case "VariableReference":
      i.push(e[1] ? `${e[0]}${a.name}${e[1]}` : `${e[0]}${a.name}`);
      break;
    default:
      throw new Error(`Unknown message pattern element of type: ${a?.type}`);
  }
  return i.join("");
}
export { bn as default };
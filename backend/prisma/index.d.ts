
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model cities
 * 
 */
export type cities = {
  id: number
  name: string
  postcode: string
}

/**
 * Model branches
 * 
 */
export type branches = {
  id: number
  name: string
  address: string
  city_id: number
  branch_lat: string
  branch_long: string
}

/**
 * Model userTypes
 * 
 */
export type userTypes = {
  id: number
  type: string
}

/**
 * Model users
 * 
 */
export type users = {
  id: string
  name: string
  email: string
  password: string
  phone: string
  userType_id: number
  branch_id: number | null
}

/**
 * Model drivers
 * 
 */
export type drivers = {
  user_id: string
  truck_id: number | null
}

/**
 * Model trucks
 * 
 */
export type trucks = {
  id: number
  license_plate: string
  brand: string
  max_weight: number
  available: boolean
  driver_id: string | null
  branch_id: number
}

/**
 * Model parcels
 * 
 */
export type parcels = {
  id: string
  name: string
  content: string
  volume_weight: number
  admission_date: Date
  client_id: string
  shipment_id: string | null
}

/**
 * Model shipments
 * 
 */
export type shipments = {
  id: string
  status: string
  arrival_time: Date | null
  departure_time: Date
  weight: Prisma.Decimal
  truck_id: number
  driver_id: string
  destination_branch: number
  departure_branch: number
  parcel_id: string | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cities
 * const cities = await prisma.cities.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cities
   * const cities = await prisma.cities.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.cities`: Exposes CRUD operations for the **cities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.cities.findMany()
    * ```
    */
  get cities(): Prisma.citiesDelegate<GlobalReject>;

  /**
   * `prisma.branches`: Exposes CRUD operations for the **branches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branches.findMany()
    * ```
    */
  get branches(): Prisma.branchesDelegate<GlobalReject>;

  /**
   * `prisma.userTypes`: Exposes CRUD operations for the **userTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTypes
    * const userTypes = await prisma.userTypes.findMany()
    * ```
    */
  get userTypes(): Prisma.userTypesDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.drivers`: Exposes CRUD operations for the **drivers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.drivers.findMany()
    * ```
    */
  get drivers(): Prisma.driversDelegate<GlobalReject>;

  /**
   * `prisma.trucks`: Exposes CRUD operations for the **trucks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trucks
    * const trucks = await prisma.trucks.findMany()
    * ```
    */
  get trucks(): Prisma.trucksDelegate<GlobalReject>;

  /**
   * `prisma.parcels`: Exposes CRUD operations for the **parcels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parcels
    * const parcels = await prisma.parcels.findMany()
    * ```
    */
  get parcels(): Prisma.parcelsDelegate<GlobalReject>;

  /**
   * `prisma.shipments`: Exposes CRUD operations for the **shipments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipments.findMany()
    * ```
    */
  get shipments(): Prisma.shipmentsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    cities: 'cities',
    branches: 'branches',
    userTypes: 'userTypes',
    users: 'users',
    drivers: 'drivers',
    trucks: 'trucks',
    parcels: 'parcels',
    shipments: 'shipments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CitiesCountOutputType
   */


  export type CitiesCountOutputType = {
    branches: number
  }

  export type CitiesCountOutputTypeSelect = {
    branches?: boolean
  }

  export type CitiesCountOutputTypeGetPayload<S extends boolean | null | undefined | CitiesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CitiesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CitiesCountOutputTypeArgs)
    ? CitiesCountOutputType 
    : S extends { select: any } & (CitiesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CitiesCountOutputType ? CitiesCountOutputType[P] : never
  } 
      : CitiesCountOutputType




  // Custom InputTypes

  /**
   * CitiesCountOutputType without action
   */
  export type CitiesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CitiesCountOutputType
     * 
    **/
    select?: CitiesCountOutputTypeSelect | null
  }



  /**
   * Count Type BranchesCountOutputType
   */


  export type BranchesCountOutputType = {
    users: number
    trucks: number
    shipments_destination: number
    shipments_departure: number
  }

  export type BranchesCountOutputTypeSelect = {
    users?: boolean
    trucks?: boolean
    shipments_destination?: boolean
    shipments_departure?: boolean
  }

  export type BranchesCountOutputTypeGetPayload<S extends boolean | null | undefined | BranchesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BranchesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BranchesCountOutputTypeArgs)
    ? BranchesCountOutputType 
    : S extends { select: any } & (BranchesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BranchesCountOutputType ? BranchesCountOutputType[P] : never
  } 
      : BranchesCountOutputType




  // Custom InputTypes

  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BranchesCountOutputType
     * 
    **/
    select?: BranchesCountOutputTypeSelect | null
  }



  /**
   * Count Type UserTypesCountOutputType
   */


  export type UserTypesCountOutputType = {
    users: number
  }

  export type UserTypesCountOutputTypeSelect = {
    users?: boolean
  }

  export type UserTypesCountOutputTypeGetPayload<S extends boolean | null | undefined | UserTypesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserTypesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserTypesCountOutputTypeArgs)
    ? UserTypesCountOutputType 
    : S extends { select: any } & (UserTypesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserTypesCountOutputType ? UserTypesCountOutputType[P] : never
  } 
      : UserTypesCountOutputType




  // Custom InputTypes

  /**
   * UserTypesCountOutputType without action
   */
  export type UserTypesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserTypesCountOutputType
     * 
    **/
    select?: UserTypesCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    clients: number
  }

  export type UsersCountOutputTypeSelect = {
    clients?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     * 
    **/
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Count Type DriversCountOutputType
   */


  export type DriversCountOutputType = {
    trucks: number
  }

  export type DriversCountOutputTypeSelect = {
    trucks?: boolean
  }

  export type DriversCountOutputTypeGetPayload<S extends boolean | null | undefined | DriversCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DriversCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DriversCountOutputTypeArgs)
    ? DriversCountOutputType 
    : S extends { select: any } & (DriversCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DriversCountOutputType ? DriversCountOutputType[P] : never
  } 
      : DriversCountOutputType




  // Custom InputTypes

  /**
   * DriversCountOutputType without action
   */
  export type DriversCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DriversCountOutputType
     * 
    **/
    select?: DriversCountOutputTypeSelect | null
  }



  /**
   * Count Type ShipmentsCountOutputType
   */


  export type ShipmentsCountOutputType = {
    parcels: number
  }

  export type ShipmentsCountOutputTypeSelect = {
    parcels?: boolean
  }

  export type ShipmentsCountOutputTypeGetPayload<S extends boolean | null | undefined | ShipmentsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ShipmentsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ShipmentsCountOutputTypeArgs)
    ? ShipmentsCountOutputType 
    : S extends { select: any } & (ShipmentsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ShipmentsCountOutputType ? ShipmentsCountOutputType[P] : never
  } 
      : ShipmentsCountOutputType




  // Custom InputTypes

  /**
   * ShipmentsCountOutputType without action
   */
  export type ShipmentsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShipmentsCountOutputType
     * 
    **/
    select?: ShipmentsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model cities
   */


  export type AggregateCities = {
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  export type CitiesAvgAggregateOutputType = {
    id: number | null
  }

  export type CitiesSumAggregateOutputType = {
    id: number | null
  }

  export type CitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    postcode: string | null
  }

  export type CitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    postcode: string | null
  }

  export type CitiesCountAggregateOutputType = {
    id: number
    name: number
    postcode: number
    _all: number
  }


  export type CitiesAvgAggregateInputType = {
    id?: true
  }

  export type CitiesSumAggregateInputType = {
    id?: true
  }

  export type CitiesMinAggregateInputType = {
    id?: true
    name?: true
    postcode?: true
  }

  export type CitiesMaxAggregateInputType = {
    id?: true
    name?: true
    postcode?: true
  }

  export type CitiesCountAggregateInputType = {
    id?: true
    name?: true
    postcode?: true
    _all?: true
  }

  export type CitiesAggregateArgs = {
    /**
     * Filter which cities to aggregate.
     * 
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     * 
    **/
    orderBy?: Enumerable<citiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cities
    **/
    _count?: true | CitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitiesMaxAggregateInputType
  }

  export type GetCitiesAggregateType<T extends CitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateCities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCities[P]>
      : GetScalarType<T[P], AggregateCities[P]>
  }




  export type CitiesGroupByArgs = {
    where?: citiesWhereInput
    orderBy?: Enumerable<citiesOrderByWithAggregationInput>
    by: Array<CitiesScalarFieldEnum>
    having?: citiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitiesCountAggregateInputType | true
    _avg?: CitiesAvgAggregateInputType
    _sum?: CitiesSumAggregateInputType
    _min?: CitiesMinAggregateInputType
    _max?: CitiesMaxAggregateInputType
  }


  export type CitiesGroupByOutputType = {
    id: number
    name: string
    postcode: string
    _count: CitiesCountAggregateOutputType | null
    _avg: CitiesAvgAggregateOutputType | null
    _sum: CitiesSumAggregateOutputType | null
    _min: CitiesMinAggregateOutputType | null
    _max: CitiesMaxAggregateOutputType | null
  }

  type GetCitiesGroupByPayload<T extends CitiesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitiesGroupByOutputType[P]>
            : GetScalarType<T[P], CitiesGroupByOutputType[P]>
        }
      >
    >


  export type citiesSelect = {
    id?: boolean
    name?: boolean
    postcode?: boolean
    branches?: boolean | branchesFindManyArgs
    _count?: boolean | CitiesCountOutputTypeArgs
  }


  export type citiesInclude = {
    branches?: boolean | branchesFindManyArgs
    _count?: boolean | CitiesCountOutputTypeArgs
  } 

  export type citiesGetPayload<S extends boolean | null | undefined | citiesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? cities :
    S extends undefined ? never :
    S extends { include: any } & (citiesArgs | citiesFindManyArgs)
    ? cities  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branches' ? Array < branchesGetPayload<S['include'][P]>>  :
        P extends '_count' ? CitiesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (citiesArgs | citiesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branches' ? Array < branchesGetPayload<S['select'][P]>>  :
        P extends '_count' ? CitiesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof cities ? cities[P] : never
  } 
      : cities


  type citiesCountArgs = Merge<
    Omit<citiesFindManyArgs, 'select' | 'include'> & {
      select?: CitiesCountAggregateInputType | true
    }
  >

  export interface citiesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cities that matches the filter.
     * @param {citiesFindUniqueArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends citiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, citiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cities'> extends True ? Prisma__citiesClient<citiesGetPayload<T>> : Prisma__citiesClient<citiesGetPayload<T> | null, null>

    /**
     * Find one Cities that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {citiesFindUniqueOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends citiesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, citiesFindUniqueOrThrowArgs>
    ): Prisma__citiesClient<citiesGetPayload<T>>

    /**
     * Find the first Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends citiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, citiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cities'> extends True ? Prisma__citiesClient<citiesGetPayload<T>> : Prisma__citiesClient<citiesGetPayload<T> | null, null>

    /**
     * Find the first Cities that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindFirstOrThrowArgs} args - Arguments to find a Cities
     * @example
     * // Get one Cities
     * const cities = await prisma.cities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends citiesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, citiesFindFirstOrThrowArgs>
    ): Prisma__citiesClient<citiesGetPayload<T>>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.cities.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.cities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citiesWithIdOnly = await prisma.cities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends citiesFindManyArgs>(
      args?: SelectSubset<T, citiesFindManyArgs>
    ): PrismaPromise<Array<citiesGetPayload<T>>>

    /**
     * Create a Cities.
     * @param {citiesCreateArgs} args - Arguments to create a Cities.
     * @example
     * // Create one Cities
     * const Cities = await prisma.cities.create({
     *   data: {
     *     // ... data to create a Cities
     *   }
     * })
     * 
    **/
    create<T extends citiesCreateArgs>(
      args: SelectSubset<T, citiesCreateArgs>
    ): Prisma__citiesClient<citiesGetPayload<T>>

    /**
     * Create many Cities.
     *     @param {citiesCreateManyArgs} args - Arguments to create many Cities.
     *     @example
     *     // Create many Cities
     *     const cities = await prisma.cities.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends citiesCreateManyArgs>(
      args?: SelectSubset<T, citiesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cities.
     * @param {citiesDeleteArgs} args - Arguments to delete one Cities.
     * @example
     * // Delete one Cities
     * const Cities = await prisma.cities.delete({
     *   where: {
     *     // ... filter to delete one Cities
     *   }
     * })
     * 
    **/
    delete<T extends citiesDeleteArgs>(
      args: SelectSubset<T, citiesDeleteArgs>
    ): Prisma__citiesClient<citiesGetPayload<T>>

    /**
     * Update one Cities.
     * @param {citiesUpdateArgs} args - Arguments to update one Cities.
     * @example
     * // Update one Cities
     * const cities = await prisma.cities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends citiesUpdateArgs>(
      args: SelectSubset<T, citiesUpdateArgs>
    ): Prisma__citiesClient<citiesGetPayload<T>>

    /**
     * Delete zero or more Cities.
     * @param {citiesDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.cities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends citiesDeleteManyArgs>(
      args?: SelectSubset<T, citiesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const cities = await prisma.cities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends citiesUpdateManyArgs>(
      args: SelectSubset<T, citiesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cities.
     * @param {citiesUpsertArgs} args - Arguments to update or create a Cities.
     * @example
     * // Update or create a Cities
     * const cities = await prisma.cities.upsert({
     *   create: {
     *     // ... data to create a Cities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cities we want to update
     *   }
     * })
    **/
    upsert<T extends citiesUpsertArgs>(
      args: SelectSubset<T, citiesUpsertArgs>
    ): Prisma__citiesClient<citiesGetPayload<T>>

    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {citiesCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.cities.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends citiesCountArgs>(
      args?: Subset<T, citiesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitiesAggregateArgs>(args: Subset<T, CitiesAggregateArgs>): PrismaPromise<GetCitiesAggregateType<T>>

    /**
     * Group by Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitiesGroupByArgs['orderBy'] }
        : { orderBy?: CitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitiesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__citiesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    branches<T extends branchesFindManyArgs= {}>(args?: Subset<T, branchesFindManyArgs>): PrismaPromise<Array<branchesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * cities base type for findUnique actions
   */
  export type citiesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * Filter, which cities to fetch.
     * 
    **/
    where: citiesWhereUniqueInput
  }

  /**
   * cities: findUnique
   */
  export interface citiesFindUniqueArgs extends citiesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cities findUniqueOrThrow
   */
  export type citiesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * Filter, which cities to fetch.
     * 
    **/
    where: citiesWhereUniqueInput
  }


  /**
   * cities base type for findFirst actions
   */
  export type citiesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * Filter, which cities to fetch.
     * 
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     * 
    **/
    orderBy?: Enumerable<citiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     * 
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     * 
    **/
    distinct?: Enumerable<CitiesScalarFieldEnum>
  }

  /**
   * cities: findFirst
   */
  export interface citiesFindFirstArgs extends citiesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cities findFirstOrThrow
   */
  export type citiesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * Filter, which cities to fetch.
     * 
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     * 
    **/
    orderBy?: Enumerable<citiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cities.
     * 
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cities.
     * 
    **/
    distinct?: Enumerable<CitiesScalarFieldEnum>
  }


  /**
   * cities findMany
   */
  export type citiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * Filter, which cities to fetch.
     * 
    **/
    where?: citiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cities to fetch.
     * 
    **/
    orderBy?: Enumerable<citiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cities.
     * 
    **/
    cursor?: citiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cities from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cities.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CitiesScalarFieldEnum>
  }


  /**
   * cities create
   */
  export type citiesCreateArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * The data needed to create a cities.
     * 
    **/
    data: XOR<citiesCreateInput, citiesUncheckedCreateInput>
  }


  /**
   * cities createMany
   */
  export type citiesCreateManyArgs = {
    /**
     * The data used to create many cities.
     * 
    **/
    data: Enumerable<citiesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * cities update
   */
  export type citiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * The data needed to update a cities.
     * 
    **/
    data: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
    /**
     * Choose, which cities to update.
     * 
    **/
    where: citiesWhereUniqueInput
  }


  /**
   * cities updateMany
   */
  export type citiesUpdateManyArgs = {
    /**
     * The data used to update cities.
     * 
    **/
    data: XOR<citiesUpdateManyMutationInput, citiesUncheckedUpdateManyInput>
    /**
     * Filter which cities to update
     * 
    **/
    where?: citiesWhereInput
  }


  /**
   * cities upsert
   */
  export type citiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * The filter to search for the cities to update in case it exists.
     * 
    **/
    where: citiesWhereUniqueInput
    /**
     * In case the cities found by the `where` argument doesn't exist, create a new cities with this data.
     * 
    **/
    create: XOR<citiesCreateInput, citiesUncheckedCreateInput>
    /**
     * In case the cities was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<citiesUpdateInput, citiesUncheckedUpdateInput>
  }


  /**
   * cities delete
   */
  export type citiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
    /**
     * Filter which cities to delete.
     * 
    **/
    where: citiesWhereUniqueInput
  }


  /**
   * cities deleteMany
   */
  export type citiesDeleteManyArgs = {
    /**
     * Filter which cities to delete
     * 
    **/
    where?: citiesWhereInput
  }


  /**
   * cities without action
   */
  export type citiesArgs = {
    /**
     * Select specific fields to fetch from the cities
     * 
    **/
    select?: citiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: citiesInclude | null
  }



  /**
   * Model branches
   */


  export type AggregateBranches = {
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  export type BranchesAvgAggregateOutputType = {
    id: number | null
    city_id: number | null
  }

  export type BranchesSumAggregateOutputType = {
    id: number | null
    city_id: number | null
  }

  export type BranchesMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city_id: number | null
    branch_lat: string | null
    branch_long: string | null
  }

  export type BranchesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    city_id: number | null
    branch_lat: string | null
    branch_long: string | null
  }

  export type BranchesCountAggregateOutputType = {
    id: number
    name: number
    address: number
    city_id: number
    branch_lat: number
    branch_long: number
    _all: number
  }


  export type BranchesAvgAggregateInputType = {
    id?: true
    city_id?: true
  }

  export type BranchesSumAggregateInputType = {
    id?: true
    city_id?: true
  }

  export type BranchesMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city_id?: true
    branch_lat?: true
    branch_long?: true
  }

  export type BranchesMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city_id?: true
    branch_lat?: true
    branch_long?: true
  }

  export type BranchesCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    city_id?: true
    branch_lat?: true
    branch_long?: true
    _all?: true
  }

  export type BranchesAggregateArgs = {
    /**
     * Filter which branches to aggregate.
     * 
    **/
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     * 
    **/
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned branches
    **/
    _count?: true | BranchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchesMaxAggregateInputType
  }

  export type GetBranchesAggregateType<T extends BranchesAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches[P]>
      : GetScalarType<T[P], AggregateBranches[P]>
  }




  export type BranchesGroupByArgs = {
    where?: branchesWhereInput
    orderBy?: Enumerable<branchesOrderByWithAggregationInput>
    by: Array<BranchesScalarFieldEnum>
    having?: branchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchesCountAggregateInputType | true
    _avg?: BranchesAvgAggregateInputType
    _sum?: BranchesSumAggregateInputType
    _min?: BranchesMinAggregateInputType
    _max?: BranchesMaxAggregateInputType
  }


  export type BranchesGroupByOutputType = {
    id: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  type GetBranchesGroupByPayload<T extends BranchesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BranchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchesGroupByOutputType[P]>
            : GetScalarType<T[P], BranchesGroupByOutputType[P]>
        }
      >
    >


  export type branchesSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    city_id?: boolean
    branch_lat?: boolean
    branch_long?: boolean
    users?: boolean | usersFindManyArgs
    trucks?: boolean | trucksFindManyArgs
    shipments_destination?: boolean | shipmentsFindManyArgs
    shipments_departure?: boolean | shipmentsFindManyArgs
    city?: boolean | citiesArgs
    _count?: boolean | BranchesCountOutputTypeArgs
  }


  export type branchesInclude = {
    users?: boolean | usersFindManyArgs
    trucks?: boolean | trucksFindManyArgs
    shipments_destination?: boolean | shipmentsFindManyArgs
    shipments_departure?: boolean | shipmentsFindManyArgs
    city?: boolean | citiesArgs
    _count?: boolean | BranchesCountOutputTypeArgs
  } 

  export type branchesGetPayload<S extends boolean | null | undefined | branchesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? branches :
    S extends undefined ? never :
    S extends { include: any } & (branchesArgs | branchesFindManyArgs)
    ? branches  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends 'trucks' ? Array < trucksGetPayload<S['include'][P]>>  :
        P extends 'shipments_destination' ? Array < shipmentsGetPayload<S['include'][P]>>  :
        P extends 'shipments_departure' ? Array < shipmentsGetPayload<S['include'][P]>>  :
        P extends 'city' ? citiesGetPayload<S['include'][P]> :
        P extends '_count' ? BranchesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (branchesArgs | branchesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends 'trucks' ? Array < trucksGetPayload<S['select'][P]>>  :
        P extends 'shipments_destination' ? Array < shipmentsGetPayload<S['select'][P]>>  :
        P extends 'shipments_departure' ? Array < shipmentsGetPayload<S['select'][P]>>  :
        P extends 'city' ? citiesGetPayload<S['select'][P]> :
        P extends '_count' ? BranchesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof branches ? branches[P] : never
  } 
      : branches


  type branchesCountArgs = Merge<
    Omit<branchesFindManyArgs, 'select' | 'include'> & {
      select?: BranchesCountAggregateInputType | true
    }
  >

  export interface branchesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Branches that matches the filter.
     * @param {branchesFindUniqueArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends branchesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, branchesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'branches'> extends True ? Prisma__branchesClient<branchesGetPayload<T>> : Prisma__branchesClient<branchesGetPayload<T> | null, null>

    /**
     * Find one Branches that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {branchesFindUniqueOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends branchesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, branchesFindUniqueOrThrowArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Find the first Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends branchesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, branchesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'branches'> extends True ? Prisma__branchesClient<branchesGetPayload<T>> : Prisma__branchesClient<branchesGetPayload<T> | null, null>

    /**
     * Find the first Branches that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends branchesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, branchesFindFirstOrThrowArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branches.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchesWithIdOnly = await prisma.branches.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends branchesFindManyArgs>(
      args?: SelectSubset<T, branchesFindManyArgs>
    ): PrismaPromise<Array<branchesGetPayload<T>>>

    /**
     * Create a Branches.
     * @param {branchesCreateArgs} args - Arguments to create a Branches.
     * @example
     * // Create one Branches
     * const Branches = await prisma.branches.create({
     *   data: {
     *     // ... data to create a Branches
     *   }
     * })
     * 
    **/
    create<T extends branchesCreateArgs>(
      args: SelectSubset<T, branchesCreateArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Create many Branches.
     *     @param {branchesCreateManyArgs} args - Arguments to create many Branches.
     *     @example
     *     // Create many Branches
     *     const branches = await prisma.branches.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends branchesCreateManyArgs>(
      args?: SelectSubset<T, branchesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Branches.
     * @param {branchesDeleteArgs} args - Arguments to delete one Branches.
     * @example
     * // Delete one Branches
     * const Branches = await prisma.branches.delete({
     *   where: {
     *     // ... filter to delete one Branches
     *   }
     * })
     * 
    **/
    delete<T extends branchesDeleteArgs>(
      args: SelectSubset<T, branchesDeleteArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Update one Branches.
     * @param {branchesUpdateArgs} args - Arguments to update one Branches.
     * @example
     * // Update one Branches
     * const branches = await prisma.branches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends branchesUpdateArgs>(
      args: SelectSubset<T, branchesUpdateArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Delete zero or more Branches.
     * @param {branchesDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends branchesDeleteManyArgs>(
      args?: SelectSubset<T, branchesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branches = await prisma.branches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends branchesUpdateManyArgs>(
      args: SelectSubset<T, branchesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Branches.
     * @param {branchesUpsertArgs} args - Arguments to update or create a Branches.
     * @example
     * // Update or create a Branches
     * const branches = await prisma.branches.upsert({
     *   create: {
     *     // ... data to create a Branches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches we want to update
     *   }
     * })
    **/
    upsert<T extends branchesUpsertArgs>(
      args: SelectSubset<T, branchesUpsertArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branches.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends branchesCountArgs>(
      args?: Subset<T, branchesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchesAggregateArgs>(args: Subset<T, BranchesAggregateArgs>): PrismaPromise<GetBranchesAggregateType<T>>

    /**
     * Group by Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchesGroupByArgs['orderBy'] }
        : { orderBy?: BranchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for branches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__branchesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends usersFindManyArgs= {}>(args?: Subset<T, usersFindManyArgs>): PrismaPromise<Array<usersGetPayload<T>>| Null>;

    trucks<T extends trucksFindManyArgs= {}>(args?: Subset<T, trucksFindManyArgs>): PrismaPromise<Array<trucksGetPayload<T>>| Null>;

    shipments_destination<T extends shipmentsFindManyArgs= {}>(args?: Subset<T, shipmentsFindManyArgs>): PrismaPromise<Array<shipmentsGetPayload<T>>| Null>;

    shipments_departure<T extends shipmentsFindManyArgs= {}>(args?: Subset<T, shipmentsFindManyArgs>): PrismaPromise<Array<shipmentsGetPayload<T>>| Null>;

    city<T extends citiesArgs= {}>(args?: Subset<T, citiesArgs>): Prisma__citiesClient<citiesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * branches base type for findUnique actions
   */
  export type branchesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     * 
    **/
    where: branchesWhereUniqueInput
  }

  /**
   * branches: findUnique
   */
  export interface branchesFindUniqueArgs extends branchesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches findUniqueOrThrow
   */
  export type branchesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     * 
    **/
    where: branchesWhereUniqueInput
  }


  /**
   * branches base type for findFirst actions
   */
  export type branchesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     * 
    **/
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     * 
    **/
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     * 
    **/
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     * 
    **/
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }

  /**
   * branches: findFirst
   */
  export interface branchesFindFirstArgs extends branchesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches findFirstOrThrow
   */
  export type branchesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     * 
    **/
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     * 
    **/
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     * 
    **/
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     * 
    **/
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }


  /**
   * branches findMany
   */
  export type branchesFindManyArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     * 
    **/
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     * 
    **/
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing branches.
     * 
    **/
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }


  /**
   * branches create
   */
  export type branchesCreateArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * The data needed to create a branches.
     * 
    **/
    data: XOR<branchesCreateInput, branchesUncheckedCreateInput>
  }


  /**
   * branches createMany
   */
  export type branchesCreateManyArgs = {
    /**
     * The data used to create many branches.
     * 
    **/
    data: Enumerable<branchesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * branches update
   */
  export type branchesUpdateArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * The data needed to update a branches.
     * 
    **/
    data: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
    /**
     * Choose, which branches to update.
     * 
    **/
    where: branchesWhereUniqueInput
  }


  /**
   * branches updateMany
   */
  export type branchesUpdateManyArgs = {
    /**
     * The data used to update branches.
     * 
    **/
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyInput>
    /**
     * Filter which branches to update
     * 
    **/
    where?: branchesWhereInput
  }


  /**
   * branches upsert
   */
  export type branchesUpsertArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * The filter to search for the branches to update in case it exists.
     * 
    **/
    where: branchesWhereUniqueInput
    /**
     * In case the branches found by the `where` argument doesn't exist, create a new branches with this data.
     * 
    **/
    create: XOR<branchesCreateInput, branchesUncheckedCreateInput>
    /**
     * In case the branches was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
  }


  /**
   * branches delete
   */
  export type branchesDeleteArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
    /**
     * Filter which branches to delete.
     * 
    **/
    where: branchesWhereUniqueInput
  }


  /**
   * branches deleteMany
   */
  export type branchesDeleteManyArgs = {
    /**
     * Filter which branches to delete
     * 
    **/
    where?: branchesWhereInput
  }


  /**
   * branches without action
   */
  export type branchesArgs = {
    /**
     * Select specific fields to fetch from the branches
     * 
    **/
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: branchesInclude | null
  }



  /**
   * Model userTypes
   */


  export type AggregateUserTypes = {
    _count: UserTypesCountAggregateOutputType | null
    _avg: UserTypesAvgAggregateOutputType | null
    _sum: UserTypesSumAggregateOutputType | null
    _min: UserTypesMinAggregateOutputType | null
    _max: UserTypesMaxAggregateOutputType | null
  }

  export type UserTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type UserTypesSumAggregateOutputType = {
    id: number | null
  }

  export type UserTypesMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type UserTypesMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type UserTypesCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type UserTypesAvgAggregateInputType = {
    id?: true
  }

  export type UserTypesSumAggregateInputType = {
    id?: true
  }

  export type UserTypesMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type UserTypesMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type UserTypesCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type UserTypesAggregateArgs = {
    /**
     * Filter which userTypes to aggregate.
     * 
    **/
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<userTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userTypes
    **/
    _count?: true | UserTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTypesMaxAggregateInputType
  }

  export type GetUserTypesAggregateType<T extends UserTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTypes[P]>
      : GetScalarType<T[P], AggregateUserTypes[P]>
  }




  export type UserTypesGroupByArgs = {
    where?: userTypesWhereInput
    orderBy?: Enumerable<userTypesOrderByWithAggregationInput>
    by: Array<UserTypesScalarFieldEnum>
    having?: userTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTypesCountAggregateInputType | true
    _avg?: UserTypesAvgAggregateInputType
    _sum?: UserTypesSumAggregateInputType
    _min?: UserTypesMinAggregateInputType
    _max?: UserTypesMaxAggregateInputType
  }


  export type UserTypesGroupByOutputType = {
    id: number
    type: string
    _count: UserTypesCountAggregateOutputType | null
    _avg: UserTypesAvgAggregateOutputType | null
    _sum: UserTypesSumAggregateOutputType | null
    _min: UserTypesMinAggregateOutputType | null
    _max: UserTypesMaxAggregateOutputType | null
  }

  type GetUserTypesGroupByPayload<T extends UserTypesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTypesGroupByOutputType[P]>
            : GetScalarType<T[P], UserTypesGroupByOutputType[P]>
        }
      >
    >


  export type userTypesSelect = {
    id?: boolean
    type?: boolean
    users?: boolean | usersFindManyArgs
    _count?: boolean | UserTypesCountOutputTypeArgs
  }


  export type userTypesInclude = {
    users?: boolean | usersFindManyArgs
    _count?: boolean | UserTypesCountOutputTypeArgs
  } 

  export type userTypesGetPayload<S extends boolean | null | undefined | userTypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? userTypes :
    S extends undefined ? never :
    S extends { include: any } & (userTypesArgs | userTypesFindManyArgs)
    ? userTypes  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserTypesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userTypesArgs | userTypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserTypesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof userTypes ? userTypes[P] : never
  } 
      : userTypes


  type userTypesCountArgs = Merge<
    Omit<userTypesFindManyArgs, 'select' | 'include'> & {
      select?: UserTypesCountAggregateInputType | true
    }
  >

  export interface userTypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one UserTypes that matches the filter.
     * @param {userTypesFindUniqueArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userTypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userTypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'userTypes'> extends True ? Prisma__userTypesClient<userTypesGetPayload<T>> : Prisma__userTypesClient<userTypesGetPayload<T> | null, null>

    /**
     * Find one UserTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userTypesFindUniqueOrThrowArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userTypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userTypesFindUniqueOrThrowArgs>
    ): Prisma__userTypesClient<userTypesGetPayload<T>>

    /**
     * Find the first UserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesFindFirstArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userTypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userTypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'userTypes'> extends True ? Prisma__userTypesClient<userTypesGetPayload<T>> : Prisma__userTypesClient<userTypesGetPayload<T> | null, null>

    /**
     * Find the first UserTypes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesFindFirstOrThrowArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userTypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userTypesFindFirstOrThrowArgs>
    ): Prisma__userTypesClient<userTypesGetPayload<T>>

    /**
     * Find zero or more UserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTypes
     * const userTypes = await prisma.userTypes.findMany()
     * 
     * // Get first 10 UserTypes
     * const userTypes = await prisma.userTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTypesWithIdOnly = await prisma.userTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userTypesFindManyArgs>(
      args?: SelectSubset<T, userTypesFindManyArgs>
    ): PrismaPromise<Array<userTypesGetPayload<T>>>

    /**
     * Create a UserTypes.
     * @param {userTypesCreateArgs} args - Arguments to create a UserTypes.
     * @example
     * // Create one UserTypes
     * const UserTypes = await prisma.userTypes.create({
     *   data: {
     *     // ... data to create a UserTypes
     *   }
     * })
     * 
    **/
    create<T extends userTypesCreateArgs>(
      args: SelectSubset<T, userTypesCreateArgs>
    ): Prisma__userTypesClient<userTypesGetPayload<T>>

    /**
     * Create many UserTypes.
     *     @param {userTypesCreateManyArgs} args - Arguments to create many UserTypes.
     *     @example
     *     // Create many UserTypes
     *     const userTypes = await prisma.userTypes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userTypesCreateManyArgs>(
      args?: SelectSubset<T, userTypesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserTypes.
     * @param {userTypesDeleteArgs} args - Arguments to delete one UserTypes.
     * @example
     * // Delete one UserTypes
     * const UserTypes = await prisma.userTypes.delete({
     *   where: {
     *     // ... filter to delete one UserTypes
     *   }
     * })
     * 
    **/
    delete<T extends userTypesDeleteArgs>(
      args: SelectSubset<T, userTypesDeleteArgs>
    ): Prisma__userTypesClient<userTypesGetPayload<T>>

    /**
     * Update one UserTypes.
     * @param {userTypesUpdateArgs} args - Arguments to update one UserTypes.
     * @example
     * // Update one UserTypes
     * const userTypes = await prisma.userTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userTypesUpdateArgs>(
      args: SelectSubset<T, userTypesUpdateArgs>
    ): Prisma__userTypesClient<userTypesGetPayload<T>>

    /**
     * Delete zero or more UserTypes.
     * @param {userTypesDeleteManyArgs} args - Arguments to filter UserTypes to delete.
     * @example
     * // Delete a few UserTypes
     * const { count } = await prisma.userTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userTypesDeleteManyArgs>(
      args?: SelectSubset<T, userTypesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTypes
     * const userTypes = await prisma.userTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userTypesUpdateManyArgs>(
      args: SelectSubset<T, userTypesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTypes.
     * @param {userTypesUpsertArgs} args - Arguments to update or create a UserTypes.
     * @example
     * // Update or create a UserTypes
     * const userTypes = await prisma.userTypes.upsert({
     *   create: {
     *     // ... data to create a UserTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTypes we want to update
     *   }
     * })
    **/
    upsert<T extends userTypesUpsertArgs>(
      args: SelectSubset<T, userTypesUpsertArgs>
    ): Prisma__userTypesClient<userTypesGetPayload<T>>

    /**
     * Count the number of UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesCountArgs} args - Arguments to filter UserTypes to count.
     * @example
     * // Count the number of UserTypes
     * const count = await prisma.userTypes.count({
     *   where: {
     *     // ... the filter for the UserTypes we want to count
     *   }
     * })
    **/
    count<T extends userTypesCountArgs>(
      args?: Subset<T, userTypesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTypesAggregateArgs>(args: Subset<T, UserTypesAggregateArgs>): PrismaPromise<GetUserTypesAggregateType<T>>

    /**
     * Group by UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTypesGroupByArgs['orderBy'] }
        : { orderBy?: UserTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTypesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for userTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userTypesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends usersFindManyArgs= {}>(args?: Subset<T, usersFindManyArgs>): PrismaPromise<Array<usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * userTypes base type for findUnique actions
   */
  export type userTypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * Filter, which userTypes to fetch.
     * 
    **/
    where: userTypesWhereUniqueInput
  }

  /**
   * userTypes: findUnique
   */
  export interface userTypesFindUniqueArgs extends userTypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userTypes findUniqueOrThrow
   */
  export type userTypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * Filter, which userTypes to fetch.
     * 
    **/
    where: userTypesWhereUniqueInput
  }


  /**
   * userTypes base type for findFirst actions
   */
  export type userTypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * Filter, which userTypes to fetch.
     * 
    **/
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<userTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userTypes.
     * 
    **/
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userTypes.
     * 
    **/
    distinct?: Enumerable<UserTypesScalarFieldEnum>
  }

  /**
   * userTypes: findFirst
   */
  export interface userTypesFindFirstArgs extends userTypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userTypes findFirstOrThrow
   */
  export type userTypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * Filter, which userTypes to fetch.
     * 
    **/
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<userTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userTypes.
     * 
    **/
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userTypes.
     * 
    **/
    distinct?: Enumerable<UserTypesScalarFieldEnum>
  }


  /**
   * userTypes findMany
   */
  export type userTypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * Filter, which userTypes to fetch.
     * 
    **/
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<userTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userTypes.
     * 
    **/
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserTypesScalarFieldEnum>
  }


  /**
   * userTypes create
   */
  export type userTypesCreateArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * The data needed to create a userTypes.
     * 
    **/
    data: XOR<userTypesCreateInput, userTypesUncheckedCreateInput>
  }


  /**
   * userTypes createMany
   */
  export type userTypesCreateManyArgs = {
    /**
     * The data used to create many userTypes.
     * 
    **/
    data: Enumerable<userTypesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * userTypes update
   */
  export type userTypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * The data needed to update a userTypes.
     * 
    **/
    data: XOR<userTypesUpdateInput, userTypesUncheckedUpdateInput>
    /**
     * Choose, which userTypes to update.
     * 
    **/
    where: userTypesWhereUniqueInput
  }


  /**
   * userTypes updateMany
   */
  export type userTypesUpdateManyArgs = {
    /**
     * The data used to update userTypes.
     * 
    **/
    data: XOR<userTypesUpdateManyMutationInput, userTypesUncheckedUpdateManyInput>
    /**
     * Filter which userTypes to update
     * 
    **/
    where?: userTypesWhereInput
  }


  /**
   * userTypes upsert
   */
  export type userTypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * The filter to search for the userTypes to update in case it exists.
     * 
    **/
    where: userTypesWhereUniqueInput
    /**
     * In case the userTypes found by the `where` argument doesn't exist, create a new userTypes with this data.
     * 
    **/
    create: XOR<userTypesCreateInput, userTypesUncheckedCreateInput>
    /**
     * In case the userTypes was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<userTypesUpdateInput, userTypesUncheckedUpdateInput>
  }


  /**
   * userTypes delete
   */
  export type userTypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
    /**
     * Filter which userTypes to delete.
     * 
    **/
    where: userTypesWhereUniqueInput
  }


  /**
   * userTypes deleteMany
   */
  export type userTypesDeleteManyArgs = {
    /**
     * Filter which userTypes to delete
     * 
    **/
    where?: userTypesWhereInput
  }


  /**
   * userTypes without action
   */
  export type userTypesArgs = {
    /**
     * Select specific fields to fetch from the userTypes
     * 
    **/
    select?: userTypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: userTypesInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userType_id: number | null
    branch_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    userType_id: number | null
    branch_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    userType_id: number | null
    branch_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    userType_id: number | null
    branch_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    userType_id: number
    branch_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userType_id?: true
    branch_id?: true
  }

  export type UsersSumAggregateInputType = {
    userType_id?: true
    branch_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    userType_id?: true
    branch_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    userType_id?: true
    branch_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    userType_id?: true
    branch_id?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
    branch_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    userType_id?: boolean
    branch_id?: boolean
    drivers?: boolean | driversArgs
    clients?: boolean | parcelsFindManyArgs
    userTypes?: boolean | userTypesArgs
    branches?: boolean | branchesArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    drivers?: boolean | driversArgs
    clients?: boolean | parcelsFindManyArgs
    userTypes?: boolean | userTypesArgs
    branches?: boolean | branchesArgs
    _count?: boolean | UsersCountOutputTypeArgs
  } 

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'drivers' ? driversGetPayload<S['include'][P]> | null :
        P extends 'clients' ? Array < parcelsGetPayload<S['include'][P]>>  :
        P extends 'userTypes' ? userTypesGetPayload<S['include'][P]> | null :
        P extends 'branches' ? branchesGetPayload<S['include'][P]> | null :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'drivers' ? driversGetPayload<S['select'][P]> | null :
        P extends 'clients' ? Array < parcelsGetPayload<S['select'][P]>>  :
        P extends 'userTypes' ? userTypesGetPayload<S['select'][P]> | null :
        P extends 'branches' ? branchesGetPayload<S['select'][P]> | null :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    drivers<T extends driversArgs= {}>(args?: Subset<T, driversArgs>): Prisma__driversClient<driversGetPayload<T> | Null>;

    clients<T extends parcelsFindManyArgs= {}>(args?: Subset<T, parcelsFindManyArgs>): PrismaPromise<Array<parcelsGetPayload<T>>| Null>;

    userTypes<T extends userTypesArgs= {}>(args?: Subset<T, userTypesArgs>): Prisma__userTypesClient<userTypesGetPayload<T> | Null>;

    branches<T extends branchesArgs= {}>(args?: Subset<T, branchesArgs>): Prisma__branchesClient<branchesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }

  /**
   * users: findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users: findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     * 
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     * 
    **/
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     * 
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     * 
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     * 
    **/
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     * 
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     * 
    **/
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     * 
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     * 
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     * 
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     * 
    **/
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     * 
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: usersInclude | null
  }



  /**
   * Model drivers
   */


  export type AggregateDrivers = {
    _count: DriversCountAggregateOutputType | null
    _avg: DriversAvgAggregateOutputType | null
    _sum: DriversSumAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  export type DriversAvgAggregateOutputType = {
    truck_id: number | null
  }

  export type DriversSumAggregateOutputType = {
    truck_id: number | null
  }

  export type DriversMinAggregateOutputType = {
    user_id: string | null
    truck_id: number | null
  }

  export type DriversMaxAggregateOutputType = {
    user_id: string | null
    truck_id: number | null
  }

  export type DriversCountAggregateOutputType = {
    user_id: number
    truck_id: number
    _all: number
  }


  export type DriversAvgAggregateInputType = {
    truck_id?: true
  }

  export type DriversSumAggregateInputType = {
    truck_id?: true
  }

  export type DriversMinAggregateInputType = {
    user_id?: true
    truck_id?: true
  }

  export type DriversMaxAggregateInputType = {
    user_id?: true
    truck_id?: true
  }

  export type DriversCountAggregateInputType = {
    user_id?: true
    truck_id?: true
    _all?: true
  }

  export type DriversAggregateArgs = {
    /**
     * Filter which drivers to aggregate.
     * 
    **/
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     * 
    **/
    orderBy?: Enumerable<driversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriversAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriversSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriversMaxAggregateInputType
  }

  export type GetDriversAggregateType<T extends DriversAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivers[P]>
      : GetScalarType<T[P], AggregateDrivers[P]>
  }




  export type DriversGroupByArgs = {
    where?: driversWhereInput
    orderBy?: Enumerable<driversOrderByWithAggregationInput>
    by: Array<DriversScalarFieldEnum>
    having?: driversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriversCountAggregateInputType | true
    _avg?: DriversAvgAggregateInputType
    _sum?: DriversSumAggregateInputType
    _min?: DriversMinAggregateInputType
    _max?: DriversMaxAggregateInputType
  }


  export type DriversGroupByOutputType = {
    user_id: string
    truck_id: number | null
    _count: DriversCountAggregateOutputType | null
    _avg: DriversAvgAggregateOutputType | null
    _sum: DriversSumAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  type GetDriversGroupByPayload<T extends DriversGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DriversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriversGroupByOutputType[P]>
            : GetScalarType<T[P], DriversGroupByOutputType[P]>
        }
      >
    >


  export type driversSelect = {
    user_id?: boolean
    truck_id?: boolean
    shipments?: boolean | shipmentsArgs
    trucks?: boolean | trucksFindManyArgs
    users?: boolean | usersArgs
    _count?: boolean | DriversCountOutputTypeArgs
  }


  export type driversInclude = {
    shipments?: boolean | shipmentsArgs
    trucks?: boolean | trucksFindManyArgs
    users?: boolean | usersArgs
    _count?: boolean | DriversCountOutputTypeArgs
  } 

  export type driversGetPayload<S extends boolean | null | undefined | driversArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? drivers :
    S extends undefined ? never :
    S extends { include: any } & (driversArgs | driversFindManyArgs)
    ? drivers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shipments' ? shipmentsGetPayload<S['include'][P]> | null :
        P extends 'trucks' ? Array < trucksGetPayload<S['include'][P]>>  :
        P extends 'users' ? usersGetPayload<S['include'][P]> :
        P extends '_count' ? DriversCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (driversArgs | driversFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shipments' ? shipmentsGetPayload<S['select'][P]> | null :
        P extends 'trucks' ? Array < trucksGetPayload<S['select'][P]>>  :
        P extends 'users' ? usersGetPayload<S['select'][P]> :
        P extends '_count' ? DriversCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof drivers ? drivers[P] : never
  } 
      : drivers


  type driversCountArgs = Merge<
    Omit<driversFindManyArgs, 'select' | 'include'> & {
      select?: DriversCountAggregateInputType | true
    }
  >

  export interface driversDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Drivers that matches the filter.
     * @param {driversFindUniqueArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends driversFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, driversFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'drivers'> extends True ? Prisma__driversClient<driversGetPayload<T>> : Prisma__driversClient<driversGetPayload<T> | null, null>

    /**
     * Find one Drivers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {driversFindUniqueOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends driversFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, driversFindUniqueOrThrowArgs>
    ): Prisma__driversClient<driversGetPayload<T>>

    /**
     * Find the first Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindFirstArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends driversFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, driversFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'drivers'> extends True ? Prisma__driversClient<driversGetPayload<T>> : Prisma__driversClient<driversGetPayload<T> | null, null>

    /**
     * Find the first Drivers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindFirstOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends driversFindFirstOrThrowArgs>(
      args?: SelectSubset<T, driversFindFirstOrThrowArgs>
    ): Prisma__driversClient<driversGetPayload<T>>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.drivers.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.drivers.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const driversWithUser_idOnly = await prisma.drivers.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends driversFindManyArgs>(
      args?: SelectSubset<T, driversFindManyArgs>
    ): PrismaPromise<Array<driversGetPayload<T>>>

    /**
     * Create a Drivers.
     * @param {driversCreateArgs} args - Arguments to create a Drivers.
     * @example
     * // Create one Drivers
     * const Drivers = await prisma.drivers.create({
     *   data: {
     *     // ... data to create a Drivers
     *   }
     * })
     * 
    **/
    create<T extends driversCreateArgs>(
      args: SelectSubset<T, driversCreateArgs>
    ): Prisma__driversClient<driversGetPayload<T>>

    /**
     * Create many Drivers.
     *     @param {driversCreateManyArgs} args - Arguments to create many Drivers.
     *     @example
     *     // Create many Drivers
     *     const drivers = await prisma.drivers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends driversCreateManyArgs>(
      args?: SelectSubset<T, driversCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Drivers.
     * @param {driversDeleteArgs} args - Arguments to delete one Drivers.
     * @example
     * // Delete one Drivers
     * const Drivers = await prisma.drivers.delete({
     *   where: {
     *     // ... filter to delete one Drivers
     *   }
     * })
     * 
    **/
    delete<T extends driversDeleteArgs>(
      args: SelectSubset<T, driversDeleteArgs>
    ): Prisma__driversClient<driversGetPayload<T>>

    /**
     * Update one Drivers.
     * @param {driversUpdateArgs} args - Arguments to update one Drivers.
     * @example
     * // Update one Drivers
     * const drivers = await prisma.drivers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends driversUpdateArgs>(
      args: SelectSubset<T, driversUpdateArgs>
    ): Prisma__driversClient<driversGetPayload<T>>

    /**
     * Delete zero or more Drivers.
     * @param {driversDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.drivers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends driversDeleteManyArgs>(
      args?: SelectSubset<T, driversDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends driversUpdateManyArgs>(
      args: SelectSubset<T, driversUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Drivers.
     * @param {driversUpsertArgs} args - Arguments to update or create a Drivers.
     * @example
     * // Update or create a Drivers
     * const drivers = await prisma.drivers.upsert({
     *   create: {
     *     // ... data to create a Drivers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drivers we want to update
     *   }
     * })
    **/
    upsert<T extends driversUpsertArgs>(
      args: SelectSubset<T, driversUpsertArgs>
    ): Prisma__driversClient<driversGetPayload<T>>

    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.drivers.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driversCountArgs>(
      args?: Subset<T, driversCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriversAggregateArgs>(args: Subset<T, DriversAggregateArgs>): PrismaPromise<GetDriversAggregateType<T>>

    /**
     * Group by Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriversGroupByArgs['orderBy'] }
        : { orderBy?: DriversGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriversGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for drivers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__driversClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shipments<T extends shipmentsArgs= {}>(args?: Subset<T, shipmentsArgs>): Prisma__shipmentsClient<shipmentsGetPayload<T> | Null>;

    trucks<T extends trucksFindManyArgs= {}>(args?: Subset<T, trucksFindManyArgs>): PrismaPromise<Array<trucksGetPayload<T>>| Null>;

    users<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * drivers base type for findUnique actions
   */
  export type driversFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * Filter, which drivers to fetch.
     * 
    **/
    where: driversWhereUniqueInput
  }

  /**
   * drivers: findUnique
   */
  export interface driversFindUniqueArgs extends driversFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * drivers findUniqueOrThrow
   */
  export type driversFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * Filter, which drivers to fetch.
     * 
    **/
    where: driversWhereUniqueInput
  }


  /**
   * drivers base type for findFirst actions
   */
  export type driversFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * Filter, which drivers to fetch.
     * 
    **/
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     * 
    **/
    orderBy?: Enumerable<driversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     * 
    **/
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     * 
    **/
    distinct?: Enumerable<DriversScalarFieldEnum>
  }

  /**
   * drivers: findFirst
   */
  export interface driversFindFirstArgs extends driversFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * drivers findFirstOrThrow
   */
  export type driversFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * Filter, which drivers to fetch.
     * 
    **/
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     * 
    **/
    orderBy?: Enumerable<driversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     * 
    **/
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     * 
    **/
    distinct?: Enumerable<DriversScalarFieldEnum>
  }


  /**
   * drivers findMany
   */
  export type driversFindManyArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * Filter, which drivers to fetch.
     * 
    **/
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     * 
    **/
    orderBy?: Enumerable<driversOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     * 
    **/
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DriversScalarFieldEnum>
  }


  /**
   * drivers create
   */
  export type driversCreateArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * The data needed to create a drivers.
     * 
    **/
    data: XOR<driversCreateInput, driversUncheckedCreateInput>
  }


  /**
   * drivers createMany
   */
  export type driversCreateManyArgs = {
    /**
     * The data used to create many drivers.
     * 
    **/
    data: Enumerable<driversCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * drivers update
   */
  export type driversUpdateArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * The data needed to update a drivers.
     * 
    **/
    data: XOR<driversUpdateInput, driversUncheckedUpdateInput>
    /**
     * Choose, which drivers to update.
     * 
    **/
    where: driversWhereUniqueInput
  }


  /**
   * drivers updateMany
   */
  export type driversUpdateManyArgs = {
    /**
     * The data used to update drivers.
     * 
    **/
    data: XOR<driversUpdateManyMutationInput, driversUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     * 
    **/
    where?: driversWhereInput
  }


  /**
   * drivers upsert
   */
  export type driversUpsertArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * The filter to search for the drivers to update in case it exists.
     * 
    **/
    where: driversWhereUniqueInput
    /**
     * In case the drivers found by the `where` argument doesn't exist, create a new drivers with this data.
     * 
    **/
    create: XOR<driversCreateInput, driversUncheckedCreateInput>
    /**
     * In case the drivers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<driversUpdateInput, driversUncheckedUpdateInput>
  }


  /**
   * drivers delete
   */
  export type driversDeleteArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
    /**
     * Filter which drivers to delete.
     * 
    **/
    where: driversWhereUniqueInput
  }


  /**
   * drivers deleteMany
   */
  export type driversDeleteManyArgs = {
    /**
     * Filter which drivers to delete
     * 
    **/
    where?: driversWhereInput
  }


  /**
   * drivers without action
   */
  export type driversArgs = {
    /**
     * Select specific fields to fetch from the drivers
     * 
    **/
    select?: driversSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: driversInclude | null
  }



  /**
   * Model trucks
   */


  export type AggregateTrucks = {
    _count: TrucksCountAggregateOutputType | null
    _avg: TrucksAvgAggregateOutputType | null
    _sum: TrucksSumAggregateOutputType | null
    _min: TrucksMinAggregateOutputType | null
    _max: TrucksMaxAggregateOutputType | null
  }

  export type TrucksAvgAggregateOutputType = {
    id: number | null
    max_weight: number | null
    branch_id: number | null
  }

  export type TrucksSumAggregateOutputType = {
    id: number | null
    max_weight: number | null
    branch_id: number | null
  }

  export type TrucksMinAggregateOutputType = {
    id: number | null
    license_plate: string | null
    brand: string | null
    max_weight: number | null
    available: boolean | null
    driver_id: string | null
    branch_id: number | null
  }

  export type TrucksMaxAggregateOutputType = {
    id: number | null
    license_plate: string | null
    brand: string | null
    max_weight: number | null
    available: boolean | null
    driver_id: string | null
    branch_id: number | null
  }

  export type TrucksCountAggregateOutputType = {
    id: number
    license_plate: number
    brand: number
    max_weight: number
    available: number
    driver_id: number
    branch_id: number
    _all: number
  }


  export type TrucksAvgAggregateInputType = {
    id?: true
    max_weight?: true
    branch_id?: true
  }

  export type TrucksSumAggregateInputType = {
    id?: true
    max_weight?: true
    branch_id?: true
  }

  export type TrucksMinAggregateInputType = {
    id?: true
    license_plate?: true
    brand?: true
    max_weight?: true
    available?: true
    driver_id?: true
    branch_id?: true
  }

  export type TrucksMaxAggregateInputType = {
    id?: true
    license_plate?: true
    brand?: true
    max_weight?: true
    available?: true
    driver_id?: true
    branch_id?: true
  }

  export type TrucksCountAggregateInputType = {
    id?: true
    license_plate?: true
    brand?: true
    max_weight?: true
    available?: true
    driver_id?: true
    branch_id?: true
    _all?: true
  }

  export type TrucksAggregateArgs = {
    /**
     * Filter which trucks to aggregate.
     * 
    **/
    where?: trucksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trucks to fetch.
     * 
    **/
    orderBy?: Enumerable<trucksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: trucksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trucks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trucks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trucks
    **/
    _count?: true | TrucksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrucksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrucksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrucksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrucksMaxAggregateInputType
  }

  export type GetTrucksAggregateType<T extends TrucksAggregateArgs> = {
        [P in keyof T & keyof AggregateTrucks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrucks[P]>
      : GetScalarType<T[P], AggregateTrucks[P]>
  }




  export type TrucksGroupByArgs = {
    where?: trucksWhereInput
    orderBy?: Enumerable<trucksOrderByWithAggregationInput>
    by: Array<TrucksScalarFieldEnum>
    having?: trucksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrucksCountAggregateInputType | true
    _avg?: TrucksAvgAggregateInputType
    _sum?: TrucksSumAggregateInputType
    _min?: TrucksMinAggregateInputType
    _max?: TrucksMaxAggregateInputType
  }


  export type TrucksGroupByOutputType = {
    id: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver_id: string | null
    branch_id: number
    _count: TrucksCountAggregateOutputType | null
    _avg: TrucksAvgAggregateOutputType | null
    _sum: TrucksSumAggregateOutputType | null
    _min: TrucksMinAggregateOutputType | null
    _max: TrucksMaxAggregateOutputType | null
  }

  type GetTrucksGroupByPayload<T extends TrucksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TrucksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrucksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrucksGroupByOutputType[P]>
            : GetScalarType<T[P], TrucksGroupByOutputType[P]>
        }
      >
    >


  export type trucksSelect = {
    id?: boolean
    license_plate?: boolean
    brand?: boolean
    max_weight?: boolean
    available?: boolean
    driver_id?: boolean
    branch_id?: boolean
    shipments?: boolean | shipmentsArgs
    driver?: boolean | driversArgs
    branch?: boolean | branchesArgs
  }


  export type trucksInclude = {
    shipments?: boolean | shipmentsArgs
    driver?: boolean | driversArgs
    branch?: boolean | branchesArgs
  } 

  export type trucksGetPayload<S extends boolean | null | undefined | trucksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? trucks :
    S extends undefined ? never :
    S extends { include: any } & (trucksArgs | trucksFindManyArgs)
    ? trucks  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shipments' ? shipmentsGetPayload<S['include'][P]> | null :
        P extends 'driver' ? driversGetPayload<S['include'][P]> | null :
        P extends 'branch' ? branchesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (trucksArgs | trucksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shipments' ? shipmentsGetPayload<S['select'][P]> | null :
        P extends 'driver' ? driversGetPayload<S['select'][P]> | null :
        P extends 'branch' ? branchesGetPayload<S['select'][P]> | null :  P extends keyof trucks ? trucks[P] : never
  } 
      : trucks


  type trucksCountArgs = Merge<
    Omit<trucksFindManyArgs, 'select' | 'include'> & {
      select?: TrucksCountAggregateInputType | true
    }
  >

  export interface trucksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Trucks that matches the filter.
     * @param {trucksFindUniqueArgs} args - Arguments to find a Trucks
     * @example
     * // Get one Trucks
     * const trucks = await prisma.trucks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends trucksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, trucksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'trucks'> extends True ? Prisma__trucksClient<trucksGetPayload<T>> : Prisma__trucksClient<trucksGetPayload<T> | null, null>

    /**
     * Find one Trucks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {trucksFindUniqueOrThrowArgs} args - Arguments to find a Trucks
     * @example
     * // Get one Trucks
     * const trucks = await prisma.trucks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends trucksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, trucksFindUniqueOrThrowArgs>
    ): Prisma__trucksClient<trucksGetPayload<T>>

    /**
     * Find the first Trucks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trucksFindFirstArgs} args - Arguments to find a Trucks
     * @example
     * // Get one Trucks
     * const trucks = await prisma.trucks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends trucksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, trucksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'trucks'> extends True ? Prisma__trucksClient<trucksGetPayload<T>> : Prisma__trucksClient<trucksGetPayload<T> | null, null>

    /**
     * Find the first Trucks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trucksFindFirstOrThrowArgs} args - Arguments to find a Trucks
     * @example
     * // Get one Trucks
     * const trucks = await prisma.trucks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends trucksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, trucksFindFirstOrThrowArgs>
    ): Prisma__trucksClient<trucksGetPayload<T>>

    /**
     * Find zero or more Trucks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trucksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trucks
     * const trucks = await prisma.trucks.findMany()
     * 
     * // Get first 10 Trucks
     * const trucks = await prisma.trucks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trucksWithIdOnly = await prisma.trucks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends trucksFindManyArgs>(
      args?: SelectSubset<T, trucksFindManyArgs>
    ): PrismaPromise<Array<trucksGetPayload<T>>>

    /**
     * Create a Trucks.
     * @param {trucksCreateArgs} args - Arguments to create a Trucks.
     * @example
     * // Create one Trucks
     * const Trucks = await prisma.trucks.create({
     *   data: {
     *     // ... data to create a Trucks
     *   }
     * })
     * 
    **/
    create<T extends trucksCreateArgs>(
      args: SelectSubset<T, trucksCreateArgs>
    ): Prisma__trucksClient<trucksGetPayload<T>>

    /**
     * Create many Trucks.
     *     @param {trucksCreateManyArgs} args - Arguments to create many Trucks.
     *     @example
     *     // Create many Trucks
     *     const trucks = await prisma.trucks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends trucksCreateManyArgs>(
      args?: SelectSubset<T, trucksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Trucks.
     * @param {trucksDeleteArgs} args - Arguments to delete one Trucks.
     * @example
     * // Delete one Trucks
     * const Trucks = await prisma.trucks.delete({
     *   where: {
     *     // ... filter to delete one Trucks
     *   }
     * })
     * 
    **/
    delete<T extends trucksDeleteArgs>(
      args: SelectSubset<T, trucksDeleteArgs>
    ): Prisma__trucksClient<trucksGetPayload<T>>

    /**
     * Update one Trucks.
     * @param {trucksUpdateArgs} args - Arguments to update one Trucks.
     * @example
     * // Update one Trucks
     * const trucks = await prisma.trucks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends trucksUpdateArgs>(
      args: SelectSubset<T, trucksUpdateArgs>
    ): Prisma__trucksClient<trucksGetPayload<T>>

    /**
     * Delete zero or more Trucks.
     * @param {trucksDeleteManyArgs} args - Arguments to filter Trucks to delete.
     * @example
     * // Delete a few Trucks
     * const { count } = await prisma.trucks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends trucksDeleteManyArgs>(
      args?: SelectSubset<T, trucksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trucksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trucks
     * const trucks = await prisma.trucks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends trucksUpdateManyArgs>(
      args: SelectSubset<T, trucksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Trucks.
     * @param {trucksUpsertArgs} args - Arguments to update or create a Trucks.
     * @example
     * // Update or create a Trucks
     * const trucks = await prisma.trucks.upsert({
     *   create: {
     *     // ... data to create a Trucks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trucks we want to update
     *   }
     * })
    **/
    upsert<T extends trucksUpsertArgs>(
      args: SelectSubset<T, trucksUpsertArgs>
    ): Prisma__trucksClient<trucksGetPayload<T>>

    /**
     * Count the number of Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trucksCountArgs} args - Arguments to filter Trucks to count.
     * @example
     * // Count the number of Trucks
     * const count = await prisma.trucks.count({
     *   where: {
     *     // ... the filter for the Trucks we want to count
     *   }
     * })
    **/
    count<T extends trucksCountArgs>(
      args?: Subset<T, trucksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrucksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrucksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrucksAggregateArgs>(args: Subset<T, TrucksAggregateArgs>): PrismaPromise<GetTrucksAggregateType<T>>

    /**
     * Group by Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrucksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrucksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrucksGroupByArgs['orderBy'] }
        : { orderBy?: TrucksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrucksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrucksGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for trucks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__trucksClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shipments<T extends shipmentsArgs= {}>(args?: Subset<T, shipmentsArgs>): Prisma__shipmentsClient<shipmentsGetPayload<T> | Null>;

    driver<T extends driversArgs= {}>(args?: Subset<T, driversArgs>): Prisma__driversClient<driversGetPayload<T> | Null>;

    branch<T extends branchesArgs= {}>(args?: Subset<T, branchesArgs>): Prisma__branchesClient<branchesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * trucks base type for findUnique actions
   */
  export type trucksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * Filter, which trucks to fetch.
     * 
    **/
    where: trucksWhereUniqueInput
  }

  /**
   * trucks: findUnique
   */
  export interface trucksFindUniqueArgs extends trucksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * trucks findUniqueOrThrow
   */
  export type trucksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * Filter, which trucks to fetch.
     * 
    **/
    where: trucksWhereUniqueInput
  }


  /**
   * trucks base type for findFirst actions
   */
  export type trucksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * Filter, which trucks to fetch.
     * 
    **/
    where?: trucksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trucks to fetch.
     * 
    **/
    orderBy?: Enumerable<trucksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trucks.
     * 
    **/
    cursor?: trucksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trucks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trucks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trucks.
     * 
    **/
    distinct?: Enumerable<TrucksScalarFieldEnum>
  }

  /**
   * trucks: findFirst
   */
  export interface trucksFindFirstArgs extends trucksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * trucks findFirstOrThrow
   */
  export type trucksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * Filter, which trucks to fetch.
     * 
    **/
    where?: trucksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trucks to fetch.
     * 
    **/
    orderBy?: Enumerable<trucksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trucks.
     * 
    **/
    cursor?: trucksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trucks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trucks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trucks.
     * 
    **/
    distinct?: Enumerable<TrucksScalarFieldEnum>
  }


  /**
   * trucks findMany
   */
  export type trucksFindManyArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * Filter, which trucks to fetch.
     * 
    **/
    where?: trucksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trucks to fetch.
     * 
    **/
    orderBy?: Enumerable<trucksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trucks.
     * 
    **/
    cursor?: trucksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trucks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trucks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TrucksScalarFieldEnum>
  }


  /**
   * trucks create
   */
  export type trucksCreateArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * The data needed to create a trucks.
     * 
    **/
    data: XOR<trucksCreateInput, trucksUncheckedCreateInput>
  }


  /**
   * trucks createMany
   */
  export type trucksCreateManyArgs = {
    /**
     * The data used to create many trucks.
     * 
    **/
    data: Enumerable<trucksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * trucks update
   */
  export type trucksUpdateArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * The data needed to update a trucks.
     * 
    **/
    data: XOR<trucksUpdateInput, trucksUncheckedUpdateInput>
    /**
     * Choose, which trucks to update.
     * 
    **/
    where: trucksWhereUniqueInput
  }


  /**
   * trucks updateMany
   */
  export type trucksUpdateManyArgs = {
    /**
     * The data used to update trucks.
     * 
    **/
    data: XOR<trucksUpdateManyMutationInput, trucksUncheckedUpdateManyInput>
    /**
     * Filter which trucks to update
     * 
    **/
    where?: trucksWhereInput
  }


  /**
   * trucks upsert
   */
  export type trucksUpsertArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * The filter to search for the trucks to update in case it exists.
     * 
    **/
    where: trucksWhereUniqueInput
    /**
     * In case the trucks found by the `where` argument doesn't exist, create a new trucks with this data.
     * 
    **/
    create: XOR<trucksCreateInput, trucksUncheckedCreateInput>
    /**
     * In case the trucks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<trucksUpdateInput, trucksUncheckedUpdateInput>
  }


  /**
   * trucks delete
   */
  export type trucksDeleteArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
    /**
     * Filter which trucks to delete.
     * 
    **/
    where: trucksWhereUniqueInput
  }


  /**
   * trucks deleteMany
   */
  export type trucksDeleteManyArgs = {
    /**
     * Filter which trucks to delete
     * 
    **/
    where?: trucksWhereInput
  }


  /**
   * trucks without action
   */
  export type trucksArgs = {
    /**
     * Select specific fields to fetch from the trucks
     * 
    **/
    select?: trucksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: trucksInclude | null
  }



  /**
   * Model parcels
   */


  export type AggregateParcels = {
    _count: ParcelsCountAggregateOutputType | null
    _avg: ParcelsAvgAggregateOutputType | null
    _sum: ParcelsSumAggregateOutputType | null
    _min: ParcelsMinAggregateOutputType | null
    _max: ParcelsMaxAggregateOutputType | null
  }

  export type ParcelsAvgAggregateOutputType = {
    volume_weight: number | null
  }

  export type ParcelsSumAggregateOutputType = {
    volume_weight: number | null
  }

  export type ParcelsMinAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    volume_weight: number | null
    admission_date: Date | null
    client_id: string | null
    shipment_id: string | null
  }

  export type ParcelsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    content: string | null
    volume_weight: number | null
    admission_date: Date | null
    client_id: string | null
    shipment_id: string | null
  }

  export type ParcelsCountAggregateOutputType = {
    id: number
    name: number
    content: number
    volume_weight: number
    admission_date: number
    client_id: number
    shipment_id: number
    _all: number
  }


  export type ParcelsAvgAggregateInputType = {
    volume_weight?: true
  }

  export type ParcelsSumAggregateInputType = {
    volume_weight?: true
  }

  export type ParcelsMinAggregateInputType = {
    id?: true
    name?: true
    content?: true
    volume_weight?: true
    admission_date?: true
    client_id?: true
    shipment_id?: true
  }

  export type ParcelsMaxAggregateInputType = {
    id?: true
    name?: true
    content?: true
    volume_weight?: true
    admission_date?: true
    client_id?: true
    shipment_id?: true
  }

  export type ParcelsCountAggregateInputType = {
    id?: true
    name?: true
    content?: true
    volume_weight?: true
    admission_date?: true
    client_id?: true
    shipment_id?: true
    _all?: true
  }

  export type ParcelsAggregateArgs = {
    /**
     * Filter which parcels to aggregate.
     * 
    **/
    where?: parcelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcels to fetch.
     * 
    **/
    orderBy?: Enumerable<parcelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: parcelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned parcels
    **/
    _count?: true | ParcelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParcelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParcelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParcelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParcelsMaxAggregateInputType
  }

  export type GetParcelsAggregateType<T extends ParcelsAggregateArgs> = {
        [P in keyof T & keyof AggregateParcels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParcels[P]>
      : GetScalarType<T[P], AggregateParcels[P]>
  }




  export type ParcelsGroupByArgs = {
    where?: parcelsWhereInput
    orderBy?: Enumerable<parcelsOrderByWithAggregationInput>
    by: Array<ParcelsScalarFieldEnum>
    having?: parcelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParcelsCountAggregateInputType | true
    _avg?: ParcelsAvgAggregateInputType
    _sum?: ParcelsSumAggregateInputType
    _min?: ParcelsMinAggregateInputType
    _max?: ParcelsMaxAggregateInputType
  }


  export type ParcelsGroupByOutputType = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date
    client_id: string
    shipment_id: string | null
    _count: ParcelsCountAggregateOutputType | null
    _avg: ParcelsAvgAggregateOutputType | null
    _sum: ParcelsSumAggregateOutputType | null
    _min: ParcelsMinAggregateOutputType | null
    _max: ParcelsMaxAggregateOutputType | null
  }

  type GetParcelsGroupByPayload<T extends ParcelsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ParcelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParcelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParcelsGroupByOutputType[P]>
            : GetScalarType<T[P], ParcelsGroupByOutputType[P]>
        }
      >
    >


  export type parcelsSelect = {
    id?: boolean
    name?: boolean
    content?: boolean
    volume_weight?: boolean
    admission_date?: boolean
    client_id?: boolean
    shipment_id?: boolean
    shipments?: boolean | shipmentsArgs
    client?: boolean | usersArgs
  }


  export type parcelsInclude = {
    shipments?: boolean | shipmentsArgs
    client?: boolean | usersArgs
  } 

  export type parcelsGetPayload<S extends boolean | null | undefined | parcelsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? parcels :
    S extends undefined ? never :
    S extends { include: any } & (parcelsArgs | parcelsFindManyArgs)
    ? parcels  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'shipments' ? shipmentsGetPayload<S['include'][P]> | null :
        P extends 'client' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (parcelsArgs | parcelsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'shipments' ? shipmentsGetPayload<S['select'][P]> | null :
        P extends 'client' ? usersGetPayload<S['select'][P]> :  P extends keyof parcels ? parcels[P] : never
  } 
      : parcels


  type parcelsCountArgs = Merge<
    Omit<parcelsFindManyArgs, 'select' | 'include'> & {
      select?: ParcelsCountAggregateInputType | true
    }
  >

  export interface parcelsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Parcels that matches the filter.
     * @param {parcelsFindUniqueArgs} args - Arguments to find a Parcels
     * @example
     * // Get one Parcels
     * const parcels = await prisma.parcels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends parcelsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, parcelsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'parcels'> extends True ? Prisma__parcelsClient<parcelsGetPayload<T>> : Prisma__parcelsClient<parcelsGetPayload<T> | null, null>

    /**
     * Find one Parcels that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {parcelsFindUniqueOrThrowArgs} args - Arguments to find a Parcels
     * @example
     * // Get one Parcels
     * const parcels = await prisma.parcels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends parcelsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, parcelsFindUniqueOrThrowArgs>
    ): Prisma__parcelsClient<parcelsGetPayload<T>>

    /**
     * Find the first Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parcelsFindFirstArgs} args - Arguments to find a Parcels
     * @example
     * // Get one Parcels
     * const parcels = await prisma.parcels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends parcelsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, parcelsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'parcels'> extends True ? Prisma__parcelsClient<parcelsGetPayload<T>> : Prisma__parcelsClient<parcelsGetPayload<T> | null, null>

    /**
     * Find the first Parcels that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parcelsFindFirstOrThrowArgs} args - Arguments to find a Parcels
     * @example
     * // Get one Parcels
     * const parcels = await prisma.parcels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends parcelsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, parcelsFindFirstOrThrowArgs>
    ): Prisma__parcelsClient<parcelsGetPayload<T>>

    /**
     * Find zero or more Parcels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parcelsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parcels
     * const parcels = await prisma.parcels.findMany()
     * 
     * // Get first 10 Parcels
     * const parcels = await prisma.parcels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parcelsWithIdOnly = await prisma.parcels.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends parcelsFindManyArgs>(
      args?: SelectSubset<T, parcelsFindManyArgs>
    ): PrismaPromise<Array<parcelsGetPayload<T>>>

    /**
     * Create a Parcels.
     * @param {parcelsCreateArgs} args - Arguments to create a Parcels.
     * @example
     * // Create one Parcels
     * const Parcels = await prisma.parcels.create({
     *   data: {
     *     // ... data to create a Parcels
     *   }
     * })
     * 
    **/
    create<T extends parcelsCreateArgs>(
      args: SelectSubset<T, parcelsCreateArgs>
    ): Prisma__parcelsClient<parcelsGetPayload<T>>

    /**
     * Create many Parcels.
     *     @param {parcelsCreateManyArgs} args - Arguments to create many Parcels.
     *     @example
     *     // Create many Parcels
     *     const parcels = await prisma.parcels.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends parcelsCreateManyArgs>(
      args?: SelectSubset<T, parcelsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Parcels.
     * @param {parcelsDeleteArgs} args - Arguments to delete one Parcels.
     * @example
     * // Delete one Parcels
     * const Parcels = await prisma.parcels.delete({
     *   where: {
     *     // ... filter to delete one Parcels
     *   }
     * })
     * 
    **/
    delete<T extends parcelsDeleteArgs>(
      args: SelectSubset<T, parcelsDeleteArgs>
    ): Prisma__parcelsClient<parcelsGetPayload<T>>

    /**
     * Update one Parcels.
     * @param {parcelsUpdateArgs} args - Arguments to update one Parcels.
     * @example
     * // Update one Parcels
     * const parcels = await prisma.parcels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends parcelsUpdateArgs>(
      args: SelectSubset<T, parcelsUpdateArgs>
    ): Prisma__parcelsClient<parcelsGetPayload<T>>

    /**
     * Delete zero or more Parcels.
     * @param {parcelsDeleteManyArgs} args - Arguments to filter Parcels to delete.
     * @example
     * // Delete a few Parcels
     * const { count } = await prisma.parcels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends parcelsDeleteManyArgs>(
      args?: SelectSubset<T, parcelsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parcelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parcels
     * const parcels = await prisma.parcels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends parcelsUpdateManyArgs>(
      args: SelectSubset<T, parcelsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Parcels.
     * @param {parcelsUpsertArgs} args - Arguments to update or create a Parcels.
     * @example
     * // Update or create a Parcels
     * const parcels = await prisma.parcels.upsert({
     *   create: {
     *     // ... data to create a Parcels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parcels we want to update
     *   }
     * })
    **/
    upsert<T extends parcelsUpsertArgs>(
      args: SelectSubset<T, parcelsUpsertArgs>
    ): Prisma__parcelsClient<parcelsGetPayload<T>>

    /**
     * Count the number of Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parcelsCountArgs} args - Arguments to filter Parcels to count.
     * @example
     * // Count the number of Parcels
     * const count = await prisma.parcels.count({
     *   where: {
     *     // ... the filter for the Parcels we want to count
     *   }
     * })
    **/
    count<T extends parcelsCountArgs>(
      args?: Subset<T, parcelsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParcelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParcelsAggregateArgs>(args: Subset<T, ParcelsAggregateArgs>): PrismaPromise<GetParcelsAggregateType<T>>

    /**
     * Group by Parcels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParcelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParcelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParcelsGroupByArgs['orderBy'] }
        : { orderBy?: ParcelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParcelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParcelsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for parcels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__parcelsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    shipments<T extends shipmentsArgs= {}>(args?: Subset<T, shipmentsArgs>): Prisma__shipmentsClient<shipmentsGetPayload<T> | Null>;

    client<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * parcels base type for findUnique actions
   */
  export type parcelsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * Filter, which parcels to fetch.
     * 
    **/
    where: parcelsWhereUniqueInput
  }

  /**
   * parcels: findUnique
   */
  export interface parcelsFindUniqueArgs extends parcelsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parcels findUniqueOrThrow
   */
  export type parcelsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * Filter, which parcels to fetch.
     * 
    **/
    where: parcelsWhereUniqueInput
  }


  /**
   * parcels base type for findFirst actions
   */
  export type parcelsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * Filter, which parcels to fetch.
     * 
    **/
    where?: parcelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcels to fetch.
     * 
    **/
    orderBy?: Enumerable<parcelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parcels.
     * 
    **/
    cursor?: parcelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parcels.
     * 
    **/
    distinct?: Enumerable<ParcelsScalarFieldEnum>
  }

  /**
   * parcels: findFirst
   */
  export interface parcelsFindFirstArgs extends parcelsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * parcels findFirstOrThrow
   */
  export type parcelsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * Filter, which parcels to fetch.
     * 
    **/
    where?: parcelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcels to fetch.
     * 
    **/
    orderBy?: Enumerable<parcelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for parcels.
     * 
    **/
    cursor?: parcelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of parcels.
     * 
    **/
    distinct?: Enumerable<ParcelsScalarFieldEnum>
  }


  /**
   * parcels findMany
   */
  export type parcelsFindManyArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * Filter, which parcels to fetch.
     * 
    **/
    where?: parcelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of parcels to fetch.
     * 
    **/
    orderBy?: Enumerable<parcelsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing parcels.
     * 
    **/
    cursor?: parcelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` parcels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` parcels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ParcelsScalarFieldEnum>
  }


  /**
   * parcels create
   */
  export type parcelsCreateArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * The data needed to create a parcels.
     * 
    **/
    data: XOR<parcelsCreateInput, parcelsUncheckedCreateInput>
  }


  /**
   * parcels createMany
   */
  export type parcelsCreateManyArgs = {
    /**
     * The data used to create many parcels.
     * 
    **/
    data: Enumerable<parcelsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * parcels update
   */
  export type parcelsUpdateArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * The data needed to update a parcels.
     * 
    **/
    data: XOR<parcelsUpdateInput, parcelsUncheckedUpdateInput>
    /**
     * Choose, which parcels to update.
     * 
    **/
    where: parcelsWhereUniqueInput
  }


  /**
   * parcels updateMany
   */
  export type parcelsUpdateManyArgs = {
    /**
     * The data used to update parcels.
     * 
    **/
    data: XOR<parcelsUpdateManyMutationInput, parcelsUncheckedUpdateManyInput>
    /**
     * Filter which parcels to update
     * 
    **/
    where?: parcelsWhereInput
  }


  /**
   * parcels upsert
   */
  export type parcelsUpsertArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * The filter to search for the parcels to update in case it exists.
     * 
    **/
    where: parcelsWhereUniqueInput
    /**
     * In case the parcels found by the `where` argument doesn't exist, create a new parcels with this data.
     * 
    **/
    create: XOR<parcelsCreateInput, parcelsUncheckedCreateInput>
    /**
     * In case the parcels was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<parcelsUpdateInput, parcelsUncheckedUpdateInput>
  }


  /**
   * parcels delete
   */
  export type parcelsDeleteArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
    /**
     * Filter which parcels to delete.
     * 
    **/
    where: parcelsWhereUniqueInput
  }


  /**
   * parcels deleteMany
   */
  export type parcelsDeleteManyArgs = {
    /**
     * Filter which parcels to delete
     * 
    **/
    where?: parcelsWhereInput
  }


  /**
   * parcels without action
   */
  export type parcelsArgs = {
    /**
     * Select specific fields to fetch from the parcels
     * 
    **/
    select?: parcelsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: parcelsInclude | null
  }



  /**
   * Model shipments
   */


  export type AggregateShipments = {
    _count: ShipmentsCountAggregateOutputType | null
    _avg: ShipmentsAvgAggregateOutputType | null
    _sum: ShipmentsSumAggregateOutputType | null
    _min: ShipmentsMinAggregateOutputType | null
    _max: ShipmentsMaxAggregateOutputType | null
  }

  export type ShipmentsAvgAggregateOutputType = {
    weight: Decimal | null
    truck_id: number | null
    destination_branch: number | null
    departure_branch: number | null
  }

  export type ShipmentsSumAggregateOutputType = {
    weight: Decimal | null
    truck_id: number | null
    destination_branch: number | null
    departure_branch: number | null
  }

  export type ShipmentsMinAggregateOutputType = {
    id: string | null
    status: string | null
    arrival_time: Date | null
    departure_time: Date | null
    weight: Decimal | null
    truck_id: number | null
    driver_id: string | null
    destination_branch: number | null
    departure_branch: number | null
    parcel_id: string | null
  }

  export type ShipmentsMaxAggregateOutputType = {
    id: string | null
    status: string | null
    arrival_time: Date | null
    departure_time: Date | null
    weight: Decimal | null
    truck_id: number | null
    driver_id: string | null
    destination_branch: number | null
    departure_branch: number | null
    parcel_id: string | null
  }

  export type ShipmentsCountAggregateOutputType = {
    id: number
    status: number
    arrival_time: number
    departure_time: number
    weight: number
    truck_id: number
    driver_id: number
    destination_branch: number
    departure_branch: number
    parcel_id: number
    _all: number
  }


  export type ShipmentsAvgAggregateInputType = {
    weight?: true
    truck_id?: true
    destination_branch?: true
    departure_branch?: true
  }

  export type ShipmentsSumAggregateInputType = {
    weight?: true
    truck_id?: true
    destination_branch?: true
    departure_branch?: true
  }

  export type ShipmentsMinAggregateInputType = {
    id?: true
    status?: true
    arrival_time?: true
    departure_time?: true
    weight?: true
    truck_id?: true
    driver_id?: true
    destination_branch?: true
    departure_branch?: true
    parcel_id?: true
  }

  export type ShipmentsMaxAggregateInputType = {
    id?: true
    status?: true
    arrival_time?: true
    departure_time?: true
    weight?: true
    truck_id?: true
    driver_id?: true
    destination_branch?: true
    departure_branch?: true
    parcel_id?: true
  }

  export type ShipmentsCountAggregateInputType = {
    id?: true
    status?: true
    arrival_time?: true
    departure_time?: true
    weight?: true
    truck_id?: true
    driver_id?: true
    destination_branch?: true
    departure_branch?: true
    parcel_id?: true
    _all?: true
  }

  export type ShipmentsAggregateArgs = {
    /**
     * Filter which shipments to aggregate.
     * 
    **/
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     * 
    **/
    orderBy?: Enumerable<shipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned shipments
    **/
    _count?: true | ShipmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentsMaxAggregateInputType
  }

  export type GetShipmentsAggregateType<T extends ShipmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateShipments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipments[P]>
      : GetScalarType<T[P], AggregateShipments[P]>
  }




  export type ShipmentsGroupByArgs = {
    where?: shipmentsWhereInput
    orderBy?: Enumerable<shipmentsOrderByWithAggregationInput>
    by: Array<ShipmentsScalarFieldEnum>
    having?: shipmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentsCountAggregateInputType | true
    _avg?: ShipmentsAvgAggregateInputType
    _sum?: ShipmentsSumAggregateInputType
    _min?: ShipmentsMinAggregateInputType
    _max?: ShipmentsMaxAggregateInputType
  }


  export type ShipmentsGroupByOutputType = {
    id: string
    status: string
    arrival_time: Date | null
    departure_time: Date
    weight: Decimal
    truck_id: number
    driver_id: string
    destination_branch: number
    departure_branch: number
    parcel_id: string | null
    _count: ShipmentsCountAggregateOutputType | null
    _avg: ShipmentsAvgAggregateOutputType | null
    _sum: ShipmentsSumAggregateOutputType | null
    _min: ShipmentsMinAggregateOutputType | null
    _max: ShipmentsMaxAggregateOutputType | null
  }

  type GetShipmentsGroupByPayload<T extends ShipmentsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShipmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentsGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentsGroupByOutputType[P]>
        }
      >
    >


  export type shipmentsSelect = {
    id?: boolean
    status?: boolean
    arrival_time?: boolean
    departure_time?: boolean
    weight?: boolean
    truck_id?: boolean
    driver_id?: boolean
    destination_branch?: boolean
    departure_branch?: boolean
    parcel_id?: boolean
    truck?: boolean | trucksArgs
    drivers?: boolean | driversArgs
    branch_destination?: boolean | branchesArgs
    branch_departure?: boolean | branchesArgs
    parcels?: boolean | parcelsFindManyArgs
    _count?: boolean | ShipmentsCountOutputTypeArgs
  }


  export type shipmentsInclude = {
    truck?: boolean | trucksArgs
    drivers?: boolean | driversArgs
    branch_destination?: boolean | branchesArgs
    branch_departure?: boolean | branchesArgs
    parcels?: boolean | parcelsFindManyArgs
    _count?: boolean | ShipmentsCountOutputTypeArgs
  } 

  export type shipmentsGetPayload<S extends boolean | null | undefined | shipmentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? shipments :
    S extends undefined ? never :
    S extends { include: any } & (shipmentsArgs | shipmentsFindManyArgs)
    ? shipments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'truck' ? trucksGetPayload<S['include'][P]> | null :
        P extends 'drivers' ? driversGetPayload<S['include'][P]> | null :
        P extends 'branch_destination' ? branchesGetPayload<S['include'][P]> | null :
        P extends 'branch_departure' ? branchesGetPayload<S['include'][P]> | null :
        P extends 'parcels' ? Array < parcelsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShipmentsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (shipmentsArgs | shipmentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'truck' ? trucksGetPayload<S['select'][P]> | null :
        P extends 'drivers' ? driversGetPayload<S['select'][P]> | null :
        P extends 'branch_destination' ? branchesGetPayload<S['select'][P]> | null :
        P extends 'branch_departure' ? branchesGetPayload<S['select'][P]> | null :
        P extends 'parcels' ? Array < parcelsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShipmentsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof shipments ? shipments[P] : never
  } 
      : shipments


  type shipmentsCountArgs = Merge<
    Omit<shipmentsFindManyArgs, 'select' | 'include'> & {
      select?: ShipmentsCountAggregateInputType | true
    }
  >

  export interface shipmentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Shipments that matches the filter.
     * @param {shipmentsFindUniqueArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends shipmentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, shipmentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'shipments'> extends True ? Prisma__shipmentsClient<shipmentsGetPayload<T>> : Prisma__shipmentsClient<shipmentsGetPayload<T> | null, null>

    /**
     * Find one Shipments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {shipmentsFindUniqueOrThrowArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends shipmentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, shipmentsFindUniqueOrThrowArgs>
    ): Prisma__shipmentsClient<shipmentsGetPayload<T>>

    /**
     * Find the first Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsFindFirstArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends shipmentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, shipmentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'shipments'> extends True ? Prisma__shipmentsClient<shipmentsGetPayload<T>> : Prisma__shipmentsClient<shipmentsGetPayload<T> | null, null>

    /**
     * Find the first Shipments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsFindFirstOrThrowArgs} args - Arguments to find a Shipments
     * @example
     * // Get one Shipments
     * const shipments = await prisma.shipments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends shipmentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, shipmentsFindFirstOrThrowArgs>
    ): Prisma__shipmentsClient<shipmentsGetPayload<T>>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipments.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentsWithIdOnly = await prisma.shipments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends shipmentsFindManyArgs>(
      args?: SelectSubset<T, shipmentsFindManyArgs>
    ): PrismaPromise<Array<shipmentsGetPayload<T>>>

    /**
     * Create a Shipments.
     * @param {shipmentsCreateArgs} args - Arguments to create a Shipments.
     * @example
     * // Create one Shipments
     * const Shipments = await prisma.shipments.create({
     *   data: {
     *     // ... data to create a Shipments
     *   }
     * })
     * 
    **/
    create<T extends shipmentsCreateArgs>(
      args: SelectSubset<T, shipmentsCreateArgs>
    ): Prisma__shipmentsClient<shipmentsGetPayload<T>>

    /**
     * Create many Shipments.
     *     @param {shipmentsCreateManyArgs} args - Arguments to create many Shipments.
     *     @example
     *     // Create many Shipments
     *     const shipments = await prisma.shipments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends shipmentsCreateManyArgs>(
      args?: SelectSubset<T, shipmentsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Shipments.
     * @param {shipmentsDeleteArgs} args - Arguments to delete one Shipments.
     * @example
     * // Delete one Shipments
     * const Shipments = await prisma.shipments.delete({
     *   where: {
     *     // ... filter to delete one Shipments
     *   }
     * })
     * 
    **/
    delete<T extends shipmentsDeleteArgs>(
      args: SelectSubset<T, shipmentsDeleteArgs>
    ): Prisma__shipmentsClient<shipmentsGetPayload<T>>

    /**
     * Update one Shipments.
     * @param {shipmentsUpdateArgs} args - Arguments to update one Shipments.
     * @example
     * // Update one Shipments
     * const shipments = await prisma.shipments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends shipmentsUpdateArgs>(
      args: SelectSubset<T, shipmentsUpdateArgs>
    ): Prisma__shipmentsClient<shipmentsGetPayload<T>>

    /**
     * Delete zero or more Shipments.
     * @param {shipmentsDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends shipmentsDeleteManyArgs>(
      args?: SelectSubset<T, shipmentsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipments = await prisma.shipments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends shipmentsUpdateManyArgs>(
      args: SelectSubset<T, shipmentsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipments.
     * @param {shipmentsUpsertArgs} args - Arguments to update or create a Shipments.
     * @example
     * // Update or create a Shipments
     * const shipments = await prisma.shipments.upsert({
     *   create: {
     *     // ... data to create a Shipments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipments we want to update
     *   }
     * })
    **/
    upsert<T extends shipmentsUpsertArgs>(
      args: SelectSubset<T, shipmentsUpsertArgs>
    ): Prisma__shipmentsClient<shipmentsGetPayload<T>>

    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shipmentsCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipments.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends shipmentsCountArgs>(
      args?: Subset<T, shipmentsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentsAggregateArgs>(args: Subset<T, ShipmentsAggregateArgs>): PrismaPromise<GetShipmentsAggregateType<T>>

    /**
     * Group by Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentsGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for shipments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__shipmentsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    truck<T extends trucksArgs= {}>(args?: Subset<T, trucksArgs>): Prisma__trucksClient<trucksGetPayload<T> | Null>;

    drivers<T extends driversArgs= {}>(args?: Subset<T, driversArgs>): Prisma__driversClient<driversGetPayload<T> | Null>;

    branch_destination<T extends branchesArgs= {}>(args?: Subset<T, branchesArgs>): Prisma__branchesClient<branchesGetPayload<T> | Null>;

    branch_departure<T extends branchesArgs= {}>(args?: Subset<T, branchesArgs>): Prisma__branchesClient<branchesGetPayload<T> | Null>;

    parcels<T extends parcelsFindManyArgs= {}>(args?: Subset<T, parcelsFindManyArgs>): PrismaPromise<Array<parcelsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * shipments base type for findUnique actions
   */
  export type shipmentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * Filter, which shipments to fetch.
     * 
    **/
    where: shipmentsWhereUniqueInput
  }

  /**
   * shipments: findUnique
   */
  export interface shipmentsFindUniqueArgs extends shipmentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * shipments findUniqueOrThrow
   */
  export type shipmentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * Filter, which shipments to fetch.
     * 
    **/
    where: shipmentsWhereUniqueInput
  }


  /**
   * shipments base type for findFirst actions
   */
  export type shipmentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * Filter, which shipments to fetch.
     * 
    **/
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     * 
    **/
    orderBy?: Enumerable<shipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shipments.
     * 
    **/
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shipments.
     * 
    **/
    distinct?: Enumerable<ShipmentsScalarFieldEnum>
  }

  /**
   * shipments: findFirst
   */
  export interface shipmentsFindFirstArgs extends shipmentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * shipments findFirstOrThrow
   */
  export type shipmentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * Filter, which shipments to fetch.
     * 
    **/
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     * 
    **/
    orderBy?: Enumerable<shipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for shipments.
     * 
    **/
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of shipments.
     * 
    **/
    distinct?: Enumerable<ShipmentsScalarFieldEnum>
  }


  /**
   * shipments findMany
   */
  export type shipmentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * Filter, which shipments to fetch.
     * 
    **/
    where?: shipmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of shipments to fetch.
     * 
    **/
    orderBy?: Enumerable<shipmentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing shipments.
     * 
    **/
    cursor?: shipmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` shipments from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` shipments.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShipmentsScalarFieldEnum>
  }


  /**
   * shipments create
   */
  export type shipmentsCreateArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * The data needed to create a shipments.
     * 
    **/
    data: XOR<shipmentsCreateInput, shipmentsUncheckedCreateInput>
  }


  /**
   * shipments createMany
   */
  export type shipmentsCreateManyArgs = {
    /**
     * The data used to create many shipments.
     * 
    **/
    data: Enumerable<shipmentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * shipments update
   */
  export type shipmentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * The data needed to update a shipments.
     * 
    **/
    data: XOR<shipmentsUpdateInput, shipmentsUncheckedUpdateInput>
    /**
     * Choose, which shipments to update.
     * 
    **/
    where: shipmentsWhereUniqueInput
  }


  /**
   * shipments updateMany
   */
  export type shipmentsUpdateManyArgs = {
    /**
     * The data used to update shipments.
     * 
    **/
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyInput>
    /**
     * Filter which shipments to update
     * 
    **/
    where?: shipmentsWhereInput
  }


  /**
   * shipments upsert
   */
  export type shipmentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * The filter to search for the shipments to update in case it exists.
     * 
    **/
    where: shipmentsWhereUniqueInput
    /**
     * In case the shipments found by the `where` argument doesn't exist, create a new shipments with this data.
     * 
    **/
    create: XOR<shipmentsCreateInput, shipmentsUncheckedCreateInput>
    /**
     * In case the shipments was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<shipmentsUpdateInput, shipmentsUncheckedUpdateInput>
  }


  /**
   * shipments delete
   */
  export type shipmentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
    /**
     * Filter which shipments to delete.
     * 
    **/
    where: shipmentsWhereUniqueInput
  }


  /**
   * shipments deleteMany
   */
  export type shipmentsDeleteManyArgs = {
    /**
     * Filter which shipments to delete
     * 
    **/
    where?: shipmentsWhereInput
  }


  /**
   * shipments without action
   */
  export type shipmentsArgs = {
    /**
     * Select specific fields to fetch from the shipments
     * 
    **/
    select?: shipmentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: shipmentsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BranchesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    city_id: 'city_id',
    branch_lat: 'branch_lat',
    branch_long: 'branch_long'
  };

  export type BranchesScalarFieldEnum = (typeof BranchesScalarFieldEnum)[keyof typeof BranchesScalarFieldEnum]


  export const CitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    postcode: 'postcode'
  };

  export type CitiesScalarFieldEnum = (typeof CitiesScalarFieldEnum)[keyof typeof CitiesScalarFieldEnum]


  export const DriversScalarFieldEnum: {
    user_id: 'user_id',
    truck_id: 'truck_id'
  };

  export type DriversScalarFieldEnum = (typeof DriversScalarFieldEnum)[keyof typeof DriversScalarFieldEnum]


  export const ParcelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    content: 'content',
    volume_weight: 'volume_weight',
    admission_date: 'admission_date',
    client_id: 'client_id',
    shipment_id: 'shipment_id'
  };

  export type ParcelsScalarFieldEnum = (typeof ParcelsScalarFieldEnum)[keyof typeof ParcelsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ShipmentsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    arrival_time: 'arrival_time',
    departure_time: 'departure_time',
    weight: 'weight',
    truck_id: 'truck_id',
    driver_id: 'driver_id',
    destination_branch: 'destination_branch',
    departure_branch: 'departure_branch',
    parcel_id: 'parcel_id'
  };

  export type ShipmentsScalarFieldEnum = (typeof ShipmentsScalarFieldEnum)[keyof typeof ShipmentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TrucksScalarFieldEnum: {
    id: 'id',
    license_plate: 'license_plate',
    brand: 'brand',
    max_weight: 'max_weight',
    available: 'available',
    driver_id: 'driver_id',
    branch_id: 'branch_id'
  };

  export type TrucksScalarFieldEnum = (typeof TrucksScalarFieldEnum)[keyof typeof TrucksScalarFieldEnum]


  export const UserTypesScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type UserTypesScalarFieldEnum = (typeof UserTypesScalarFieldEnum)[keyof typeof UserTypesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    userType_id: 'userType_id',
    branch_id: 'branch_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type citiesWhereInput = {
    AND?: Enumerable<citiesWhereInput>
    OR?: Enumerable<citiesWhereInput>
    NOT?: Enumerable<citiesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    postcode?: StringFilter | string
    branches?: BranchesListRelationFilter
  }

  export type citiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    postcode?: SortOrder
    branches?: branchesOrderByRelationAggregateInput
  }

  export type citiesWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type citiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    postcode?: SortOrder
    _count?: citiesCountOrderByAggregateInput
    _avg?: citiesAvgOrderByAggregateInput
    _max?: citiesMaxOrderByAggregateInput
    _min?: citiesMinOrderByAggregateInput
    _sum?: citiesSumOrderByAggregateInput
  }

  export type citiesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<citiesScalarWhereWithAggregatesInput>
    OR?: Enumerable<citiesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<citiesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    postcode?: StringWithAggregatesFilter | string
  }

  export type branchesWhereInput = {
    AND?: Enumerable<branchesWhereInput>
    OR?: Enumerable<branchesWhereInput>
    NOT?: Enumerable<branchesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    city_id?: IntFilter | number
    branch_lat?: StringFilter | string
    branch_long?: StringFilter | string
    users?: UsersListRelationFilter
    trucks?: TrucksListRelationFilter
    shipments_destination?: ShipmentsListRelationFilter
    shipments_departure?: ShipmentsListRelationFilter
    city?: XOR<CitiesRelationFilter, citiesWhereInput>
  }

  export type branchesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    branch_lat?: SortOrder
    branch_long?: SortOrder
    users?: usersOrderByRelationAggregateInput
    trucks?: trucksOrderByRelationAggregateInput
    shipments_destination?: shipmentsOrderByRelationAggregateInput
    shipments_departure?: shipmentsOrderByRelationAggregateInput
    city?: citiesOrderByWithRelationInput
  }

  export type branchesWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type branchesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    branch_lat?: SortOrder
    branch_long?: SortOrder
    _count?: branchesCountOrderByAggregateInput
    _avg?: branchesAvgOrderByAggregateInput
    _max?: branchesMaxOrderByAggregateInput
    _min?: branchesMinOrderByAggregateInput
    _sum?: branchesSumOrderByAggregateInput
  }

  export type branchesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<branchesScalarWhereWithAggregatesInput>
    OR?: Enumerable<branchesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<branchesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    city_id?: IntWithAggregatesFilter | number
    branch_lat?: StringWithAggregatesFilter | string
    branch_long?: StringWithAggregatesFilter | string
  }

  export type userTypesWhereInput = {
    AND?: Enumerable<userTypesWhereInput>
    OR?: Enumerable<userTypesWhereInput>
    NOT?: Enumerable<userTypesWhereInput>
    id?: IntFilter | number
    type?: StringFilter | string
    users?: UsersListRelationFilter
  }

  export type userTypesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type userTypesWhereUniqueInput = {
    id?: number
    type?: string
  }

  export type userTypesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: userTypesCountOrderByAggregateInput
    _avg?: userTypesAvgOrderByAggregateInput
    _max?: userTypesMaxOrderByAggregateInput
    _min?: userTypesMinOrderByAggregateInput
    _sum?: userTypesSumOrderByAggregateInput
  }

  export type userTypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userTypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<userTypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userTypesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    phone?: StringFilter | string
    userType_id?: IntFilter | number
    branch_id?: IntNullableFilter | number | null
    drivers?: XOR<DriversRelationFilter, driversWhereInput> | null
    clients?: ParcelsListRelationFilter
    userTypes?: XOR<UserTypesRelationFilter, userTypesWhereInput> | null
    branches?: XOR<BranchesRelationFilter, branchesWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    userType_id?: SortOrder
    branch_id?: SortOrder
    drivers?: driversOrderByWithRelationInput
    clients?: parcelsOrderByRelationAggregateInput
    userTypes?: userTypesOrderByWithRelationInput
    branches?: branchesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    id?: string
    branch_id?: number
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    userType_id?: SortOrder
    branch_id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    userType_id?: IntWithAggregatesFilter | number
    branch_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type driversWhereInput = {
    AND?: Enumerable<driversWhereInput>
    OR?: Enumerable<driversWhereInput>
    NOT?: Enumerable<driversWhereInput>
    user_id?: StringFilter | string
    truck_id?: IntNullableFilter | number | null
    shipments?: XOR<ShipmentsRelationFilter, shipmentsWhereInput> | null
    trucks?: TrucksListRelationFilter
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type driversOrderByWithRelationInput = {
    user_id?: SortOrder
    truck_id?: SortOrder
    shipments?: shipmentsOrderByWithRelationInput
    trucks?: trucksOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type driversWhereUniqueInput = {
    user_id?: string
  }

  export type driversOrderByWithAggregationInput = {
    user_id?: SortOrder
    truck_id?: SortOrder
    _count?: driversCountOrderByAggregateInput
    _avg?: driversAvgOrderByAggregateInput
    _max?: driversMaxOrderByAggregateInput
    _min?: driversMinOrderByAggregateInput
    _sum?: driversSumOrderByAggregateInput
  }

  export type driversScalarWhereWithAggregatesInput = {
    AND?: Enumerable<driversScalarWhereWithAggregatesInput>
    OR?: Enumerable<driversScalarWhereWithAggregatesInput>
    NOT?: Enumerable<driversScalarWhereWithAggregatesInput>
    user_id?: StringWithAggregatesFilter | string
    truck_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type trucksWhereInput = {
    AND?: Enumerable<trucksWhereInput>
    OR?: Enumerable<trucksWhereInput>
    NOT?: Enumerable<trucksWhereInput>
    id?: IntFilter | number
    license_plate?: StringFilter | string
    brand?: StringFilter | string
    max_weight?: FloatFilter | number
    available?: BoolFilter | boolean
    driver_id?: StringNullableFilter | string | null
    branch_id?: IntFilter | number
    shipments?: XOR<ShipmentsRelationFilter, shipmentsWhereInput> | null
    driver?: XOR<DriversRelationFilter, driversWhereInput> | null
    branch?: XOR<BranchesRelationFilter, branchesWhereInput> | null
  }

  export type trucksOrderByWithRelationInput = {
    id?: SortOrder
    license_plate?: SortOrder
    brand?: SortOrder
    max_weight?: SortOrder
    available?: SortOrder
    driver_id?: SortOrder
    branch_id?: SortOrder
    shipments?: shipmentsOrderByWithRelationInput
    driver?: driversOrderByWithRelationInput
    branch?: branchesOrderByWithRelationInput
  }

  export type trucksWhereUniqueInput = {
    id?: number
    license_plate?: string
    branch_id?: number
  }

  export type trucksOrderByWithAggregationInput = {
    id?: SortOrder
    license_plate?: SortOrder
    brand?: SortOrder
    max_weight?: SortOrder
    available?: SortOrder
    driver_id?: SortOrder
    branch_id?: SortOrder
    _count?: trucksCountOrderByAggregateInput
    _avg?: trucksAvgOrderByAggregateInput
    _max?: trucksMaxOrderByAggregateInput
    _min?: trucksMinOrderByAggregateInput
    _sum?: trucksSumOrderByAggregateInput
  }

  export type trucksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<trucksScalarWhereWithAggregatesInput>
    OR?: Enumerable<trucksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<trucksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    license_plate?: StringWithAggregatesFilter | string
    brand?: StringWithAggregatesFilter | string
    max_weight?: FloatWithAggregatesFilter | number
    available?: BoolWithAggregatesFilter | boolean
    driver_id?: StringNullableWithAggregatesFilter | string | null
    branch_id?: IntWithAggregatesFilter | number
  }

  export type parcelsWhereInput = {
    AND?: Enumerable<parcelsWhereInput>
    OR?: Enumerable<parcelsWhereInput>
    NOT?: Enumerable<parcelsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    content?: StringFilter | string
    volume_weight?: FloatFilter | number
    admission_date?: DateTimeFilter | Date | string
    client_id?: StringFilter | string
    shipment_id?: StringNullableFilter | string | null
    shipments?: XOR<ShipmentsRelationFilter, shipmentsWhereInput> | null
    client?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type parcelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    volume_weight?: SortOrder
    admission_date?: SortOrder
    client_id?: SortOrder
    shipment_id?: SortOrder
    shipments?: shipmentsOrderByWithRelationInput
    client?: usersOrderByWithRelationInput
  }

  export type parcelsWhereUniqueInput = {
    id?: string
    shipment_id?: string
  }

  export type parcelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    volume_weight?: SortOrder
    admission_date?: SortOrder
    client_id?: SortOrder
    shipment_id?: SortOrder
    _count?: parcelsCountOrderByAggregateInput
    _avg?: parcelsAvgOrderByAggregateInput
    _max?: parcelsMaxOrderByAggregateInput
    _min?: parcelsMinOrderByAggregateInput
    _sum?: parcelsSumOrderByAggregateInput
  }

  export type parcelsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<parcelsScalarWhereWithAggregatesInput>
    OR?: Enumerable<parcelsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<parcelsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    volume_weight?: FloatWithAggregatesFilter | number
    admission_date?: DateTimeWithAggregatesFilter | Date | string
    client_id?: StringWithAggregatesFilter | string
    shipment_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type shipmentsWhereInput = {
    AND?: Enumerable<shipmentsWhereInput>
    OR?: Enumerable<shipmentsWhereInput>
    NOT?: Enumerable<shipmentsWhereInput>
    id?: StringFilter | string
    status?: StringFilter | string
    arrival_time?: DateTimeNullableFilter | Date | string | null
    departure_time?: DateTimeFilter | Date | string
    weight?: DecimalFilter | Decimal | DecimalJsLike | number | string
    truck_id?: IntFilter | number
    driver_id?: StringFilter | string
    destination_branch?: IntFilter | number
    departure_branch?: IntFilter | number
    parcel_id?: StringNullableFilter | string | null
    truck?: XOR<TrucksRelationFilter, trucksWhereInput> | null
    drivers?: XOR<DriversRelationFilter, driversWhereInput> | null
    branch_destination?: XOR<BranchesRelationFilter, branchesWhereInput> | null
    branch_departure?: XOR<BranchesRelationFilter, branchesWhereInput> | null
    parcels?: ParcelsListRelationFilter
  }

  export type shipmentsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    arrival_time?: SortOrder
    departure_time?: SortOrder
    weight?: SortOrder
    truck_id?: SortOrder
    driver_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
    parcel_id?: SortOrder
    truck?: trucksOrderByWithRelationInput
    drivers?: driversOrderByWithRelationInput
    branch_destination?: branchesOrderByWithRelationInput
    branch_departure?: branchesOrderByWithRelationInput
    parcels?: parcelsOrderByRelationAggregateInput
  }

  export type shipmentsWhereUniqueInput = {
    id?: string
    truck_id?: number
    driver_id?: string
    destination_branch?: number
    departure_branch?: number
    parcel_id?: string
  }

  export type shipmentsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    arrival_time?: SortOrder
    departure_time?: SortOrder
    weight?: SortOrder
    truck_id?: SortOrder
    driver_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
    parcel_id?: SortOrder
    _count?: shipmentsCountOrderByAggregateInput
    _avg?: shipmentsAvgOrderByAggregateInput
    _max?: shipmentsMaxOrderByAggregateInput
    _min?: shipmentsMinOrderByAggregateInput
    _sum?: shipmentsSumOrderByAggregateInput
  }

  export type shipmentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<shipmentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<shipmentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<shipmentsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    arrival_time?: DateTimeNullableWithAggregatesFilter | Date | string | null
    departure_time?: DateTimeWithAggregatesFilter | Date | string
    weight?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    truck_id?: IntWithAggregatesFilter | number
    driver_id?: StringWithAggregatesFilter | string
    destination_branch?: IntWithAggregatesFilter | number
    departure_branch?: IntWithAggregatesFilter | number
    parcel_id?: StringNullableWithAggregatesFilter | string | null
  }

  export type citiesCreateInput = {
    name: string
    postcode: string
    branches?: branchesCreateNestedManyWithoutCityInput
  }

  export type citiesUncheckedCreateInput = {
    id?: number
    name: string
    postcode: string
    branches?: branchesUncheckedCreateNestedManyWithoutCityInput
  }

  export type citiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    branches?: branchesUpdateManyWithoutCityNestedInput
  }

  export type citiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    branches?: branchesUncheckedUpdateManyWithoutCityNestedInput
  }

  export type citiesCreateManyInput = {
    id?: number
    name: string
    postcode: string
  }

  export type citiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type branchesCreateInput = {
    name: string
    address: string
    branch_lat: string
    branch_long: string
    users?: usersCreateNestedManyWithoutBranchesInput
    trucks?: trucksCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsCreateNestedManyWithoutBranch_departureInput
    city: citiesCreateNestedOneWithoutBranchesInput
  }

  export type branchesUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
    users?: usersUncheckedCreateNestedManyWithoutBranchesInput
    trucks?: trucksUncheckedCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsUncheckedCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsUncheckedCreateNestedManyWithoutBranch_departureInput
  }

  export type branchesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUpdateManyWithoutBranch_departureNestedInput
    city?: citiesUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUncheckedUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUncheckedUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUncheckedUpdateManyWithoutBranch_departureNestedInput
  }

  export type branchesCreateManyInput = {
    id?: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
  }

  export type branchesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
  }

  export type branchesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
  }

  export type userTypesCreateInput = {
    type: string
    users?: usersCreateNestedManyWithoutUserTypesInput
  }

  export type userTypesUncheckedCreateInput = {
    id?: number
    type: string
    users?: usersUncheckedCreateNestedManyWithoutUserTypesInput
  }

  export type userTypesUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutUserTypesNestedInput
  }

  export type userTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutUserTypesNestedInput
  }

  export type userTypesCreateManyInput = {
    id?: number
    type: string
  }

  export type userTypesUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type userTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    drivers?: driversCreateNestedOneWithoutUsersInput
    clients?: parcelsCreateNestedManyWithoutClientInput
    userTypes?: userTypesCreateNestedOneWithoutUsersInput
    branches?: branchesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
    branch_id?: number | null
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
    clients?: parcelsUncheckedCreateNestedManyWithoutClientInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    drivers?: driversUpdateOneWithoutUsersNestedInput
    clients?: parcelsUpdateManyWithoutClientNestedInput
    userTypes?: userTypesUpdateOneWithoutUsersNestedInput
    branches?: branchesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userType_id?: IntFieldUpdateOperationsInput | number
    branch_id?: NullableIntFieldUpdateOperationsInput | number | null
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
    clients?: parcelsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
    branch_id?: number | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userType_id?: IntFieldUpdateOperationsInput | number
    branch_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type driversCreateInput = {
    truck_id?: number | null
    shipments?: shipmentsCreateNestedOneWithoutDriversInput
    trucks?: trucksCreateNestedManyWithoutDriverInput
    users: usersCreateNestedOneWithoutDriversInput
  }

  export type driversUncheckedCreateInput = {
    user_id: string
    truck_id?: number | null
    shipments?: shipmentsUncheckedCreateNestedOneWithoutDriversInput
    trucks?: trucksUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driversUpdateInput = {
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    shipments?: shipmentsUpdateOneWithoutDriversNestedInput
    trucks?: trucksUpdateManyWithoutDriverNestedInput
    users?: usersUpdateOneRequiredWithoutDriversNestedInput
  }

  export type driversUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    shipments?: shipmentsUncheckedUpdateOneWithoutDriversNestedInput
    trucks?: trucksUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type driversCreateManyInput = {
    user_id: string
    truck_id?: number | null
  }

  export type driversUpdateManyMutationInput = {
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type driversUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type trucksCreateInput = {
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    shipments?: shipmentsCreateNestedOneWithoutTruckInput
    driver?: driversCreateNestedOneWithoutTrucksInput
    branch?: branchesCreateNestedOneWithoutTrucksInput
  }

  export type trucksUncheckedCreateInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver_id?: string | null
    branch_id: number
    shipments?: shipmentsUncheckedCreateNestedOneWithoutTruckInput
  }

  export type trucksUpdateInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    shipments?: shipmentsUpdateOneWithoutTruckNestedInput
    driver?: driversUpdateOneWithoutTrucksNestedInput
    branch?: branchesUpdateOneWithoutTrucksNestedInput
  }

  export type trucksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    branch_id?: IntFieldUpdateOperationsInput | number
    shipments?: shipmentsUncheckedUpdateOneWithoutTruckNestedInput
  }

  export type trucksCreateManyInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver_id?: string | null
    branch_id: number
  }

  export type trucksUpdateManyMutationInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type trucksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    branch_id?: IntFieldUpdateOperationsInput | number
  }

  export type parcelsCreateInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    shipments?: shipmentsCreateNestedOneWithoutParcelsInput
    client: usersCreateNestedOneWithoutClientsInput
  }

  export type parcelsUncheckedCreateInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    client_id: string
    shipment_id?: string | null
  }

  export type parcelsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: shipmentsUpdateOneWithoutParcelsNestedInput
    client?: usersUpdateOneRequiredWithoutClientsNestedInput
  }

  export type parcelsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    client_id?: StringFieldUpdateOperationsInput | string
    shipment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parcelsCreateManyInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    client_id: string
    shipment_id?: string | null
  }

  export type parcelsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type parcelsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    client_id?: StringFieldUpdateOperationsInput | string
    shipment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shipmentsCreateInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    parcel_id?: string | null
    truck?: trucksCreateNestedOneWithoutShipmentsInput
    drivers?: driversCreateNestedOneWithoutShipmentsInput
    branch_destination?: branchesCreateNestedOneWithoutShipments_destinationInput
    branch_departure?: branchesCreateNestedOneWithoutShipments_departureInput
    parcels?: parcelsCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    destination_branch: number
    departure_branch: number
    parcel_id?: string | null
    parcels?: parcelsUncheckedCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: trucksUpdateOneWithoutShipmentsNestedInput
    drivers?: driversUpdateOneWithoutShipmentsNestedInput
    branch_destination?: branchesUpdateOneWithoutShipments_destinationNestedInput
    branch_departure?: branchesUpdateOneWithoutShipments_departureNestedInput
    parcels?: parcelsUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_branch?: IntFieldUpdateOperationsInput | number
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    parcels?: parcelsUncheckedUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsCreateManyInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    destination_branch: number
    departure_branch: number
    parcel_id?: string | null
  }

  export type shipmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shipmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_branch?: IntFieldUpdateOperationsInput | number
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BranchesListRelationFilter = {
    every?: branchesWhereInput
    some?: branchesWhereInput
    none?: branchesWhereInput
  }

  export type branchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type citiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    postcode?: SortOrder
  }

  export type citiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type citiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    postcode?: SortOrder
  }

  export type citiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    postcode?: SortOrder
  }

  export type citiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type TrucksListRelationFilter = {
    every?: trucksWhereInput
    some?: trucksWhereInput
    none?: trucksWhereInput
  }

  export type ShipmentsListRelationFilter = {
    every?: shipmentsWhereInput
    some?: shipmentsWhereInput
    none?: shipmentsWhereInput
  }

  export type CitiesRelationFilter = {
    is?: citiesWhereInput
    isNot?: citiesWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trucksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type shipmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type branchesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    branch_lat?: SortOrder
    branch_long?: SortOrder
  }

  export type branchesAvgOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
  }

  export type branchesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    branch_lat?: SortOrder
    branch_long?: SortOrder
  }

  export type branchesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city_id?: SortOrder
    branch_lat?: SortOrder
    branch_long?: SortOrder
  }

  export type branchesSumOrderByAggregateInput = {
    id?: SortOrder
    city_id?: SortOrder
  }

  export type userTypesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type userTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type userTypesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type userTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DriversRelationFilter = {
    is?: driversWhereInput | null
    isNot?: driversWhereInput | null
  }

  export type ParcelsListRelationFilter = {
    every?: parcelsWhereInput
    some?: parcelsWhereInput
    none?: parcelsWhereInput
  }

  export type UserTypesRelationFilter = {
    is?: userTypesWhereInput | null
    isNot?: userTypesWhereInput | null
  }

  export type BranchesRelationFilter = {
    is?: branchesWhereInput | null
    isNot?: branchesWhereInput | null
  }

  export type parcelsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    userType_id?: SortOrder
    branch_id?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userType_id?: SortOrder
    branch_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    userType_id?: SortOrder
    branch_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    userType_id?: SortOrder
    branch_id?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userType_id?: SortOrder
    branch_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type ShipmentsRelationFilter = {
    is?: shipmentsWhereInput | null
    isNot?: shipmentsWhereInput | null
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type driversCountOrderByAggregateInput = {
    user_id?: SortOrder
    truck_id?: SortOrder
  }

  export type driversAvgOrderByAggregateInput = {
    truck_id?: SortOrder
  }

  export type driversMaxOrderByAggregateInput = {
    user_id?: SortOrder
    truck_id?: SortOrder
  }

  export type driversMinOrderByAggregateInput = {
    user_id?: SortOrder
    truck_id?: SortOrder
  }

  export type driversSumOrderByAggregateInput = {
    truck_id?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type trucksCountOrderByAggregateInput = {
    id?: SortOrder
    license_plate?: SortOrder
    brand?: SortOrder
    max_weight?: SortOrder
    available?: SortOrder
    driver_id?: SortOrder
    branch_id?: SortOrder
  }

  export type trucksAvgOrderByAggregateInput = {
    id?: SortOrder
    max_weight?: SortOrder
    branch_id?: SortOrder
  }

  export type trucksMaxOrderByAggregateInput = {
    id?: SortOrder
    license_plate?: SortOrder
    brand?: SortOrder
    max_weight?: SortOrder
    available?: SortOrder
    driver_id?: SortOrder
    branch_id?: SortOrder
  }

  export type trucksMinOrderByAggregateInput = {
    id?: SortOrder
    license_plate?: SortOrder
    brand?: SortOrder
    max_weight?: SortOrder
    available?: SortOrder
    driver_id?: SortOrder
    branch_id?: SortOrder
  }

  export type trucksSumOrderByAggregateInput = {
    id?: SortOrder
    max_weight?: SortOrder
    branch_id?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type parcelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    volume_weight?: SortOrder
    admission_date?: SortOrder
    client_id?: SortOrder
    shipment_id?: SortOrder
  }

  export type parcelsAvgOrderByAggregateInput = {
    volume_weight?: SortOrder
  }

  export type parcelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    volume_weight?: SortOrder
    admission_date?: SortOrder
    client_id?: SortOrder
    shipment_id?: SortOrder
  }

  export type parcelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    content?: SortOrder
    volume_weight?: SortOrder
    admission_date?: SortOrder
    client_id?: SortOrder
    shipment_id?: SortOrder
  }

  export type parcelsSumOrderByAggregateInput = {
    volume_weight?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type TrucksRelationFilter = {
    is?: trucksWhereInput | null
    isNot?: trucksWhereInput | null
  }

  export type shipmentsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    arrival_time?: SortOrder
    departure_time?: SortOrder
    weight?: SortOrder
    truck_id?: SortOrder
    driver_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
    parcel_id?: SortOrder
  }

  export type shipmentsAvgOrderByAggregateInput = {
    weight?: SortOrder
    truck_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
  }

  export type shipmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    arrival_time?: SortOrder
    departure_time?: SortOrder
    weight?: SortOrder
    truck_id?: SortOrder
    driver_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
    parcel_id?: SortOrder
  }

  export type shipmentsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    arrival_time?: SortOrder
    departure_time?: SortOrder
    weight?: SortOrder
    truck_id?: SortOrder
    driver_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
    parcel_id?: SortOrder
  }

  export type shipmentsSumOrderByAggregateInput = {
    weight?: SortOrder
    truck_id?: SortOrder
    destination_branch?: SortOrder
    departure_branch?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type branchesCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCityInput>, Enumerable<branchesUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCityInput>
    createMany?: branchesCreateManyCityInputEnvelope
    connect?: Enumerable<branchesWhereUniqueInput>
  }

  export type branchesUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCityInput>, Enumerable<branchesUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCityInput>
    createMany?: branchesCreateManyCityInputEnvelope
    connect?: Enumerable<branchesWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type branchesUpdateManyWithoutCityNestedInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCityInput>, Enumerable<branchesUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<branchesUpsertWithWhereUniqueWithoutCityInput>
    createMany?: branchesCreateManyCityInputEnvelope
    set?: Enumerable<branchesWhereUniqueInput>
    disconnect?: Enumerable<branchesWhereUniqueInput>
    delete?: Enumerable<branchesWhereUniqueInput>
    connect?: Enumerable<branchesWhereUniqueInput>
    update?: Enumerable<branchesUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<branchesUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<branchesScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type branchesUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCityInput>, Enumerable<branchesUncheckedCreateWithoutCityInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCityInput>
    upsert?: Enumerable<branchesUpsertWithWhereUniqueWithoutCityInput>
    createMany?: branchesCreateManyCityInputEnvelope
    set?: Enumerable<branchesWhereUniqueInput>
    disconnect?: Enumerable<branchesWhereUniqueInput>
    delete?: Enumerable<branchesWhereUniqueInput>
    connect?: Enumerable<branchesWhereUniqueInput>
    update?: Enumerable<branchesUpdateWithWhereUniqueWithoutCityInput>
    updateMany?: Enumerable<branchesUpdateManyWithWhereWithoutCityInput>
    deleteMany?: Enumerable<branchesScalarWhereInput>
  }

  export type usersCreateNestedManyWithoutBranchesInput = {
    create?: XOR<Enumerable<usersCreateWithoutBranchesInput>, Enumerable<usersUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutBranchesInput>
    createMany?: usersCreateManyBranchesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type trucksCreateNestedManyWithoutBranchInput = {
    create?: XOR<Enumerable<trucksCreateWithoutBranchInput>, Enumerable<trucksUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutBranchInput>
    createMany?: trucksCreateManyBranchInputEnvelope
    connect?: Enumerable<trucksWhereUniqueInput>
  }

  export type shipmentsCreateNestedManyWithoutBranch_destinationInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_destinationInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_destinationInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_destinationInput>
    createMany?: shipmentsCreateManyBranch_destinationInputEnvelope
    connect?: Enumerable<shipmentsWhereUniqueInput>
  }

  export type shipmentsCreateNestedManyWithoutBranch_departureInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_departureInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_departureInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_departureInput>
    createMany?: shipmentsCreateManyBranch_departureInputEnvelope
    connect?: Enumerable<shipmentsWhereUniqueInput>
  }

  export type citiesCreateNestedOneWithoutBranchesInput = {
    create?: XOR<citiesCreateWithoutBranchesInput, citiesUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: citiesCreateOrConnectWithoutBranchesInput
    connect?: citiesWhereUniqueInput
  }

  export type usersUncheckedCreateNestedManyWithoutBranchesInput = {
    create?: XOR<Enumerable<usersCreateWithoutBranchesInput>, Enumerable<usersUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutBranchesInput>
    createMany?: usersCreateManyBranchesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type trucksUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<Enumerable<trucksCreateWithoutBranchInput>, Enumerable<trucksUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutBranchInput>
    createMany?: trucksCreateManyBranchInputEnvelope
    connect?: Enumerable<trucksWhereUniqueInput>
  }

  export type shipmentsUncheckedCreateNestedManyWithoutBranch_destinationInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_destinationInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_destinationInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_destinationInput>
    createMany?: shipmentsCreateManyBranch_destinationInputEnvelope
    connect?: Enumerable<shipmentsWhereUniqueInput>
  }

  export type shipmentsUncheckedCreateNestedManyWithoutBranch_departureInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_departureInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_departureInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_departureInput>
    createMany?: shipmentsCreateManyBranch_departureInputEnvelope
    connect?: Enumerable<shipmentsWhereUniqueInput>
  }

  export type usersUpdateManyWithoutBranchesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutBranchesInput>, Enumerable<usersUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutBranchesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutBranchesInput>
    createMany?: usersCreateManyBranchesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutBranchesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutBranchesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type trucksUpdateManyWithoutBranchNestedInput = {
    create?: XOR<Enumerable<trucksCreateWithoutBranchInput>, Enumerable<trucksUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutBranchInput>
    upsert?: Enumerable<trucksUpsertWithWhereUniqueWithoutBranchInput>
    createMany?: trucksCreateManyBranchInputEnvelope
    set?: Enumerable<trucksWhereUniqueInput>
    disconnect?: Enumerable<trucksWhereUniqueInput>
    delete?: Enumerable<trucksWhereUniqueInput>
    connect?: Enumerable<trucksWhereUniqueInput>
    update?: Enumerable<trucksUpdateWithWhereUniqueWithoutBranchInput>
    updateMany?: Enumerable<trucksUpdateManyWithWhereWithoutBranchInput>
    deleteMany?: Enumerable<trucksScalarWhereInput>
  }

  export type shipmentsUpdateManyWithoutBranch_destinationNestedInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_destinationInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_destinationInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_destinationInput>
    upsert?: Enumerable<shipmentsUpsertWithWhereUniqueWithoutBranch_destinationInput>
    createMany?: shipmentsCreateManyBranch_destinationInputEnvelope
    set?: Enumerable<shipmentsWhereUniqueInput>
    disconnect?: Enumerable<shipmentsWhereUniqueInput>
    delete?: Enumerable<shipmentsWhereUniqueInput>
    connect?: Enumerable<shipmentsWhereUniqueInput>
    update?: Enumerable<shipmentsUpdateWithWhereUniqueWithoutBranch_destinationInput>
    updateMany?: Enumerable<shipmentsUpdateManyWithWhereWithoutBranch_destinationInput>
    deleteMany?: Enumerable<shipmentsScalarWhereInput>
  }

  export type shipmentsUpdateManyWithoutBranch_departureNestedInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_departureInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_departureInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_departureInput>
    upsert?: Enumerable<shipmentsUpsertWithWhereUniqueWithoutBranch_departureInput>
    createMany?: shipmentsCreateManyBranch_departureInputEnvelope
    set?: Enumerable<shipmentsWhereUniqueInput>
    disconnect?: Enumerable<shipmentsWhereUniqueInput>
    delete?: Enumerable<shipmentsWhereUniqueInput>
    connect?: Enumerable<shipmentsWhereUniqueInput>
    update?: Enumerable<shipmentsUpdateWithWhereUniqueWithoutBranch_departureInput>
    updateMany?: Enumerable<shipmentsUpdateManyWithWhereWithoutBranch_departureInput>
    deleteMany?: Enumerable<shipmentsScalarWhereInput>
  }

  export type citiesUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<citiesCreateWithoutBranchesInput, citiesUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: citiesCreateOrConnectWithoutBranchesInput
    upsert?: citiesUpsertWithoutBranchesInput
    connect?: citiesWhereUniqueInput
    update?: XOR<citiesUpdateWithoutBranchesInput, citiesUncheckedUpdateWithoutBranchesInput>
  }

  export type usersUncheckedUpdateManyWithoutBranchesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutBranchesInput>, Enumerable<usersUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutBranchesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutBranchesInput>
    createMany?: usersCreateManyBranchesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutBranchesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutBranchesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type trucksUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<Enumerable<trucksCreateWithoutBranchInput>, Enumerable<trucksUncheckedCreateWithoutBranchInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutBranchInput>
    upsert?: Enumerable<trucksUpsertWithWhereUniqueWithoutBranchInput>
    createMany?: trucksCreateManyBranchInputEnvelope
    set?: Enumerable<trucksWhereUniqueInput>
    disconnect?: Enumerable<trucksWhereUniqueInput>
    delete?: Enumerable<trucksWhereUniqueInput>
    connect?: Enumerable<trucksWhereUniqueInput>
    update?: Enumerable<trucksUpdateWithWhereUniqueWithoutBranchInput>
    updateMany?: Enumerable<trucksUpdateManyWithWhereWithoutBranchInput>
    deleteMany?: Enumerable<trucksScalarWhereInput>
  }

  export type shipmentsUncheckedUpdateManyWithoutBranch_destinationNestedInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_destinationInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_destinationInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_destinationInput>
    upsert?: Enumerable<shipmentsUpsertWithWhereUniqueWithoutBranch_destinationInput>
    createMany?: shipmentsCreateManyBranch_destinationInputEnvelope
    set?: Enumerable<shipmentsWhereUniqueInput>
    disconnect?: Enumerable<shipmentsWhereUniqueInput>
    delete?: Enumerable<shipmentsWhereUniqueInput>
    connect?: Enumerable<shipmentsWhereUniqueInput>
    update?: Enumerable<shipmentsUpdateWithWhereUniqueWithoutBranch_destinationInput>
    updateMany?: Enumerable<shipmentsUpdateManyWithWhereWithoutBranch_destinationInput>
    deleteMany?: Enumerable<shipmentsScalarWhereInput>
  }

  export type shipmentsUncheckedUpdateManyWithoutBranch_departureNestedInput = {
    create?: XOR<Enumerable<shipmentsCreateWithoutBranch_departureInput>, Enumerable<shipmentsUncheckedCreateWithoutBranch_departureInput>>
    connectOrCreate?: Enumerable<shipmentsCreateOrConnectWithoutBranch_departureInput>
    upsert?: Enumerable<shipmentsUpsertWithWhereUniqueWithoutBranch_departureInput>
    createMany?: shipmentsCreateManyBranch_departureInputEnvelope
    set?: Enumerable<shipmentsWhereUniqueInput>
    disconnect?: Enumerable<shipmentsWhereUniqueInput>
    delete?: Enumerable<shipmentsWhereUniqueInput>
    connect?: Enumerable<shipmentsWhereUniqueInput>
    update?: Enumerable<shipmentsUpdateWithWhereUniqueWithoutBranch_departureInput>
    updateMany?: Enumerable<shipmentsUpdateManyWithWhereWithoutBranch_departureInput>
    deleteMany?: Enumerable<shipmentsScalarWhereInput>
  }

  export type usersCreateNestedManyWithoutUserTypesInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserTypesInput>, Enumerable<usersUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserTypesInput>
    createMany?: usersCreateManyUserTypesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutUserTypesInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserTypesInput>, Enumerable<usersUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserTypesInput>
    createMany?: usersCreateManyUserTypesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type usersUpdateManyWithoutUserTypesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserTypesInput>, Enumerable<usersUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserTypesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutUserTypesInput>
    createMany?: usersCreateManyUserTypesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutUserTypesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutUserTypesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutUserTypesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserTypesInput>, Enumerable<usersUncheckedCreateWithoutUserTypesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserTypesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutUserTypesInput>
    createMany?: usersCreateManyUserTypesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutUserTypesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutUserTypesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type driversCreateNestedOneWithoutUsersInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    connect?: driversWhereUniqueInput
  }

  export type parcelsCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutClientInput>, Enumerable<parcelsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutClientInput>
    createMany?: parcelsCreateManyClientInputEnvelope
    connect?: Enumerable<parcelsWhereUniqueInput>
  }

  export type userTypesCreateNestedOneWithoutUsersInput = {
    create?: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userTypesCreateOrConnectWithoutUsersInput
    connect?: userTypesWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutUsersInput = {
    create?: XOR<branchesCreateWithoutUsersInput, branchesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: branchesCreateOrConnectWithoutUsersInput
    connect?: branchesWhereUniqueInput
  }

  export type driversUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    connect?: driversWhereUniqueInput
  }

  export type parcelsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutClientInput>, Enumerable<parcelsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutClientInput>
    createMany?: parcelsCreateManyClientInputEnvelope
    connect?: Enumerable<parcelsWhereUniqueInput>
  }

  export type driversUpdateOneWithoutUsersNestedInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    upsert?: driversUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: driversWhereUniqueInput
    update?: XOR<driversUpdateWithoutUsersInput, driversUncheckedUpdateWithoutUsersInput>
  }

  export type parcelsUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutClientInput>, Enumerable<parcelsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<parcelsUpsertWithWhereUniqueWithoutClientInput>
    createMany?: parcelsCreateManyClientInputEnvelope
    set?: Enumerable<parcelsWhereUniqueInput>
    disconnect?: Enumerable<parcelsWhereUniqueInput>
    delete?: Enumerable<parcelsWhereUniqueInput>
    connect?: Enumerable<parcelsWhereUniqueInput>
    update?: Enumerable<parcelsUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<parcelsUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<parcelsScalarWhereInput>
  }

  export type userTypesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userTypesCreateOrConnectWithoutUsersInput
    upsert?: userTypesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: userTypesWhereUniqueInput
    update?: XOR<userTypesUpdateWithoutUsersInput, userTypesUncheckedUpdateWithoutUsersInput>
  }

  export type branchesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<branchesCreateWithoutUsersInput, branchesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: branchesCreateOrConnectWithoutUsersInput
    upsert?: branchesUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: branchesWhereUniqueInput
    update?: XOR<branchesUpdateWithoutUsersInput, branchesUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type driversUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    upsert?: driversUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: driversWhereUniqueInput
    update?: XOR<driversUpdateWithoutUsersInput, driversUncheckedUpdateWithoutUsersInput>
  }

  export type parcelsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutClientInput>, Enumerable<parcelsUncheckedCreateWithoutClientInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutClientInput>
    upsert?: Enumerable<parcelsUpsertWithWhereUniqueWithoutClientInput>
    createMany?: parcelsCreateManyClientInputEnvelope
    set?: Enumerable<parcelsWhereUniqueInput>
    disconnect?: Enumerable<parcelsWhereUniqueInput>
    delete?: Enumerable<parcelsWhereUniqueInput>
    connect?: Enumerable<parcelsWhereUniqueInput>
    update?: Enumerable<parcelsUpdateWithWhereUniqueWithoutClientInput>
    updateMany?: Enumerable<parcelsUpdateManyWithWhereWithoutClientInput>
    deleteMany?: Enumerable<parcelsScalarWhereInput>
  }

  export type shipmentsCreateNestedOneWithoutDriversInput = {
    create?: XOR<shipmentsCreateWithoutDriversInput, shipmentsUncheckedCreateWithoutDriversInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutDriversInput
    connect?: shipmentsWhereUniqueInput
  }

  export type trucksCreateNestedManyWithoutDriverInput = {
    create?: XOR<Enumerable<trucksCreateWithoutDriverInput>, Enumerable<trucksUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutDriverInput>
    createMany?: trucksCreateManyDriverInputEnvelope
    connect?: Enumerable<trucksWhereUniqueInput>
  }

  export type usersCreateNestedOneWithoutDriversInput = {
    create?: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
    connectOrCreate?: usersCreateOrConnectWithoutDriversInput
    connect?: usersWhereUniqueInput
  }

  export type shipmentsUncheckedCreateNestedOneWithoutDriversInput = {
    create?: XOR<shipmentsCreateWithoutDriversInput, shipmentsUncheckedCreateWithoutDriversInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutDriversInput
    connect?: shipmentsWhereUniqueInput
  }

  export type trucksUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Enumerable<trucksCreateWithoutDriverInput>, Enumerable<trucksUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutDriverInput>
    createMany?: trucksCreateManyDriverInputEnvelope
    connect?: Enumerable<trucksWhereUniqueInput>
  }

  export type shipmentsUpdateOneWithoutDriversNestedInput = {
    create?: XOR<shipmentsCreateWithoutDriversInput, shipmentsUncheckedCreateWithoutDriversInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutDriversInput
    upsert?: shipmentsUpsertWithoutDriversInput
    disconnect?: boolean
    delete?: boolean
    connect?: shipmentsWhereUniqueInput
    update?: XOR<shipmentsUpdateWithoutDriversInput, shipmentsUncheckedUpdateWithoutDriversInput>
  }

  export type trucksUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Enumerable<trucksCreateWithoutDriverInput>, Enumerable<trucksUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutDriverInput>
    upsert?: Enumerable<trucksUpsertWithWhereUniqueWithoutDriverInput>
    createMany?: trucksCreateManyDriverInputEnvelope
    set?: Enumerable<trucksWhereUniqueInput>
    disconnect?: Enumerable<trucksWhereUniqueInput>
    delete?: Enumerable<trucksWhereUniqueInput>
    connect?: Enumerable<trucksWhereUniqueInput>
    update?: Enumerable<trucksUpdateWithWhereUniqueWithoutDriverInput>
    updateMany?: Enumerable<trucksUpdateManyWithWhereWithoutDriverInput>
    deleteMany?: Enumerable<trucksScalarWhereInput>
  }

  export type usersUpdateOneRequiredWithoutDriversNestedInput = {
    create?: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
    connectOrCreate?: usersCreateOrConnectWithoutDriversInput
    upsert?: usersUpsertWithoutDriversInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutDriversInput, usersUncheckedUpdateWithoutDriversInput>
  }

  export type shipmentsUncheckedUpdateOneWithoutDriversNestedInput = {
    create?: XOR<shipmentsCreateWithoutDriversInput, shipmentsUncheckedCreateWithoutDriversInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutDriversInput
    upsert?: shipmentsUpsertWithoutDriversInput
    disconnect?: boolean
    delete?: boolean
    connect?: shipmentsWhereUniqueInput
    update?: XOR<shipmentsUpdateWithoutDriversInput, shipmentsUncheckedUpdateWithoutDriversInput>
  }

  export type trucksUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Enumerable<trucksCreateWithoutDriverInput>, Enumerable<trucksUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<trucksCreateOrConnectWithoutDriverInput>
    upsert?: Enumerable<trucksUpsertWithWhereUniqueWithoutDriverInput>
    createMany?: trucksCreateManyDriverInputEnvelope
    set?: Enumerable<trucksWhereUniqueInput>
    disconnect?: Enumerable<trucksWhereUniqueInput>
    delete?: Enumerable<trucksWhereUniqueInput>
    connect?: Enumerable<trucksWhereUniqueInput>
    update?: Enumerable<trucksUpdateWithWhereUniqueWithoutDriverInput>
    updateMany?: Enumerable<trucksUpdateManyWithWhereWithoutDriverInput>
    deleteMany?: Enumerable<trucksScalarWhereInput>
  }

  export type shipmentsCreateNestedOneWithoutTruckInput = {
    create?: XOR<shipmentsCreateWithoutTruckInput, shipmentsUncheckedCreateWithoutTruckInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutTruckInput
    connect?: shipmentsWhereUniqueInput
  }

  export type driversCreateNestedOneWithoutTrucksInput = {
    create?: XOR<driversCreateWithoutTrucksInput, driversUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: driversCreateOrConnectWithoutTrucksInput
    connect?: driversWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutTrucksInput = {
    create?: XOR<branchesCreateWithoutTrucksInput, branchesUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: branchesCreateOrConnectWithoutTrucksInput
    connect?: branchesWhereUniqueInput
  }

  export type shipmentsUncheckedCreateNestedOneWithoutTruckInput = {
    create?: XOR<shipmentsCreateWithoutTruckInput, shipmentsUncheckedCreateWithoutTruckInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutTruckInput
    connect?: shipmentsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type shipmentsUpdateOneWithoutTruckNestedInput = {
    create?: XOR<shipmentsCreateWithoutTruckInput, shipmentsUncheckedCreateWithoutTruckInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutTruckInput
    upsert?: shipmentsUpsertWithoutTruckInput
    disconnect?: boolean
    delete?: boolean
    connect?: shipmentsWhereUniqueInput
    update?: XOR<shipmentsUpdateWithoutTruckInput, shipmentsUncheckedUpdateWithoutTruckInput>
  }

  export type driversUpdateOneWithoutTrucksNestedInput = {
    create?: XOR<driversCreateWithoutTrucksInput, driversUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: driversCreateOrConnectWithoutTrucksInput
    upsert?: driversUpsertWithoutTrucksInput
    disconnect?: boolean
    delete?: boolean
    connect?: driversWhereUniqueInput
    update?: XOR<driversUpdateWithoutTrucksInput, driversUncheckedUpdateWithoutTrucksInput>
  }

  export type branchesUpdateOneWithoutTrucksNestedInput = {
    create?: XOR<branchesCreateWithoutTrucksInput, branchesUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: branchesCreateOrConnectWithoutTrucksInput
    upsert?: branchesUpsertWithoutTrucksInput
    disconnect?: boolean
    delete?: boolean
    connect?: branchesWhereUniqueInput
    update?: XOR<branchesUpdateWithoutTrucksInput, branchesUncheckedUpdateWithoutTrucksInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type shipmentsUncheckedUpdateOneWithoutTruckNestedInput = {
    create?: XOR<shipmentsCreateWithoutTruckInput, shipmentsUncheckedCreateWithoutTruckInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutTruckInput
    upsert?: shipmentsUpsertWithoutTruckInput
    disconnect?: boolean
    delete?: boolean
    connect?: shipmentsWhereUniqueInput
    update?: XOR<shipmentsUpdateWithoutTruckInput, shipmentsUncheckedUpdateWithoutTruckInput>
  }

  export type shipmentsCreateNestedOneWithoutParcelsInput = {
    create?: XOR<shipmentsCreateWithoutParcelsInput, shipmentsUncheckedCreateWithoutParcelsInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutParcelsInput
    connect?: shipmentsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutClientsInput = {
    create?: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClientsInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type shipmentsUpdateOneWithoutParcelsNestedInput = {
    create?: XOR<shipmentsCreateWithoutParcelsInput, shipmentsUncheckedCreateWithoutParcelsInput>
    connectOrCreate?: shipmentsCreateOrConnectWithoutParcelsInput
    upsert?: shipmentsUpsertWithoutParcelsInput
    disconnect?: boolean
    delete?: boolean
    connect?: shipmentsWhereUniqueInput
    update?: XOR<shipmentsUpdateWithoutParcelsInput, shipmentsUncheckedUpdateWithoutParcelsInput>
  }

  export type usersUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: usersCreateOrConnectWithoutClientsInput
    upsert?: usersUpsertWithoutClientsInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutClientsInput, usersUncheckedUpdateWithoutClientsInput>
  }

  export type trucksCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<trucksCreateWithoutShipmentsInput, trucksUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: trucksCreateOrConnectWithoutShipmentsInput
    connect?: trucksWhereUniqueInput
  }

  export type driversCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<driversCreateWithoutShipmentsInput, driversUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: driversCreateOrConnectWithoutShipmentsInput
    connect?: driversWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutShipments_destinationInput = {
    create?: XOR<branchesCreateWithoutShipments_destinationInput, branchesUncheckedCreateWithoutShipments_destinationInput>
    connectOrCreate?: branchesCreateOrConnectWithoutShipments_destinationInput
    connect?: branchesWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutShipments_departureInput = {
    create?: XOR<branchesCreateWithoutShipments_departureInput, branchesUncheckedCreateWithoutShipments_departureInput>
    connectOrCreate?: branchesCreateOrConnectWithoutShipments_departureInput
    connect?: branchesWhereUniqueInput
  }

  export type parcelsCreateNestedManyWithoutShipmentsInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutShipmentsInput>, Enumerable<parcelsUncheckedCreateWithoutShipmentsInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutShipmentsInput>
    createMany?: parcelsCreateManyShipmentsInputEnvelope
    connect?: Enumerable<parcelsWhereUniqueInput>
  }

  export type parcelsUncheckedCreateNestedManyWithoutShipmentsInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutShipmentsInput>, Enumerable<parcelsUncheckedCreateWithoutShipmentsInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutShipmentsInput>
    createMany?: parcelsCreateManyShipmentsInputEnvelope
    connect?: Enumerable<parcelsWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type trucksUpdateOneWithoutShipmentsNestedInput = {
    create?: XOR<trucksCreateWithoutShipmentsInput, trucksUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: trucksCreateOrConnectWithoutShipmentsInput
    upsert?: trucksUpsertWithoutShipmentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: trucksWhereUniqueInput
    update?: XOR<trucksUpdateWithoutShipmentsInput, trucksUncheckedUpdateWithoutShipmentsInput>
  }

  export type driversUpdateOneWithoutShipmentsNestedInput = {
    create?: XOR<driversCreateWithoutShipmentsInput, driversUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: driversCreateOrConnectWithoutShipmentsInput
    upsert?: driversUpsertWithoutShipmentsInput
    disconnect?: boolean
    delete?: boolean
    connect?: driversWhereUniqueInput
    update?: XOR<driversUpdateWithoutShipmentsInput, driversUncheckedUpdateWithoutShipmentsInput>
  }

  export type branchesUpdateOneWithoutShipments_destinationNestedInput = {
    create?: XOR<branchesCreateWithoutShipments_destinationInput, branchesUncheckedCreateWithoutShipments_destinationInput>
    connectOrCreate?: branchesCreateOrConnectWithoutShipments_destinationInput
    upsert?: branchesUpsertWithoutShipments_destinationInput
    disconnect?: boolean
    delete?: boolean
    connect?: branchesWhereUniqueInput
    update?: XOR<branchesUpdateWithoutShipments_destinationInput, branchesUncheckedUpdateWithoutShipments_destinationInput>
  }

  export type branchesUpdateOneWithoutShipments_departureNestedInput = {
    create?: XOR<branchesCreateWithoutShipments_departureInput, branchesUncheckedCreateWithoutShipments_departureInput>
    connectOrCreate?: branchesCreateOrConnectWithoutShipments_departureInput
    upsert?: branchesUpsertWithoutShipments_departureInput
    disconnect?: boolean
    delete?: boolean
    connect?: branchesWhereUniqueInput
    update?: XOR<branchesUpdateWithoutShipments_departureInput, branchesUncheckedUpdateWithoutShipments_departureInput>
  }

  export type parcelsUpdateManyWithoutShipmentsNestedInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutShipmentsInput>, Enumerable<parcelsUncheckedCreateWithoutShipmentsInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutShipmentsInput>
    upsert?: Enumerable<parcelsUpsertWithWhereUniqueWithoutShipmentsInput>
    createMany?: parcelsCreateManyShipmentsInputEnvelope
    set?: Enumerable<parcelsWhereUniqueInput>
    disconnect?: Enumerable<parcelsWhereUniqueInput>
    delete?: Enumerable<parcelsWhereUniqueInput>
    connect?: Enumerable<parcelsWhereUniqueInput>
    update?: Enumerable<parcelsUpdateWithWhereUniqueWithoutShipmentsInput>
    updateMany?: Enumerable<parcelsUpdateManyWithWhereWithoutShipmentsInput>
    deleteMany?: Enumerable<parcelsScalarWhereInput>
  }

  export type parcelsUncheckedUpdateManyWithoutShipmentsNestedInput = {
    create?: XOR<Enumerable<parcelsCreateWithoutShipmentsInput>, Enumerable<parcelsUncheckedCreateWithoutShipmentsInput>>
    connectOrCreate?: Enumerable<parcelsCreateOrConnectWithoutShipmentsInput>
    upsert?: Enumerable<parcelsUpsertWithWhereUniqueWithoutShipmentsInput>
    createMany?: parcelsCreateManyShipmentsInputEnvelope
    set?: Enumerable<parcelsWhereUniqueInput>
    disconnect?: Enumerable<parcelsWhereUniqueInput>
    delete?: Enumerable<parcelsWhereUniqueInput>
    connect?: Enumerable<parcelsWhereUniqueInput>
    update?: Enumerable<parcelsUpdateWithWhereUniqueWithoutShipmentsInput>
    updateMany?: Enumerable<parcelsUpdateManyWithWhereWithoutShipmentsInput>
    deleteMany?: Enumerable<parcelsScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type branchesCreateWithoutCityInput = {
    name: string
    address: string
    branch_lat: string
    branch_long: string
    users?: usersCreateNestedManyWithoutBranchesInput
    trucks?: trucksCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsCreateNestedManyWithoutBranch_departureInput
  }

  export type branchesUncheckedCreateWithoutCityInput = {
    id?: number
    name: string
    address: string
    branch_lat: string
    branch_long: string
    users?: usersUncheckedCreateNestedManyWithoutBranchesInput
    trucks?: trucksUncheckedCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsUncheckedCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsUncheckedCreateNestedManyWithoutBranch_departureInput
  }

  export type branchesCreateOrConnectWithoutCityInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutCityInput, branchesUncheckedCreateWithoutCityInput>
  }

  export type branchesCreateManyCityInputEnvelope = {
    data: Enumerable<branchesCreateManyCityInput>
    skipDuplicates?: boolean
  }

  export type branchesUpsertWithWhereUniqueWithoutCityInput = {
    where: branchesWhereUniqueInput
    update: XOR<branchesUpdateWithoutCityInput, branchesUncheckedUpdateWithoutCityInput>
    create: XOR<branchesCreateWithoutCityInput, branchesUncheckedCreateWithoutCityInput>
  }

  export type branchesUpdateWithWhereUniqueWithoutCityInput = {
    where: branchesWhereUniqueInput
    data: XOR<branchesUpdateWithoutCityInput, branchesUncheckedUpdateWithoutCityInput>
  }

  export type branchesUpdateManyWithWhereWithoutCityInput = {
    where: branchesScalarWhereInput
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyWithoutBranchesInput>
  }

  export type branchesScalarWhereInput = {
    AND?: Enumerable<branchesScalarWhereInput>
    OR?: Enumerable<branchesScalarWhereInput>
    NOT?: Enumerable<branchesScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    city_id?: IntFilter | number
    branch_lat?: StringFilter | string
    branch_long?: StringFilter | string
  }

  export type usersCreateWithoutBranchesInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    drivers?: driversCreateNestedOneWithoutUsersInput
    clients?: parcelsCreateNestedManyWithoutClientInput
    userTypes?: userTypesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutBranchesInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
    clients?: parcelsUncheckedCreateNestedManyWithoutClientInput
  }

  export type usersCreateOrConnectWithoutBranchesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBranchesInput, usersUncheckedCreateWithoutBranchesInput>
  }

  export type usersCreateManyBranchesInputEnvelope = {
    data: Enumerable<usersCreateManyBranchesInput>
    skipDuplicates?: boolean
  }

  export type trucksCreateWithoutBranchInput = {
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    shipments?: shipmentsCreateNestedOneWithoutTruckInput
    driver?: driversCreateNestedOneWithoutTrucksInput
  }

  export type trucksUncheckedCreateWithoutBranchInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver_id?: string | null
    shipments?: shipmentsUncheckedCreateNestedOneWithoutTruckInput
  }

  export type trucksCreateOrConnectWithoutBranchInput = {
    where: trucksWhereUniqueInput
    create: XOR<trucksCreateWithoutBranchInput, trucksUncheckedCreateWithoutBranchInput>
  }

  export type trucksCreateManyBranchInputEnvelope = {
    data: Enumerable<trucksCreateManyBranchInput>
    skipDuplicates?: boolean
  }

  export type shipmentsCreateWithoutBranch_destinationInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    parcel_id?: string | null
    truck?: trucksCreateNestedOneWithoutShipmentsInput
    drivers?: driversCreateNestedOneWithoutShipmentsInput
    branch_departure?: branchesCreateNestedOneWithoutShipments_departureInput
    parcels?: parcelsCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateWithoutBranch_destinationInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    departure_branch: number
    parcel_id?: string | null
    parcels?: parcelsUncheckedCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsCreateOrConnectWithoutBranch_destinationInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutBranch_destinationInput, shipmentsUncheckedCreateWithoutBranch_destinationInput>
  }

  export type shipmentsCreateManyBranch_destinationInputEnvelope = {
    data: Enumerable<shipmentsCreateManyBranch_destinationInput>
    skipDuplicates?: boolean
  }

  export type shipmentsCreateWithoutBranch_departureInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    parcel_id?: string | null
    truck?: trucksCreateNestedOneWithoutShipmentsInput
    drivers?: driversCreateNestedOneWithoutShipmentsInput
    branch_destination?: branchesCreateNestedOneWithoutShipments_destinationInput
    parcels?: parcelsCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateWithoutBranch_departureInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    destination_branch: number
    parcel_id?: string | null
    parcels?: parcelsUncheckedCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsCreateOrConnectWithoutBranch_departureInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutBranch_departureInput, shipmentsUncheckedCreateWithoutBranch_departureInput>
  }

  export type shipmentsCreateManyBranch_departureInputEnvelope = {
    data: Enumerable<shipmentsCreateManyBranch_departureInput>
    skipDuplicates?: boolean
  }

  export type citiesCreateWithoutBranchesInput = {
    name: string
    postcode: string
  }

  export type citiesUncheckedCreateWithoutBranchesInput = {
    id?: number
    name: string
    postcode: string
  }

  export type citiesCreateOrConnectWithoutBranchesInput = {
    where: citiesWhereUniqueInput
    create: XOR<citiesCreateWithoutBranchesInput, citiesUncheckedCreateWithoutBranchesInput>
  }

  export type usersUpsertWithWhereUniqueWithoutBranchesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutBranchesInput, usersUncheckedUpdateWithoutBranchesInput>
    create: XOR<usersCreateWithoutBranchesInput, usersUncheckedCreateWithoutBranchesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutBranchesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutBranchesInput, usersUncheckedUpdateWithoutBranchesInput>
  }

  export type usersUpdateManyWithWhereWithoutBranchesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    phone?: StringFilter | string
    userType_id?: IntFilter | number
    branch_id?: IntNullableFilter | number | null
  }

  export type trucksUpsertWithWhereUniqueWithoutBranchInput = {
    where: trucksWhereUniqueInput
    update: XOR<trucksUpdateWithoutBranchInput, trucksUncheckedUpdateWithoutBranchInput>
    create: XOR<trucksCreateWithoutBranchInput, trucksUncheckedCreateWithoutBranchInput>
  }

  export type trucksUpdateWithWhereUniqueWithoutBranchInput = {
    where: trucksWhereUniqueInput
    data: XOR<trucksUpdateWithoutBranchInput, trucksUncheckedUpdateWithoutBranchInput>
  }

  export type trucksUpdateManyWithWhereWithoutBranchInput = {
    where: trucksScalarWhereInput
    data: XOR<trucksUpdateManyMutationInput, trucksUncheckedUpdateManyWithoutTrucksInput>
  }

  export type trucksScalarWhereInput = {
    AND?: Enumerable<trucksScalarWhereInput>
    OR?: Enumerable<trucksScalarWhereInput>
    NOT?: Enumerable<trucksScalarWhereInput>
    id?: IntFilter | number
    license_plate?: StringFilter | string
    brand?: StringFilter | string
    max_weight?: FloatFilter | number
    available?: BoolFilter | boolean
    driver_id?: StringNullableFilter | string | null
    branch_id?: IntFilter | number
  }

  export type shipmentsUpsertWithWhereUniqueWithoutBranch_destinationInput = {
    where: shipmentsWhereUniqueInput
    update: XOR<shipmentsUpdateWithoutBranch_destinationInput, shipmentsUncheckedUpdateWithoutBranch_destinationInput>
    create: XOR<shipmentsCreateWithoutBranch_destinationInput, shipmentsUncheckedCreateWithoutBranch_destinationInput>
  }

  export type shipmentsUpdateWithWhereUniqueWithoutBranch_destinationInput = {
    where: shipmentsWhereUniqueInput
    data: XOR<shipmentsUpdateWithoutBranch_destinationInput, shipmentsUncheckedUpdateWithoutBranch_destinationInput>
  }

  export type shipmentsUpdateManyWithWhereWithoutBranch_destinationInput = {
    where: shipmentsScalarWhereInput
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyWithoutShipments_destinationInput>
  }

  export type shipmentsScalarWhereInput = {
    AND?: Enumerable<shipmentsScalarWhereInput>
    OR?: Enumerable<shipmentsScalarWhereInput>
    NOT?: Enumerable<shipmentsScalarWhereInput>
    id?: StringFilter | string
    status?: StringFilter | string
    arrival_time?: DateTimeNullableFilter | Date | string | null
    departure_time?: DateTimeFilter | Date | string
    weight?: DecimalFilter | Decimal | DecimalJsLike | number | string
    truck_id?: IntFilter | number
    driver_id?: StringFilter | string
    destination_branch?: IntFilter | number
    departure_branch?: IntFilter | number
    parcel_id?: StringNullableFilter | string | null
  }

  export type shipmentsUpsertWithWhereUniqueWithoutBranch_departureInput = {
    where: shipmentsWhereUniqueInput
    update: XOR<shipmentsUpdateWithoutBranch_departureInput, shipmentsUncheckedUpdateWithoutBranch_departureInput>
    create: XOR<shipmentsCreateWithoutBranch_departureInput, shipmentsUncheckedCreateWithoutBranch_departureInput>
  }

  export type shipmentsUpdateWithWhereUniqueWithoutBranch_departureInput = {
    where: shipmentsWhereUniqueInput
    data: XOR<shipmentsUpdateWithoutBranch_departureInput, shipmentsUncheckedUpdateWithoutBranch_departureInput>
  }

  export type shipmentsUpdateManyWithWhereWithoutBranch_departureInput = {
    where: shipmentsScalarWhereInput
    data: XOR<shipmentsUpdateManyMutationInput, shipmentsUncheckedUpdateManyWithoutShipments_departureInput>
  }

  export type citiesUpsertWithoutBranchesInput = {
    update: XOR<citiesUpdateWithoutBranchesInput, citiesUncheckedUpdateWithoutBranchesInput>
    create: XOR<citiesCreateWithoutBranchesInput, citiesUncheckedCreateWithoutBranchesInput>
  }

  export type citiesUpdateWithoutBranchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type citiesUncheckedUpdateWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateWithoutUserTypesInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    drivers?: driversCreateNestedOneWithoutUsersInput
    clients?: parcelsCreateNestedManyWithoutClientInput
    branches?: branchesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUserTypesInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    branch_id?: number | null
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
    clients?: parcelsUncheckedCreateNestedManyWithoutClientInput
  }

  export type usersCreateOrConnectWithoutUserTypesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUserTypesInput, usersUncheckedCreateWithoutUserTypesInput>
  }

  export type usersCreateManyUserTypesInputEnvelope = {
    data: Enumerable<usersCreateManyUserTypesInput>
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutUserTypesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUserTypesInput, usersUncheckedUpdateWithoutUserTypesInput>
    create: XOR<usersCreateWithoutUserTypesInput, usersUncheckedCreateWithoutUserTypesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUserTypesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUserTypesInput, usersUncheckedUpdateWithoutUserTypesInput>
  }

  export type usersUpdateManyWithWhereWithoutUserTypesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type driversCreateWithoutUsersInput = {
    truck_id?: number | null
    shipments?: shipmentsCreateNestedOneWithoutDriversInput
    trucks?: trucksCreateNestedManyWithoutDriverInput
  }

  export type driversUncheckedCreateWithoutUsersInput = {
    truck_id?: number | null
    shipments?: shipmentsUncheckedCreateNestedOneWithoutDriversInput
    trucks?: trucksUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driversCreateOrConnectWithoutUsersInput = {
    where: driversWhereUniqueInput
    create: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
  }

  export type parcelsCreateWithoutClientInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    shipments?: shipmentsCreateNestedOneWithoutParcelsInput
  }

  export type parcelsUncheckedCreateWithoutClientInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    shipment_id?: string | null
  }

  export type parcelsCreateOrConnectWithoutClientInput = {
    where: parcelsWhereUniqueInput
    create: XOR<parcelsCreateWithoutClientInput, parcelsUncheckedCreateWithoutClientInput>
  }

  export type parcelsCreateManyClientInputEnvelope = {
    data: Enumerable<parcelsCreateManyClientInput>
    skipDuplicates?: boolean
  }

  export type userTypesCreateWithoutUsersInput = {
    type: string
  }

  export type userTypesUncheckedCreateWithoutUsersInput = {
    id?: number
    type: string
  }

  export type userTypesCreateOrConnectWithoutUsersInput = {
    where: userTypesWhereUniqueInput
    create: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
  }

  export type branchesCreateWithoutUsersInput = {
    name: string
    address: string
    branch_lat: string
    branch_long: string
    trucks?: trucksCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsCreateNestedManyWithoutBranch_departureInput
    city: citiesCreateNestedOneWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
    trucks?: trucksUncheckedCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsUncheckedCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsUncheckedCreateNestedManyWithoutBranch_departureInput
  }

  export type branchesCreateOrConnectWithoutUsersInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutUsersInput, branchesUncheckedCreateWithoutUsersInput>
  }

  export type driversUpsertWithoutUsersInput = {
    update: XOR<driversUpdateWithoutUsersInput, driversUncheckedUpdateWithoutUsersInput>
    create: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
  }

  export type driversUpdateWithoutUsersInput = {
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    shipments?: shipmentsUpdateOneWithoutDriversNestedInput
    trucks?: trucksUpdateManyWithoutDriverNestedInput
  }

  export type driversUncheckedUpdateWithoutUsersInput = {
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    shipments?: shipmentsUncheckedUpdateOneWithoutDriversNestedInput
    trucks?: trucksUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type parcelsUpsertWithWhereUniqueWithoutClientInput = {
    where: parcelsWhereUniqueInput
    update: XOR<parcelsUpdateWithoutClientInput, parcelsUncheckedUpdateWithoutClientInput>
    create: XOR<parcelsCreateWithoutClientInput, parcelsUncheckedCreateWithoutClientInput>
  }

  export type parcelsUpdateWithWhereUniqueWithoutClientInput = {
    where: parcelsWhereUniqueInput
    data: XOR<parcelsUpdateWithoutClientInput, parcelsUncheckedUpdateWithoutClientInput>
  }

  export type parcelsUpdateManyWithWhereWithoutClientInput = {
    where: parcelsScalarWhereInput
    data: XOR<parcelsUpdateManyMutationInput, parcelsUncheckedUpdateManyWithoutClientsInput>
  }

  export type parcelsScalarWhereInput = {
    AND?: Enumerable<parcelsScalarWhereInput>
    OR?: Enumerable<parcelsScalarWhereInput>
    NOT?: Enumerable<parcelsScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    content?: StringFilter | string
    volume_weight?: FloatFilter | number
    admission_date?: DateTimeFilter | Date | string
    client_id?: StringFilter | string
    shipment_id?: StringNullableFilter | string | null
  }

  export type userTypesUpsertWithoutUsersInput = {
    update: XOR<userTypesUpdateWithoutUsersInput, userTypesUncheckedUpdateWithoutUsersInput>
    create: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
  }

  export type userTypesUpdateWithoutUsersInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type userTypesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type branchesUpsertWithoutUsersInput = {
    update: XOR<branchesUpdateWithoutUsersInput, branchesUncheckedUpdateWithoutUsersInput>
    create: XOR<branchesCreateWithoutUsersInput, branchesUncheckedCreateWithoutUsersInput>
  }

  export type branchesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    trucks?: trucksUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUpdateManyWithoutBranch_departureNestedInput
    city?: citiesUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    trucks?: trucksUncheckedUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUncheckedUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUncheckedUpdateManyWithoutBranch_departureNestedInput
  }

  export type shipmentsCreateWithoutDriversInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    parcel_id?: string | null
    truck?: trucksCreateNestedOneWithoutShipmentsInput
    branch_destination?: branchesCreateNestedOneWithoutShipments_destinationInput
    branch_departure?: branchesCreateNestedOneWithoutShipments_departureInput
    parcels?: parcelsCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateWithoutDriversInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    destination_branch: number
    departure_branch: number
    parcel_id?: string | null
    parcels?: parcelsUncheckedCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsCreateOrConnectWithoutDriversInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutDriversInput, shipmentsUncheckedCreateWithoutDriversInput>
  }

  export type trucksCreateWithoutDriverInput = {
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    shipments?: shipmentsCreateNestedOneWithoutTruckInput
    branch?: branchesCreateNestedOneWithoutTrucksInput
  }

  export type trucksUncheckedCreateWithoutDriverInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    branch_id: number
    shipments?: shipmentsUncheckedCreateNestedOneWithoutTruckInput
  }

  export type trucksCreateOrConnectWithoutDriverInput = {
    where: trucksWhereUniqueInput
    create: XOR<trucksCreateWithoutDriverInput, trucksUncheckedCreateWithoutDriverInput>
  }

  export type trucksCreateManyDriverInputEnvelope = {
    data: Enumerable<trucksCreateManyDriverInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDriversInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    clients?: parcelsCreateNestedManyWithoutClientInput
    userTypes?: userTypesCreateNestedOneWithoutUsersInput
    branches?: branchesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDriversInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
    branch_id?: number | null
    clients?: parcelsUncheckedCreateNestedManyWithoutClientInput
  }

  export type usersCreateOrConnectWithoutDriversInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
  }

  export type shipmentsUpsertWithoutDriversInput = {
    update: XOR<shipmentsUpdateWithoutDriversInput, shipmentsUncheckedUpdateWithoutDriversInput>
    create: XOR<shipmentsCreateWithoutDriversInput, shipmentsUncheckedCreateWithoutDriversInput>
  }

  export type shipmentsUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: trucksUpdateOneWithoutShipmentsNestedInput
    branch_destination?: branchesUpdateOneWithoutShipments_destinationNestedInput
    branch_departure?: branchesUpdateOneWithoutShipments_departureNestedInput
    parcels?: parcelsUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    destination_branch?: IntFieldUpdateOperationsInput | number
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    parcels?: parcelsUncheckedUpdateManyWithoutShipmentsNestedInput
  }

  export type trucksUpsertWithWhereUniqueWithoutDriverInput = {
    where: trucksWhereUniqueInput
    update: XOR<trucksUpdateWithoutDriverInput, trucksUncheckedUpdateWithoutDriverInput>
    create: XOR<trucksCreateWithoutDriverInput, trucksUncheckedCreateWithoutDriverInput>
  }

  export type trucksUpdateWithWhereUniqueWithoutDriverInput = {
    where: trucksWhereUniqueInput
    data: XOR<trucksUpdateWithoutDriverInput, trucksUncheckedUpdateWithoutDriverInput>
  }

  export type trucksUpdateManyWithWhereWithoutDriverInput = {
    where: trucksScalarWhereInput
    data: XOR<trucksUpdateManyMutationInput, trucksUncheckedUpdateManyWithoutTrucksInput>
  }

  export type usersUpsertWithoutDriversInput = {
    update: XOR<usersUpdateWithoutDriversInput, usersUncheckedUpdateWithoutDriversInput>
    create: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
  }

  export type usersUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    clients?: parcelsUpdateManyWithoutClientNestedInput
    userTypes?: userTypesUpdateOneWithoutUsersNestedInput
    branches?: branchesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userType_id?: IntFieldUpdateOperationsInput | number
    branch_id?: NullableIntFieldUpdateOperationsInput | number | null
    clients?: parcelsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type shipmentsCreateWithoutTruckInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    parcel_id?: string | null
    drivers?: driversCreateNestedOneWithoutShipmentsInput
    branch_destination?: branchesCreateNestedOneWithoutShipments_destinationInput
    branch_departure?: branchesCreateNestedOneWithoutShipments_departureInput
    parcels?: parcelsCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsUncheckedCreateWithoutTruckInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    driver_id: string
    destination_branch: number
    departure_branch: number
    parcel_id?: string | null
    parcels?: parcelsUncheckedCreateNestedManyWithoutShipmentsInput
  }

  export type shipmentsCreateOrConnectWithoutTruckInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutTruckInput, shipmentsUncheckedCreateWithoutTruckInput>
  }

  export type driversCreateWithoutTrucksInput = {
    truck_id?: number | null
    shipments?: shipmentsCreateNestedOneWithoutDriversInput
    users: usersCreateNestedOneWithoutDriversInput
  }

  export type driversUncheckedCreateWithoutTrucksInput = {
    user_id: string
    truck_id?: number | null
    shipments?: shipmentsUncheckedCreateNestedOneWithoutDriversInput
  }

  export type driversCreateOrConnectWithoutTrucksInput = {
    where: driversWhereUniqueInput
    create: XOR<driversCreateWithoutTrucksInput, driversUncheckedCreateWithoutTrucksInput>
  }

  export type branchesCreateWithoutTrucksInput = {
    name: string
    address: string
    branch_lat: string
    branch_long: string
    users?: usersCreateNestedManyWithoutBranchesInput
    shipments_destination?: shipmentsCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsCreateNestedManyWithoutBranch_departureInput
    city: citiesCreateNestedOneWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutTrucksInput = {
    id?: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
    users?: usersUncheckedCreateNestedManyWithoutBranchesInput
    shipments_destination?: shipmentsUncheckedCreateNestedManyWithoutBranch_destinationInput
    shipments_departure?: shipmentsUncheckedCreateNestedManyWithoutBranch_departureInput
  }

  export type branchesCreateOrConnectWithoutTrucksInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutTrucksInput, branchesUncheckedCreateWithoutTrucksInput>
  }

  export type shipmentsUpsertWithoutTruckInput = {
    update: XOR<shipmentsUpdateWithoutTruckInput, shipmentsUncheckedUpdateWithoutTruckInput>
    create: XOR<shipmentsCreateWithoutTruckInput, shipmentsUncheckedCreateWithoutTruckInput>
  }

  export type shipmentsUpdateWithoutTruckInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    drivers?: driversUpdateOneWithoutShipmentsNestedInput
    branch_destination?: branchesUpdateOneWithoutShipments_destinationNestedInput
    branch_departure?: branchesUpdateOneWithoutShipments_departureNestedInput
    parcels?: parcelsUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutTruckInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_branch?: IntFieldUpdateOperationsInput | number
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    parcels?: parcelsUncheckedUpdateManyWithoutShipmentsNestedInput
  }

  export type driversUpsertWithoutTrucksInput = {
    update: XOR<driversUpdateWithoutTrucksInput, driversUncheckedUpdateWithoutTrucksInput>
    create: XOR<driversCreateWithoutTrucksInput, driversUncheckedCreateWithoutTrucksInput>
  }

  export type driversUpdateWithoutTrucksInput = {
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    shipments?: shipmentsUpdateOneWithoutDriversNestedInput
    users?: usersUpdateOneRequiredWithoutDriversNestedInput
  }

  export type driversUncheckedUpdateWithoutTrucksInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    shipments?: shipmentsUncheckedUpdateOneWithoutDriversNestedInput
  }

  export type branchesUpsertWithoutTrucksInput = {
    update: XOR<branchesUpdateWithoutTrucksInput, branchesUncheckedUpdateWithoutTrucksInput>
    create: XOR<branchesCreateWithoutTrucksInput, branchesUncheckedCreateWithoutTrucksInput>
  }

  export type branchesUpdateWithoutTrucksInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutBranchesNestedInput
    shipments_destination?: shipmentsUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUpdateManyWithoutBranch_departureNestedInput
    city?: citiesUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutTrucksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutBranchesNestedInput
    shipments_destination?: shipmentsUncheckedUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUncheckedUpdateManyWithoutBranch_departureNestedInput
  }

  export type shipmentsCreateWithoutParcelsInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    parcel_id?: string | null
    truck?: trucksCreateNestedOneWithoutShipmentsInput
    drivers?: driversCreateNestedOneWithoutShipmentsInput
    branch_destination?: branchesCreateNestedOneWithoutShipments_destinationInput
    branch_departure?: branchesCreateNestedOneWithoutShipments_departureInput
  }

  export type shipmentsUncheckedCreateWithoutParcelsInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    destination_branch: number
    departure_branch: number
    parcel_id?: string | null
  }

  export type shipmentsCreateOrConnectWithoutParcelsInput = {
    where: shipmentsWhereUniqueInput
    create: XOR<shipmentsCreateWithoutParcelsInput, shipmentsUncheckedCreateWithoutParcelsInput>
  }

  export type usersCreateWithoutClientsInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    drivers?: driversCreateNestedOneWithoutUsersInput
    userTypes?: userTypesCreateNestedOneWithoutUsersInput
    branches?: branchesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutClientsInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
    branch_id?: number | null
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutClientsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
  }

  export type shipmentsUpsertWithoutParcelsInput = {
    update: XOR<shipmentsUpdateWithoutParcelsInput, shipmentsUncheckedUpdateWithoutParcelsInput>
    create: XOR<shipmentsCreateWithoutParcelsInput, shipmentsUncheckedCreateWithoutParcelsInput>
  }

  export type shipmentsUpdateWithoutParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: trucksUpdateOneWithoutShipmentsNestedInput
    drivers?: driversUpdateOneWithoutShipmentsNestedInput
    branch_destination?: branchesUpdateOneWithoutShipments_destinationNestedInput
    branch_departure?: branchesUpdateOneWithoutShipments_departureNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_branch?: IntFieldUpdateOperationsInput | number
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUpsertWithoutClientsInput = {
    update: XOR<usersUpdateWithoutClientsInput, usersUncheckedUpdateWithoutClientsInput>
    create: XOR<usersCreateWithoutClientsInput, usersUncheckedCreateWithoutClientsInput>
  }

  export type usersUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    drivers?: driversUpdateOneWithoutUsersNestedInput
    userTypes?: userTypesUpdateOneWithoutUsersNestedInput
    branches?: branchesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userType_id?: IntFieldUpdateOperationsInput | number
    branch_id?: NullableIntFieldUpdateOperationsInput | number | null
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
  }

  export type trucksCreateWithoutShipmentsInput = {
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver?: driversCreateNestedOneWithoutTrucksInput
    branch?: branchesCreateNestedOneWithoutTrucksInput
  }

  export type trucksUncheckedCreateWithoutShipmentsInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver_id?: string | null
    branch_id: number
  }

  export type trucksCreateOrConnectWithoutShipmentsInput = {
    where: trucksWhereUniqueInput
    create: XOR<trucksCreateWithoutShipmentsInput, trucksUncheckedCreateWithoutShipmentsInput>
  }

  export type driversCreateWithoutShipmentsInput = {
    truck_id?: number | null
    trucks?: trucksCreateNestedManyWithoutDriverInput
    users: usersCreateNestedOneWithoutDriversInput
  }

  export type driversUncheckedCreateWithoutShipmentsInput = {
    user_id: string
    truck_id?: number | null
    trucks?: trucksUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driversCreateOrConnectWithoutShipmentsInput = {
    where: driversWhereUniqueInput
    create: XOR<driversCreateWithoutShipmentsInput, driversUncheckedCreateWithoutShipmentsInput>
  }

  export type branchesCreateWithoutShipments_destinationInput = {
    name: string
    address: string
    branch_lat: string
    branch_long: string
    users?: usersCreateNestedManyWithoutBranchesInput
    trucks?: trucksCreateNestedManyWithoutBranchInput
    shipments_departure?: shipmentsCreateNestedManyWithoutBranch_departureInput
    city: citiesCreateNestedOneWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutShipments_destinationInput = {
    id?: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
    users?: usersUncheckedCreateNestedManyWithoutBranchesInput
    trucks?: trucksUncheckedCreateNestedManyWithoutBranchInput
    shipments_departure?: shipmentsUncheckedCreateNestedManyWithoutBranch_departureInput
  }

  export type branchesCreateOrConnectWithoutShipments_destinationInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutShipments_destinationInput, branchesUncheckedCreateWithoutShipments_destinationInput>
  }

  export type branchesCreateWithoutShipments_departureInput = {
    name: string
    address: string
    branch_lat: string
    branch_long: string
    users?: usersCreateNestedManyWithoutBranchesInput
    trucks?: trucksCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsCreateNestedManyWithoutBranch_destinationInput
    city: citiesCreateNestedOneWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutShipments_departureInput = {
    id?: number
    name: string
    address: string
    city_id: number
    branch_lat: string
    branch_long: string
    users?: usersUncheckedCreateNestedManyWithoutBranchesInput
    trucks?: trucksUncheckedCreateNestedManyWithoutBranchInput
    shipments_destination?: shipmentsUncheckedCreateNestedManyWithoutBranch_destinationInput
  }

  export type branchesCreateOrConnectWithoutShipments_departureInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutShipments_departureInput, branchesUncheckedCreateWithoutShipments_departureInput>
  }

  export type parcelsCreateWithoutShipmentsInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    client: usersCreateNestedOneWithoutClientsInput
  }

  export type parcelsUncheckedCreateWithoutShipmentsInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    client_id: string
  }

  export type parcelsCreateOrConnectWithoutShipmentsInput = {
    where: parcelsWhereUniqueInput
    create: XOR<parcelsCreateWithoutShipmentsInput, parcelsUncheckedCreateWithoutShipmentsInput>
  }

  export type parcelsCreateManyShipmentsInputEnvelope = {
    data: Enumerable<parcelsCreateManyShipmentsInput>
    skipDuplicates?: boolean
  }

  export type trucksUpsertWithoutShipmentsInput = {
    update: XOR<trucksUpdateWithoutShipmentsInput, trucksUncheckedUpdateWithoutShipmentsInput>
    create: XOR<trucksCreateWithoutShipmentsInput, trucksUncheckedCreateWithoutShipmentsInput>
  }

  export type trucksUpdateWithoutShipmentsInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    driver?: driversUpdateOneWithoutTrucksNestedInput
    branch?: branchesUpdateOneWithoutTrucksNestedInput
  }

  export type trucksUncheckedUpdateWithoutShipmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    branch_id?: IntFieldUpdateOperationsInput | number
  }

  export type driversUpsertWithoutShipmentsInput = {
    update: XOR<driversUpdateWithoutShipmentsInput, driversUncheckedUpdateWithoutShipmentsInput>
    create: XOR<driversCreateWithoutShipmentsInput, driversUncheckedCreateWithoutShipmentsInput>
  }

  export type driversUpdateWithoutShipmentsInput = {
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    trucks?: trucksUpdateManyWithoutDriverNestedInput
    users?: usersUpdateOneRequiredWithoutDriversNestedInput
  }

  export type driversUncheckedUpdateWithoutShipmentsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    truck_id?: NullableIntFieldUpdateOperationsInput | number | null
    trucks?: trucksUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type branchesUpsertWithoutShipments_destinationInput = {
    update: XOR<branchesUpdateWithoutShipments_destinationInput, branchesUncheckedUpdateWithoutShipments_destinationInput>
    create: XOR<branchesCreateWithoutShipments_destinationInput, branchesUncheckedCreateWithoutShipments_destinationInput>
  }

  export type branchesUpdateWithoutShipments_destinationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUpdateManyWithoutBranchNestedInput
    shipments_departure?: shipmentsUpdateManyWithoutBranch_departureNestedInput
    city?: citiesUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutShipments_destinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUncheckedUpdateManyWithoutBranchNestedInput
    shipments_departure?: shipmentsUncheckedUpdateManyWithoutBranch_departureNestedInput
  }

  export type branchesUpsertWithoutShipments_departureInput = {
    update: XOR<branchesUpdateWithoutShipments_departureInput, branchesUncheckedUpdateWithoutShipments_departureInput>
    create: XOR<branchesCreateWithoutShipments_departureInput, branchesUncheckedCreateWithoutShipments_departureInput>
  }

  export type branchesUpdateWithoutShipments_departureInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUpdateManyWithoutBranch_destinationNestedInput
    city?: citiesUpdateOneRequiredWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutShipments_departureInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city_id?: IntFieldUpdateOperationsInput | number
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUncheckedUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUncheckedUpdateManyWithoutBranch_destinationNestedInput
  }

  export type parcelsUpsertWithWhereUniqueWithoutShipmentsInput = {
    where: parcelsWhereUniqueInput
    update: XOR<parcelsUpdateWithoutShipmentsInput, parcelsUncheckedUpdateWithoutShipmentsInput>
    create: XOR<parcelsCreateWithoutShipmentsInput, parcelsUncheckedCreateWithoutShipmentsInput>
  }

  export type parcelsUpdateWithWhereUniqueWithoutShipmentsInput = {
    where: parcelsWhereUniqueInput
    data: XOR<parcelsUpdateWithoutShipmentsInput, parcelsUncheckedUpdateWithoutShipmentsInput>
  }

  export type parcelsUpdateManyWithWhereWithoutShipmentsInput = {
    where: parcelsScalarWhereInput
    data: XOR<parcelsUpdateManyMutationInput, parcelsUncheckedUpdateManyWithoutParcelsInput>
  }

  export type branchesCreateManyCityInput = {
    id?: number
    name: string
    address: string
    branch_lat: string
    branch_long: string
  }

  export type branchesUpdateWithoutCityInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUpdateManyWithoutBranch_departureNestedInput
  }

  export type branchesUncheckedUpdateWithoutCityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutBranchesNestedInput
    trucks?: trucksUncheckedUpdateManyWithoutBranchNestedInput
    shipments_destination?: shipmentsUncheckedUpdateManyWithoutBranch_destinationNestedInput
    shipments_departure?: shipmentsUncheckedUpdateManyWithoutBranch_departureNestedInput
  }

  export type branchesUncheckedUpdateManyWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    branch_lat?: StringFieldUpdateOperationsInput | string
    branch_long?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyBranchesInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    userType_id: number
  }

  export type trucksCreateManyBranchInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    driver_id?: string | null
  }

  export type shipmentsCreateManyBranch_destinationInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    departure_branch: number
    parcel_id?: string | null
  }

  export type shipmentsCreateManyBranch_departureInput = {
    id: string
    status: string
    arrival_time?: Date | string | null
    departure_time: Date | string
    weight: Decimal | DecimalJsLike | number | string
    truck_id: number
    driver_id: string
    destination_branch: number
    parcel_id?: string | null
  }

  export type usersUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    drivers?: driversUpdateOneWithoutUsersNestedInput
    clients?: parcelsUpdateManyWithoutClientNestedInput
    userTypes?: userTypesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userType_id?: IntFieldUpdateOperationsInput | number
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
    clients?: parcelsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userType_id?: IntFieldUpdateOperationsInput | number
  }

  export type trucksUpdateWithoutBranchInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    shipments?: shipmentsUpdateOneWithoutTruckNestedInput
    driver?: driversUpdateOneWithoutTrucksNestedInput
  }

  export type trucksUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    shipments?: shipmentsUncheckedUpdateOneWithoutTruckNestedInput
  }

  export type trucksUncheckedUpdateManyWithoutTrucksInput = {
    id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shipmentsUpdateWithoutBranch_destinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: trucksUpdateOneWithoutShipmentsNestedInput
    drivers?: driversUpdateOneWithoutShipmentsNestedInput
    branch_departure?: branchesUpdateOneWithoutShipments_departureNestedInput
    parcels?: parcelsUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutBranch_destinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    parcels?: parcelsUncheckedUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateManyWithoutShipments_destinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    departure_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type shipmentsUpdateWithoutBranch_departureInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: trucksUpdateOneWithoutShipmentsNestedInput
    drivers?: driversUpdateOneWithoutShipmentsNestedInput
    branch_destination?: branchesUpdateOneWithoutShipments_destinationNestedInput
    parcels?: parcelsUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateWithoutBranch_departureInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
    parcels?: parcelsUncheckedUpdateManyWithoutShipmentsNestedInput
  }

  export type shipmentsUncheckedUpdateManyWithoutShipments_departureInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    arrival_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departure_time?: DateTimeFieldUpdateOperationsInput | Date | string
    weight?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    truck_id?: IntFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    destination_branch?: IntFieldUpdateOperationsInput | number
    parcel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyUserTypesInput = {
    id: string
    name: string
    email: string
    password: string
    phone: string
    branch_id?: number | null
  }

  export type usersUpdateWithoutUserTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    drivers?: driversUpdateOneWithoutUsersNestedInput
    clients?: parcelsUpdateManyWithoutClientNestedInput
    branches?: branchesUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUserTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    branch_id?: NullableIntFieldUpdateOperationsInput | number | null
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
    clients?: parcelsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type parcelsCreateManyClientInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    shipment_id?: string | null
  }

  export type parcelsUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: shipmentsUpdateOneWithoutParcelsNestedInput
  }

  export type parcelsUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type parcelsUncheckedUpdateManyWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type trucksCreateManyDriverInput = {
    id?: number
    license_plate: string
    brand: string
    max_weight: number
    available: boolean
    branch_id: number
  }

  export type trucksUpdateWithoutDriverInput = {
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    shipments?: shipmentsUpdateOneWithoutTruckNestedInput
    branch?: branchesUpdateOneWithoutTrucksNestedInput
  }

  export type trucksUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    license_plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    max_weight?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    branch_id?: IntFieldUpdateOperationsInput | number
    shipments?: shipmentsUncheckedUpdateOneWithoutTruckNestedInput
  }

  export type parcelsCreateManyShipmentsInput = {
    id: string
    name: string
    content: string
    volume_weight: number
    admission_date: Date | string
    client_id: string
  }

  export type parcelsUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: usersUpdateOneRequiredWithoutClientsNestedInput
  }

  export type parcelsUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    client_id?: StringFieldUpdateOperationsInput | string
  }

  export type parcelsUncheckedUpdateManyWithoutParcelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    volume_weight?: FloatFieldUpdateOperationsInput | number
    admission_date?: DateTimeFieldUpdateOperationsInput | Date | string
    client_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
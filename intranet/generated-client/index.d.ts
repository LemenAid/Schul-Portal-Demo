
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EducationTrack
 * 
 */
export type EducationTrack = $Result.DefaultSelection<Prisma.$EducationTrackPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseTopic
 * 
 */
export type CourseTopic = $Result.DefaultSelection<Prisma.$CourseTopicPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model TimeEntry
 * 
 */
export type TimeEntry = $Result.DefaultSelection<Prisma.$TimeEntryPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model CourseEvent
 * 
 */
export type CourseEvent = $Result.DefaultSelection<Prisma.$CourseEventPayload>
/**
 * Model BulletinPost
 * 
 */
export type BulletinPost = $Result.DefaultSelection<Prisma.$BulletinPostPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>
/**
 * Model TeacherSkill
 * 
 */
export type TeacherSkill = $Result.DefaultSelection<Prisma.$TeacherSkillPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.educationTrack`: Exposes CRUD operations for the **EducationTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EducationTracks
    * const educationTracks = await prisma.educationTrack.findMany()
    * ```
    */
  get educationTrack(): Prisma.EducationTrackDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.courseTopic`: Exposes CRUD operations for the **CourseTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseTopics
    * const courseTopics = await prisma.courseTopic.findMany()
    * ```
    */
  get courseTopic(): Prisma.CourseTopicDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs>;

  /**
   * `prisma.timeEntry`: Exposes CRUD operations for the **TimeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeEntries
    * const timeEntries = await prisma.timeEntry.findMany()
    * ```
    */
  get timeEntry(): Prisma.TimeEntryDelegate<ExtArgs>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs>;

  /**
   * `prisma.courseEvent`: Exposes CRUD operations for the **CourseEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseEvents
    * const courseEvents = await prisma.courseEvent.findMany()
    * ```
    */
  get courseEvent(): Prisma.CourseEventDelegate<ExtArgs>;

  /**
   * `prisma.bulletinPost`: Exposes CRUD operations for the **BulletinPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulletinPosts
    * const bulletinPosts = await prisma.bulletinPost.findMany()
    * ```
    */
  get bulletinPost(): Prisma.BulletinPostDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs>;

  /**
   * `prisma.teacherSkill`: Exposes CRUD operations for the **TeacherSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSkills
    * const teacherSkills = await prisma.teacherSkill.findMany()
    * ```
    */
  get teacherSkill(): Prisma.TeacherSkillDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    EducationTrack: 'EducationTrack',
    Course: 'Course',
    CourseTopic: 'CourseTopic',
    Room: 'Room',
    TimeEntry: 'TimeEntry',
    Announcement: 'Announcement',
    CourseEvent: 'CourseEvent',
    BulletinPost: 'BulletinPost',
    Exam: 'Exam',
    Inquiry: 'Inquiry',
    Grade: 'Grade',
    TeacherSkill: 'TeacherSkill'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "educationTrack" | "course" | "courseTopic" | "room" | "timeEntry" | "announcement" | "courseEvent" | "bulletinPost" | "exam" | "inquiry" | "grade" | "teacherSkill"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EducationTrack: {
        payload: Prisma.$EducationTrackPayload<ExtArgs>
        fields: Prisma.EducationTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationTrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationTrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>
          }
          findFirst: {
            args: Prisma.EducationTrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationTrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>
          }
          findMany: {
            args: Prisma.EducationTrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>[]
          }
          create: {
            args: Prisma.EducationTrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>
          }
          createMany: {
            args: Prisma.EducationTrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationTrackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>[]
          }
          delete: {
            args: Prisma.EducationTrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>
          }
          update: {
            args: Prisma.EducationTrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>
          }
          deleteMany: {
            args: Prisma.EducationTrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationTrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationTrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationTrackPayload>
          }
          aggregate: {
            args: Prisma.EducationTrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducationTrack>
          }
          groupBy: {
            args: Prisma.EducationTrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationTrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationTrackCountArgs<ExtArgs>
            result: $Utils.Optional<EducationTrackCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseTopic: {
        payload: Prisma.$CourseTopicPayload<ExtArgs>
        fields: Prisma.CourseTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>
          }
          findFirst: {
            args: Prisma.CourseTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>
          }
          findMany: {
            args: Prisma.CourseTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>[]
          }
          create: {
            args: Prisma.CourseTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>
          }
          createMany: {
            args: Prisma.CourseTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>[]
          }
          delete: {
            args: Prisma.CourseTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>
          }
          update: {
            args: Prisma.CourseTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>
          }
          deleteMany: {
            args: Prisma.CourseTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTopicPayload>
          }
          aggregate: {
            args: Prisma.CourseTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseTopic>
          }
          groupBy: {
            args: Prisma.CourseTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseTopicCountArgs<ExtArgs>
            result: $Utils.Optional<CourseTopicCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      TimeEntry: {
        payload: Prisma.$TimeEntryPayload<ExtArgs>
        fields: Prisma.TimeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findFirst: {
            args: Prisma.TimeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          findMany: {
            args: Prisma.TimeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          create: {
            args: Prisma.TimeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          createMany: {
            args: Prisma.TimeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>[]
          }
          delete: {
            args: Prisma.TimeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          update: {
            args: Prisma.TimeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          deleteMany: {
            args: Prisma.TimeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimeEntryPayload>
          }
          aggregate: {
            args: Prisma.TimeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimeEntry>
          }
          groupBy: {
            args: Prisma.TimeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TimeEntryCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      CourseEvent: {
        payload: Prisma.$CourseEventPayload<ExtArgs>
        fields: Prisma.CourseEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>
          }
          findFirst: {
            args: Prisma.CourseEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>
          }
          findMany: {
            args: Prisma.CourseEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>[]
          }
          create: {
            args: Prisma.CourseEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>
          }
          createMany: {
            args: Prisma.CourseEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>[]
          }
          delete: {
            args: Prisma.CourseEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>
          }
          update: {
            args: Prisma.CourseEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>
          }
          deleteMany: {
            args: Prisma.CourseEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseEventPayload>
          }
          aggregate: {
            args: Prisma.CourseEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseEvent>
          }
          groupBy: {
            args: Prisma.CourseEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseEventCountArgs<ExtArgs>
            result: $Utils.Optional<CourseEventCountAggregateOutputType> | number
          }
        }
      }
      BulletinPost: {
        payload: Prisma.$BulletinPostPayload<ExtArgs>
        fields: Prisma.BulletinPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletinPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletinPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>
          }
          findFirst: {
            args: Prisma.BulletinPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletinPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>
          }
          findMany: {
            args: Prisma.BulletinPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>[]
          }
          create: {
            args: Prisma.BulletinPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>
          }
          createMany: {
            args: Prisma.BulletinPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulletinPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>[]
          }
          delete: {
            args: Prisma.BulletinPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>
          }
          update: {
            args: Prisma.BulletinPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>
          }
          deleteMany: {
            args: Prisma.BulletinPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletinPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BulletinPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletinPostPayload>
          }
          aggregate: {
            args: Prisma.BulletinPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletinPost>
          }
          groupBy: {
            args: Prisma.BulletinPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletinPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletinPostCountArgs<ExtArgs>
            result: $Utils.Optional<BulletinPostCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
      TeacherSkill: {
        payload: Prisma.$TeacherSkillPayload<ExtArgs>
        fields: Prisma.TeacherSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>
          }
          findFirst: {
            args: Prisma.TeacherSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>
          }
          findMany: {
            args: Prisma.TeacherSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>[]
          }
          create: {
            args: Prisma.TeacherSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>
          }
          createMany: {
            args: Prisma.TeacherSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>[]
          }
          delete: {
            args: Prisma.TeacherSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>
          }
          update: {
            args: Prisma.TeacherSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSkillPayload>
          }
          aggregate: {
            args: Prisma.TeacherSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSkill>
          }
          groupBy: {
            args: Prisma.TeacherSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSkillCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSkillCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    timeEntries: number
    posts: number
    inquiries: number
    grades: number
    teacherSkills: number
    coursesAsStudent: number
    coursesAsTeacher: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeEntries?: boolean | UserCountOutputTypeCountTimeEntriesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    inquiries?: boolean | UserCountOutputTypeCountInquiriesArgs
    grades?: boolean | UserCountOutputTypeCountGradesArgs
    teacherSkills?: boolean | UserCountOutputTypeCountTeacherSkillsArgs
    coursesAsStudent?: boolean | UserCountOutputTypeCountCoursesAsStudentArgs
    coursesAsTeacher?: boolean | UserCountOutputTypeCountCoursesAsTeacherArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSkillWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesAsStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesAsTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type EducationTrackCountOutputType
   */

  export type EducationTrackCountOutputType = {
    users: number
    courses: number
  }

  export type EducationTrackCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | EducationTrackCountOutputTypeCountUsersArgs
    courses?: boolean | EducationTrackCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * EducationTrackCountOutputType without action
   */
  export type EducationTrackCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrackCountOutputType
     */
    select?: EducationTrackCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EducationTrackCountOutputType without action
   */
  export type EducationTrackCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * EducationTrackCountOutputType without action
   */
  export type EducationTrackCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    students: number
    teachers: number
    exams: number
    topics: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | CourseCountOutputTypeCountStudentsArgs
    teachers?: boolean | CourseCountOutputTypeCountTeachersArgs
    exams?: boolean | CourseCountOutputTypeCountExamsArgs
    topics?: boolean | CourseCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTopicWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    events: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | RoomCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseEventWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    grades: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grades?: boolean | ExamCountOutputTypeCountGradesArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    department: string | null
    measureNumber: string | null
    educationTrackId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    department: string | null
    measureNumber: string | null
    educationTrackId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    department: number
    measureNumber: number
    educationTrackId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    department?: true
    measureNumber?: true
    educationTrackId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    department?: true
    measureNumber?: true
    educationTrackId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    department?: true
    measureNumber?: true
    educationTrackId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: string
    department: string | null
    measureNumber: string | null
    educationTrackId: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    measureNumber?: boolean
    educationTrackId?: boolean
    createdAt?: boolean
    educationTrack?: boolean | User$educationTrackArgs<ExtArgs>
    timeEntries?: boolean | User$timeEntriesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    inquiries?: boolean | User$inquiriesArgs<ExtArgs>
    grades?: boolean | User$gradesArgs<ExtArgs>
    teacherSkills?: boolean | User$teacherSkillsArgs<ExtArgs>
    coursesAsStudent?: boolean | User$coursesAsStudentArgs<ExtArgs>
    coursesAsTeacher?: boolean | User$coursesAsTeacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    measureNumber?: boolean
    educationTrackId?: boolean
    createdAt?: boolean
    educationTrack?: boolean | User$educationTrackArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    department?: boolean
    measureNumber?: boolean
    educationTrackId?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationTrack?: boolean | User$educationTrackArgs<ExtArgs>
    timeEntries?: boolean | User$timeEntriesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    inquiries?: boolean | User$inquiriesArgs<ExtArgs>
    grades?: boolean | User$gradesArgs<ExtArgs>
    teacherSkills?: boolean | User$teacherSkillsArgs<ExtArgs>
    coursesAsStudent?: boolean | User$coursesAsStudentArgs<ExtArgs>
    coursesAsTeacher?: boolean | User$coursesAsTeacherArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationTrack?: boolean | User$educationTrackArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      educationTrack: Prisma.$EducationTrackPayload<ExtArgs> | null
      timeEntries: Prisma.$TimeEntryPayload<ExtArgs>[]
      posts: Prisma.$BulletinPostPayload<ExtArgs>[]
      inquiries: Prisma.$InquiryPayload<ExtArgs>[]
      grades: Prisma.$GradePayload<ExtArgs>[]
      teacherSkills: Prisma.$TeacherSkillPayload<ExtArgs>[]
      coursesAsStudent: Prisma.$CoursePayload<ExtArgs>[]
      coursesAsTeacher: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: string
      department: string | null
      measureNumber: string | null
      educationTrackId: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    educationTrack<T extends User$educationTrackArgs<ExtArgs> = {}>(args?: Subset<T, User$educationTrackArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    timeEntries<T extends User$timeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$timeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany"> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "findMany"> | Null>
    inquiries<T extends User$inquiriesArgs<ExtArgs> = {}>(args?: Subset<T, User$inquiriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany"> | Null>
    grades<T extends User$gradesArgs<ExtArgs> = {}>(args?: Subset<T, User$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany"> | Null>
    teacherSkills<T extends User$teacherSkillsArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "findMany"> | Null>
    coursesAsStudent<T extends User$coursesAsStudentArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesAsStudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany"> | Null>
    coursesAsTeacher<T extends User$coursesAsTeacherArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesAsTeacherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly measureNumber: FieldRef<"User", 'String'>
    readonly educationTrackId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.educationTrack
   */
  export type User$educationTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    where?: EducationTrackWhereInput
  }

  /**
   * User.timeEntries
   */
  export type User$timeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    cursor?: TimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    where?: BulletinPostWhereInput
    orderBy?: BulletinPostOrderByWithRelationInput | BulletinPostOrderByWithRelationInput[]
    cursor?: BulletinPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletinPostScalarFieldEnum | BulletinPostScalarFieldEnum[]
  }

  /**
   * User.inquiries
   */
  export type User$inquiriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    cursor?: InquiryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * User.grades
   */
  export type User$gradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * User.teacherSkills
   */
  export type User$teacherSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    where?: TeacherSkillWhereInput
    orderBy?: TeacherSkillOrderByWithRelationInput | TeacherSkillOrderByWithRelationInput[]
    cursor?: TeacherSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSkillScalarFieldEnum | TeacherSkillScalarFieldEnum[]
  }

  /**
   * User.coursesAsStudent
   */
  export type User$coursesAsStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.coursesAsTeacher
   */
  export type User$coursesAsTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EducationTrack
   */

  export type AggregateEducationTrack = {
    _count: EducationTrackCountAggregateOutputType | null
    _min: EducationTrackMinAggregateOutputType | null
    _max: EducationTrackMaxAggregateOutputType | null
  }

  export type EducationTrackMinAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type EducationTrackMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type EducationTrackCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type EducationTrackMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type EducationTrackMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type EducationTrackCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type EducationTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationTrack to aggregate.
     */
    where?: EducationTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationTracks to fetch.
     */
    orderBy?: EducationTrackOrderByWithRelationInput | EducationTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EducationTracks
    **/
    _count?: true | EducationTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationTrackMaxAggregateInputType
  }

  export type GetEducationTrackAggregateType<T extends EducationTrackAggregateArgs> = {
        [P in keyof T & keyof AggregateEducationTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducationTrack[P]>
      : GetScalarType<T[P], AggregateEducationTrack[P]>
  }




  export type EducationTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationTrackWhereInput
    orderBy?: EducationTrackOrderByWithAggregationInput | EducationTrackOrderByWithAggregationInput[]
    by: EducationTrackScalarFieldEnum[] | EducationTrackScalarFieldEnum
    having?: EducationTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationTrackCountAggregateInputType | true
    _min?: EducationTrackMinAggregateInputType
    _max?: EducationTrackMaxAggregateInputType
  }

  export type EducationTrackGroupByOutputType = {
    id: string
    title: string
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: EducationTrackCountAggregateOutputType | null
    _min: EducationTrackMinAggregateOutputType | null
    _max: EducationTrackMaxAggregateOutputType | null
  }

  type GetEducationTrackGroupByPayload<T extends EducationTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationTrackGroupByOutputType[P]>
            : GetScalarType<T[P], EducationTrackGroupByOutputType[P]>
        }
      >
    >


  export type EducationTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    users?: boolean | EducationTrack$usersArgs<ExtArgs>
    courses?: boolean | EducationTrack$coursesArgs<ExtArgs>
    _count?: boolean | EducationTrackCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["educationTrack"]>

  export type EducationTrackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["educationTrack"]>

  export type EducationTrackSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type EducationTrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | EducationTrack$usersArgs<ExtArgs>
    courses?: boolean | EducationTrack$coursesArgs<ExtArgs>
    _count?: boolean | EducationTrackCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EducationTrackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EducationTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EducationTrack"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["educationTrack"]>
    composites: {}
  }

  type EducationTrackGetPayload<S extends boolean | null | undefined | EducationTrackDefaultArgs> = $Result.GetResult<Prisma.$EducationTrackPayload, S>

  type EducationTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EducationTrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EducationTrackCountAggregateInputType | true
    }

  export interface EducationTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EducationTrack'], meta: { name: 'EducationTrack' } }
    /**
     * Find zero or one EducationTrack that matches the filter.
     * @param {EducationTrackFindUniqueArgs} args - Arguments to find a EducationTrack
     * @example
     * // Get one EducationTrack
     * const educationTrack = await prisma.educationTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationTrackFindUniqueArgs>(args: SelectSubset<T, EducationTrackFindUniqueArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EducationTrack that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EducationTrackFindUniqueOrThrowArgs} args - Arguments to find a EducationTrack
     * @example
     * // Get one EducationTrack
     * const educationTrack = await prisma.educationTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationTrackFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EducationTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackFindFirstArgs} args - Arguments to find a EducationTrack
     * @example
     * // Get one EducationTrack
     * const educationTrack = await prisma.educationTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationTrackFindFirstArgs>(args?: SelectSubset<T, EducationTrackFindFirstArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EducationTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackFindFirstOrThrowArgs} args - Arguments to find a EducationTrack
     * @example
     * // Get one EducationTrack
     * const educationTrack = await prisma.educationTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationTrackFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EducationTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EducationTracks
     * const educationTracks = await prisma.educationTrack.findMany()
     * 
     * // Get first 10 EducationTracks
     * const educationTracks = await prisma.educationTrack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationTrackWithIdOnly = await prisma.educationTrack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationTrackFindManyArgs>(args?: SelectSubset<T, EducationTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EducationTrack.
     * @param {EducationTrackCreateArgs} args - Arguments to create a EducationTrack.
     * @example
     * // Create one EducationTrack
     * const EducationTrack = await prisma.educationTrack.create({
     *   data: {
     *     // ... data to create a EducationTrack
     *   }
     * })
     * 
     */
    create<T extends EducationTrackCreateArgs>(args: SelectSubset<T, EducationTrackCreateArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EducationTracks.
     * @param {EducationTrackCreateManyArgs} args - Arguments to create many EducationTracks.
     * @example
     * // Create many EducationTracks
     * const educationTrack = await prisma.educationTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationTrackCreateManyArgs>(args?: SelectSubset<T, EducationTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EducationTracks and returns the data saved in the database.
     * @param {EducationTrackCreateManyAndReturnArgs} args - Arguments to create many EducationTracks.
     * @example
     * // Create many EducationTracks
     * const educationTrack = await prisma.educationTrack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EducationTracks and only return the `id`
     * const educationTrackWithIdOnly = await prisma.educationTrack.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationTrackCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationTrackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EducationTrack.
     * @param {EducationTrackDeleteArgs} args - Arguments to delete one EducationTrack.
     * @example
     * // Delete one EducationTrack
     * const EducationTrack = await prisma.educationTrack.delete({
     *   where: {
     *     // ... filter to delete one EducationTrack
     *   }
     * })
     * 
     */
    delete<T extends EducationTrackDeleteArgs>(args: SelectSubset<T, EducationTrackDeleteArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EducationTrack.
     * @param {EducationTrackUpdateArgs} args - Arguments to update one EducationTrack.
     * @example
     * // Update one EducationTrack
     * const educationTrack = await prisma.educationTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationTrackUpdateArgs>(args: SelectSubset<T, EducationTrackUpdateArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EducationTracks.
     * @param {EducationTrackDeleteManyArgs} args - Arguments to filter EducationTracks to delete.
     * @example
     * // Delete a few EducationTracks
     * const { count } = await prisma.educationTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationTrackDeleteManyArgs>(args?: SelectSubset<T, EducationTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EducationTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EducationTracks
     * const educationTrack = await prisma.educationTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationTrackUpdateManyArgs>(args: SelectSubset<T, EducationTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EducationTrack.
     * @param {EducationTrackUpsertArgs} args - Arguments to update or create a EducationTrack.
     * @example
     * // Update or create a EducationTrack
     * const educationTrack = await prisma.educationTrack.upsert({
     *   create: {
     *     // ... data to create a EducationTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EducationTrack we want to update
     *   }
     * })
     */
    upsert<T extends EducationTrackUpsertArgs>(args: SelectSubset<T, EducationTrackUpsertArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EducationTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackCountArgs} args - Arguments to filter EducationTracks to count.
     * @example
     * // Count the number of EducationTracks
     * const count = await prisma.educationTrack.count({
     *   where: {
     *     // ... the filter for the EducationTracks we want to count
     *   }
     * })
    **/
    count<T extends EducationTrackCountArgs>(
      args?: Subset<T, EducationTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EducationTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationTrackAggregateArgs>(args: Subset<T, EducationTrackAggregateArgs>): Prisma.PrismaPromise<GetEducationTrackAggregateType<T>>

    /**
     * Group by EducationTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationTrackGroupByArgs} args - Group by arguments.
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
      T extends EducationTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationTrackGroupByArgs['orderBy'] }
        : { orderBy?: EducationTrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EducationTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EducationTrack model
   */
  readonly fields: EducationTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EducationTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends EducationTrack$usersArgs<ExtArgs> = {}>(args?: Subset<T, EducationTrack$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    courses<T extends EducationTrack$coursesArgs<ExtArgs> = {}>(args?: Subset<T, EducationTrack$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EducationTrack model
   */ 
  interface EducationTrackFieldRefs {
    readonly id: FieldRef<"EducationTrack", 'String'>
    readonly title: FieldRef<"EducationTrack", 'String'>
    readonly startDate: FieldRef<"EducationTrack", 'DateTime'>
    readonly endDate: FieldRef<"EducationTrack", 'DateTime'>
    readonly createdAt: FieldRef<"EducationTrack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EducationTrack findUnique
   */
  export type EducationTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * Filter, which EducationTrack to fetch.
     */
    where: EducationTrackWhereUniqueInput
  }

  /**
   * EducationTrack findUniqueOrThrow
   */
  export type EducationTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * Filter, which EducationTrack to fetch.
     */
    where: EducationTrackWhereUniqueInput
  }

  /**
   * EducationTrack findFirst
   */
  export type EducationTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * Filter, which EducationTrack to fetch.
     */
    where?: EducationTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationTracks to fetch.
     */
    orderBy?: EducationTrackOrderByWithRelationInput | EducationTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationTracks.
     */
    cursor?: EducationTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationTracks.
     */
    distinct?: EducationTrackScalarFieldEnum | EducationTrackScalarFieldEnum[]
  }

  /**
   * EducationTrack findFirstOrThrow
   */
  export type EducationTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * Filter, which EducationTrack to fetch.
     */
    where?: EducationTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationTracks to fetch.
     */
    orderBy?: EducationTrackOrderByWithRelationInput | EducationTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EducationTracks.
     */
    cursor?: EducationTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EducationTracks.
     */
    distinct?: EducationTrackScalarFieldEnum | EducationTrackScalarFieldEnum[]
  }

  /**
   * EducationTrack findMany
   */
  export type EducationTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * Filter, which EducationTracks to fetch.
     */
    where?: EducationTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EducationTracks to fetch.
     */
    orderBy?: EducationTrackOrderByWithRelationInput | EducationTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EducationTracks.
     */
    cursor?: EducationTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EducationTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EducationTracks.
     */
    skip?: number
    distinct?: EducationTrackScalarFieldEnum | EducationTrackScalarFieldEnum[]
  }

  /**
   * EducationTrack create
   */
  export type EducationTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * The data needed to create a EducationTrack.
     */
    data: XOR<EducationTrackCreateInput, EducationTrackUncheckedCreateInput>
  }

  /**
   * EducationTrack createMany
   */
  export type EducationTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EducationTracks.
     */
    data: EducationTrackCreateManyInput | EducationTrackCreateManyInput[]
  }

  /**
   * EducationTrack createManyAndReturn
   */
  export type EducationTrackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EducationTracks.
     */
    data: EducationTrackCreateManyInput | EducationTrackCreateManyInput[]
  }

  /**
   * EducationTrack update
   */
  export type EducationTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * The data needed to update a EducationTrack.
     */
    data: XOR<EducationTrackUpdateInput, EducationTrackUncheckedUpdateInput>
    /**
     * Choose, which EducationTrack to update.
     */
    where: EducationTrackWhereUniqueInput
  }

  /**
   * EducationTrack updateMany
   */
  export type EducationTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EducationTracks.
     */
    data: XOR<EducationTrackUpdateManyMutationInput, EducationTrackUncheckedUpdateManyInput>
    /**
     * Filter which EducationTracks to update
     */
    where?: EducationTrackWhereInput
  }

  /**
   * EducationTrack upsert
   */
  export type EducationTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * The filter to search for the EducationTrack to update in case it exists.
     */
    where: EducationTrackWhereUniqueInput
    /**
     * In case the EducationTrack found by the `where` argument doesn't exist, create a new EducationTrack with this data.
     */
    create: XOR<EducationTrackCreateInput, EducationTrackUncheckedCreateInput>
    /**
     * In case the EducationTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationTrackUpdateInput, EducationTrackUncheckedUpdateInput>
  }

  /**
   * EducationTrack delete
   */
  export type EducationTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    /**
     * Filter which EducationTrack to delete.
     */
    where: EducationTrackWhereUniqueInput
  }

  /**
   * EducationTrack deleteMany
   */
  export type EducationTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EducationTracks to delete
     */
    where?: EducationTrackWhereInput
  }

  /**
   * EducationTrack.users
   */
  export type EducationTrack$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * EducationTrack.courses
   */
  export type EducationTrack$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * EducationTrack without action
   */
  export type EducationTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    maxStudents: number | null
  }

  export type CourseSumAggregateOutputType = {
    maxStudents: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    educationTrackId: string | null
    maxStudents: number | null
    createdAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    educationTrackId: string | null
    maxStudents: number | null
    createdAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    educationTrackId: number
    maxStudents: number
    createdAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    maxStudents?: true
  }

  export type CourseSumAggregateInputType = {
    maxStudents?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    educationTrackId?: true
    maxStudents?: true
    createdAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    educationTrackId?: true
    maxStudents?: true
    createdAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    educationTrackId?: true
    maxStudents?: true
    createdAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startDate: Date
    endDate: Date
    educationTrackId: string | null
    maxStudents: number
    createdAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    educationTrackId?: boolean
    maxStudents?: boolean
    createdAt?: boolean
    educationTrack?: boolean | Course$educationTrackArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    teachers?: boolean | Course$teachersArgs<ExtArgs>
    exams?: boolean | Course$examsArgs<ExtArgs>
    topics?: boolean | Course$topicsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    educationTrackId?: boolean
    maxStudents?: boolean
    createdAt?: boolean
    educationTrack?: boolean | Course$educationTrackArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    educationTrackId?: boolean
    maxStudents?: boolean
    createdAt?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationTrack?: boolean | Course$educationTrackArgs<ExtArgs>
    students?: boolean | Course$studentsArgs<ExtArgs>
    teachers?: boolean | Course$teachersArgs<ExtArgs>
    exams?: boolean | Course$examsArgs<ExtArgs>
    topics?: boolean | Course$topicsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    educationTrack?: boolean | Course$educationTrackArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      educationTrack: Prisma.$EducationTrackPayload<ExtArgs> | null
      students: Prisma.$UserPayload<ExtArgs>[]
      teachers: Prisma.$UserPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
      topics: Prisma.$CourseTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startDate: Date
      endDate: Date
      educationTrackId: string | null
      maxStudents: number
      createdAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    educationTrack<T extends Course$educationTrackArgs<ExtArgs> = {}>(args?: Subset<T, Course$educationTrackArgs<ExtArgs>>): Prisma__EducationTrackClient<$Result.GetResult<Prisma.$EducationTrackPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    students<T extends Course$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    teachers<T extends Course$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Course$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    exams<T extends Course$examsArgs<ExtArgs> = {}>(args?: Subset<T, Course$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany"> | Null>
    topics<T extends Course$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Course$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly startDate: FieldRef<"Course", 'DateTime'>
    readonly endDate: FieldRef<"Course", 'DateTime'>
    readonly educationTrackId: FieldRef<"Course", 'String'>
    readonly maxStudents: FieldRef<"Course", 'Int'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }

  /**
   * Course.educationTrack
   */
  export type Course$educationTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EducationTrack
     */
    select?: EducationTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationTrackInclude<ExtArgs> | null
    where?: EducationTrackWhereInput
  }

  /**
   * Course.students
   */
  export type Course$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.teachers
   */
  export type Course$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.exams
   */
  export type Course$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Course.topics
   */
  export type Course$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    where?: CourseTopicWhereInput
    orderBy?: CourseTopicOrderByWithRelationInput | CourseTopicOrderByWithRelationInput[]
    cursor?: CourseTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseTopicScalarFieldEnum | CourseTopicScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseTopic
   */

  export type AggregateCourseTopic = {
    _count: CourseTopicCountAggregateOutputType | null
    _avg: CourseTopicAvgAggregateOutputType | null
    _sum: CourseTopicSumAggregateOutputType | null
    _min: CourseTopicMinAggregateOutputType | null
    _max: CourseTopicMaxAggregateOutputType | null
  }

  export type CourseTopicAvgAggregateOutputType = {
    durationUnits: number | null
  }

  export type CourseTopicSumAggregateOutputType = {
    durationUnits: number | null
  }

  export type CourseTopicMinAggregateOutputType = {
    id: string | null
    title: string | null
    durationUnits: number | null
    startDate: Date | null
    endDate: Date | null
    courseId: string | null
    createdAt: Date | null
  }

  export type CourseTopicMaxAggregateOutputType = {
    id: string | null
    title: string | null
    durationUnits: number | null
    startDate: Date | null
    endDate: Date | null
    courseId: string | null
    createdAt: Date | null
  }

  export type CourseTopicCountAggregateOutputType = {
    id: number
    title: number
    durationUnits: number
    startDate: number
    endDate: number
    courseId: number
    createdAt: number
    _all: number
  }


  export type CourseTopicAvgAggregateInputType = {
    durationUnits?: true
  }

  export type CourseTopicSumAggregateInputType = {
    durationUnits?: true
  }

  export type CourseTopicMinAggregateInputType = {
    id?: true
    title?: true
    durationUnits?: true
    startDate?: true
    endDate?: true
    courseId?: true
    createdAt?: true
  }

  export type CourseTopicMaxAggregateInputType = {
    id?: true
    title?: true
    durationUnits?: true
    startDate?: true
    endDate?: true
    courseId?: true
    createdAt?: true
  }

  export type CourseTopicCountAggregateInputType = {
    id?: true
    title?: true
    durationUnits?: true
    startDate?: true
    endDate?: true
    courseId?: true
    createdAt?: true
    _all?: true
  }

  export type CourseTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTopic to aggregate.
     */
    where?: CourseTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTopics to fetch.
     */
    orderBy?: CourseTopicOrderByWithRelationInput | CourseTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseTopics
    **/
    _count?: true | CourseTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseTopicMaxAggregateInputType
  }

  export type GetCourseTopicAggregateType<T extends CourseTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseTopic[P]>
      : GetScalarType<T[P], AggregateCourseTopic[P]>
  }




  export type CourseTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTopicWhereInput
    orderBy?: CourseTopicOrderByWithAggregationInput | CourseTopicOrderByWithAggregationInput[]
    by: CourseTopicScalarFieldEnum[] | CourseTopicScalarFieldEnum
    having?: CourseTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseTopicCountAggregateInputType | true
    _avg?: CourseTopicAvgAggregateInputType
    _sum?: CourseTopicSumAggregateInputType
    _min?: CourseTopicMinAggregateInputType
    _max?: CourseTopicMaxAggregateInputType
  }

  export type CourseTopicGroupByOutputType = {
    id: string
    title: string
    durationUnits: number
    startDate: Date
    endDate: Date
    courseId: string
    createdAt: Date
    _count: CourseTopicCountAggregateOutputType | null
    _avg: CourseTopicAvgAggregateOutputType | null
    _sum: CourseTopicSumAggregateOutputType | null
    _min: CourseTopicMinAggregateOutputType | null
    _max: CourseTopicMaxAggregateOutputType | null
  }

  type GetCourseTopicGroupByPayload<T extends CourseTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseTopicGroupByOutputType[P]>
            : GetScalarType<T[P], CourseTopicGroupByOutputType[P]>
        }
      >
    >


  export type CourseTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    durationUnits?: boolean
    startDate?: boolean
    endDate?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTopic"]>

  export type CourseTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    durationUnits?: boolean
    startDate?: boolean
    endDate?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseTopic"]>

  export type CourseTopicSelectScalar = {
    id?: boolean
    title?: boolean
    durationUnits?: boolean
    startDate?: boolean
    endDate?: boolean
    courseId?: boolean
    createdAt?: boolean
  }

  export type CourseTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseTopic"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      durationUnits: number
      startDate: Date
      endDate: Date
      courseId: string
      createdAt: Date
    }, ExtArgs["result"]["courseTopic"]>
    composites: {}
  }

  type CourseTopicGetPayload<S extends boolean | null | undefined | CourseTopicDefaultArgs> = $Result.GetResult<Prisma.$CourseTopicPayload, S>

  type CourseTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseTopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseTopicCountAggregateInputType | true
    }

  export interface CourseTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseTopic'], meta: { name: 'CourseTopic' } }
    /**
     * Find zero or one CourseTopic that matches the filter.
     * @param {CourseTopicFindUniqueArgs} args - Arguments to find a CourseTopic
     * @example
     * // Get one CourseTopic
     * const courseTopic = await prisma.courseTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseTopicFindUniqueArgs>(args: SelectSubset<T, CourseTopicFindUniqueArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CourseTopic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseTopicFindUniqueOrThrowArgs} args - Arguments to find a CourseTopic
     * @example
     * // Get one CourseTopic
     * const courseTopic = await prisma.courseTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CourseTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicFindFirstArgs} args - Arguments to find a CourseTopic
     * @example
     * // Get one CourseTopic
     * const courseTopic = await prisma.courseTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseTopicFindFirstArgs>(args?: SelectSubset<T, CourseTopicFindFirstArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CourseTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicFindFirstOrThrowArgs} args - Arguments to find a CourseTopic
     * @example
     * // Get one CourseTopic
     * const courseTopic = await prisma.courseTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CourseTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseTopics
     * const courseTopics = await prisma.courseTopic.findMany()
     * 
     * // Get first 10 CourseTopics
     * const courseTopics = await prisma.courseTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseTopicWithIdOnly = await prisma.courseTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseTopicFindManyArgs>(args?: SelectSubset<T, CourseTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CourseTopic.
     * @param {CourseTopicCreateArgs} args - Arguments to create a CourseTopic.
     * @example
     * // Create one CourseTopic
     * const CourseTopic = await prisma.courseTopic.create({
     *   data: {
     *     // ... data to create a CourseTopic
     *   }
     * })
     * 
     */
    create<T extends CourseTopicCreateArgs>(args: SelectSubset<T, CourseTopicCreateArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CourseTopics.
     * @param {CourseTopicCreateManyArgs} args - Arguments to create many CourseTopics.
     * @example
     * // Create many CourseTopics
     * const courseTopic = await prisma.courseTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseTopicCreateManyArgs>(args?: SelectSubset<T, CourseTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseTopics and returns the data saved in the database.
     * @param {CourseTopicCreateManyAndReturnArgs} args - Arguments to create many CourseTopics.
     * @example
     * // Create many CourseTopics
     * const courseTopic = await prisma.courseTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseTopics and only return the `id`
     * const courseTopicWithIdOnly = await prisma.courseTopic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CourseTopic.
     * @param {CourseTopicDeleteArgs} args - Arguments to delete one CourseTopic.
     * @example
     * // Delete one CourseTopic
     * const CourseTopic = await prisma.courseTopic.delete({
     *   where: {
     *     // ... filter to delete one CourseTopic
     *   }
     * })
     * 
     */
    delete<T extends CourseTopicDeleteArgs>(args: SelectSubset<T, CourseTopicDeleteArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CourseTopic.
     * @param {CourseTopicUpdateArgs} args - Arguments to update one CourseTopic.
     * @example
     * // Update one CourseTopic
     * const courseTopic = await prisma.courseTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseTopicUpdateArgs>(args: SelectSubset<T, CourseTopicUpdateArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CourseTopics.
     * @param {CourseTopicDeleteManyArgs} args - Arguments to filter CourseTopics to delete.
     * @example
     * // Delete a few CourseTopics
     * const { count } = await prisma.courseTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseTopicDeleteManyArgs>(args?: SelectSubset<T, CourseTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseTopics
     * const courseTopic = await prisma.courseTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseTopicUpdateManyArgs>(args: SelectSubset<T, CourseTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseTopic.
     * @param {CourseTopicUpsertArgs} args - Arguments to update or create a CourseTopic.
     * @example
     * // Update or create a CourseTopic
     * const courseTopic = await prisma.courseTopic.upsert({
     *   create: {
     *     // ... data to create a CourseTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseTopic we want to update
     *   }
     * })
     */
    upsert<T extends CourseTopicUpsertArgs>(args: SelectSubset<T, CourseTopicUpsertArgs<ExtArgs>>): Prisma__CourseTopicClient<$Result.GetResult<Prisma.$CourseTopicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CourseTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicCountArgs} args - Arguments to filter CourseTopics to count.
     * @example
     * // Count the number of CourseTopics
     * const count = await prisma.courseTopic.count({
     *   where: {
     *     // ... the filter for the CourseTopics we want to count
     *   }
     * })
    **/
    count<T extends CourseTopicCountArgs>(
      args?: Subset<T, CourseTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseTopicAggregateArgs>(args: Subset<T, CourseTopicAggregateArgs>): Prisma.PrismaPromise<GetCourseTopicAggregateType<T>>

    /**
     * Group by CourseTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTopicGroupByArgs} args - Group by arguments.
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
      T extends CourseTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseTopicGroupByArgs['orderBy'] }
        : { orderBy?: CourseTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseTopic model
   */
  readonly fields: CourseTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseTopic model
   */ 
  interface CourseTopicFieldRefs {
    readonly id: FieldRef<"CourseTopic", 'String'>
    readonly title: FieldRef<"CourseTopic", 'String'>
    readonly durationUnits: FieldRef<"CourseTopic", 'Int'>
    readonly startDate: FieldRef<"CourseTopic", 'DateTime'>
    readonly endDate: FieldRef<"CourseTopic", 'DateTime'>
    readonly courseId: FieldRef<"CourseTopic", 'String'>
    readonly createdAt: FieldRef<"CourseTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseTopic findUnique
   */
  export type CourseTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * Filter, which CourseTopic to fetch.
     */
    where: CourseTopicWhereUniqueInput
  }

  /**
   * CourseTopic findUniqueOrThrow
   */
  export type CourseTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * Filter, which CourseTopic to fetch.
     */
    where: CourseTopicWhereUniqueInput
  }

  /**
   * CourseTopic findFirst
   */
  export type CourseTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * Filter, which CourseTopic to fetch.
     */
    where?: CourseTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTopics to fetch.
     */
    orderBy?: CourseTopicOrderByWithRelationInput | CourseTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTopics.
     */
    cursor?: CourseTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTopics.
     */
    distinct?: CourseTopicScalarFieldEnum | CourseTopicScalarFieldEnum[]
  }

  /**
   * CourseTopic findFirstOrThrow
   */
  export type CourseTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * Filter, which CourseTopic to fetch.
     */
    where?: CourseTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTopics to fetch.
     */
    orderBy?: CourseTopicOrderByWithRelationInput | CourseTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTopics.
     */
    cursor?: CourseTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTopics.
     */
    distinct?: CourseTopicScalarFieldEnum | CourseTopicScalarFieldEnum[]
  }

  /**
   * CourseTopic findMany
   */
  export type CourseTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * Filter, which CourseTopics to fetch.
     */
    where?: CourseTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTopics to fetch.
     */
    orderBy?: CourseTopicOrderByWithRelationInput | CourseTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseTopics.
     */
    cursor?: CourseTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTopics.
     */
    skip?: number
    distinct?: CourseTopicScalarFieldEnum | CourseTopicScalarFieldEnum[]
  }

  /**
   * CourseTopic create
   */
  export type CourseTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseTopic.
     */
    data: XOR<CourseTopicCreateInput, CourseTopicUncheckedCreateInput>
  }

  /**
   * CourseTopic createMany
   */
  export type CourseTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseTopics.
     */
    data: CourseTopicCreateManyInput | CourseTopicCreateManyInput[]
  }

  /**
   * CourseTopic createManyAndReturn
   */
  export type CourseTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CourseTopics.
     */
    data: CourseTopicCreateManyInput | CourseTopicCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseTopic update
   */
  export type CourseTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseTopic.
     */
    data: XOR<CourseTopicUpdateInput, CourseTopicUncheckedUpdateInput>
    /**
     * Choose, which CourseTopic to update.
     */
    where: CourseTopicWhereUniqueInput
  }

  /**
   * CourseTopic updateMany
   */
  export type CourseTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseTopics.
     */
    data: XOR<CourseTopicUpdateManyMutationInput, CourseTopicUncheckedUpdateManyInput>
    /**
     * Filter which CourseTopics to update
     */
    where?: CourseTopicWhereInput
  }

  /**
   * CourseTopic upsert
   */
  export type CourseTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseTopic to update in case it exists.
     */
    where: CourseTopicWhereUniqueInput
    /**
     * In case the CourseTopic found by the `where` argument doesn't exist, create a new CourseTopic with this data.
     */
    create: XOR<CourseTopicCreateInput, CourseTopicUncheckedCreateInput>
    /**
     * In case the CourseTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseTopicUpdateInput, CourseTopicUncheckedUpdateInput>
  }

  /**
   * CourseTopic delete
   */
  export type CourseTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
    /**
     * Filter which CourseTopic to delete.
     */
    where: CourseTopicWhereUniqueInput
  }

  /**
   * CourseTopic deleteMany
   */
  export type CourseTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTopics to delete
     */
    where?: CourseTopicWhereInput
  }

  /**
   * CourseTopic without action
   */
  export type CourseTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTopic
     */
    select?: CourseTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTopicInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    createdAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    capacity: number | null
    createdAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    createdAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createdAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createdAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    createdAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    capacity: number
    createdAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    createdAt?: boolean
    events?: boolean | Room$eventsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    createdAt?: boolean
  }

  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Room$eventsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      events: Prisma.$CourseEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      capacity: number
      createdAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Room$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Room$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }

  /**
   * Room.events
   */
  export type Room$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    where?: CourseEventWhereInput
    orderBy?: CourseEventOrderByWithRelationInput | CourseEventOrderByWithRelationInput[]
    cursor?: CourseEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseEventScalarFieldEnum | CourseEventScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model TimeEntry
   */

  export type AggregateTimeEntry = {
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  export type TimeEntryAvgAggregateOutputType = {
    duration: number | null
  }

  export type TimeEntrySumAggregateOutputType = {
    duration: number | null
  }

  export type TimeEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    clockIn: Date | null
    clockOut: Date | null
    duration: number | null
    location: string | null
    createdAt: Date | null
  }

  export type TimeEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    clockIn: Date | null
    clockOut: Date | null
    duration: number | null
    location: string | null
    createdAt: Date | null
  }

  export type TimeEntryCountAggregateOutputType = {
    id: number
    userId: number
    clockIn: number
    clockOut: number
    duration: number
    location: number
    createdAt: number
    _all: number
  }


  export type TimeEntryAvgAggregateInputType = {
    duration?: true
  }

  export type TimeEntrySumAggregateInputType = {
    duration?: true
  }

  export type TimeEntryMinAggregateInputType = {
    id?: true
    userId?: true
    clockIn?: true
    clockOut?: true
    duration?: true
    location?: true
    createdAt?: true
  }

  export type TimeEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    clockIn?: true
    clockOut?: true
    duration?: true
    location?: true
    createdAt?: true
  }

  export type TimeEntryCountAggregateInputType = {
    id?: true
    userId?: true
    clockIn?: true
    clockOut?: true
    duration?: true
    location?: true
    createdAt?: true
    _all?: true
  }

  export type TimeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntry to aggregate.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeEntries
    **/
    _count?: true | TimeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeEntryMaxAggregateInputType
  }

  export type GetTimeEntryAggregateType<T extends TimeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeEntry[P]>
      : GetScalarType<T[P], AggregateTimeEntry[P]>
  }




  export type TimeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeEntryWhereInput
    orderBy?: TimeEntryOrderByWithAggregationInput | TimeEntryOrderByWithAggregationInput[]
    by: TimeEntryScalarFieldEnum[] | TimeEntryScalarFieldEnum
    having?: TimeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeEntryCountAggregateInputType | true
    _avg?: TimeEntryAvgAggregateInputType
    _sum?: TimeEntrySumAggregateInputType
    _min?: TimeEntryMinAggregateInputType
    _max?: TimeEntryMaxAggregateInputType
  }

  export type TimeEntryGroupByOutputType = {
    id: string
    userId: string
    clockIn: Date
    clockOut: Date | null
    duration: number | null
    location: string
    createdAt: Date
    _count: TimeEntryCountAggregateOutputType | null
    _avg: TimeEntryAvgAggregateOutputType | null
    _sum: TimeEntrySumAggregateOutputType | null
    _min: TimeEntryMinAggregateOutputType | null
    _max: TimeEntryMaxAggregateOutputType | null
  }

  type GetTimeEntryGroupByPayload<T extends TimeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TimeEntryGroupByOutputType[P]>
        }
      >
    >


  export type TimeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    duration?: boolean
    location?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    duration?: boolean
    location?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timeEntry"]>

  export type TimeEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    duration?: boolean
    location?: boolean
    createdAt?: boolean
  }

  export type TimeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TimeEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      clockIn: Date
      clockOut: Date | null
      duration: number | null
      location: string
      createdAt: Date
    }, ExtArgs["result"]["timeEntry"]>
    composites: {}
  }

  type TimeEntryGetPayload<S extends boolean | null | undefined | TimeEntryDefaultArgs> = $Result.GetResult<Prisma.$TimeEntryPayload, S>

  type TimeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimeEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimeEntryCountAggregateInputType | true
    }

  export interface TimeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeEntry'], meta: { name: 'TimeEntry' } }
    /**
     * Find zero or one TimeEntry that matches the filter.
     * @param {TimeEntryFindUniqueArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeEntryFindUniqueArgs>(args: SelectSubset<T, TimeEntryFindUniqueArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TimeEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimeEntryFindUniqueOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TimeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeEntryFindFirstArgs>(args?: SelectSubset<T, TimeEntryFindFirstArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TimeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindFirstOrThrowArgs} args - Arguments to find a TimeEntry
     * @example
     * // Get one TimeEntry
     * const timeEntry = await prisma.timeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TimeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany()
     * 
     * // Get first 10 TimeEntries
     * const timeEntries = await prisma.timeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimeEntryFindManyArgs>(args?: SelectSubset<T, TimeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TimeEntry.
     * @param {TimeEntryCreateArgs} args - Arguments to create a TimeEntry.
     * @example
     * // Create one TimeEntry
     * const TimeEntry = await prisma.timeEntry.create({
     *   data: {
     *     // ... data to create a TimeEntry
     *   }
     * })
     * 
     */
    create<T extends TimeEntryCreateArgs>(args: SelectSubset<T, TimeEntryCreateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TimeEntries.
     * @param {TimeEntryCreateManyArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeEntryCreateManyArgs>(args?: SelectSubset<T, TimeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TimeEntries and returns the data saved in the database.
     * @param {TimeEntryCreateManyAndReturnArgs} args - Arguments to create many TimeEntries.
     * @example
     * // Create many TimeEntries
     * const timeEntry = await prisma.timeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TimeEntries and only return the `id`
     * const timeEntryWithIdOnly = await prisma.timeEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TimeEntry.
     * @param {TimeEntryDeleteArgs} args - Arguments to delete one TimeEntry.
     * @example
     * // Delete one TimeEntry
     * const TimeEntry = await prisma.timeEntry.delete({
     *   where: {
     *     // ... filter to delete one TimeEntry
     *   }
     * })
     * 
     */
    delete<T extends TimeEntryDeleteArgs>(args: SelectSubset<T, TimeEntryDeleteArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TimeEntry.
     * @param {TimeEntryUpdateArgs} args - Arguments to update one TimeEntry.
     * @example
     * // Update one TimeEntry
     * const timeEntry = await prisma.timeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeEntryUpdateArgs>(args: SelectSubset<T, TimeEntryUpdateArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TimeEntries.
     * @param {TimeEntryDeleteManyArgs} args - Arguments to filter TimeEntries to delete.
     * @example
     * // Delete a few TimeEntries
     * const { count } = await prisma.timeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeEntryDeleteManyArgs>(args?: SelectSubset<T, TimeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeEntries
     * const timeEntry = await prisma.timeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeEntryUpdateManyArgs>(args: SelectSubset<T, TimeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeEntry.
     * @param {TimeEntryUpsertArgs} args - Arguments to update or create a TimeEntry.
     * @example
     * // Update or create a TimeEntry
     * const timeEntry = await prisma.timeEntry.upsert({
     *   create: {
     *     // ... data to create a TimeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeEntry we want to update
     *   }
     * })
     */
    upsert<T extends TimeEntryUpsertArgs>(args: SelectSubset<T, TimeEntryUpsertArgs<ExtArgs>>): Prisma__TimeEntryClient<$Result.GetResult<Prisma.$TimeEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryCountArgs} args - Arguments to filter TimeEntries to count.
     * @example
     * // Count the number of TimeEntries
     * const count = await prisma.timeEntry.count({
     *   where: {
     *     // ... the filter for the TimeEntries we want to count
     *   }
     * })
    **/
    count<T extends TimeEntryCountArgs>(
      args?: Subset<T, TimeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimeEntryAggregateArgs>(args: Subset<T, TimeEntryAggregateArgs>): Prisma.PrismaPromise<GetTimeEntryAggregateType<T>>

    /**
     * Group by TimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeEntryGroupByArgs} args - Group by arguments.
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
      T extends TimeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeEntryGroupByArgs['orderBy'] }
        : { orderBy?: TimeEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TimeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TimeEntry model
   */
  readonly fields: TimeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TimeEntry model
   */ 
  interface TimeEntryFieldRefs {
    readonly id: FieldRef<"TimeEntry", 'String'>
    readonly userId: FieldRef<"TimeEntry", 'String'>
    readonly clockIn: FieldRef<"TimeEntry", 'DateTime'>
    readonly clockOut: FieldRef<"TimeEntry", 'DateTime'>
    readonly duration: FieldRef<"TimeEntry", 'Int'>
    readonly location: FieldRef<"TimeEntry", 'String'>
    readonly createdAt: FieldRef<"TimeEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TimeEntry findUnique
   */
  export type TimeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findUniqueOrThrow
   */
  export type TimeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry findFirst
   */
  export type TimeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findFirstOrThrow
   */
  export type TimeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntry to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeEntries.
     */
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry findMany
   */
  export type TimeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which TimeEntries to fetch.
     */
    where?: TimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeEntries to fetch.
     */
    orderBy?: TimeEntryOrderByWithRelationInput | TimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeEntries.
     */
    cursor?: TimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeEntries.
     */
    skip?: number
    distinct?: TimeEntryScalarFieldEnum | TimeEntryScalarFieldEnum[]
  }

  /**
   * TimeEntry create
   */
  export type TimeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeEntry.
     */
    data: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
  }

  /**
   * TimeEntry createMany
   */
  export type TimeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
  }

  /**
   * TimeEntry createManyAndReturn
   */
  export type TimeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TimeEntries.
     */
    data: TimeEntryCreateManyInput | TimeEntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TimeEntry update
   */
  export type TimeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeEntry.
     */
    data: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
    /**
     * Choose, which TimeEntry to update.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry updateMany
   */
  export type TimeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeEntries.
     */
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which TimeEntries to update
     */
    where?: TimeEntryWhereInput
  }

  /**
   * TimeEntry upsert
   */
  export type TimeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeEntry to update in case it exists.
     */
    where: TimeEntryWhereUniqueInput
    /**
     * In case the TimeEntry found by the `where` argument doesn't exist, create a new TimeEntry with this data.
     */
    create: XOR<TimeEntryCreateInput, TimeEntryUncheckedCreateInput>
    /**
     * In case the TimeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeEntryUpdateInput, TimeEntryUncheckedUpdateInput>
  }

  /**
   * TimeEntry delete
   */
  export type TimeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
    /**
     * Filter which TimeEntry to delete.
     */
    where: TimeEntryWhereUniqueInput
  }

  /**
   * TimeEntry deleteMany
   */
  export type TimeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeEntries to delete
     */
    where?: TimeEntryWhereInput
  }

  /**
   * TimeEntry without action
   */
  export type TimeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeEntry
     */
    select?: TimeEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeEntryInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    author: string | null
    published: boolean | null
    createdAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    author: string | null
    published: boolean | null
    createdAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    author: number
    published: number
    createdAt: number
    _all: number
  }


  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    author?: true
    published?: true
    createdAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    author?: true
    published?: true
    createdAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    author?: true
    published?: true
    createdAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    title: string
    content: string
    author: string
    published: boolean
    createdAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    author?: boolean
    published?: boolean
    createdAt?: boolean
  }


  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      author: string
      published: boolean
      createdAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */ 
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly author: FieldRef<"Announcement", 'String'>
    readonly published: FieldRef<"Announcement", 'Boolean'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
  }


  /**
   * Model CourseEvent
   */

  export type AggregateCourseEvent = {
    _count: CourseEventCountAggregateOutputType | null
    _min: CourseEventMinAggregateOutputType | null
    _max: CourseEventMaxAggregateOutputType | null
  }

  export type CourseEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    roomId: string | null
    instructor: string | null
    createdAt: Date | null
  }

  export type CourseEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    startTime: Date | null
    endTime: Date | null
    roomId: string | null
    instructor: string | null
    createdAt: Date | null
  }

  export type CourseEventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startTime: number
    endTime: number
    roomId: number
    instructor: number
    createdAt: number
    _all: number
  }


  export type CourseEventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    roomId?: true
    instructor?: true
    createdAt?: true
  }

  export type CourseEventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    roomId?: true
    instructor?: true
    createdAt?: true
  }

  export type CourseEventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startTime?: true
    endTime?: true
    roomId?: true
    instructor?: true
    createdAt?: true
    _all?: true
  }

  export type CourseEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseEvent to aggregate.
     */
    where?: CourseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEvents to fetch.
     */
    orderBy?: CourseEventOrderByWithRelationInput | CourseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseEvents
    **/
    _count?: true | CourseEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseEventMaxAggregateInputType
  }

  export type GetCourseEventAggregateType<T extends CourseEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseEvent[P]>
      : GetScalarType<T[P], AggregateCourseEvent[P]>
  }




  export type CourseEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseEventWhereInput
    orderBy?: CourseEventOrderByWithAggregationInput | CourseEventOrderByWithAggregationInput[]
    by: CourseEventScalarFieldEnum[] | CourseEventScalarFieldEnum
    having?: CourseEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseEventCountAggregateInputType | true
    _min?: CourseEventMinAggregateInputType
    _max?: CourseEventMaxAggregateInputType
  }

  export type CourseEventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    startTime: Date
    endTime: Date
    roomId: string | null
    instructor: string | null
    createdAt: Date
    _count: CourseEventCountAggregateOutputType | null
    _min: CourseEventMinAggregateOutputType | null
    _max: CourseEventMaxAggregateOutputType | null
  }

  type GetCourseEventGroupByPayload<T extends CourseEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseEventGroupByOutputType[P]>
            : GetScalarType<T[P], CourseEventGroupByOutputType[P]>
        }
      >
    >


  export type CourseEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    roomId?: boolean
    instructor?: boolean
    createdAt?: boolean
    room?: boolean | CourseEvent$roomArgs<ExtArgs>
  }, ExtArgs["result"]["courseEvent"]>

  export type CourseEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    roomId?: boolean
    instructor?: boolean
    createdAt?: boolean
    room?: boolean | CourseEvent$roomArgs<ExtArgs>
  }, ExtArgs["result"]["courseEvent"]>

  export type CourseEventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startTime?: boolean
    endTime?: boolean
    roomId?: boolean
    instructor?: boolean
    createdAt?: boolean
  }

  export type CourseEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | CourseEvent$roomArgs<ExtArgs>
  }
  export type CourseEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | CourseEvent$roomArgs<ExtArgs>
  }

  export type $CourseEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseEvent"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      startTime: Date
      endTime: Date
      roomId: string | null
      instructor: string | null
      createdAt: Date
    }, ExtArgs["result"]["courseEvent"]>
    composites: {}
  }

  type CourseEventGetPayload<S extends boolean | null | undefined | CourseEventDefaultArgs> = $Result.GetResult<Prisma.$CourseEventPayload, S>

  type CourseEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseEventCountAggregateInputType | true
    }

  export interface CourseEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseEvent'], meta: { name: 'CourseEvent' } }
    /**
     * Find zero or one CourseEvent that matches the filter.
     * @param {CourseEventFindUniqueArgs} args - Arguments to find a CourseEvent
     * @example
     * // Get one CourseEvent
     * const courseEvent = await prisma.courseEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseEventFindUniqueArgs>(args: SelectSubset<T, CourseEventFindUniqueArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CourseEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseEventFindUniqueOrThrowArgs} args - Arguments to find a CourseEvent
     * @example
     * // Get one CourseEvent
     * const courseEvent = await prisma.courseEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CourseEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventFindFirstArgs} args - Arguments to find a CourseEvent
     * @example
     * // Get one CourseEvent
     * const courseEvent = await prisma.courseEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseEventFindFirstArgs>(args?: SelectSubset<T, CourseEventFindFirstArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CourseEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventFindFirstOrThrowArgs} args - Arguments to find a CourseEvent
     * @example
     * // Get one CourseEvent
     * const courseEvent = await prisma.courseEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CourseEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseEvents
     * const courseEvents = await prisma.courseEvent.findMany()
     * 
     * // Get first 10 CourseEvents
     * const courseEvents = await prisma.courseEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseEventWithIdOnly = await prisma.courseEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseEventFindManyArgs>(args?: SelectSubset<T, CourseEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CourseEvent.
     * @param {CourseEventCreateArgs} args - Arguments to create a CourseEvent.
     * @example
     * // Create one CourseEvent
     * const CourseEvent = await prisma.courseEvent.create({
     *   data: {
     *     // ... data to create a CourseEvent
     *   }
     * })
     * 
     */
    create<T extends CourseEventCreateArgs>(args: SelectSubset<T, CourseEventCreateArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CourseEvents.
     * @param {CourseEventCreateManyArgs} args - Arguments to create many CourseEvents.
     * @example
     * // Create many CourseEvents
     * const courseEvent = await prisma.courseEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseEventCreateManyArgs>(args?: SelectSubset<T, CourseEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseEvents and returns the data saved in the database.
     * @param {CourseEventCreateManyAndReturnArgs} args - Arguments to create many CourseEvents.
     * @example
     * // Create many CourseEvents
     * const courseEvent = await prisma.courseEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseEvents and only return the `id`
     * const courseEventWithIdOnly = await prisma.courseEvent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CourseEvent.
     * @param {CourseEventDeleteArgs} args - Arguments to delete one CourseEvent.
     * @example
     * // Delete one CourseEvent
     * const CourseEvent = await prisma.courseEvent.delete({
     *   where: {
     *     // ... filter to delete one CourseEvent
     *   }
     * })
     * 
     */
    delete<T extends CourseEventDeleteArgs>(args: SelectSubset<T, CourseEventDeleteArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CourseEvent.
     * @param {CourseEventUpdateArgs} args - Arguments to update one CourseEvent.
     * @example
     * // Update one CourseEvent
     * const courseEvent = await prisma.courseEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseEventUpdateArgs>(args: SelectSubset<T, CourseEventUpdateArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CourseEvents.
     * @param {CourseEventDeleteManyArgs} args - Arguments to filter CourseEvents to delete.
     * @example
     * // Delete a few CourseEvents
     * const { count } = await prisma.courseEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseEventDeleteManyArgs>(args?: SelectSubset<T, CourseEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseEvents
     * const courseEvent = await prisma.courseEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseEventUpdateManyArgs>(args: SelectSubset<T, CourseEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseEvent.
     * @param {CourseEventUpsertArgs} args - Arguments to update or create a CourseEvent.
     * @example
     * // Update or create a CourseEvent
     * const courseEvent = await prisma.courseEvent.upsert({
     *   create: {
     *     // ... data to create a CourseEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseEvent we want to update
     *   }
     * })
     */
    upsert<T extends CourseEventUpsertArgs>(args: SelectSubset<T, CourseEventUpsertArgs<ExtArgs>>): Prisma__CourseEventClient<$Result.GetResult<Prisma.$CourseEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CourseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventCountArgs} args - Arguments to filter CourseEvents to count.
     * @example
     * // Count the number of CourseEvents
     * const count = await prisma.courseEvent.count({
     *   where: {
     *     // ... the filter for the CourseEvents we want to count
     *   }
     * })
    **/
    count<T extends CourseEventCountArgs>(
      args?: Subset<T, CourseEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseEventAggregateArgs>(args: Subset<T, CourseEventAggregateArgs>): Prisma.PrismaPromise<GetCourseEventAggregateType<T>>

    /**
     * Group by CourseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseEventGroupByArgs} args - Group by arguments.
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
      T extends CourseEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseEventGroupByArgs['orderBy'] }
        : { orderBy?: CourseEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CourseEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseEvent model
   */
  readonly fields: CourseEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends CourseEvent$roomArgs<ExtArgs> = {}>(args?: Subset<T, CourseEvent$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseEvent model
   */ 
  interface CourseEventFieldRefs {
    readonly id: FieldRef<"CourseEvent", 'String'>
    readonly title: FieldRef<"CourseEvent", 'String'>
    readonly description: FieldRef<"CourseEvent", 'String'>
    readonly startTime: FieldRef<"CourseEvent", 'DateTime'>
    readonly endTime: FieldRef<"CourseEvent", 'DateTime'>
    readonly roomId: FieldRef<"CourseEvent", 'String'>
    readonly instructor: FieldRef<"CourseEvent", 'String'>
    readonly createdAt: FieldRef<"CourseEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourseEvent findUnique
   */
  export type CourseEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * Filter, which CourseEvent to fetch.
     */
    where: CourseEventWhereUniqueInput
  }

  /**
   * CourseEvent findUniqueOrThrow
   */
  export type CourseEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * Filter, which CourseEvent to fetch.
     */
    where: CourseEventWhereUniqueInput
  }

  /**
   * CourseEvent findFirst
   */
  export type CourseEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * Filter, which CourseEvent to fetch.
     */
    where?: CourseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEvents to fetch.
     */
    orderBy?: CourseEventOrderByWithRelationInput | CourseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEvents.
     */
    cursor?: CourseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEvents.
     */
    distinct?: CourseEventScalarFieldEnum | CourseEventScalarFieldEnum[]
  }

  /**
   * CourseEvent findFirstOrThrow
   */
  export type CourseEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * Filter, which CourseEvent to fetch.
     */
    where?: CourseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEvents to fetch.
     */
    orderBy?: CourseEventOrderByWithRelationInput | CourseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseEvents.
     */
    cursor?: CourseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseEvents.
     */
    distinct?: CourseEventScalarFieldEnum | CourseEventScalarFieldEnum[]
  }

  /**
   * CourseEvent findMany
   */
  export type CourseEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * Filter, which CourseEvents to fetch.
     */
    where?: CourseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseEvents to fetch.
     */
    orderBy?: CourseEventOrderByWithRelationInput | CourseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseEvents.
     */
    cursor?: CourseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseEvents.
     */
    skip?: number
    distinct?: CourseEventScalarFieldEnum | CourseEventScalarFieldEnum[]
  }

  /**
   * CourseEvent create
   */
  export type CourseEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseEvent.
     */
    data: XOR<CourseEventCreateInput, CourseEventUncheckedCreateInput>
  }

  /**
   * CourseEvent createMany
   */
  export type CourseEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseEvents.
     */
    data: CourseEventCreateManyInput | CourseEventCreateManyInput[]
  }

  /**
   * CourseEvent createManyAndReturn
   */
  export type CourseEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CourseEvents.
     */
    data: CourseEventCreateManyInput | CourseEventCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseEvent update
   */
  export type CourseEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseEvent.
     */
    data: XOR<CourseEventUpdateInput, CourseEventUncheckedUpdateInput>
    /**
     * Choose, which CourseEvent to update.
     */
    where: CourseEventWhereUniqueInput
  }

  /**
   * CourseEvent updateMany
   */
  export type CourseEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseEvents.
     */
    data: XOR<CourseEventUpdateManyMutationInput, CourseEventUncheckedUpdateManyInput>
    /**
     * Filter which CourseEvents to update
     */
    where?: CourseEventWhereInput
  }

  /**
   * CourseEvent upsert
   */
  export type CourseEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseEvent to update in case it exists.
     */
    where: CourseEventWhereUniqueInput
    /**
     * In case the CourseEvent found by the `where` argument doesn't exist, create a new CourseEvent with this data.
     */
    create: XOR<CourseEventCreateInput, CourseEventUncheckedCreateInput>
    /**
     * In case the CourseEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseEventUpdateInput, CourseEventUncheckedUpdateInput>
  }

  /**
   * CourseEvent delete
   */
  export type CourseEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
    /**
     * Filter which CourseEvent to delete.
     */
    where: CourseEventWhereUniqueInput
  }

  /**
   * CourseEvent deleteMany
   */
  export type CourseEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseEvents to delete
     */
    where?: CourseEventWhereInput
  }

  /**
   * CourseEvent.room
   */
  export type CourseEvent$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * CourseEvent without action
   */
  export type CourseEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseEvent
     */
    select?: CourseEventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseEventInclude<ExtArgs> | null
  }


  /**
   * Model BulletinPost
   */

  export type AggregateBulletinPost = {
    _count: BulletinPostCountAggregateOutputType | null
    _min: BulletinPostMinAggregateOutputType | null
    _max: BulletinPostMaxAggregateOutputType | null
  }

  export type BulletinPostMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    contactInfo: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BulletinPostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    contactInfo: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BulletinPostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    contactInfo: number
    userId: number
    createdAt: number
    _all: number
  }


  export type BulletinPostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    contactInfo?: true
    userId?: true
    createdAt?: true
  }

  export type BulletinPostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    contactInfo?: true
    userId?: true
    createdAt?: true
  }

  export type BulletinPostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    contactInfo?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type BulletinPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletinPost to aggregate.
     */
    where?: BulletinPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPosts to fetch.
     */
    orderBy?: BulletinPostOrderByWithRelationInput | BulletinPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletinPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulletinPosts
    **/
    _count?: true | BulletinPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletinPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletinPostMaxAggregateInputType
  }

  export type GetBulletinPostAggregateType<T extends BulletinPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletinPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletinPost[P]>
      : GetScalarType<T[P], AggregateBulletinPost[P]>
  }




  export type BulletinPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletinPostWhereInput
    orderBy?: BulletinPostOrderByWithAggregationInput | BulletinPostOrderByWithAggregationInput[]
    by: BulletinPostScalarFieldEnum[] | BulletinPostScalarFieldEnum
    having?: BulletinPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletinPostCountAggregateInputType | true
    _min?: BulletinPostMinAggregateInputType
    _max?: BulletinPostMaxAggregateInputType
  }

  export type BulletinPostGroupByOutputType = {
    id: string
    title: string
    description: string
    type: string
    contactInfo: string
    userId: string | null
    createdAt: Date
    _count: BulletinPostCountAggregateOutputType | null
    _min: BulletinPostMinAggregateOutputType | null
    _max: BulletinPostMaxAggregateOutputType | null
  }

  type GetBulletinPostGroupByPayload<T extends BulletinPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletinPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletinPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletinPostGroupByOutputType[P]>
            : GetScalarType<T[P], BulletinPostGroupByOutputType[P]>
        }
      >
    >


  export type BulletinPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contactInfo?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | BulletinPost$userArgs<ExtArgs>
  }, ExtArgs["result"]["bulletinPost"]>

  export type BulletinPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contactInfo?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | BulletinPost$userArgs<ExtArgs>
  }, ExtArgs["result"]["bulletinPost"]>

  export type BulletinPostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contactInfo?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type BulletinPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BulletinPost$userArgs<ExtArgs>
  }
  export type BulletinPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | BulletinPost$userArgs<ExtArgs>
  }

  export type $BulletinPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulletinPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      type: string
      contactInfo: string
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["bulletinPost"]>
    composites: {}
  }

  type BulletinPostGetPayload<S extends boolean | null | undefined | BulletinPostDefaultArgs> = $Result.GetResult<Prisma.$BulletinPostPayload, S>

  type BulletinPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BulletinPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BulletinPostCountAggregateInputType | true
    }

  export interface BulletinPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulletinPost'], meta: { name: 'BulletinPost' } }
    /**
     * Find zero or one BulletinPost that matches the filter.
     * @param {BulletinPostFindUniqueArgs} args - Arguments to find a BulletinPost
     * @example
     * // Get one BulletinPost
     * const bulletinPost = await prisma.bulletinPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletinPostFindUniqueArgs>(args: SelectSubset<T, BulletinPostFindUniqueArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BulletinPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BulletinPostFindUniqueOrThrowArgs} args - Arguments to find a BulletinPost
     * @example
     * // Get one BulletinPost
     * const bulletinPost = await prisma.bulletinPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletinPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletinPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BulletinPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostFindFirstArgs} args - Arguments to find a BulletinPost
     * @example
     * // Get one BulletinPost
     * const bulletinPost = await prisma.bulletinPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletinPostFindFirstArgs>(args?: SelectSubset<T, BulletinPostFindFirstArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BulletinPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostFindFirstOrThrowArgs} args - Arguments to find a BulletinPost
     * @example
     * // Get one BulletinPost
     * const bulletinPost = await prisma.bulletinPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletinPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletinPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BulletinPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulletinPosts
     * const bulletinPosts = await prisma.bulletinPost.findMany()
     * 
     * // Get first 10 BulletinPosts
     * const bulletinPosts = await prisma.bulletinPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletinPostWithIdOnly = await prisma.bulletinPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletinPostFindManyArgs>(args?: SelectSubset<T, BulletinPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BulletinPost.
     * @param {BulletinPostCreateArgs} args - Arguments to create a BulletinPost.
     * @example
     * // Create one BulletinPost
     * const BulletinPost = await prisma.bulletinPost.create({
     *   data: {
     *     // ... data to create a BulletinPost
     *   }
     * })
     * 
     */
    create<T extends BulletinPostCreateArgs>(args: SelectSubset<T, BulletinPostCreateArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BulletinPosts.
     * @param {BulletinPostCreateManyArgs} args - Arguments to create many BulletinPosts.
     * @example
     * // Create many BulletinPosts
     * const bulletinPost = await prisma.bulletinPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletinPostCreateManyArgs>(args?: SelectSubset<T, BulletinPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BulletinPosts and returns the data saved in the database.
     * @param {BulletinPostCreateManyAndReturnArgs} args - Arguments to create many BulletinPosts.
     * @example
     * // Create many BulletinPosts
     * const bulletinPost = await prisma.bulletinPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BulletinPosts and only return the `id`
     * const bulletinPostWithIdOnly = await prisma.bulletinPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulletinPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BulletinPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BulletinPost.
     * @param {BulletinPostDeleteArgs} args - Arguments to delete one BulletinPost.
     * @example
     * // Delete one BulletinPost
     * const BulletinPost = await prisma.bulletinPost.delete({
     *   where: {
     *     // ... filter to delete one BulletinPost
     *   }
     * })
     * 
     */
    delete<T extends BulletinPostDeleteArgs>(args: SelectSubset<T, BulletinPostDeleteArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BulletinPost.
     * @param {BulletinPostUpdateArgs} args - Arguments to update one BulletinPost.
     * @example
     * // Update one BulletinPost
     * const bulletinPost = await prisma.bulletinPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletinPostUpdateArgs>(args: SelectSubset<T, BulletinPostUpdateArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BulletinPosts.
     * @param {BulletinPostDeleteManyArgs} args - Arguments to filter BulletinPosts to delete.
     * @example
     * // Delete a few BulletinPosts
     * const { count } = await prisma.bulletinPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletinPostDeleteManyArgs>(args?: SelectSubset<T, BulletinPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulletinPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulletinPosts
     * const bulletinPost = await prisma.bulletinPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletinPostUpdateManyArgs>(args: SelectSubset<T, BulletinPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BulletinPost.
     * @param {BulletinPostUpsertArgs} args - Arguments to update or create a BulletinPost.
     * @example
     * // Update or create a BulletinPost
     * const bulletinPost = await prisma.bulletinPost.upsert({
     *   create: {
     *     // ... data to create a BulletinPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulletinPost we want to update
     *   }
     * })
     */
    upsert<T extends BulletinPostUpsertArgs>(args: SelectSubset<T, BulletinPostUpsertArgs<ExtArgs>>): Prisma__BulletinPostClient<$Result.GetResult<Prisma.$BulletinPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BulletinPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostCountArgs} args - Arguments to filter BulletinPosts to count.
     * @example
     * // Count the number of BulletinPosts
     * const count = await prisma.bulletinPost.count({
     *   where: {
     *     // ... the filter for the BulletinPosts we want to count
     *   }
     * })
    **/
    count<T extends BulletinPostCountArgs>(
      args?: Subset<T, BulletinPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletinPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulletinPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BulletinPostAggregateArgs>(args: Subset<T, BulletinPostAggregateArgs>): Prisma.PrismaPromise<GetBulletinPostAggregateType<T>>

    /**
     * Group by BulletinPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletinPostGroupByArgs} args - Group by arguments.
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
      T extends BulletinPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletinPostGroupByArgs['orderBy'] }
        : { orderBy?: BulletinPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BulletinPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletinPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulletinPost model
   */
  readonly fields: BulletinPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulletinPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletinPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends BulletinPost$userArgs<ExtArgs> = {}>(args?: Subset<T, BulletinPost$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulletinPost model
   */ 
  interface BulletinPostFieldRefs {
    readonly id: FieldRef<"BulletinPost", 'String'>
    readonly title: FieldRef<"BulletinPost", 'String'>
    readonly description: FieldRef<"BulletinPost", 'String'>
    readonly type: FieldRef<"BulletinPost", 'String'>
    readonly contactInfo: FieldRef<"BulletinPost", 'String'>
    readonly userId: FieldRef<"BulletinPost", 'String'>
    readonly createdAt: FieldRef<"BulletinPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BulletinPost findUnique
   */
  export type BulletinPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPost to fetch.
     */
    where: BulletinPostWhereUniqueInput
  }

  /**
   * BulletinPost findUniqueOrThrow
   */
  export type BulletinPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPost to fetch.
     */
    where: BulletinPostWhereUniqueInput
  }

  /**
   * BulletinPost findFirst
   */
  export type BulletinPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPost to fetch.
     */
    where?: BulletinPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPosts to fetch.
     */
    orderBy?: BulletinPostOrderByWithRelationInput | BulletinPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletinPosts.
     */
    cursor?: BulletinPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletinPosts.
     */
    distinct?: BulletinPostScalarFieldEnum | BulletinPostScalarFieldEnum[]
  }

  /**
   * BulletinPost findFirstOrThrow
   */
  export type BulletinPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPost to fetch.
     */
    where?: BulletinPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPosts to fetch.
     */
    orderBy?: BulletinPostOrderByWithRelationInput | BulletinPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletinPosts.
     */
    cursor?: BulletinPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletinPosts.
     */
    distinct?: BulletinPostScalarFieldEnum | BulletinPostScalarFieldEnum[]
  }

  /**
   * BulletinPost findMany
   */
  export type BulletinPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * Filter, which BulletinPosts to fetch.
     */
    where?: BulletinPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletinPosts to fetch.
     */
    orderBy?: BulletinPostOrderByWithRelationInput | BulletinPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulletinPosts.
     */
    cursor?: BulletinPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletinPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletinPosts.
     */
    skip?: number
    distinct?: BulletinPostScalarFieldEnum | BulletinPostScalarFieldEnum[]
  }

  /**
   * BulletinPost create
   */
  export type BulletinPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BulletinPost.
     */
    data: XOR<BulletinPostCreateInput, BulletinPostUncheckedCreateInput>
  }

  /**
   * BulletinPost createMany
   */
  export type BulletinPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulletinPosts.
     */
    data: BulletinPostCreateManyInput | BulletinPostCreateManyInput[]
  }

  /**
   * BulletinPost createManyAndReturn
   */
  export type BulletinPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BulletinPosts.
     */
    data: BulletinPostCreateManyInput | BulletinPostCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BulletinPost update
   */
  export type BulletinPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BulletinPost.
     */
    data: XOR<BulletinPostUpdateInput, BulletinPostUncheckedUpdateInput>
    /**
     * Choose, which BulletinPost to update.
     */
    where: BulletinPostWhereUniqueInput
  }

  /**
   * BulletinPost updateMany
   */
  export type BulletinPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulletinPosts.
     */
    data: XOR<BulletinPostUpdateManyMutationInput, BulletinPostUncheckedUpdateManyInput>
    /**
     * Filter which BulletinPosts to update
     */
    where?: BulletinPostWhereInput
  }

  /**
   * BulletinPost upsert
   */
  export type BulletinPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BulletinPost to update in case it exists.
     */
    where: BulletinPostWhereUniqueInput
    /**
     * In case the BulletinPost found by the `where` argument doesn't exist, create a new BulletinPost with this data.
     */
    create: XOR<BulletinPostCreateInput, BulletinPostUncheckedCreateInput>
    /**
     * In case the BulletinPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletinPostUpdateInput, BulletinPostUncheckedUpdateInput>
  }

  /**
   * BulletinPost delete
   */
  export type BulletinPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
    /**
     * Filter which BulletinPost to delete.
     */
    where: BulletinPostWhereUniqueInput
  }

  /**
   * BulletinPost deleteMany
   */
  export type BulletinPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletinPosts to delete
     */
    where?: BulletinPostWhereInput
  }

  /**
   * BulletinPost.user
   */
  export type BulletinPost$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BulletinPost without action
   */
  export type BulletinPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletinPost
     */
    select?: BulletinPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletinPostInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    duration: number | null
  }

  export type ExamSumAggregateOutputType = {
    duration: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    content: string | null
    location: string | null
    duration: number | null
    courseId: string | null
    createdAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    content: string | null
    location: string | null
    duration: number | null
    courseId: string | null
    createdAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    date: number
    content: number
    location: number
    duration: number
    courseId: number
    createdAt: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    duration?: true
  }

  export type ExamSumAggregateInputType = {
    duration?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    content?: true
    location?: true
    duration?: true
    courseId?: true
    createdAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    content?: true
    location?: true
    duration?: true
    courseId?: true
    createdAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    content?: true
    location?: true
    duration?: true
    courseId?: true
    createdAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    date: Date
    content: string
    location: string
    duration: number
    courseId: string | null
    createdAt: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    content?: boolean
    location?: boolean
    duration?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | Exam$courseArgs<ExtArgs>
    grades?: boolean | Exam$gradesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    content?: boolean
    location?: boolean
    duration?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | Exam$courseArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    content?: boolean
    location?: boolean
    duration?: boolean
    courseId?: boolean
    createdAt?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Exam$courseArgs<ExtArgs>
    grades?: boolean | Exam$gradesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Exam$courseArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs> | null
      grades: Prisma.$GradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: Date
      content: string
      location: string
      duration: number
      courseId: string | null
      createdAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends Exam$courseArgs<ExtArgs> = {}>(args?: Subset<T, Exam$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    grades<T extends Exam$gradesArgs<ExtArgs> = {}>(args?: Subset<T, Exam$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly date: FieldRef<"Exam", 'DateTime'>
    readonly content: FieldRef<"Exam", 'String'>
    readonly location: FieldRef<"Exam", 'String'>
    readonly duration: FieldRef<"Exam", 'Int'>
    readonly courseId: FieldRef<"Exam", 'String'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }

  /**
   * Exam.course
   */
  export type Exam$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Exam.grades
   */
  export type Exam$gradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    message: string | null
    category: string | null
    status: string | null
    answer: string | null
    createdAt: Date | null
    answeredAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    message: string | null
    category: string | null
    status: string | null
    answer: string | null
    createdAt: Date | null
    answeredAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    userId: number
    subject: number
    message: number
    category: number
    status: number
    answer: number
    createdAt: number
    answeredAt: number
    _all: number
  }


  export type InquiryMinAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    message?: true
    category?: true
    status?: true
    answer?: true
    createdAt?: true
    answeredAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    message?: true
    category?: true
    status?: true
    answer?: true
    createdAt?: true
    answeredAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    message?: true
    category?: true
    status?: true
    answer?: true
    createdAt?: true
    answeredAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: string
    userId: string
    subject: string
    message: string
    category: string
    status: string
    answer: string | null
    createdAt: Date
    answeredAt: Date | null
    _count: InquiryCountAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    category?: boolean
    status?: boolean
    answer?: boolean
    createdAt?: boolean
    answeredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    category?: boolean
    status?: boolean
    answer?: boolean
    createdAt?: boolean
    answeredAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inquiry"]>

  export type InquirySelectScalar = {
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    category?: boolean
    status?: boolean
    answer?: boolean
    createdAt?: boolean
    answeredAt?: boolean
  }

  export type InquiryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InquiryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subject: string
      message: string
      category: string
      status: string
      answer: string | null
      createdAt: Date
      answeredAt: Date | null
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inquiries and returns the data saved in the database.
     * @param {InquiryCreateManyAndReturnArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inquiries and only return the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, InquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
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
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inquiry model
   */ 
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'String'>
    readonly userId: FieldRef<"Inquiry", 'String'>
    readonly subject: FieldRef<"Inquiry", 'String'>
    readonly message: FieldRef<"Inquiry", 'String'>
    readonly category: FieldRef<"Inquiry", 'String'>
    readonly status: FieldRef<"Inquiry", 'String'>
    readonly answer: FieldRef<"Inquiry", 'String'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly answeredAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
  }

  /**
   * Inquiry createManyAndReturn
   */
  export type InquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InquiryInclude<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    value: number | null
  }

  export type GradeSumAggregateOutputType = {
    value: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    examId: string | null
    subject: string | null
    value: number | null
    date: Date | null
  }

  export type GradeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    examId: string | null
    subject: string | null
    value: number | null
    date: Date | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    userId: number
    examId: number
    subject: number
    value: number
    date: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    value?: true
  }

  export type GradeSumAggregateInputType = {
    value?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    userId?: true
    examId?: true
    subject?: true
    value?: true
    date?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    userId?: true
    examId?: true
    subject?: true
    value?: true
    date?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    userId?: true
    examId?: true
    subject?: true
    value?: true
    date?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: string
    userId: string
    examId: string | null
    subject: string
    value: number
    date: Date
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examId?: boolean
    subject?: boolean
    value?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | Grade$examArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examId?: boolean
    subject?: boolean
    value?: boolean
    date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | Grade$examArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectScalar = {
    id?: boolean
    userId?: boolean
    examId?: boolean
    subject?: boolean
    value?: boolean
    date?: boolean
  }

  export type GradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | Grade$examArgs<ExtArgs>
  }
  export type GradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | Grade$examArgs<ExtArgs>
  }

  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      examId: string | null
      subject: string
      value: number
      date: Date
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {GradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
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
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exam<T extends Grade$examArgs<ExtArgs> = {}>(args?: Subset<T, Grade$examArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grade model
   */ 
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'String'>
    readonly userId: FieldRef<"Grade", 'String'>
    readonly examId: FieldRef<"Grade", 'String'>
    readonly subject: FieldRef<"Grade", 'String'>
    readonly value: FieldRef<"Grade", 'Float'>
    readonly date: FieldRef<"Grade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
  }

  /**
   * Grade createManyAndReturn
   */
  export type GradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
  }

  /**
   * Grade.exam
   */
  export type Grade$examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSkill
   */

  export type AggregateTeacherSkill = {
    _count: TeacherSkillCountAggregateOutputType | null
    _min: TeacherSkillMinAggregateOutputType | null
    _max: TeacherSkillMaxAggregateOutputType | null
  }

  export type TeacherSkillMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    isActive: boolean | null
  }

  export type TeacherSkillMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    isActive: boolean | null
  }

  export type TeacherSkillCountAggregateOutputType = {
    id: number
    userId: number
    subject: number
    isActive: number
    _all: number
  }


  export type TeacherSkillMinAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    isActive?: true
  }

  export type TeacherSkillMaxAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    isActive?: true
  }

  export type TeacherSkillCountAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    isActive?: true
    _all?: true
  }

  export type TeacherSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSkill to aggregate.
     */
    where?: TeacherSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSkills to fetch.
     */
    orderBy?: TeacherSkillOrderByWithRelationInput | TeacherSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSkills
    **/
    _count?: true | TeacherSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSkillMaxAggregateInputType
  }

  export type GetTeacherSkillAggregateType<T extends TeacherSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSkill[P]>
      : GetScalarType<T[P], AggregateTeacherSkill[P]>
  }




  export type TeacherSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSkillWhereInput
    orderBy?: TeacherSkillOrderByWithAggregationInput | TeacherSkillOrderByWithAggregationInput[]
    by: TeacherSkillScalarFieldEnum[] | TeacherSkillScalarFieldEnum
    having?: TeacherSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSkillCountAggregateInputType | true
    _min?: TeacherSkillMinAggregateInputType
    _max?: TeacherSkillMaxAggregateInputType
  }

  export type TeacherSkillGroupByOutputType = {
    id: string
    userId: string
    subject: string
    isActive: boolean
    _count: TeacherSkillCountAggregateOutputType | null
    _min: TeacherSkillMinAggregateOutputType | null
    _max: TeacherSkillMaxAggregateOutputType | null
  }

  type GetTeacherSkillGroupByPayload<T extends TeacherSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSkillGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSkillGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSkill"]>

  export type TeacherSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSkill"]>

  export type TeacherSkillSelectScalar = {
    id?: boolean
    userId?: boolean
    subject?: boolean
    isActive?: boolean
  }

  export type TeacherSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSkill"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subject: string
      isActive: boolean
    }, ExtArgs["result"]["teacherSkill"]>
    composites: {}
  }

  type TeacherSkillGetPayload<S extends boolean | null | undefined | TeacherSkillDefaultArgs> = $Result.GetResult<Prisma.$TeacherSkillPayload, S>

  type TeacherSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeacherSkillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeacherSkillCountAggregateInputType | true
    }

  export interface TeacherSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSkill'], meta: { name: 'TeacherSkill' } }
    /**
     * Find zero or one TeacherSkill that matches the filter.
     * @param {TeacherSkillFindUniqueArgs} args - Arguments to find a TeacherSkill
     * @example
     * // Get one TeacherSkill
     * const teacherSkill = await prisma.teacherSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSkillFindUniqueArgs>(args: SelectSubset<T, TeacherSkillFindUniqueArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TeacherSkill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeacherSkillFindUniqueOrThrowArgs} args - Arguments to find a TeacherSkill
     * @example
     * // Get one TeacherSkill
     * const teacherSkill = await prisma.teacherSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TeacherSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillFindFirstArgs} args - Arguments to find a TeacherSkill
     * @example
     * // Get one TeacherSkill
     * const teacherSkill = await prisma.teacherSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSkillFindFirstArgs>(args?: SelectSubset<T, TeacherSkillFindFirstArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TeacherSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillFindFirstOrThrowArgs} args - Arguments to find a TeacherSkill
     * @example
     * // Get one TeacherSkill
     * const teacherSkill = await prisma.teacherSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TeacherSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSkills
     * const teacherSkills = await prisma.teacherSkill.findMany()
     * 
     * // Get first 10 TeacherSkills
     * const teacherSkills = await prisma.teacherSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherSkillWithIdOnly = await prisma.teacherSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherSkillFindManyArgs>(args?: SelectSubset<T, TeacherSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TeacherSkill.
     * @param {TeacherSkillCreateArgs} args - Arguments to create a TeacherSkill.
     * @example
     * // Create one TeacherSkill
     * const TeacherSkill = await prisma.teacherSkill.create({
     *   data: {
     *     // ... data to create a TeacherSkill
     *   }
     * })
     * 
     */
    create<T extends TeacherSkillCreateArgs>(args: SelectSubset<T, TeacherSkillCreateArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TeacherSkills.
     * @param {TeacherSkillCreateManyArgs} args - Arguments to create many TeacherSkills.
     * @example
     * // Create many TeacherSkills
     * const teacherSkill = await prisma.teacherSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSkillCreateManyArgs>(args?: SelectSubset<T, TeacherSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSkills and returns the data saved in the database.
     * @param {TeacherSkillCreateManyAndReturnArgs} args - Arguments to create many TeacherSkills.
     * @example
     * // Create many TeacherSkills
     * const teacherSkill = await prisma.teacherSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSkills and only return the `id`
     * const teacherSkillWithIdOnly = await prisma.teacherSkill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TeacherSkill.
     * @param {TeacherSkillDeleteArgs} args - Arguments to delete one TeacherSkill.
     * @example
     * // Delete one TeacherSkill
     * const TeacherSkill = await prisma.teacherSkill.delete({
     *   where: {
     *     // ... filter to delete one TeacherSkill
     *   }
     * })
     * 
     */
    delete<T extends TeacherSkillDeleteArgs>(args: SelectSubset<T, TeacherSkillDeleteArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TeacherSkill.
     * @param {TeacherSkillUpdateArgs} args - Arguments to update one TeacherSkill.
     * @example
     * // Update one TeacherSkill
     * const teacherSkill = await prisma.teacherSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSkillUpdateArgs>(args: SelectSubset<T, TeacherSkillUpdateArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TeacherSkills.
     * @param {TeacherSkillDeleteManyArgs} args - Arguments to filter TeacherSkills to delete.
     * @example
     * // Delete a few TeacherSkills
     * const { count } = await prisma.teacherSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSkillDeleteManyArgs>(args?: SelectSubset<T, TeacherSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSkills
     * const teacherSkill = await prisma.teacherSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSkillUpdateManyArgs>(args: SelectSubset<T, TeacherSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeacherSkill.
     * @param {TeacherSkillUpsertArgs} args - Arguments to update or create a TeacherSkill.
     * @example
     * // Update or create a TeacherSkill
     * const teacherSkill = await prisma.teacherSkill.upsert({
     *   create: {
     *     // ... data to create a TeacherSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSkill we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSkillUpsertArgs>(args: SelectSubset<T, TeacherSkillUpsertArgs<ExtArgs>>): Prisma__TeacherSkillClient<$Result.GetResult<Prisma.$TeacherSkillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TeacherSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillCountArgs} args - Arguments to filter TeacherSkills to count.
     * @example
     * // Count the number of TeacherSkills
     * const count = await prisma.teacherSkill.count({
     *   where: {
     *     // ... the filter for the TeacherSkills we want to count
     *   }
     * })
    **/
    count<T extends TeacherSkillCountArgs>(
      args?: Subset<T, TeacherSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherSkillAggregateArgs>(args: Subset<T, TeacherSkillAggregateArgs>): Prisma.PrismaPromise<GetTeacherSkillAggregateType<T>>

    /**
     * Group by TeacherSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSkillGroupByArgs} args - Group by arguments.
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
      T extends TeacherSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSkillGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TeacherSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSkill model
   */
  readonly fields: TeacherSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherSkill model
   */ 
  interface TeacherSkillFieldRefs {
    readonly id: FieldRef<"TeacherSkill", 'String'>
    readonly userId: FieldRef<"TeacherSkill", 'String'>
    readonly subject: FieldRef<"TeacherSkill", 'String'>
    readonly isActive: FieldRef<"TeacherSkill", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSkill findUnique
   */
  export type TeacherSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSkill to fetch.
     */
    where: TeacherSkillWhereUniqueInput
  }

  /**
   * TeacherSkill findUniqueOrThrow
   */
  export type TeacherSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSkill to fetch.
     */
    where: TeacherSkillWhereUniqueInput
  }

  /**
   * TeacherSkill findFirst
   */
  export type TeacherSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSkill to fetch.
     */
    where?: TeacherSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSkills to fetch.
     */
    orderBy?: TeacherSkillOrderByWithRelationInput | TeacherSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSkills.
     */
    cursor?: TeacherSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSkills.
     */
    distinct?: TeacherSkillScalarFieldEnum | TeacherSkillScalarFieldEnum[]
  }

  /**
   * TeacherSkill findFirstOrThrow
   */
  export type TeacherSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSkill to fetch.
     */
    where?: TeacherSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSkills to fetch.
     */
    orderBy?: TeacherSkillOrderByWithRelationInput | TeacherSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSkills.
     */
    cursor?: TeacherSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSkills.
     */
    distinct?: TeacherSkillScalarFieldEnum | TeacherSkillScalarFieldEnum[]
  }

  /**
   * TeacherSkill findMany
   */
  export type TeacherSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSkills to fetch.
     */
    where?: TeacherSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSkills to fetch.
     */
    orderBy?: TeacherSkillOrderByWithRelationInput | TeacherSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSkills.
     */
    cursor?: TeacherSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSkills.
     */
    skip?: number
    distinct?: TeacherSkillScalarFieldEnum | TeacherSkillScalarFieldEnum[]
  }

  /**
   * TeacherSkill create
   */
  export type TeacherSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSkill.
     */
    data: XOR<TeacherSkillCreateInput, TeacherSkillUncheckedCreateInput>
  }

  /**
   * TeacherSkill createMany
   */
  export type TeacherSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSkills.
     */
    data: TeacherSkillCreateManyInput | TeacherSkillCreateManyInput[]
  }

  /**
   * TeacherSkill createManyAndReturn
   */
  export type TeacherSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TeacherSkills.
     */
    data: TeacherSkillCreateManyInput | TeacherSkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSkill update
   */
  export type TeacherSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSkill.
     */
    data: XOR<TeacherSkillUpdateInput, TeacherSkillUncheckedUpdateInput>
    /**
     * Choose, which TeacherSkill to update.
     */
    where: TeacherSkillWhereUniqueInput
  }

  /**
   * TeacherSkill updateMany
   */
  export type TeacherSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSkills.
     */
    data: XOR<TeacherSkillUpdateManyMutationInput, TeacherSkillUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSkills to update
     */
    where?: TeacherSkillWhereInput
  }

  /**
   * TeacherSkill upsert
   */
  export type TeacherSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSkill to update in case it exists.
     */
    where: TeacherSkillWhereUniqueInput
    /**
     * In case the TeacherSkill found by the `where` argument doesn't exist, create a new TeacherSkill with this data.
     */
    create: XOR<TeacherSkillCreateInput, TeacherSkillUncheckedCreateInput>
    /**
     * In case the TeacherSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSkillUpdateInput, TeacherSkillUncheckedUpdateInput>
  }

  /**
   * TeacherSkill delete
   */
  export type TeacherSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
    /**
     * Filter which TeacherSkill to delete.
     */
    where: TeacherSkillWhereUniqueInput
  }

  /**
   * TeacherSkill deleteMany
   */
  export type TeacherSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSkills to delete
     */
    where?: TeacherSkillWhereInput
  }

  /**
   * TeacherSkill without action
   */
  export type TeacherSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSkill
     */
    select?: TeacherSkillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSkillInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    department: 'department',
    measureNumber: 'measureNumber',
    educationTrackId: 'educationTrackId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EducationTrackScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type EducationTrackScalarFieldEnum = (typeof EducationTrackScalarFieldEnum)[keyof typeof EducationTrackScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    educationTrackId: 'educationTrackId',
    maxStudents: 'maxStudents',
    createdAt: 'createdAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseTopicScalarFieldEnum: {
    id: 'id',
    title: 'title',
    durationUnits: 'durationUnits',
    startDate: 'startDate',
    endDate: 'endDate',
    courseId: 'courseId',
    createdAt: 'createdAt'
  };

  export type CourseTopicScalarFieldEnum = (typeof CourseTopicScalarFieldEnum)[keyof typeof CourseTopicScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    createdAt: 'createdAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const TimeEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    clockIn: 'clockIn',
    clockOut: 'clockOut',
    duration: 'duration',
    location: 'location',
    createdAt: 'createdAt'
  };

  export type TimeEntryScalarFieldEnum = (typeof TimeEntryScalarFieldEnum)[keyof typeof TimeEntryScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    author: 'author',
    published: 'published',
    createdAt: 'createdAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const CourseEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startTime: 'startTime',
    endTime: 'endTime',
    roomId: 'roomId',
    instructor: 'instructor',
    createdAt: 'createdAt'
  };

  export type CourseEventScalarFieldEnum = (typeof CourseEventScalarFieldEnum)[keyof typeof CourseEventScalarFieldEnum]


  export const BulletinPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    contactInfo: 'contactInfo',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type BulletinPostScalarFieldEnum = (typeof BulletinPostScalarFieldEnum)[keyof typeof BulletinPostScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    content: 'content',
    location: 'location',
    duration: 'duration',
    courseId: 'courseId',
    createdAt: 'createdAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    message: 'message',
    category: 'category',
    status: 'status',
    answer: 'answer',
    createdAt: 'createdAt',
    answeredAt: 'answeredAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    examId: 'examId',
    subject: 'subject',
    value: 'value',
    date: 'date'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const TeacherSkillScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    isActive: 'isActive'
  };

  export type TeacherSkillScalarFieldEnum = (typeof TeacherSkillScalarFieldEnum)[keyof typeof TeacherSkillScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    measureNumber?: StringNullableFilter<"User"> | string | null
    educationTrackId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    educationTrack?: XOR<EducationTrackNullableRelationFilter, EducationTrackWhereInput> | null
    timeEntries?: TimeEntryListRelationFilter
    posts?: BulletinPostListRelationFilter
    inquiries?: InquiryListRelationFilter
    grades?: GradeListRelationFilter
    teacherSkills?: TeacherSkillListRelationFilter
    coursesAsStudent?: CourseListRelationFilter
    coursesAsTeacher?: CourseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    measureNumber?: SortOrderInput | SortOrder
    educationTrackId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    educationTrack?: EducationTrackOrderByWithRelationInput
    timeEntries?: TimeEntryOrderByRelationAggregateInput
    posts?: BulletinPostOrderByRelationAggregateInput
    inquiries?: InquiryOrderByRelationAggregateInput
    grades?: GradeOrderByRelationAggregateInput
    teacherSkills?: TeacherSkillOrderByRelationAggregateInput
    coursesAsStudent?: CourseOrderByRelationAggregateInput
    coursesAsTeacher?: CourseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    measureNumber?: StringNullableFilter<"User"> | string | null
    educationTrackId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    educationTrack?: XOR<EducationTrackNullableRelationFilter, EducationTrackWhereInput> | null
    timeEntries?: TimeEntryListRelationFilter
    posts?: BulletinPostListRelationFilter
    inquiries?: InquiryListRelationFilter
    grades?: GradeListRelationFilter
    teacherSkills?: TeacherSkillListRelationFilter
    coursesAsStudent?: CourseListRelationFilter
    coursesAsTeacher?: CourseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrderInput | SortOrder
    measureNumber?: SortOrderInput | SortOrder
    educationTrackId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    measureNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    educationTrackId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EducationTrackWhereInput = {
    AND?: EducationTrackWhereInput | EducationTrackWhereInput[]
    OR?: EducationTrackWhereInput[]
    NOT?: EducationTrackWhereInput | EducationTrackWhereInput[]
    id?: StringFilter<"EducationTrack"> | string
    title?: StringFilter<"EducationTrack"> | string
    startDate?: DateTimeFilter<"EducationTrack"> | Date | string
    endDate?: DateTimeFilter<"EducationTrack"> | Date | string
    createdAt?: DateTimeFilter<"EducationTrack"> | Date | string
    users?: UserListRelationFilter
    courses?: CourseListRelationFilter
  }

  export type EducationTrackOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type EducationTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationTrackWhereInput | EducationTrackWhereInput[]
    OR?: EducationTrackWhereInput[]
    NOT?: EducationTrackWhereInput | EducationTrackWhereInput[]
    title?: StringFilter<"EducationTrack"> | string
    startDate?: DateTimeFilter<"EducationTrack"> | Date | string
    endDate?: DateTimeFilter<"EducationTrack"> | Date | string
    createdAt?: DateTimeFilter<"EducationTrack"> | Date | string
    users?: UserListRelationFilter
    courses?: CourseListRelationFilter
  }, "id">

  export type EducationTrackOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: EducationTrackCountOrderByAggregateInput
    _max?: EducationTrackMaxOrderByAggregateInput
    _min?: EducationTrackMinOrderByAggregateInput
  }

  export type EducationTrackScalarWhereWithAggregatesInput = {
    AND?: EducationTrackScalarWhereWithAggregatesInput | EducationTrackScalarWhereWithAggregatesInput[]
    OR?: EducationTrackScalarWhereWithAggregatesInput[]
    NOT?: EducationTrackScalarWhereWithAggregatesInput | EducationTrackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EducationTrack"> | string
    title?: StringWithAggregatesFilter<"EducationTrack"> | string
    startDate?: DateTimeWithAggregatesFilter<"EducationTrack"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"EducationTrack"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EducationTrack"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    startDate?: DateTimeFilter<"Course"> | Date | string
    endDate?: DateTimeFilter<"Course"> | Date | string
    educationTrackId?: StringNullableFilter<"Course"> | string | null
    maxStudents?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    educationTrack?: XOR<EducationTrackNullableRelationFilter, EducationTrackWhereInput> | null
    students?: UserListRelationFilter
    teachers?: UserListRelationFilter
    exams?: ExamListRelationFilter
    topics?: CourseTopicListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    educationTrackId?: SortOrderInput | SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
    educationTrack?: EducationTrackOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
    teachers?: UserOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
    topics?: CourseTopicOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    startDate?: DateTimeFilter<"Course"> | Date | string
    endDate?: DateTimeFilter<"Course"> | Date | string
    educationTrackId?: StringNullableFilter<"Course"> | string | null
    maxStudents?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
    educationTrack?: XOR<EducationTrackNullableRelationFilter, EducationTrackWhereInput> | null
    students?: UserListRelationFilter
    teachers?: UserListRelationFilter
    exams?: ExamListRelationFilter
    topics?: CourseTopicListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    educationTrackId?: SortOrderInput | SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    educationTrackId?: StringNullableWithAggregatesFilter<"Course"> | string | null
    maxStudents?: IntWithAggregatesFilter<"Course"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type CourseTopicWhereInput = {
    AND?: CourseTopicWhereInput | CourseTopicWhereInput[]
    OR?: CourseTopicWhereInput[]
    NOT?: CourseTopicWhereInput | CourseTopicWhereInput[]
    id?: StringFilter<"CourseTopic"> | string
    title?: StringFilter<"CourseTopic"> | string
    durationUnits?: IntFilter<"CourseTopic"> | number
    startDate?: DateTimeFilter<"CourseTopic"> | Date | string
    endDate?: DateTimeFilter<"CourseTopic"> | Date | string
    courseId?: StringFilter<"CourseTopic"> | string
    createdAt?: DateTimeFilter<"CourseTopic"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type CourseTopicOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    durationUnits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseTopicWhereInput | CourseTopicWhereInput[]
    OR?: CourseTopicWhereInput[]
    NOT?: CourseTopicWhereInput | CourseTopicWhereInput[]
    title?: StringFilter<"CourseTopic"> | string
    durationUnits?: IntFilter<"CourseTopic"> | number
    startDate?: DateTimeFilter<"CourseTopic"> | Date | string
    endDate?: DateTimeFilter<"CourseTopic"> | Date | string
    courseId?: StringFilter<"CourseTopic"> | string
    createdAt?: DateTimeFilter<"CourseTopic"> | Date | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }, "id">

  export type CourseTopicOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    durationUnits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    _count?: CourseTopicCountOrderByAggregateInput
    _avg?: CourseTopicAvgOrderByAggregateInput
    _max?: CourseTopicMaxOrderByAggregateInput
    _min?: CourseTopicMinOrderByAggregateInput
    _sum?: CourseTopicSumOrderByAggregateInput
  }

  export type CourseTopicScalarWhereWithAggregatesInput = {
    AND?: CourseTopicScalarWhereWithAggregatesInput | CourseTopicScalarWhereWithAggregatesInput[]
    OR?: CourseTopicScalarWhereWithAggregatesInput[]
    NOT?: CourseTopicScalarWhereWithAggregatesInput | CourseTopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseTopic"> | string
    title?: StringWithAggregatesFilter<"CourseTopic"> | string
    durationUnits?: IntWithAggregatesFilter<"CourseTopic"> | number
    startDate?: DateTimeWithAggregatesFilter<"CourseTopic"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"CourseTopic"> | Date | string
    courseId?: StringWithAggregatesFilter<"CourseTopic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CourseTopic"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    events?: CourseEventListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    events?: CourseEventOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    createdAt?: DateTimeFilter<"Room"> | Date | string
    events?: CourseEventListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type TimeEntryWhereInput = {
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    id?: StringFilter<"TimeEntry"> | string
    userId?: StringFilter<"TimeEntry"> | string
    clockIn?: DateTimeFilter<"TimeEntry"> | Date | string
    clockOut?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableFilter<"TimeEntry"> | number | null
    location?: StringFilter<"TimeEntry"> | string
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimeEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimeEntryWhereInput | TimeEntryWhereInput[]
    OR?: TimeEntryWhereInput[]
    NOT?: TimeEntryWhereInput | TimeEntryWhereInput[]
    userId?: StringFilter<"TimeEntry"> | string
    clockIn?: DateTimeFilter<"TimeEntry"> | Date | string
    clockOut?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableFilter<"TimeEntry"> | number | null
    location?: StringFilter<"TimeEntry"> | string
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TimeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    _count?: TimeEntryCountOrderByAggregateInput
    _avg?: TimeEntryAvgOrderByAggregateInput
    _max?: TimeEntryMaxOrderByAggregateInput
    _min?: TimeEntryMinOrderByAggregateInput
    _sum?: TimeEntrySumOrderByAggregateInput
  }

  export type TimeEntryScalarWhereWithAggregatesInput = {
    AND?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    OR?: TimeEntryScalarWhereWithAggregatesInput[]
    NOT?: TimeEntryScalarWhereWithAggregatesInput | TimeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TimeEntry"> | string
    userId?: StringWithAggregatesFilter<"TimeEntry"> | string
    clockIn?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
    clockOut?: DateTimeNullableWithAggregatesFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"TimeEntry"> | number | null
    location?: StringWithAggregatesFilter<"TimeEntry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TimeEntry"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    author?: StringFilter<"Announcement"> | string
    published?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    author?: StringFilter<"Announcement"> | string
    published?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    author?: StringWithAggregatesFilter<"Announcement"> | string
    published?: BoolWithAggregatesFilter<"Announcement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type CourseEventWhereInput = {
    AND?: CourseEventWhereInput | CourseEventWhereInput[]
    OR?: CourseEventWhereInput[]
    NOT?: CourseEventWhereInput | CourseEventWhereInput[]
    id?: StringFilter<"CourseEvent"> | string
    title?: StringFilter<"CourseEvent"> | string
    description?: StringNullableFilter<"CourseEvent"> | string | null
    startTime?: DateTimeFilter<"CourseEvent"> | Date | string
    endTime?: DateTimeFilter<"CourseEvent"> | Date | string
    roomId?: StringNullableFilter<"CourseEvent"> | string | null
    instructor?: StringNullableFilter<"CourseEvent"> | string | null
    createdAt?: DateTimeFilter<"CourseEvent"> | Date | string
    room?: XOR<RoomNullableRelationFilter, RoomWhereInput> | null
  }

  export type CourseEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrderInput | SortOrder
    instructor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type CourseEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseEventWhereInput | CourseEventWhereInput[]
    OR?: CourseEventWhereInput[]
    NOT?: CourseEventWhereInput | CourseEventWhereInput[]
    title?: StringFilter<"CourseEvent"> | string
    description?: StringNullableFilter<"CourseEvent"> | string | null
    startTime?: DateTimeFilter<"CourseEvent"> | Date | string
    endTime?: DateTimeFilter<"CourseEvent"> | Date | string
    roomId?: StringNullableFilter<"CourseEvent"> | string | null
    instructor?: StringNullableFilter<"CourseEvent"> | string | null
    createdAt?: DateTimeFilter<"CourseEvent"> | Date | string
    room?: XOR<RoomNullableRelationFilter, RoomWhereInput> | null
  }, "id">

  export type CourseEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrderInput | SortOrder
    instructor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CourseEventCountOrderByAggregateInput
    _max?: CourseEventMaxOrderByAggregateInput
    _min?: CourseEventMinOrderByAggregateInput
  }

  export type CourseEventScalarWhereWithAggregatesInput = {
    AND?: CourseEventScalarWhereWithAggregatesInput | CourseEventScalarWhereWithAggregatesInput[]
    OR?: CourseEventScalarWhereWithAggregatesInput[]
    NOT?: CourseEventScalarWhereWithAggregatesInput | CourseEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseEvent"> | string
    title?: StringWithAggregatesFilter<"CourseEvent"> | string
    description?: StringNullableWithAggregatesFilter<"CourseEvent"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"CourseEvent"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"CourseEvent"> | Date | string
    roomId?: StringNullableWithAggregatesFilter<"CourseEvent"> | string | null
    instructor?: StringNullableWithAggregatesFilter<"CourseEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CourseEvent"> | Date | string
  }

  export type BulletinPostWhereInput = {
    AND?: BulletinPostWhereInput | BulletinPostWhereInput[]
    OR?: BulletinPostWhereInput[]
    NOT?: BulletinPostWhereInput | BulletinPostWhereInput[]
    id?: StringFilter<"BulletinPost"> | string
    title?: StringFilter<"BulletinPost"> | string
    description?: StringFilter<"BulletinPost"> | string
    type?: StringFilter<"BulletinPost"> | string
    contactInfo?: StringFilter<"BulletinPost"> | string
    userId?: StringNullableFilter<"BulletinPost"> | string | null
    createdAt?: DateTimeFilter<"BulletinPost"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type BulletinPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BulletinPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulletinPostWhereInput | BulletinPostWhereInput[]
    OR?: BulletinPostWhereInput[]
    NOT?: BulletinPostWhereInput | BulletinPostWhereInput[]
    title?: StringFilter<"BulletinPost"> | string
    description?: StringFilter<"BulletinPost"> | string
    type?: StringFilter<"BulletinPost"> | string
    contactInfo?: StringFilter<"BulletinPost"> | string
    userId?: StringNullableFilter<"BulletinPost"> | string | null
    createdAt?: DateTimeFilter<"BulletinPost"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type BulletinPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BulletinPostCountOrderByAggregateInput
    _max?: BulletinPostMaxOrderByAggregateInput
    _min?: BulletinPostMinOrderByAggregateInput
  }

  export type BulletinPostScalarWhereWithAggregatesInput = {
    AND?: BulletinPostScalarWhereWithAggregatesInput | BulletinPostScalarWhereWithAggregatesInput[]
    OR?: BulletinPostScalarWhereWithAggregatesInput[]
    NOT?: BulletinPostScalarWhereWithAggregatesInput | BulletinPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulletinPost"> | string
    title?: StringWithAggregatesFilter<"BulletinPost"> | string
    description?: StringWithAggregatesFilter<"BulletinPost"> | string
    type?: StringWithAggregatesFilter<"BulletinPost"> | string
    contactInfo?: StringWithAggregatesFilter<"BulletinPost"> | string
    userId?: StringNullableWithAggregatesFilter<"BulletinPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BulletinPost"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    date?: DateTimeFilter<"Exam"> | Date | string
    content?: StringFilter<"Exam"> | string
    location?: StringFilter<"Exam"> | string
    duration?: IntFilter<"Exam"> | number
    courseId?: StringNullableFilter<"Exam"> | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    course?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    grades?: GradeListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    content?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    grades?: GradeOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    date?: DateTimeFilter<"Exam"> | Date | string
    content?: StringFilter<"Exam"> | string
    location?: StringFilter<"Exam"> | string
    duration?: IntFilter<"Exam"> | number
    courseId?: StringNullableFilter<"Exam"> | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    course?: XOR<CourseNullableRelationFilter, CourseWhereInput> | null
    grades?: GradeListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    content?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    date?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    content?: StringWithAggregatesFilter<"Exam"> | string
    location?: StringWithAggregatesFilter<"Exam"> | string
    duration?: IntWithAggregatesFilter<"Exam"> | number
    courseId?: StringNullableWithAggregatesFilter<"Exam"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    userId?: StringFilter<"Inquiry"> | string
    subject?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    category?: StringFilter<"Inquiry"> | string
    status?: StringFilter<"Inquiry"> | string
    answer?: StringNullableFilter<"Inquiry"> | string | null
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    answeredAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    category?: SortOrder
    status?: SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    answeredAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    userId?: StringFilter<"Inquiry"> | string
    subject?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    category?: StringFilter<"Inquiry"> | string
    status?: StringFilter<"Inquiry"> | string
    answer?: StringNullableFilter<"Inquiry"> | string | null
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    answeredAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    category?: SortOrder
    status?: SortOrder
    answer?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    answeredAt?: SortOrderInput | SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inquiry"> | string
    userId?: StringWithAggregatesFilter<"Inquiry"> | string
    subject?: StringWithAggregatesFilter<"Inquiry"> | string
    message?: StringWithAggregatesFilter<"Inquiry"> | string
    category?: StringWithAggregatesFilter<"Inquiry"> | string
    status?: StringWithAggregatesFilter<"Inquiry"> | string
    answer?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    answeredAt?: DateTimeNullableWithAggregatesFilter<"Inquiry"> | Date | string | null
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: StringFilter<"Grade"> | string
    userId?: StringFilter<"Grade"> | string
    examId?: StringNullableFilter<"Grade"> | string | null
    subject?: StringFilter<"Grade"> | string
    value?: FloatFilter<"Grade"> | number
    date?: DateTimeFilter<"Grade"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    exam?: XOR<ExamNullableRelationFilter, ExamWhereInput> | null
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrderInput | SortOrder
    subject?: SortOrder
    value?: SortOrder
    date?: SortOrder
    user?: UserOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    userId?: StringFilter<"Grade"> | string
    examId?: StringNullableFilter<"Grade"> | string | null
    subject?: StringFilter<"Grade"> | string
    value?: FloatFilter<"Grade"> | number
    date?: DateTimeFilter<"Grade"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    exam?: XOR<ExamNullableRelationFilter, ExamWhereInput> | null
  }, "id">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrderInput | SortOrder
    subject?: SortOrder
    value?: SortOrder
    date?: SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grade"> | string
    userId?: StringWithAggregatesFilter<"Grade"> | string
    examId?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    subject?: StringWithAggregatesFilter<"Grade"> | string
    value?: FloatWithAggregatesFilter<"Grade"> | number
    date?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
  }

  export type TeacherSkillWhereInput = {
    AND?: TeacherSkillWhereInput | TeacherSkillWhereInput[]
    OR?: TeacherSkillWhereInput[]
    NOT?: TeacherSkillWhereInput | TeacherSkillWhereInput[]
    id?: StringFilter<"TeacherSkill"> | string
    userId?: StringFilter<"TeacherSkill"> | string
    subject?: StringFilter<"TeacherSkill"> | string
    isActive?: BoolFilter<"TeacherSkill"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TeacherSkillOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TeacherSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeacherSkillWhereInput | TeacherSkillWhereInput[]
    OR?: TeacherSkillWhereInput[]
    NOT?: TeacherSkillWhereInput | TeacherSkillWhereInput[]
    userId?: StringFilter<"TeacherSkill"> | string
    subject?: StringFilter<"TeacherSkill"> | string
    isActive?: BoolFilter<"TeacherSkill"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TeacherSkillOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    isActive?: SortOrder
    _count?: TeacherSkillCountOrderByAggregateInput
    _max?: TeacherSkillMaxOrderByAggregateInput
    _min?: TeacherSkillMinOrderByAggregateInput
  }

  export type TeacherSkillScalarWhereWithAggregatesInput = {
    AND?: TeacherSkillScalarWhereWithAggregatesInput | TeacherSkillScalarWhereWithAggregatesInput[]
    OR?: TeacherSkillScalarWhereWithAggregatesInput[]
    NOT?: TeacherSkillScalarWhereWithAggregatesInput | TeacherSkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeacherSkill"> | string
    userId?: StringWithAggregatesFilter<"TeacherSkill"> | string
    subject?: StringWithAggregatesFilter<"TeacherSkill"> | string
    isActive?: BoolWithAggregatesFilter<"TeacherSkill"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationTrackCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutEducationTrackInput
    courses?: CourseCreateNestedManyWithoutEducationTrackInput
  }

  export type EducationTrackUncheckedCreateInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEducationTrackInput
    courses?: CourseUncheckedCreateNestedManyWithoutEducationTrackInput
  }

  export type EducationTrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEducationTrackNestedInput
    courses?: CourseUpdateManyWithoutEducationTrackNestedInput
  }

  export type EducationTrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEducationTrackNestedInput
    courses?: CourseUncheckedUpdateManyWithoutEducationTrackNestedInput
  }

  export type EducationTrackCreateManyInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type EducationTrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationTrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutCoursesInput
    students?: UserCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    topics?: CourseTopicCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    educationTrackId?: string | null
    maxStudents?: number
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserUncheckedCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    topics?: CourseTopicUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutCoursesNestedInput
    students?: UserUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUncheckedUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    educationTrackId?: string | null
    maxStudents?: number
    createdAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTopicCreateInput = {
    id?: string
    title: string
    durationUnits: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutTopicsInput
  }

  export type CourseTopicUncheckedCreateInput = {
    id?: string
    title: string
    durationUnits: number
    startDate: Date | string
    endDate: Date | string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseTopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type CourseTopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTopicCreateManyInput = {
    id?: string
    title: string
    durationUnits: number
    startDate: Date | string
    endDate: Date | string
    courseId: string
    createdAt?: Date | string
  }

  export type CourseTopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    capacity?: number
    createdAt?: Date | string
    events?: CourseEventCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    capacity?: number
    createdAt?: Date | string
    events?: CourseEventUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: CourseEventUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: CourseEventUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    capacity?: number
    createdAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryCreateInput = {
    id?: string
    clockIn?: Date | string
    clockOut?: Date | string | null
    duration?: number | null
    location?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTimeEntriesInput
  }

  export type TimeEntryUncheckedCreateInput = {
    id?: string
    userId: string
    clockIn?: Date | string
    clockOut?: Date | string | null
    duration?: number | null
    location?: string
    createdAt?: Date | string
  }

  export type TimeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimeEntriesNestedInput
  }

  export type TimeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryCreateManyInput = {
    id?: string
    userId: string
    clockIn?: Date | string
    clockOut?: Date | string | null
    duration?: number | null
    location?: string
    createdAt?: Date | string
  }

  export type TimeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    id?: string
    title: string
    content: string
    author: string
    published?: boolean
    createdAt?: Date | string
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    author: string
    published?: boolean
    createdAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    title: string
    content: string
    author: string
    published?: boolean
    createdAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEventCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    instructor?: string | null
    createdAt?: Date | string
    room?: RoomCreateNestedOneWithoutEventsInput
  }

  export type CourseEventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    roomId?: string | null
    instructor?: string | null
    createdAt?: Date | string
  }

  export type CourseEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutEventsNestedInput
  }

  export type CourseEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    roomId?: string | null
    instructor?: string | null
    createdAt?: Date | string
  }

  export type CourseEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPostCreateInput = {
    id?: string
    title: string
    description: string
    type: string
    contactInfo: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutPostsInput
  }

  export type BulletinPostUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    type: string
    contactInfo: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type BulletinPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPostsNestedInput
  }

  export type BulletinPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPostCreateManyInput = {
    id?: string
    title: string
    description: string
    type: string
    contactInfo: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type BulletinPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    createdAt?: Date | string
    course?: CourseCreateNestedOneWithoutExamsInput
    grades?: GradeCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    courseId?: string | null
    createdAt?: Date | string
    grades?: GradeUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutExamsNestedInput
    grades?: GradeUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    courseId?: string | null
    createdAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryCreateInput = {
    id?: string
    subject: string
    message: string
    category: string
    status?: string
    answer?: string | null
    createdAt?: Date | string
    answeredAt?: Date | string | null
    user: UserCreateNestedOneWithoutInquiriesInput
  }

  export type InquiryUncheckedCreateInput = {
    id?: string
    userId: string
    subject: string
    message: string
    category: string
    status?: string
    answer?: string | null
    createdAt?: Date | string
    answeredAt?: Date | string | null
  }

  export type InquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutInquiriesNestedInput
  }

  export type InquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryCreateManyInput = {
    id?: string
    userId: string
    subject: string
    message: string
    category: string
    status?: string
    answer?: string | null
    createdAt?: Date | string
    answeredAt?: Date | string | null
  }

  export type InquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeCreateInput = {
    id?: string
    subject: string
    value: number
    date?: Date | string
    user: UserCreateNestedOneWithoutGradesInput
    exam?: ExamCreateNestedOneWithoutGradesInput
  }

  export type GradeUncheckedCreateInput = {
    id?: string
    userId: string
    examId?: string | null
    subject: string
    value: number
    date?: Date | string
  }

  export type GradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGradesNestedInput
    exam?: ExamUpdateOneWithoutGradesNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateManyInput = {
    id?: string
    userId: string
    examId?: string | null
    subject: string
    value: number
    date?: Date | string
  }

  export type GradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSkillCreateInput = {
    id?: string
    subject: string
    isActive?: boolean
    user: UserCreateNestedOneWithoutTeacherSkillsInput
  }

  export type TeacherSkillUncheckedCreateInput = {
    id?: string
    userId: string
    subject: string
    isActive?: boolean
  }

  export type TeacherSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeacherSkillsNestedInput
  }

  export type TeacherSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeacherSkillCreateManyInput = {
    id?: string
    userId: string
    subject: string
    isActive?: boolean
  }

  export type TeacherSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeacherSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EducationTrackNullableRelationFilter = {
    is?: EducationTrackWhereInput | null
    isNot?: EducationTrackWhereInput | null
  }

  export type TimeEntryListRelationFilter = {
    every?: TimeEntryWhereInput
    some?: TimeEntryWhereInput
    none?: TimeEntryWhereInput
  }

  export type BulletinPostListRelationFilter = {
    every?: BulletinPostWhereInput
    some?: BulletinPostWhereInput
    none?: BulletinPostWhereInput
  }

  export type InquiryListRelationFilter = {
    every?: InquiryWhereInput
    some?: InquiryWhereInput
    none?: InquiryWhereInput
  }

  export type GradeListRelationFilter = {
    every?: GradeWhereInput
    some?: GradeWhereInput
    none?: GradeWhereInput
  }

  export type TeacherSkillListRelationFilter = {
    every?: TeacherSkillWhereInput
    some?: TeacherSkillWhereInput
    none?: TeacherSkillWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TimeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BulletinPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InquiryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    measureNumber?: SortOrder
    educationTrackId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    measureNumber?: SortOrder
    educationTrackId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    department?: SortOrder
    measureNumber?: SortOrder
    educationTrackId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationTrackCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EducationTrackMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EducationTrackMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type CourseTopicListRelationFilter = {
    every?: CourseTopicWhereInput
    some?: CourseTopicWhereInput
    none?: CourseTopicWhereInput
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    educationTrackId?: SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    maxStudents?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    educationTrackId?: SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    educationTrackId?: SortOrder
    maxStudents?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    maxStudents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseTopicCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    durationUnits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseTopicAvgOrderByAggregateInput = {
    durationUnits?: SortOrder
  }

  export type CourseTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    durationUnits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseTopicMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    durationUnits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseTopicSumOrderByAggregateInput = {
    durationUnits?: SortOrder
  }

  export type CourseEventListRelationFilter = {
    every?: CourseEventWhereInput
    some?: CourseEventWhereInput
    none?: CourseEventWhereInput
  }

  export type CourseEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TimeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntryAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type TimeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    duration?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
  }

  export type TimeEntrySumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    author?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoomNullableRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type CourseEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    instructor?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    instructor?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    roomId?: SortOrder
    instructor?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BulletinPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BulletinPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BulletinPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contactInfo?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CourseNullableRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    content?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    content?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    content?: SortOrder
    location?: SortOrder
    duration?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    category?: SortOrder
    status?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    answeredAt?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    category?: SortOrder
    status?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    answeredAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    category?: SortOrder
    status?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    answeredAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExamNullableRelationFilter = {
    is?: ExamWhereInput | null
    isNot?: ExamWhereInput | null
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    subject?: SortOrder
    value?: SortOrder
    date?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    subject?: SortOrder
    value?: SortOrder
    date?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    subject?: SortOrder
    value?: SortOrder
    date?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TeacherSkillCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    isActive?: SortOrder
  }

  export type TeacherSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    isActive?: SortOrder
  }

  export type TeacherSkillMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    isActive?: SortOrder
  }

  export type EducationTrackCreateNestedOneWithoutUsersInput = {
    create?: XOR<EducationTrackCreateWithoutUsersInput, EducationTrackUncheckedCreateWithoutUsersInput>
    connectOrCreate?: EducationTrackCreateOrConnectWithoutUsersInput
    connect?: EducationTrackWhereUniqueInput
  }

  export type TimeEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type BulletinPostCreateNestedManyWithoutUserInput = {
    create?: XOR<BulletinPostCreateWithoutUserInput, BulletinPostUncheckedCreateWithoutUserInput> | BulletinPostCreateWithoutUserInput[] | BulletinPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BulletinPostCreateOrConnectWithoutUserInput | BulletinPostCreateOrConnectWithoutUserInput[]
    createMany?: BulletinPostCreateManyUserInputEnvelope
    connect?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
  }

  export type InquiryCreateNestedManyWithoutUserInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutUserInput = {
    create?: XOR<GradeCreateWithoutUserInput, GradeUncheckedCreateWithoutUserInput> | GradeCreateWithoutUserInput[] | GradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutUserInput | GradeCreateOrConnectWithoutUserInput[]
    createMany?: GradeCreateManyUserInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type TeacherSkillCreateNestedManyWithoutUserInput = {
    create?: XOR<TeacherSkillCreateWithoutUserInput, TeacherSkillUncheckedCreateWithoutUserInput> | TeacherSkillCreateWithoutUserInput[] | TeacherSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherSkillCreateOrConnectWithoutUserInput | TeacherSkillCreateOrConnectWithoutUserInput[]
    createMany?: TeacherSkillCreateManyUserInputEnvelope
    connect?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutTeachersInput = {
    create?: XOR<CourseCreateWithoutTeachersInput, CourseUncheckedCreateWithoutTeachersInput> | CourseCreateWithoutTeachersInput[] | CourseUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeachersInput | CourseCreateOrConnectWithoutTeachersInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type TimeEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
  }

  export type BulletinPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BulletinPostCreateWithoutUserInput, BulletinPostUncheckedCreateWithoutUserInput> | BulletinPostCreateWithoutUserInput[] | BulletinPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BulletinPostCreateOrConnectWithoutUserInput | BulletinPostCreateOrConnectWithoutUserInput[]
    createMany?: BulletinPostCreateManyUserInputEnvelope
    connect?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
  }

  export type InquiryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GradeCreateWithoutUserInput, GradeUncheckedCreateWithoutUserInput> | GradeCreateWithoutUserInput[] | GradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutUserInput | GradeCreateOrConnectWithoutUserInput[]
    createMany?: GradeCreateManyUserInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type TeacherSkillUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeacherSkillCreateWithoutUserInput, TeacherSkillUncheckedCreateWithoutUserInput> | TeacherSkillCreateWithoutUserInput[] | TeacherSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherSkillCreateOrConnectWithoutUserInput | TeacherSkillCreateOrConnectWithoutUserInput[]
    createMany?: TeacherSkillCreateManyUserInputEnvelope
    connect?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTeachersInput = {
    create?: XOR<CourseCreateWithoutTeachersInput, CourseUncheckedCreateWithoutTeachersInput> | CourseCreateWithoutTeachersInput[] | CourseUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeachersInput | CourseCreateOrConnectWithoutTeachersInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EducationTrackUpdateOneWithoutUsersNestedInput = {
    create?: XOR<EducationTrackCreateWithoutUsersInput, EducationTrackUncheckedCreateWithoutUsersInput>
    connectOrCreate?: EducationTrackCreateOrConnectWithoutUsersInput
    upsert?: EducationTrackUpsertWithoutUsersInput
    disconnect?: EducationTrackWhereInput | boolean
    delete?: EducationTrackWhereInput | boolean
    connect?: EducationTrackWhereUniqueInput
    update?: XOR<XOR<EducationTrackUpdateToOneWithWhereWithoutUsersInput, EducationTrackUpdateWithoutUsersInput>, EducationTrackUncheckedUpdateWithoutUsersInput>
  }

  export type TimeEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutUserInput | TimeEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutUserInput | TimeEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutUserInput | TimeEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type BulletinPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<BulletinPostCreateWithoutUserInput, BulletinPostUncheckedCreateWithoutUserInput> | BulletinPostCreateWithoutUserInput[] | BulletinPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BulletinPostCreateOrConnectWithoutUserInput | BulletinPostCreateOrConnectWithoutUserInput[]
    upsert?: BulletinPostUpsertWithWhereUniqueWithoutUserInput | BulletinPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BulletinPostCreateManyUserInputEnvelope
    set?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    disconnect?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    delete?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    connect?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    update?: BulletinPostUpdateWithWhereUniqueWithoutUserInput | BulletinPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BulletinPostUpdateManyWithWhereWithoutUserInput | BulletinPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BulletinPostScalarWhereInput | BulletinPostScalarWhereInput[]
  }

  export type InquiryUpdateManyWithoutUserNestedInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserInput | InquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserInput | InquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserInput | InquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutUserNestedInput = {
    create?: XOR<GradeCreateWithoutUserInput, GradeUncheckedCreateWithoutUserInput> | GradeCreateWithoutUserInput[] | GradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutUserInput | GradeCreateOrConnectWithoutUserInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutUserInput | GradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GradeCreateManyUserInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutUserInput | GradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutUserInput | GradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type TeacherSkillUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeacherSkillCreateWithoutUserInput, TeacherSkillUncheckedCreateWithoutUserInput> | TeacherSkillCreateWithoutUserInput[] | TeacherSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherSkillCreateOrConnectWithoutUserInput | TeacherSkillCreateOrConnectWithoutUserInput[]
    upsert?: TeacherSkillUpsertWithWhereUniqueWithoutUserInput | TeacherSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeacherSkillCreateManyUserInputEnvelope
    set?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    disconnect?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    delete?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    connect?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    update?: TeacherSkillUpdateWithWhereUniqueWithoutUserInput | TeacherSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeacherSkillUpdateManyWithWhereWithoutUserInput | TeacherSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeacherSkillScalarWhereInput | TeacherSkillScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsInput | CourseUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsInput | CourseUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsInput | CourseUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<CourseCreateWithoutTeachersInput, CourseUncheckedCreateWithoutTeachersInput> | CourseCreateWithoutTeachersInput[] | CourseUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeachersInput | CourseCreateOrConnectWithoutTeachersInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeachersInput | CourseUpsertWithWhereUniqueWithoutTeachersInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeachersInput | CourseUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeachersInput | CourseUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TimeEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput> | TimeEntryCreateWithoutUserInput[] | TimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeEntryCreateOrConnectWithoutUserInput | TimeEntryCreateOrConnectWithoutUserInput[]
    upsert?: TimeEntryUpsertWithWhereUniqueWithoutUserInput | TimeEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeEntryCreateManyUserInputEnvelope
    set?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    disconnect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    delete?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    connect?: TimeEntryWhereUniqueInput | TimeEntryWhereUniqueInput[]
    update?: TimeEntryUpdateWithWhereUniqueWithoutUserInput | TimeEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeEntryUpdateManyWithWhereWithoutUserInput | TimeEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
  }

  export type BulletinPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BulletinPostCreateWithoutUserInput, BulletinPostUncheckedCreateWithoutUserInput> | BulletinPostCreateWithoutUserInput[] | BulletinPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BulletinPostCreateOrConnectWithoutUserInput | BulletinPostCreateOrConnectWithoutUserInput[]
    upsert?: BulletinPostUpsertWithWhereUniqueWithoutUserInput | BulletinPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BulletinPostCreateManyUserInputEnvelope
    set?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    disconnect?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    delete?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    connect?: BulletinPostWhereUniqueInput | BulletinPostWhereUniqueInput[]
    update?: BulletinPostUpdateWithWhereUniqueWithoutUserInput | BulletinPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BulletinPostUpdateManyWithWhereWithoutUserInput | BulletinPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BulletinPostScalarWhereInput | BulletinPostScalarWhereInput[]
  }

  export type InquiryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput> | InquiryCreateWithoutUserInput[] | InquiryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InquiryCreateOrConnectWithoutUserInput | InquiryCreateOrConnectWithoutUserInput[]
    upsert?: InquiryUpsertWithWhereUniqueWithoutUserInput | InquiryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InquiryCreateManyUserInputEnvelope
    set?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    disconnect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    delete?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    connect?: InquiryWhereUniqueInput | InquiryWhereUniqueInput[]
    update?: InquiryUpdateWithWhereUniqueWithoutUserInput | InquiryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InquiryUpdateManyWithWhereWithoutUserInput | InquiryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GradeCreateWithoutUserInput, GradeUncheckedCreateWithoutUserInput> | GradeCreateWithoutUserInput[] | GradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutUserInput | GradeCreateOrConnectWithoutUserInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutUserInput | GradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GradeCreateManyUserInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutUserInput | GradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutUserInput | GradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type TeacherSkillUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeacherSkillCreateWithoutUserInput, TeacherSkillUncheckedCreateWithoutUserInput> | TeacherSkillCreateWithoutUserInput[] | TeacherSkillUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeacherSkillCreateOrConnectWithoutUserInput | TeacherSkillCreateOrConnectWithoutUserInput[]
    upsert?: TeacherSkillUpsertWithWhereUniqueWithoutUserInput | TeacherSkillUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeacherSkillCreateManyUserInputEnvelope
    set?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    disconnect?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    delete?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    connect?: TeacherSkillWhereUniqueInput | TeacherSkillWhereUniqueInput[]
    update?: TeacherSkillUpdateWithWhereUniqueWithoutUserInput | TeacherSkillUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeacherSkillUpdateManyWithWhereWithoutUserInput | TeacherSkillUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeacherSkillScalarWhereInput | TeacherSkillScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput> | CourseCreateWithoutStudentsInput[] | CourseUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutStudentsInput | CourseCreateOrConnectWithoutStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutStudentsInput | CourseUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutStudentsInput | CourseUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutStudentsInput | CourseUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<CourseCreateWithoutTeachersInput, CourseUncheckedCreateWithoutTeachersInput> | CourseCreateWithoutTeachersInput[] | CourseUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeachersInput | CourseCreateOrConnectWithoutTeachersInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeachersInput | CourseUpsertWithWhereUniqueWithoutTeachersInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeachersInput | CourseUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeachersInput | CourseUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutEducationTrackInput = {
    create?: XOR<UserCreateWithoutEducationTrackInput, UserUncheckedCreateWithoutEducationTrackInput> | UserCreateWithoutEducationTrackInput[] | UserUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEducationTrackInput | UserCreateOrConnectWithoutEducationTrackInput[]
    createMany?: UserCreateManyEducationTrackInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutEducationTrackInput = {
    create?: XOR<CourseCreateWithoutEducationTrackInput, CourseUncheckedCreateWithoutEducationTrackInput> | CourseCreateWithoutEducationTrackInput[] | CourseUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEducationTrackInput | CourseCreateOrConnectWithoutEducationTrackInput[]
    createMany?: CourseCreateManyEducationTrackInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEducationTrackInput = {
    create?: XOR<UserCreateWithoutEducationTrackInput, UserUncheckedCreateWithoutEducationTrackInput> | UserCreateWithoutEducationTrackInput[] | UserUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEducationTrackInput | UserCreateOrConnectWithoutEducationTrackInput[]
    createMany?: UserCreateManyEducationTrackInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutEducationTrackInput = {
    create?: XOR<CourseCreateWithoutEducationTrackInput, CourseUncheckedCreateWithoutEducationTrackInput> | CourseCreateWithoutEducationTrackInput[] | CourseUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEducationTrackInput | CourseCreateOrConnectWithoutEducationTrackInput[]
    createMany?: CourseCreateManyEducationTrackInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutEducationTrackNestedInput = {
    create?: XOR<UserCreateWithoutEducationTrackInput, UserUncheckedCreateWithoutEducationTrackInput> | UserCreateWithoutEducationTrackInput[] | UserUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEducationTrackInput | UserCreateOrConnectWithoutEducationTrackInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEducationTrackInput | UserUpsertWithWhereUniqueWithoutEducationTrackInput[]
    createMany?: UserCreateManyEducationTrackInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEducationTrackInput | UserUpdateWithWhereUniqueWithoutEducationTrackInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEducationTrackInput | UserUpdateManyWithWhereWithoutEducationTrackInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutEducationTrackNestedInput = {
    create?: XOR<CourseCreateWithoutEducationTrackInput, CourseUncheckedCreateWithoutEducationTrackInput> | CourseCreateWithoutEducationTrackInput[] | CourseUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEducationTrackInput | CourseCreateOrConnectWithoutEducationTrackInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutEducationTrackInput | CourseUpsertWithWhereUniqueWithoutEducationTrackInput[]
    createMany?: CourseCreateManyEducationTrackInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutEducationTrackInput | CourseUpdateWithWhereUniqueWithoutEducationTrackInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutEducationTrackInput | CourseUpdateManyWithWhereWithoutEducationTrackInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEducationTrackNestedInput = {
    create?: XOR<UserCreateWithoutEducationTrackInput, UserUncheckedCreateWithoutEducationTrackInput> | UserCreateWithoutEducationTrackInput[] | UserUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEducationTrackInput | UserCreateOrConnectWithoutEducationTrackInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEducationTrackInput | UserUpsertWithWhereUniqueWithoutEducationTrackInput[]
    createMany?: UserCreateManyEducationTrackInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEducationTrackInput | UserUpdateWithWhereUniqueWithoutEducationTrackInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEducationTrackInput | UserUpdateManyWithWhereWithoutEducationTrackInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutEducationTrackNestedInput = {
    create?: XOR<CourseCreateWithoutEducationTrackInput, CourseUncheckedCreateWithoutEducationTrackInput> | CourseCreateWithoutEducationTrackInput[] | CourseUncheckedCreateWithoutEducationTrackInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEducationTrackInput | CourseCreateOrConnectWithoutEducationTrackInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutEducationTrackInput | CourseUpsertWithWhereUniqueWithoutEducationTrackInput[]
    createMany?: CourseCreateManyEducationTrackInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutEducationTrackInput | CourseUpdateWithWhereUniqueWithoutEducationTrackInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutEducationTrackInput | CourseUpdateManyWithWhereWithoutEducationTrackInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EducationTrackCreateNestedOneWithoutCoursesInput = {
    create?: XOR<EducationTrackCreateWithoutCoursesInput, EducationTrackUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: EducationTrackCreateOrConnectWithoutCoursesInput
    connect?: EducationTrackWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCoursesAsStudentInput = {
    create?: XOR<UserCreateWithoutCoursesAsStudentInput, UserUncheckedCreateWithoutCoursesAsStudentInput> | UserCreateWithoutCoursesAsStudentInput[] | UserUncheckedCreateWithoutCoursesAsStudentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsStudentInput | UserCreateOrConnectWithoutCoursesAsStudentInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCoursesAsTeacherInput = {
    create?: XOR<UserCreateWithoutCoursesAsTeacherInput, UserUncheckedCreateWithoutCoursesAsTeacherInput> | UserCreateWithoutCoursesAsTeacherInput[] | UserUncheckedCreateWithoutCoursesAsTeacherInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsTeacherInput | UserCreateOrConnectWithoutCoursesAsTeacherInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type CourseTopicCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseTopicCreateWithoutCourseInput, CourseTopicUncheckedCreateWithoutCourseInput> | CourseTopicCreateWithoutCourseInput[] | CourseTopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTopicCreateOrConnectWithoutCourseInput | CourseTopicCreateOrConnectWithoutCourseInput[]
    createMany?: CourseTopicCreateManyCourseInputEnvelope
    connect?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoursesAsStudentInput = {
    create?: XOR<UserCreateWithoutCoursesAsStudentInput, UserUncheckedCreateWithoutCoursesAsStudentInput> | UserCreateWithoutCoursesAsStudentInput[] | UserUncheckedCreateWithoutCoursesAsStudentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsStudentInput | UserCreateOrConnectWithoutCoursesAsStudentInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCoursesAsTeacherInput = {
    create?: XOR<UserCreateWithoutCoursesAsTeacherInput, UserUncheckedCreateWithoutCoursesAsTeacherInput> | UserCreateWithoutCoursesAsTeacherInput[] | UserUncheckedCreateWithoutCoursesAsTeacherInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsTeacherInput | UserCreateOrConnectWithoutCoursesAsTeacherInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type CourseTopicUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseTopicCreateWithoutCourseInput, CourseTopicUncheckedCreateWithoutCourseInput> | CourseTopicCreateWithoutCourseInput[] | CourseTopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTopicCreateOrConnectWithoutCourseInput | CourseTopicCreateOrConnectWithoutCourseInput[]
    createMany?: CourseTopicCreateManyCourseInputEnvelope
    connect?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EducationTrackUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<EducationTrackCreateWithoutCoursesInput, EducationTrackUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: EducationTrackCreateOrConnectWithoutCoursesInput
    upsert?: EducationTrackUpsertWithoutCoursesInput
    disconnect?: EducationTrackWhereInput | boolean
    delete?: EducationTrackWhereInput | boolean
    connect?: EducationTrackWhereUniqueInput
    update?: XOR<XOR<EducationTrackUpdateToOneWithWhereWithoutCoursesInput, EducationTrackUpdateWithoutCoursesInput>, EducationTrackUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateManyWithoutCoursesAsStudentNestedInput = {
    create?: XOR<UserCreateWithoutCoursesAsStudentInput, UserUncheckedCreateWithoutCoursesAsStudentInput> | UserCreateWithoutCoursesAsStudentInput[] | UserUncheckedCreateWithoutCoursesAsStudentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsStudentInput | UserCreateOrConnectWithoutCoursesAsStudentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesAsStudentInput | UserUpsertWithWhereUniqueWithoutCoursesAsStudentInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesAsStudentInput | UserUpdateWithWhereUniqueWithoutCoursesAsStudentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesAsStudentInput | UserUpdateManyWithWhereWithoutCoursesAsStudentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCoursesAsTeacherNestedInput = {
    create?: XOR<UserCreateWithoutCoursesAsTeacherInput, UserUncheckedCreateWithoutCoursesAsTeacherInput> | UserCreateWithoutCoursesAsTeacherInput[] | UserUncheckedCreateWithoutCoursesAsTeacherInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsTeacherInput | UserCreateOrConnectWithoutCoursesAsTeacherInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesAsTeacherInput | UserUpsertWithWhereUniqueWithoutCoursesAsTeacherInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesAsTeacherInput | UserUpdateWithWhereUniqueWithoutCoursesAsTeacherInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesAsTeacherInput | UserUpdateManyWithWhereWithoutCoursesAsTeacherInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCourseInput | ExamUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCourseInput | ExamUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCourseInput | ExamUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type CourseTopicUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseTopicCreateWithoutCourseInput, CourseTopicUncheckedCreateWithoutCourseInput> | CourseTopicCreateWithoutCourseInput[] | CourseTopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTopicCreateOrConnectWithoutCourseInput | CourseTopicCreateOrConnectWithoutCourseInput[]
    upsert?: CourseTopicUpsertWithWhereUniqueWithoutCourseInput | CourseTopicUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseTopicCreateManyCourseInputEnvelope
    set?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    disconnect?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    delete?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    connect?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    update?: CourseTopicUpdateWithWhereUniqueWithoutCourseInput | CourseTopicUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseTopicUpdateManyWithWhereWithoutCourseInput | CourseTopicUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseTopicScalarWhereInput | CourseTopicScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoursesAsStudentNestedInput = {
    create?: XOR<UserCreateWithoutCoursesAsStudentInput, UserUncheckedCreateWithoutCoursesAsStudentInput> | UserCreateWithoutCoursesAsStudentInput[] | UserUncheckedCreateWithoutCoursesAsStudentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsStudentInput | UserCreateOrConnectWithoutCoursesAsStudentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesAsStudentInput | UserUpsertWithWhereUniqueWithoutCoursesAsStudentInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesAsStudentInput | UserUpdateWithWhereUniqueWithoutCoursesAsStudentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesAsStudentInput | UserUpdateManyWithWhereWithoutCoursesAsStudentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCoursesAsTeacherNestedInput = {
    create?: XOR<UserCreateWithoutCoursesAsTeacherInput, UserUncheckedCreateWithoutCoursesAsTeacherInput> | UserCreateWithoutCoursesAsTeacherInput[] | UserUncheckedCreateWithoutCoursesAsTeacherInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCoursesAsTeacherInput | UserCreateOrConnectWithoutCoursesAsTeacherInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCoursesAsTeacherInput | UserUpsertWithWhereUniqueWithoutCoursesAsTeacherInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCoursesAsTeacherInput | UserUpdateWithWhereUniqueWithoutCoursesAsTeacherInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCoursesAsTeacherInput | UserUpdateManyWithWhereWithoutCoursesAsTeacherInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput> | ExamCreateWithoutCourseInput[] | ExamUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCourseInput | ExamCreateOrConnectWithoutCourseInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCourseInput | ExamUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExamCreateManyCourseInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCourseInput | ExamUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCourseInput | ExamUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type CourseTopicUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseTopicCreateWithoutCourseInput, CourseTopicUncheckedCreateWithoutCourseInput> | CourseTopicCreateWithoutCourseInput[] | CourseTopicUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseTopicCreateOrConnectWithoutCourseInput | CourseTopicCreateOrConnectWithoutCourseInput[]
    upsert?: CourseTopicUpsertWithWhereUniqueWithoutCourseInput | CourseTopicUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseTopicCreateManyCourseInputEnvelope
    set?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    disconnect?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    delete?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    connect?: CourseTopicWhereUniqueInput | CourseTopicWhereUniqueInput[]
    update?: CourseTopicUpdateWithWhereUniqueWithoutCourseInput | CourseTopicUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseTopicUpdateManyWithWhereWithoutCourseInput | CourseTopicUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseTopicScalarWhereInput | CourseTopicScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutTopicsInput = {
    create?: XOR<CourseCreateWithoutTopicsInput, CourseUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTopicsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<CourseCreateWithoutTopicsInput, CourseUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTopicsInput
    upsert?: CourseUpsertWithoutTopicsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTopicsInput, CourseUpdateWithoutTopicsInput>, CourseUncheckedUpdateWithoutTopicsInput>
  }

  export type CourseEventCreateNestedManyWithoutRoomInput = {
    create?: XOR<CourseEventCreateWithoutRoomInput, CourseEventUncheckedCreateWithoutRoomInput> | CourseEventCreateWithoutRoomInput[] | CourseEventUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: CourseEventCreateOrConnectWithoutRoomInput | CourseEventCreateOrConnectWithoutRoomInput[]
    createMany?: CourseEventCreateManyRoomInputEnvelope
    connect?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
  }

  export type CourseEventUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<CourseEventCreateWithoutRoomInput, CourseEventUncheckedCreateWithoutRoomInput> | CourseEventCreateWithoutRoomInput[] | CourseEventUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: CourseEventCreateOrConnectWithoutRoomInput | CourseEventCreateOrConnectWithoutRoomInput[]
    createMany?: CourseEventCreateManyRoomInputEnvelope
    connect?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
  }

  export type CourseEventUpdateManyWithoutRoomNestedInput = {
    create?: XOR<CourseEventCreateWithoutRoomInput, CourseEventUncheckedCreateWithoutRoomInput> | CourseEventCreateWithoutRoomInput[] | CourseEventUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: CourseEventCreateOrConnectWithoutRoomInput | CourseEventCreateOrConnectWithoutRoomInput[]
    upsert?: CourseEventUpsertWithWhereUniqueWithoutRoomInput | CourseEventUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: CourseEventCreateManyRoomInputEnvelope
    set?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    disconnect?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    delete?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    connect?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    update?: CourseEventUpdateWithWhereUniqueWithoutRoomInput | CourseEventUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: CourseEventUpdateManyWithWhereWithoutRoomInput | CourseEventUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: CourseEventScalarWhereInput | CourseEventScalarWhereInput[]
  }

  export type CourseEventUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<CourseEventCreateWithoutRoomInput, CourseEventUncheckedCreateWithoutRoomInput> | CourseEventCreateWithoutRoomInput[] | CourseEventUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: CourseEventCreateOrConnectWithoutRoomInput | CourseEventCreateOrConnectWithoutRoomInput[]
    upsert?: CourseEventUpsertWithWhereUniqueWithoutRoomInput | CourseEventUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: CourseEventCreateManyRoomInputEnvelope
    set?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    disconnect?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    delete?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    connect?: CourseEventWhereUniqueInput | CourseEventWhereUniqueInput[]
    update?: CourseEventUpdateWithWhereUniqueWithoutRoomInput | CourseEventUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: CourseEventUpdateManyWithWhereWithoutRoomInput | CourseEventUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: CourseEventScalarWhereInput | CourseEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTimeEntriesInput = {
    create?: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTimeEntriesNestedInput = {
    create?: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeEntriesInput
    upsert?: UserUpsertWithoutTimeEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimeEntriesInput, UserUpdateWithoutTimeEntriesInput>, UserUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoomCreateNestedOneWithoutEventsInput = {
    create?: XOR<RoomCreateWithoutEventsInput, RoomUncheckedCreateWithoutEventsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutEventsInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneWithoutEventsNestedInput = {
    create?: XOR<RoomCreateWithoutEventsInput, RoomUncheckedCreateWithoutEventsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutEventsInput
    upsert?: RoomUpsertWithoutEventsInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutEventsInput, RoomUpdateWithoutEventsInput>, RoomUncheckedUpdateWithoutEventsInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CourseCreateNestedOneWithoutExamsInput = {
    create?: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamsInput
    connect?: CourseWhereUniqueInput
  }

  export type GradeCreateNestedManyWithoutExamInput = {
    create?: XOR<GradeCreateWithoutExamInput, GradeUncheckedCreateWithoutExamInput> | GradeCreateWithoutExamInput[] | GradeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutExamInput | GradeCreateOrConnectWithoutExamInput[]
    createMany?: GradeCreateManyExamInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<GradeCreateWithoutExamInput, GradeUncheckedCreateWithoutExamInput> | GradeCreateWithoutExamInput[] | GradeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutExamInput | GradeCreateOrConnectWithoutExamInput[]
    createMany?: GradeCreateManyExamInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type CourseUpdateOneWithoutExamsNestedInput = {
    create?: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamsInput
    upsert?: CourseUpsertWithoutExamsInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutExamsInput, CourseUpdateWithoutExamsInput>, CourseUncheckedUpdateWithoutExamsInput>
  }

  export type GradeUpdateManyWithoutExamNestedInput = {
    create?: XOR<GradeCreateWithoutExamInput, GradeUncheckedCreateWithoutExamInput> | GradeCreateWithoutExamInput[] | GradeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutExamInput | GradeCreateOrConnectWithoutExamInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutExamInput | GradeUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: GradeCreateManyExamInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutExamInput | GradeUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutExamInput | GradeUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<GradeCreateWithoutExamInput, GradeUncheckedCreateWithoutExamInput> | GradeCreateWithoutExamInput[] | GradeUncheckedCreateWithoutExamInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutExamInput | GradeCreateOrConnectWithoutExamInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutExamInput | GradeUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: GradeCreateManyExamInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutExamInput | GradeUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutExamInput | GradeUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInquiriesInput = {
    create?: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInquiriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInquiriesNestedInput = {
    create?: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInquiriesInput
    upsert?: UserUpsertWithoutInquiriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInquiriesInput, UserUpdateWithoutInquiriesInput>, UserUncheckedUpdateWithoutInquiriesInput>
  }

  export type UserCreateNestedOneWithoutGradesInput = {
    create?: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradesInput
    connect?: UserWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutGradesInput = {
    create?: XOR<ExamCreateWithoutGradesInput, ExamUncheckedCreateWithoutGradesInput>
    connectOrCreate?: ExamCreateOrConnectWithoutGradesInput
    connect?: ExamWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutGradesNestedInput = {
    create?: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradesInput
    upsert?: UserUpsertWithoutGradesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGradesInput, UserUpdateWithoutGradesInput>, UserUncheckedUpdateWithoutGradesInput>
  }

  export type ExamUpdateOneWithoutGradesNestedInput = {
    create?: XOR<ExamCreateWithoutGradesInput, ExamUncheckedCreateWithoutGradesInput>
    connectOrCreate?: ExamCreateOrConnectWithoutGradesInput
    upsert?: ExamUpsertWithoutGradesInput
    disconnect?: ExamWhereInput | boolean
    delete?: ExamWhereInput | boolean
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutGradesInput, ExamUpdateWithoutGradesInput>, ExamUncheckedUpdateWithoutGradesInput>
  }

  export type UserCreateNestedOneWithoutTeacherSkillsInput = {
    create?: XOR<UserCreateWithoutTeacherSkillsInput, UserUncheckedCreateWithoutTeacherSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherSkillsNestedInput = {
    create?: XOR<UserCreateWithoutTeacherSkillsInput, UserUncheckedCreateWithoutTeacherSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherSkillsInput
    upsert?: UserUpsertWithoutTeacherSkillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherSkillsInput, UserUpdateWithoutTeacherSkillsInput>, UserUncheckedUpdateWithoutTeacherSkillsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EducationTrackCreateWithoutUsersInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    courses?: CourseCreateNestedManyWithoutEducationTrackInput
  }

  export type EducationTrackUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutEducationTrackInput
  }

  export type EducationTrackCreateOrConnectWithoutUsersInput = {
    where: EducationTrackWhereUniqueInput
    create: XOR<EducationTrackCreateWithoutUsersInput, EducationTrackUncheckedCreateWithoutUsersInput>
  }

  export type TimeEntryCreateWithoutUserInput = {
    id?: string
    clockIn?: Date | string
    clockOut?: Date | string | null
    duration?: number | null
    location?: string
    createdAt?: Date | string
  }

  export type TimeEntryUncheckedCreateWithoutUserInput = {
    id?: string
    clockIn?: Date | string
    clockOut?: Date | string | null
    duration?: number | null
    location?: string
    createdAt?: Date | string
  }

  export type TimeEntryCreateOrConnectWithoutUserInput = {
    where: TimeEntryWhereUniqueInput
    create: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput>
  }

  export type TimeEntryCreateManyUserInputEnvelope = {
    data: TimeEntryCreateManyUserInput | TimeEntryCreateManyUserInput[]
  }

  export type BulletinPostCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: string
    contactInfo: string
    createdAt?: Date | string
  }

  export type BulletinPostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    type: string
    contactInfo: string
    createdAt?: Date | string
  }

  export type BulletinPostCreateOrConnectWithoutUserInput = {
    where: BulletinPostWhereUniqueInput
    create: XOR<BulletinPostCreateWithoutUserInput, BulletinPostUncheckedCreateWithoutUserInput>
  }

  export type BulletinPostCreateManyUserInputEnvelope = {
    data: BulletinPostCreateManyUserInput | BulletinPostCreateManyUserInput[]
  }

  export type InquiryCreateWithoutUserInput = {
    id?: string
    subject: string
    message: string
    category: string
    status?: string
    answer?: string | null
    createdAt?: Date | string
    answeredAt?: Date | string | null
  }

  export type InquiryUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    message: string
    category: string
    status?: string
    answer?: string | null
    createdAt?: Date | string
    answeredAt?: Date | string | null
  }

  export type InquiryCreateOrConnectWithoutUserInput = {
    where: InquiryWhereUniqueInput
    create: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput>
  }

  export type InquiryCreateManyUserInputEnvelope = {
    data: InquiryCreateManyUserInput | InquiryCreateManyUserInput[]
  }

  export type GradeCreateWithoutUserInput = {
    id?: string
    subject: string
    value: number
    date?: Date | string
    exam?: ExamCreateNestedOneWithoutGradesInput
  }

  export type GradeUncheckedCreateWithoutUserInput = {
    id?: string
    examId?: string | null
    subject: string
    value: number
    date?: Date | string
  }

  export type GradeCreateOrConnectWithoutUserInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutUserInput, GradeUncheckedCreateWithoutUserInput>
  }

  export type GradeCreateManyUserInputEnvelope = {
    data: GradeCreateManyUserInput | GradeCreateManyUserInput[]
  }

  export type TeacherSkillCreateWithoutUserInput = {
    id?: string
    subject: string
    isActive?: boolean
  }

  export type TeacherSkillUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    isActive?: boolean
  }

  export type TeacherSkillCreateOrConnectWithoutUserInput = {
    where: TeacherSkillWhereUniqueInput
    create: XOR<TeacherSkillCreateWithoutUserInput, TeacherSkillUncheckedCreateWithoutUserInput>
  }

  export type TeacherSkillCreateManyUserInputEnvelope = {
    data: TeacherSkillCreateManyUserInput | TeacherSkillCreateManyUserInput[]
  }

  export type CourseCreateWithoutStudentsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutCoursesInput
    teachers?: UserCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    topics?: CourseTopicCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    educationTrackId?: string | null
    maxStudents?: number
    createdAt?: Date | string
    teachers?: UserUncheckedCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    topics?: CourseTopicUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type CourseCreateWithoutTeachersInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutCoursesInput
    students?: UserCreateNestedManyWithoutCoursesAsStudentInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    topics?: CourseTopicCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeachersInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    educationTrackId?: string | null
    maxStudents?: number
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutCoursesAsStudentInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    topics?: CourseTopicUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeachersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeachersInput, CourseUncheckedCreateWithoutTeachersInput>
  }

  export type EducationTrackUpsertWithoutUsersInput = {
    update: XOR<EducationTrackUpdateWithoutUsersInput, EducationTrackUncheckedUpdateWithoutUsersInput>
    create: XOR<EducationTrackCreateWithoutUsersInput, EducationTrackUncheckedCreateWithoutUsersInput>
    where?: EducationTrackWhereInput
  }

  export type EducationTrackUpdateToOneWithWhereWithoutUsersInput = {
    where?: EducationTrackWhereInput
    data: XOR<EducationTrackUpdateWithoutUsersInput, EducationTrackUncheckedUpdateWithoutUsersInput>
  }

  export type EducationTrackUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutEducationTrackNestedInput
  }

  export type EducationTrackUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutEducationTrackNestedInput
  }

  export type TimeEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeEntryWhereUniqueInput
    update: XOR<TimeEntryUpdateWithoutUserInput, TimeEntryUncheckedUpdateWithoutUserInput>
    create: XOR<TimeEntryCreateWithoutUserInput, TimeEntryUncheckedCreateWithoutUserInput>
  }

  export type TimeEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeEntryWhereUniqueInput
    data: XOR<TimeEntryUpdateWithoutUserInput, TimeEntryUncheckedUpdateWithoutUserInput>
  }

  export type TimeEntryUpdateManyWithWhereWithoutUserInput = {
    where: TimeEntryScalarWhereInput
    data: XOR<TimeEntryUpdateManyMutationInput, TimeEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeEntryScalarWhereInput = {
    AND?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
    OR?: TimeEntryScalarWhereInput[]
    NOT?: TimeEntryScalarWhereInput | TimeEntryScalarWhereInput[]
    id?: StringFilter<"TimeEntry"> | string
    userId?: StringFilter<"TimeEntry"> | string
    clockIn?: DateTimeFilter<"TimeEntry"> | Date | string
    clockOut?: DateTimeNullableFilter<"TimeEntry"> | Date | string | null
    duration?: IntNullableFilter<"TimeEntry"> | number | null
    location?: StringFilter<"TimeEntry"> | string
    createdAt?: DateTimeFilter<"TimeEntry"> | Date | string
  }

  export type BulletinPostUpsertWithWhereUniqueWithoutUserInput = {
    where: BulletinPostWhereUniqueInput
    update: XOR<BulletinPostUpdateWithoutUserInput, BulletinPostUncheckedUpdateWithoutUserInput>
    create: XOR<BulletinPostCreateWithoutUserInput, BulletinPostUncheckedCreateWithoutUserInput>
  }

  export type BulletinPostUpdateWithWhereUniqueWithoutUserInput = {
    where: BulletinPostWhereUniqueInput
    data: XOR<BulletinPostUpdateWithoutUserInput, BulletinPostUncheckedUpdateWithoutUserInput>
  }

  export type BulletinPostUpdateManyWithWhereWithoutUserInput = {
    where: BulletinPostScalarWhereInput
    data: XOR<BulletinPostUpdateManyMutationInput, BulletinPostUncheckedUpdateManyWithoutUserInput>
  }

  export type BulletinPostScalarWhereInput = {
    AND?: BulletinPostScalarWhereInput | BulletinPostScalarWhereInput[]
    OR?: BulletinPostScalarWhereInput[]
    NOT?: BulletinPostScalarWhereInput | BulletinPostScalarWhereInput[]
    id?: StringFilter<"BulletinPost"> | string
    title?: StringFilter<"BulletinPost"> | string
    description?: StringFilter<"BulletinPost"> | string
    type?: StringFilter<"BulletinPost"> | string
    contactInfo?: StringFilter<"BulletinPost"> | string
    userId?: StringNullableFilter<"BulletinPost"> | string | null
    createdAt?: DateTimeFilter<"BulletinPost"> | Date | string
  }

  export type InquiryUpsertWithWhereUniqueWithoutUserInput = {
    where: InquiryWhereUniqueInput
    update: XOR<InquiryUpdateWithoutUserInput, InquiryUncheckedUpdateWithoutUserInput>
    create: XOR<InquiryCreateWithoutUserInput, InquiryUncheckedCreateWithoutUserInput>
  }

  export type InquiryUpdateWithWhereUniqueWithoutUserInput = {
    where: InquiryWhereUniqueInput
    data: XOR<InquiryUpdateWithoutUserInput, InquiryUncheckedUpdateWithoutUserInput>
  }

  export type InquiryUpdateManyWithWhereWithoutUserInput = {
    where: InquiryScalarWhereInput
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyWithoutUserInput>
  }

  export type InquiryScalarWhereInput = {
    AND?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    OR?: InquiryScalarWhereInput[]
    NOT?: InquiryScalarWhereInput | InquiryScalarWhereInput[]
    id?: StringFilter<"Inquiry"> | string
    userId?: StringFilter<"Inquiry"> | string
    subject?: StringFilter<"Inquiry"> | string
    message?: StringFilter<"Inquiry"> | string
    category?: StringFilter<"Inquiry"> | string
    status?: StringFilter<"Inquiry"> | string
    answer?: StringNullableFilter<"Inquiry"> | string | null
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    answeredAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
  }

  export type GradeUpsertWithWhereUniqueWithoutUserInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutUserInput, GradeUncheckedUpdateWithoutUserInput>
    create: XOR<GradeCreateWithoutUserInput, GradeUncheckedCreateWithoutUserInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutUserInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutUserInput, GradeUncheckedUpdateWithoutUserInput>
  }

  export type GradeUpdateManyWithWhereWithoutUserInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutUserInput>
  }

  export type GradeScalarWhereInput = {
    AND?: GradeScalarWhereInput | GradeScalarWhereInput[]
    OR?: GradeScalarWhereInput[]
    NOT?: GradeScalarWhereInput | GradeScalarWhereInput[]
    id?: StringFilter<"Grade"> | string
    userId?: StringFilter<"Grade"> | string
    examId?: StringNullableFilter<"Grade"> | string | null
    subject?: StringFilter<"Grade"> | string
    value?: FloatFilter<"Grade"> | number
    date?: DateTimeFilter<"Grade"> | Date | string
  }

  export type TeacherSkillUpsertWithWhereUniqueWithoutUserInput = {
    where: TeacherSkillWhereUniqueInput
    update: XOR<TeacherSkillUpdateWithoutUserInput, TeacherSkillUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherSkillCreateWithoutUserInput, TeacherSkillUncheckedCreateWithoutUserInput>
  }

  export type TeacherSkillUpdateWithWhereUniqueWithoutUserInput = {
    where: TeacherSkillWhereUniqueInput
    data: XOR<TeacherSkillUpdateWithoutUserInput, TeacherSkillUncheckedUpdateWithoutUserInput>
  }

  export type TeacherSkillUpdateManyWithWhereWithoutUserInput = {
    where: TeacherSkillScalarWhereInput
    data: XOR<TeacherSkillUpdateManyMutationInput, TeacherSkillUncheckedUpdateManyWithoutUserInput>
  }

  export type TeacherSkillScalarWhereInput = {
    AND?: TeacherSkillScalarWhereInput | TeacherSkillScalarWhereInput[]
    OR?: TeacherSkillScalarWhereInput[]
    NOT?: TeacherSkillScalarWhereInput | TeacherSkillScalarWhereInput[]
    id?: StringFilter<"TeacherSkill"> | string
    userId?: StringFilter<"TeacherSkill"> | string
    subject?: StringFilter<"TeacherSkill"> | string
    isActive?: BoolFilter<"TeacherSkill"> | boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
    create: XOR<CourseCreateWithoutStudentsInput, CourseUncheckedCreateWithoutStudentsInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutStudentsInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutStudentsInput, CourseUncheckedUpdateWithoutStudentsInput>
  }

  export type CourseUpdateManyWithWhereWithoutStudentsInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutStudentsInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    startDate?: DateTimeFilter<"Course"> | Date | string
    endDate?: DateTimeFilter<"Course"> | Date | string
    educationTrackId?: StringNullableFilter<"Course"> | string | null
    maxStudents?: IntFilter<"Course"> | number
    createdAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutTeachersInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTeachersInput, CourseUncheckedUpdateWithoutTeachersInput>
    create: XOR<CourseCreateWithoutTeachersInput, CourseUncheckedCreateWithoutTeachersInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTeachersInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTeachersInput, CourseUncheckedUpdateWithoutTeachersInput>
  }

  export type CourseUpdateManyWithWhereWithoutTeachersInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTeachersInput>
  }

  export type UserCreateWithoutEducationTrackInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutEducationTrackInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutEducationTrackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationTrackInput, UserUncheckedCreateWithoutEducationTrackInput>
  }

  export type UserCreateManyEducationTrackInputEnvelope = {
    data: UserCreateManyEducationTrackInput | UserCreateManyEducationTrackInput[]
  }

  export type CourseCreateWithoutEducationTrackInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    students?: UserCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamCreateNestedManyWithoutCourseInput
    topics?: CourseTopicCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEducationTrackInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserUncheckedCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
    topics?: CourseTopicUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEducationTrackInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEducationTrackInput, CourseUncheckedCreateWithoutEducationTrackInput>
  }

  export type CourseCreateManyEducationTrackInputEnvelope = {
    data: CourseCreateManyEducationTrackInput | CourseCreateManyEducationTrackInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutEducationTrackInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEducationTrackInput, UserUncheckedUpdateWithoutEducationTrackInput>
    create: XOR<UserCreateWithoutEducationTrackInput, UserUncheckedCreateWithoutEducationTrackInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEducationTrackInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEducationTrackInput, UserUncheckedUpdateWithoutEducationTrackInput>
  }

  export type UserUpdateManyWithWhereWithoutEducationTrackInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEducationTrackInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    measureNumber?: StringNullableFilter<"User"> | string | null
    educationTrackId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutEducationTrackInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutEducationTrackInput, CourseUncheckedUpdateWithoutEducationTrackInput>
    create: XOR<CourseCreateWithoutEducationTrackInput, CourseUncheckedCreateWithoutEducationTrackInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutEducationTrackInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutEducationTrackInput, CourseUncheckedUpdateWithoutEducationTrackInput>
  }

  export type CourseUpdateManyWithWhereWithoutEducationTrackInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutEducationTrackInput>
  }

  export type EducationTrackCreateWithoutCoursesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutEducationTrackInput
  }

  export type EducationTrackUncheckedCreateWithoutCoursesInput = {
    id?: string
    title: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutEducationTrackInput
  }

  export type EducationTrackCreateOrConnectWithoutCoursesInput = {
    where: EducationTrackWhereUniqueInput
    create: XOR<EducationTrackCreateWithoutCoursesInput, EducationTrackUncheckedCreateWithoutCoursesInput>
  }

  export type UserCreateWithoutCoursesAsStudentInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutCoursesAsStudentInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutCoursesAsStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesAsStudentInput, UserUncheckedCreateWithoutCoursesAsStudentInput>
  }

  export type UserCreateWithoutCoursesAsTeacherInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutCoursesAsTeacherInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserCreateOrConnectWithoutCoursesAsTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesAsTeacherInput, UserUncheckedCreateWithoutCoursesAsTeacherInput>
  }

  export type ExamCreateWithoutCourseInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    createdAt?: Date | string
    grades?: GradeCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    createdAt?: Date | string
    grades?: GradeUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutCourseInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput>
  }

  export type ExamCreateManyCourseInputEnvelope = {
    data: ExamCreateManyCourseInput | ExamCreateManyCourseInput[]
  }

  export type CourseTopicCreateWithoutCourseInput = {
    id?: string
    title: string
    durationUnits: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type CourseTopicUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    durationUnits: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type CourseTopicCreateOrConnectWithoutCourseInput = {
    where: CourseTopicWhereUniqueInput
    create: XOR<CourseTopicCreateWithoutCourseInput, CourseTopicUncheckedCreateWithoutCourseInput>
  }

  export type CourseTopicCreateManyCourseInputEnvelope = {
    data: CourseTopicCreateManyCourseInput | CourseTopicCreateManyCourseInput[]
  }

  export type EducationTrackUpsertWithoutCoursesInput = {
    update: XOR<EducationTrackUpdateWithoutCoursesInput, EducationTrackUncheckedUpdateWithoutCoursesInput>
    create: XOR<EducationTrackCreateWithoutCoursesInput, EducationTrackUncheckedCreateWithoutCoursesInput>
    where?: EducationTrackWhereInput
  }

  export type EducationTrackUpdateToOneWithWhereWithoutCoursesInput = {
    where?: EducationTrackWhereInput
    data: XOR<EducationTrackUpdateWithoutCoursesInput, EducationTrackUncheckedUpdateWithoutCoursesInput>
  }

  export type EducationTrackUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutEducationTrackNestedInput
  }

  export type EducationTrackUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutEducationTrackNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCoursesAsStudentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoursesAsStudentInput, UserUncheckedUpdateWithoutCoursesAsStudentInput>
    create: XOR<UserCreateWithoutCoursesAsStudentInput, UserUncheckedCreateWithoutCoursesAsStudentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoursesAsStudentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoursesAsStudentInput, UserUncheckedUpdateWithoutCoursesAsStudentInput>
  }

  export type UserUpdateManyWithWhereWithoutCoursesAsStudentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoursesAsStudentInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCoursesAsTeacherInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCoursesAsTeacherInput, UserUncheckedUpdateWithoutCoursesAsTeacherInput>
    create: XOR<UserCreateWithoutCoursesAsTeacherInput, UserUncheckedCreateWithoutCoursesAsTeacherInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCoursesAsTeacherInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCoursesAsTeacherInput, UserUncheckedUpdateWithoutCoursesAsTeacherInput>
  }

  export type UserUpdateManyWithWhereWithoutCoursesAsTeacherInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCoursesAsTeacherInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutCourseInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutCourseInput, ExamUncheckedUpdateWithoutCourseInput>
    create: XOR<ExamCreateWithoutCourseInput, ExamUncheckedCreateWithoutCourseInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutCourseInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutCourseInput, ExamUncheckedUpdateWithoutCourseInput>
  }

  export type ExamUpdateManyWithWhereWithoutCourseInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutCourseInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    date?: DateTimeFilter<"Exam"> | Date | string
    content?: StringFilter<"Exam"> | string
    location?: StringFilter<"Exam"> | string
    duration?: IntFilter<"Exam"> | number
    courseId?: StringNullableFilter<"Exam"> | string | null
    createdAt?: DateTimeFilter<"Exam"> | Date | string
  }

  export type CourseTopicUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseTopicWhereUniqueInput
    update: XOR<CourseTopicUpdateWithoutCourseInput, CourseTopicUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseTopicCreateWithoutCourseInput, CourseTopicUncheckedCreateWithoutCourseInput>
  }

  export type CourseTopicUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseTopicWhereUniqueInput
    data: XOR<CourseTopicUpdateWithoutCourseInput, CourseTopicUncheckedUpdateWithoutCourseInput>
  }

  export type CourseTopicUpdateManyWithWhereWithoutCourseInput = {
    where: CourseTopicScalarWhereInput
    data: XOR<CourseTopicUpdateManyMutationInput, CourseTopicUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseTopicScalarWhereInput = {
    AND?: CourseTopicScalarWhereInput | CourseTopicScalarWhereInput[]
    OR?: CourseTopicScalarWhereInput[]
    NOT?: CourseTopicScalarWhereInput | CourseTopicScalarWhereInput[]
    id?: StringFilter<"CourseTopic"> | string
    title?: StringFilter<"CourseTopic"> | string
    durationUnits?: IntFilter<"CourseTopic"> | number
    startDate?: DateTimeFilter<"CourseTopic"> | Date | string
    endDate?: DateTimeFilter<"CourseTopic"> | Date | string
    courseId?: StringFilter<"CourseTopic"> | string
    createdAt?: DateTimeFilter<"CourseTopic"> | Date | string
  }

  export type CourseCreateWithoutTopicsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutCoursesInput
    students?: UserCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTopicsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    educationTrackId?: string | null
    maxStudents?: number
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserUncheckedCreateNestedManyWithoutCoursesAsTeacherInput
    exams?: ExamUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTopicsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTopicsInput, CourseUncheckedCreateWithoutTopicsInput>
  }

  export type CourseUpsertWithoutTopicsInput = {
    update: XOR<CourseUpdateWithoutTopicsInput, CourseUncheckedUpdateWithoutTopicsInput>
    create: XOR<CourseCreateWithoutTopicsInput, CourseUncheckedCreateWithoutTopicsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTopicsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTopicsInput, CourseUncheckedUpdateWithoutTopicsInput>
  }

  export type CourseUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutCoursesNestedInput
    students?: UserUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUncheckedUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseEventCreateWithoutRoomInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    instructor?: string | null
    createdAt?: Date | string
  }

  export type CourseEventUncheckedCreateWithoutRoomInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    instructor?: string | null
    createdAt?: Date | string
  }

  export type CourseEventCreateOrConnectWithoutRoomInput = {
    where: CourseEventWhereUniqueInput
    create: XOR<CourseEventCreateWithoutRoomInput, CourseEventUncheckedCreateWithoutRoomInput>
  }

  export type CourseEventCreateManyRoomInputEnvelope = {
    data: CourseEventCreateManyRoomInput | CourseEventCreateManyRoomInput[]
  }

  export type CourseEventUpsertWithWhereUniqueWithoutRoomInput = {
    where: CourseEventWhereUniqueInput
    update: XOR<CourseEventUpdateWithoutRoomInput, CourseEventUncheckedUpdateWithoutRoomInput>
    create: XOR<CourseEventCreateWithoutRoomInput, CourseEventUncheckedCreateWithoutRoomInput>
  }

  export type CourseEventUpdateWithWhereUniqueWithoutRoomInput = {
    where: CourseEventWhereUniqueInput
    data: XOR<CourseEventUpdateWithoutRoomInput, CourseEventUncheckedUpdateWithoutRoomInput>
  }

  export type CourseEventUpdateManyWithWhereWithoutRoomInput = {
    where: CourseEventScalarWhereInput
    data: XOR<CourseEventUpdateManyMutationInput, CourseEventUncheckedUpdateManyWithoutRoomInput>
  }

  export type CourseEventScalarWhereInput = {
    AND?: CourseEventScalarWhereInput | CourseEventScalarWhereInput[]
    OR?: CourseEventScalarWhereInput[]
    NOT?: CourseEventScalarWhereInput | CourseEventScalarWhereInput[]
    id?: StringFilter<"CourseEvent"> | string
    title?: StringFilter<"CourseEvent"> | string
    description?: StringNullableFilter<"CourseEvent"> | string | null
    startTime?: DateTimeFilter<"CourseEvent"> | Date | string
    endTime?: DateTimeFilter<"CourseEvent"> | Date | string
    roomId?: StringNullableFilter<"CourseEvent"> | string | null
    instructor?: StringNullableFilter<"CourseEvent"> | string | null
    createdAt?: DateTimeFilter<"CourseEvent"> | Date | string
  }

  export type UserCreateWithoutTimeEntriesInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutTimeEntriesInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutTimeEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
  }

  export type UserUpsertWithoutTimeEntriesInput = {
    update: XOR<UserUpdateWithoutTimeEntriesInput, UserUncheckedUpdateWithoutTimeEntriesInput>
    create: XOR<UserCreateWithoutTimeEntriesInput, UserUncheckedCreateWithoutTimeEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimeEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimeEntriesInput, UserUncheckedUpdateWithoutTimeEntriesInput>
  }

  export type UserUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type RoomCreateWithoutEventsInput = {
    id?: string
    name: string
    capacity?: number
    createdAt?: Date | string
  }

  export type RoomUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    capacity?: number
    createdAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutEventsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutEventsInput, RoomUncheckedCreateWithoutEventsInput>
  }

  export type RoomUpsertWithoutEventsInput = {
    update: XOR<RoomUpdateWithoutEventsInput, RoomUncheckedUpdateWithoutEventsInput>
    create: XOR<RoomCreateWithoutEventsInput, RoomUncheckedCreateWithoutEventsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutEventsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutEventsInput, RoomUncheckedUpdateWithoutEventsInput>
  }

  export type RoomUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type CourseCreateWithoutExamsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutCoursesInput
    students?: UserCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserCreateNestedManyWithoutCoursesAsTeacherInput
    topics?: CourseTopicCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutExamsInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    educationTrackId?: string | null
    maxStudents?: number
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutCoursesAsStudentInput
    teachers?: UserUncheckedCreateNestedManyWithoutCoursesAsTeacherInput
    topics?: CourseTopicUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutExamsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
  }

  export type GradeCreateWithoutExamInput = {
    id?: string
    subject: string
    value: number
    date?: Date | string
    user: UserCreateNestedOneWithoutGradesInput
  }

  export type GradeUncheckedCreateWithoutExamInput = {
    id?: string
    userId: string
    subject: string
    value: number
    date?: Date | string
  }

  export type GradeCreateOrConnectWithoutExamInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutExamInput, GradeUncheckedCreateWithoutExamInput>
  }

  export type GradeCreateManyExamInputEnvelope = {
    data: GradeCreateManyExamInput | GradeCreateManyExamInput[]
  }

  export type CourseUpsertWithoutExamsInput = {
    update: XOR<CourseUpdateWithoutExamsInput, CourseUncheckedUpdateWithoutExamsInput>
    create: XOR<CourseCreateWithoutExamsInput, CourseUncheckedCreateWithoutExamsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutExamsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutExamsInput, CourseUncheckedUpdateWithoutExamsInput>
  }

  export type CourseUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutCoursesNestedInput
    students?: UserUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUpdateManyWithoutCoursesAsTeacherNestedInput
    topics?: CourseTopicUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUncheckedUpdateManyWithoutCoursesAsTeacherNestedInput
    topics?: CourseTopicUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type GradeUpsertWithWhereUniqueWithoutExamInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutExamInput, GradeUncheckedUpdateWithoutExamInput>
    create: XOR<GradeCreateWithoutExamInput, GradeUncheckedCreateWithoutExamInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutExamInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutExamInput, GradeUncheckedUpdateWithoutExamInput>
  }

  export type GradeUpdateManyWithWhereWithoutExamInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutExamInput>
  }

  export type UserCreateWithoutInquiriesInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutInquiriesInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutInquiriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
  }

  export type UserUpsertWithoutInquiriesInput = {
    update: XOR<UserUpdateWithoutInquiriesInput, UserUncheckedUpdateWithoutInquiriesInput>
    create: XOR<UserCreateWithoutInquiriesInput, UserUncheckedCreateWithoutInquiriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInquiriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInquiriesInput, UserUncheckedUpdateWithoutInquiriesInput>
  }

  export type UserUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutInquiriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type UserCreateWithoutGradesInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutGradesInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    teacherSkills?: TeacherSkillUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutGradesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
  }

  export type ExamCreateWithoutGradesInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    createdAt?: Date | string
    course?: CourseCreateNestedOneWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutGradesInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    courseId?: string | null
    createdAt?: Date | string
  }

  export type ExamCreateOrConnectWithoutGradesInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutGradesInput, ExamUncheckedCreateWithoutGradesInput>
  }

  export type UserUpsertWithoutGradesInput = {
    update: XOR<UserUpdateWithoutGradesInput, UserUncheckedUpdateWithoutGradesInput>
    create: XOR<UserCreateWithoutGradesInput, UserUncheckedCreateWithoutGradesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGradesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGradesInput, UserUncheckedUpdateWithoutGradesInput>
  }

  export type UserUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type ExamUpsertWithoutGradesInput = {
    update: XOR<ExamUpdateWithoutGradesInput, ExamUncheckedUpdateWithoutGradesInput>
    create: XOR<ExamCreateWithoutGradesInput, ExamUncheckedCreateWithoutGradesInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutGradesInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutGradesInput, ExamUncheckedUpdateWithoutGradesInput>
  }

  export type ExamUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTeacherSkillsInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
    educationTrack?: EducationTrackCreateNestedOneWithoutUsersInput
    timeEntries?: TimeEntryCreateNestedManyWithoutUserInput
    posts?: BulletinPostCreateNestedManyWithoutUserInput
    inquiries?: InquiryCreateNestedManyWithoutUserInput
    grades?: GradeCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseCreateNestedManyWithoutTeachersInput
  }

  export type UserUncheckedCreateWithoutTeacherSkillsInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    educationTrackId?: string | null
    createdAt?: Date | string
    timeEntries?: TimeEntryUncheckedCreateNestedManyWithoutUserInput
    posts?: BulletinPostUncheckedCreateNestedManyWithoutUserInput
    inquiries?: InquiryUncheckedCreateNestedManyWithoutUserInput
    grades?: GradeUncheckedCreateNestedManyWithoutUserInput
    coursesAsStudent?: CourseUncheckedCreateNestedManyWithoutStudentsInput
    coursesAsTeacher?: CourseUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type UserCreateOrConnectWithoutTeacherSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherSkillsInput, UserUncheckedCreateWithoutTeacherSkillsInput>
  }

  export type UserUpsertWithoutTeacherSkillsInput = {
    update: XOR<UserUpdateWithoutTeacherSkillsInput, UserUncheckedUpdateWithoutTeacherSkillsInput>
    create: XOR<UserCreateWithoutTeacherSkillsInput, UserUncheckedCreateWithoutTeacherSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherSkillsInput, UserUncheckedUpdateWithoutTeacherSkillsInput>
  }

  export type UserUpdateWithoutTeacherSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type TimeEntryCreateManyUserInput = {
    id?: string
    clockIn?: Date | string
    clockOut?: Date | string | null
    duration?: number | null
    location?: string
    createdAt?: Date | string
  }

  export type BulletinPostCreateManyUserInput = {
    id?: string
    title: string
    description: string
    type: string
    contactInfo: string
    createdAt?: Date | string
  }

  export type InquiryCreateManyUserInput = {
    id?: string
    subject: string
    message: string
    category: string
    status?: string
    answer?: string | null
    createdAt?: Date | string
    answeredAt?: Date | string | null
  }

  export type GradeCreateManyUserInput = {
    id?: string
    examId?: string | null
    subject: string
    value: number
    date?: Date | string
  }

  export type TeacherSkillCreateManyUserInput = {
    id?: string
    subject: string
    isActive?: boolean
  }

  export type TimeEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletinPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InquiryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GradeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneWithoutGradesNestedInput
  }

  export type GradeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSkillUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeacherSkillUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeacherSkillUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutCoursesNestedInput
    teachers?: UserUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: UserUncheckedUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutCoursesNestedInput
    students?: UserUpdateManyWithoutCoursesAsStudentNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutCoursesAsStudentNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyEducationTrackInput = {
    id?: string
    name: string
    email: string
    role?: string
    department?: string | null
    measureNumber?: string | null
    createdAt?: Date | string
  }

  export type CourseCreateManyEducationTrackInput = {
    id?: string
    title: string
    description?: string | null
    startDate: Date | string
    endDate: Date | string
    maxStudents?: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutEducationTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEducationTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutEducationTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEducationTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutCoursesAsStudentNestedInput
    teachers?: UserUncheckedUpdateManyWithoutCoursesAsTeacherNestedInput
    exams?: ExamUncheckedUpdateManyWithoutCourseNestedInput
    topics?: CourseTopicUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutEducationTrackInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    maxStudents?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateManyCourseInput = {
    id?: string
    title: string
    date: Date | string
    content: string
    location: string
    duration: number
    createdAt?: Date | string
  }

  export type CourseTopicCreateManyCourseInput = {
    id?: string
    title: string
    durationUnits: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutCoursesAsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsTeacher?: CourseUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesAsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsTeacher?: CourseUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoursesAsStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCoursesAsTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    educationTrack?: EducationTrackUpdateOneWithoutUsersNestedInput
    timeEntries?: TimeEntryUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUpdateManyWithoutUserNestedInput
    grades?: GradeUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesAsTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeEntries?: TimeEntryUncheckedUpdateManyWithoutUserNestedInput
    posts?: BulletinPostUncheckedUpdateManyWithoutUserNestedInput
    inquiries?: InquiryUncheckedUpdateManyWithoutUserNestedInput
    grades?: GradeUncheckedUpdateManyWithoutUserNestedInput
    teacherSkills?: TeacherSkillUncheckedUpdateManyWithoutUserNestedInput
    coursesAsStudent?: CourseUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCoursesAsTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    measureNumber?: NullableStringFieldUpdateOperationsInput | string | null
    educationTrackId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTopicUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTopicUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseTopicUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    durationUnits?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEventCreateManyRoomInput = {
    id?: string
    title: string
    description?: string | null
    startTime: Date | string
    endTime: Date | string
    instructor?: string | null
    createdAt?: Date | string
  }

  export type CourseEventUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEventUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseEventUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateManyExamInput = {
    id?: string
    userId: string
    subject: string
    value: number
    date?: Date | string
  }

  export type GradeUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGradesNestedInput
  }

  export type GradeUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EducationTrackCountOutputTypeDefaultArgs instead
     */
    export type EducationTrackCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EducationTrackCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomCountOutputTypeDefaultArgs instead
     */
    export type RoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamCountOutputTypeDefaultArgs instead
     */
    export type ExamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EducationTrackDefaultArgs instead
     */
    export type EducationTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EducationTrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseTopicDefaultArgs instead
     */
    export type CourseTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseTopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomDefaultArgs instead
     */
    export type RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimeEntryDefaultArgs instead
     */
    export type TimeEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimeEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnnouncementDefaultArgs instead
     */
    export type AnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnnouncementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseEventDefaultArgs instead
     */
    export type CourseEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BulletinPostDefaultArgs instead
     */
    export type BulletinPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BulletinPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamDefaultArgs instead
     */
    export type ExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InquiryDefaultArgs instead
     */
    export type InquiryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InquiryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GradeDefaultArgs instead
     */
    export type GradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GradeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherSkillDefaultArgs instead
     */
    export type TeacherSkillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherSkillDefaultArgs<ExtArgs>

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

Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BranchesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  address: 'address',
  city_id: 'city_id',
  branch_lat: 'branch_lat',
  branch_long: 'branch_long'
});

exports.Prisma.CitiesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  postcode: 'postcode'
});

exports.Prisma.ParcelsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  content: 'content',
  volume_weight: 'volume_weight',
  admission_date: 'admission_date',
  client_id: 'client_id',
  shipment_id: 'shipment_id'
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  weight: 'weight',
  parcel_id: 'parcel_id',
  client_id: 'client_id'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ShipmentsScalarFieldEnum = makeEnum({
  id: 'id',
  shipment_number: 'shipment_number',
  status: 'status',
  arrival_time: 'arrival_time',
  departure_time: 'departure_time',
  weight: 'weight',
  truck_id: 'truck_id',
  driver_id: 'driver_id',
  destination_branch: 'destination_branch',
  departure_branch: 'departure_branch'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TrucksScalarFieldEnum = makeEnum({
  id: 'id',
  license_plate: 'license_plate',
  brand: 'brand',
  max_weight: 'max_weight',
  available: 'available',
  driver_id: 'driver_id',
  branch_id: 'branch_id'
});

exports.Prisma.UserTypesScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  phone: 'phone',
  user_type_id: 'user_type_id',
  branch_id: 'branch_id',
  createdOn: 'createdOn'
});


exports.Prisma.ModelName = makeEnum({
  cities: 'cities',
  branches: 'branches',
  userTypes: 'userTypes',
  users: 'users',
  trucks: 'trucks',
  products: 'products',
  parcels: 'parcels',
  shipments: 'shipments'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

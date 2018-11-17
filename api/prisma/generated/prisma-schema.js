module.exports = {
        typeDefs: /* GraphQL */ `type AggregateIdea {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserLogin {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Idea {
  id: ID!
  author: User!
  title: String!
  description: String
  isPublic: Boolean
  publicHash: String!
}

type IdeaConnection {
  pageInfo: PageInfo!
  edges: [IdeaEdge]!
  aggregate: AggregateIdea!
}

input IdeaCreateInput {
  author: UserCreateOneWithoutIdeasInput!
  title: String!
  description: String
  isPublic: Boolean
  publicHash: String!
}

input IdeaCreateManyWithoutAuthorInput {
  create: [IdeaCreateWithoutAuthorInput!]
  connect: [IdeaWhereUniqueInput!]
}

input IdeaCreateWithoutAuthorInput {
  title: String!
  description: String
  isPublic: Boolean
  publicHash: String!
}

type IdeaEdge {
  node: Idea!
  cursor: String!
}

enum IdeaOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  isPublic_ASC
  isPublic_DESC
  publicHash_ASC
  publicHash_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type IdeaPreviousValues {
  id: ID!
  title: String!
  description: String
  isPublic: Boolean
  publicHash: String!
}

type IdeaSubscriptionPayload {
  mutation: MutationType!
  node: Idea
  updatedFields: [String!]
  previousValues: IdeaPreviousValues
}

input IdeaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IdeaWhereInput
  AND: [IdeaSubscriptionWhereInput!]
  OR: [IdeaSubscriptionWhereInput!]
  NOT: [IdeaSubscriptionWhereInput!]
}

input IdeaUpdateInput {
  author: UserUpdateOneRequiredWithoutIdeasInput
  title: String
  description: String
  isPublic: Boolean
  publicHash: String
}

input IdeaUpdateManyMutationInput {
  title: String
  description: String
  isPublic: Boolean
  publicHash: String
}

input IdeaUpdateManyWithoutAuthorInput {
  create: [IdeaCreateWithoutAuthorInput!]
  delete: [IdeaWhereUniqueInput!]
  connect: [IdeaWhereUniqueInput!]
  disconnect: [IdeaWhereUniqueInput!]
  update: [IdeaUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [IdeaUpsertWithWhereUniqueWithoutAuthorInput!]
}

input IdeaUpdateWithoutAuthorDataInput {
  title: String
  description: String
  isPublic: Boolean
  publicHash: String
}

input IdeaUpdateWithWhereUniqueWithoutAuthorInput {
  where: IdeaWhereUniqueInput!
  data: IdeaUpdateWithoutAuthorDataInput!
}

input IdeaUpsertWithWhereUniqueWithoutAuthorInput {
  where: IdeaWhereUniqueInput!
  update: IdeaUpdateWithoutAuthorDataInput!
  create: IdeaCreateWithoutAuthorInput!
}

input IdeaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  isPublic: Boolean
  isPublic_not: Boolean
  publicHash: String
  publicHash_not: String
  publicHash_in: [String!]
  publicHash_not_in: [String!]
  publicHash_lt: String
  publicHash_lte: String
  publicHash_gt: String
  publicHash_gte: String
  publicHash_contains: String
  publicHash_not_contains: String
  publicHash_starts_with: String
  publicHash_not_starts_with: String
  publicHash_ends_with: String
  publicHash_not_ends_with: String
  AND: [IdeaWhereInput!]
  OR: [IdeaWhereInput!]
  NOT: [IdeaWhereInput!]
}

input IdeaWhereUniqueInput {
  id: ID
  publicHash: String
}

scalar Long

type Mutation {
  createIdea(data: IdeaCreateInput!): Idea!
  updateIdea(data: IdeaUpdateInput!, where: IdeaWhereUniqueInput!): Idea
  updateManyIdeas(data: IdeaUpdateManyMutationInput!, where: IdeaWhereInput): BatchPayload!
  upsertIdea(where: IdeaWhereUniqueInput!, create: IdeaCreateInput!, update: IdeaUpdateInput!): Idea!
  deleteIdea(where: IdeaWhereUniqueInput!): Idea
  deleteManyIdeas(where: IdeaWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserLogin(data: UserLoginCreateInput!): UserLogin!
  updateUserLogin(data: UserLoginUpdateInput!, where: UserLoginWhereUniqueInput!): UserLogin
  updateManyUserLogins(data: UserLoginUpdateManyMutationInput!, where: UserLoginWhereInput): BatchPayload!
  upsertUserLogin(where: UserLoginWhereUniqueInput!, create: UserLoginCreateInput!, update: UserLoginUpdateInput!): UserLogin!
  deleteUserLogin(where: UserLoginWhereUniqueInput!): UserLogin
  deleteManyUserLogins(where: UserLoginWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  idea(where: IdeaWhereUniqueInput!): Idea
  ideas(where: IdeaWhereInput, orderBy: IdeaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Idea]!
  ideasConnection(where: IdeaWhereInput, orderBy: IdeaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IdeaConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userLogin(where: UserLoginWhereUniqueInput!): UserLogin
  userLogins(where: UserLoginWhereInput, orderBy: UserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserLogin]!
  userLoginsConnection(where: UserLoginWhereInput, orderBy: UserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserLoginConnection!
  node(id: ID!): Node
}

type Subscription {
  idea(where: IdeaSubscriptionWhereInput): IdeaSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userLogin(where: UserLoginSubscriptionWhereInput): UserLoginSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  name: String
  firstName: String
  lastName: String
  ideas(where: IdeaWhereInput, orderBy: IdeaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Idea!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String
  firstName: String
  lastName: String
  ideas: IdeaCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutIdeasInput {
  create: UserCreateWithoutIdeasInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutIdeasInput {
  email: String!
  name: String
  firstName: String
  lastName: String
}

type UserEdge {
  node: User!
  cursor: String!
}

type UserLogin {
  id: ID!
  email: String!
  temporaryCode: String!
  ip: String
}

type UserLoginConnection {
  pageInfo: PageInfo!
  edges: [UserLoginEdge]!
  aggregate: AggregateUserLogin!
}

input UserLoginCreateInput {
  email: String!
  temporaryCode: String!
  ip: String
}

type UserLoginEdge {
  node: UserLogin!
  cursor: String!
}

enum UserLoginOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  temporaryCode_ASC
  temporaryCode_DESC
  ip_ASC
  ip_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserLoginPreviousValues {
  id: ID!
  email: String!
  temporaryCode: String!
  ip: String
}

type UserLoginSubscriptionPayload {
  mutation: MutationType!
  node: UserLogin
  updatedFields: [String!]
  previousValues: UserLoginPreviousValues
}

input UserLoginSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserLoginWhereInput
  AND: [UserLoginSubscriptionWhereInput!]
  OR: [UserLoginSubscriptionWhereInput!]
  NOT: [UserLoginSubscriptionWhereInput!]
}

input UserLoginUpdateInput {
  email: String
  temporaryCode: String
  ip: String
}

input UserLoginUpdateManyMutationInput {
  email: String
  temporaryCode: String
  ip: String
}

input UserLoginWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  temporaryCode: String
  temporaryCode_not: String
  temporaryCode_in: [String!]
  temporaryCode_not_in: [String!]
  temporaryCode_lt: String
  temporaryCode_lte: String
  temporaryCode_gt: String
  temporaryCode_gte: String
  temporaryCode_contains: String
  temporaryCode_not_contains: String
  temporaryCode_starts_with: String
  temporaryCode_not_starts_with: String
  temporaryCode_ends_with: String
  temporaryCode_not_ends_with: String
  ip: String
  ip_not: String
  ip_in: [String!]
  ip_not_in: [String!]
  ip_lt: String
  ip_lte: String
  ip_gt: String
  ip_gte: String
  ip_contains: String
  ip_not_contains: String
  ip_starts_with: String
  ip_not_starts_with: String
  ip_ends_with: String
  ip_not_ends_with: String
  AND: [UserLoginWhereInput!]
  OR: [UserLoginWhereInput!]
  NOT: [UserLoginWhereInput!]
}

input UserLoginWhereUniqueInput {
  id: ID
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String
  firstName: String
  lastName: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  name: String
  firstName: String
  lastName: String
  ideas: IdeaUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  firstName: String
  lastName: String
}

input UserUpdateOneRequiredWithoutIdeasInput {
  create: UserCreateWithoutIdeasInput
  update: UserUpdateWithoutIdeasDataInput
  upsert: UserUpsertWithoutIdeasInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutIdeasDataInput {
  email: String
  name: String
  firstName: String
  lastName: String
}

input UserUpsertWithoutIdeasInput {
  update: UserUpdateWithoutIdeasDataInput!
  create: UserCreateWithoutIdeasInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  ideas_every: IdeaWhereInput
  ideas_some: IdeaWhereInput
  ideas_none: IdeaWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    
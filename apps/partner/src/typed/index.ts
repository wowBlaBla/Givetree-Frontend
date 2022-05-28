import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  userId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  userId: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  userId: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  aliasName?: Maybe<Scalars['String']>;
  contactNumber?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  cryptoActivityRating?: Maybe<Scalars['Int']>;
  cryptoConfidenceRating?: Maybe<Scalars['Int']>;
  cryptoExperienceRating?: Maybe<Scalars['Int']>;
  cryptoOffRampStrategy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discordUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ethWalletAddress?: Maybe<Scalars['String']>;
  expectedReleaseDate?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isArtworkReady?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  solWalletAddress?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  userType?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  aliasName?: InputMaybe<String_Comparison_Exp>;
  contactNumber?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  cryptoActivityRating?: InputMaybe<Int_Comparison_Exp>;
  cryptoConfidenceRating?: InputMaybe<Int_Comparison_Exp>;
  cryptoExperienceRating?: InputMaybe<Int_Comparison_Exp>;
  cryptoOffRampStrategy?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  discordUrl?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  ethWalletAddress?: InputMaybe<String_Comparison_Exp>;
  expectedReleaseDate?: InputMaybe<Date_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isArtworkReady?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  logoUrl?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  solWalletAddress?: InputMaybe<String_Comparison_Exp>;
  twitterUrl?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  userType?: InputMaybe<String_Comparison_Exp>;
  websiteUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint */
  UsersUserIdKey = 'users_userId_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  aliasName?: InputMaybe<Scalars['String']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
  cryptoOffRampStrategy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discordUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ethWalletAddress?: InputMaybe<Scalars['String']>;
  expectedReleaseDate?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isArtworkReady?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  solWalletAddress?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  aliasName?: Maybe<Scalars['String']>;
  contactNumber?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  cryptoActivityRating?: Maybe<Scalars['Int']>;
  cryptoConfidenceRating?: Maybe<Scalars['Int']>;
  cryptoExperienceRating?: Maybe<Scalars['Int']>;
  cryptoOffRampStrategy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discordUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ethWalletAddress?: Maybe<Scalars['String']>;
  expectedReleaseDate?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  solWalletAddress?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  aliasName?: Maybe<Scalars['String']>;
  contactNumber?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  cryptoActivityRating?: Maybe<Scalars['Int']>;
  cryptoConfidenceRating?: Maybe<Scalars['Int']>;
  cryptoExperienceRating?: Maybe<Scalars['Int']>;
  cryptoOffRampStrategy?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discordUrl?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ethWalletAddress?: Maybe<Scalars['String']>;
  expectedReleaseDate?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  solWalletAddress?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  aliasName?: InputMaybe<Order_By>;
  contactNumber?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  cryptoActivityRating?: InputMaybe<Order_By>;
  cryptoConfidenceRating?: InputMaybe<Order_By>;
  cryptoExperienceRating?: InputMaybe<Order_By>;
  cryptoOffRampStrategy?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  discordUrl?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  ethWalletAddress?: InputMaybe<Order_By>;
  expectedReleaseDate?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isArtworkReady?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  logoUrl?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  solWalletAddress?: InputMaybe<Order_By>;
  twitterUrl?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userType?: InputMaybe<Order_By>;
  websiteUrl?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  userId: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AliasName = 'aliasName',
  /** column name */
  ContactNumber = 'contactNumber',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CryptoActivityRating = 'cryptoActivityRating',
  /** column name */
  CryptoConfidenceRating = 'cryptoConfidenceRating',
  /** column name */
  CryptoExperienceRating = 'cryptoExperienceRating',
  /** column name */
  CryptoOffRampStrategy = 'cryptoOffRampStrategy',
  /** column name */
  Description = 'description',
  /** column name */
  DiscordUrl = 'discordUrl',
  /** column name */
  Email = 'email',
  /** column name */
  EthWalletAddress = 'ethWalletAddress',
  /** column name */
  ExpectedReleaseDate = 'expectedReleaseDate',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsArtworkReady = 'isArtworkReady',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Role = 'role',
  /** column name */
  SolWalletAddress = 'solWalletAddress',
  /** column name */
  TwitterUrl = 'twitterUrl',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserType = 'userType',
  /** column name */
  WebsiteUrl = 'websiteUrl'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  aliasName?: InputMaybe<Scalars['String']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
  cryptoOffRampStrategy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discordUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ethWalletAddress?: InputMaybe<Scalars['String']>;
  expectedReleaseDate?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isArtworkReady?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  solWalletAddress?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  cryptoActivityRating?: Maybe<Scalars['Int']>;
  cryptoConfidenceRating?: Maybe<Scalars['Int']>;
  cryptoExperienceRating?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AliasName = 'aliasName',
  /** column name */
  ContactNumber = 'contactNumber',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CryptoActivityRating = 'cryptoActivityRating',
  /** column name */
  CryptoConfidenceRating = 'cryptoConfidenceRating',
  /** column name */
  CryptoExperienceRating = 'cryptoExperienceRating',
  /** column name */
  CryptoOffRampStrategy = 'cryptoOffRampStrategy',
  /** column name */
  Description = 'description',
  /** column name */
  DiscordUrl = 'discordUrl',
  /** column name */
  Email = 'email',
  /** column name */
  EthWalletAddress = 'ethWalletAddress',
  /** column name */
  ExpectedReleaseDate = 'expectedReleaseDate',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsArtworkReady = 'isArtworkReady',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Role = 'role',
  /** column name */
  SolWalletAddress = 'solWalletAddress',
  /** column name */
  TwitterUrl = 'twitterUrl',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserType = 'userType',
  /** column name */
  WebsiteUrl = 'websiteUrl'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  cryptoActivityRating?: Maybe<Scalars['Float']>;
  cryptoConfidenceRating?: Maybe<Scalars['Float']>;
  cryptoExperienceRating?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', aliasName?: string | null, contactNumber?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  aliasName?: InputMaybe<Scalars['String']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
  cryptoOffRampStrategy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discordUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ethWalletAddress?: InputMaybe<Scalars['String']>;
  expectedReleaseDate?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  isArtworkReady?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
  solWalletAddress?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', aliasName?: string | null, contactNumber?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  aliasName?: InputMaybe<Scalars['String']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
  cryptoOffRampStrategy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discordUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ethWalletAddress?: InputMaybe<Scalars['String']>;
  expectedReleaseDate?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  isArtworkReady?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  solWalletAddress?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', aliasName?: string | null, contactNumber?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null } | null };


export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  users_by_pk(userId: $userId) {
    aliasName
    contactNumber
    country
    cryptoActivityRating
    cryptoConfidenceRating
    cryptoExperienceRating
    cryptoOffRampStrategy
    description
    discordUrl
    email
    ethWalletAddress
    expectedReleaseDate
    firstName
    id
    isArtworkReady
    lastName
    logoUrl
    role
    solWalletAddress
    twitterUrl
    userId
    userType
    websiteUrl
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($aliasName: String, $contactNumber: String, $country: String, $cryptoActivityRating: Int, $cryptoConfidenceRating: Int, $cryptoExperienceRating: Int, $cryptoOffRampStrategy: String, $description: String, $discordUrl: String, $email: String, $ethWalletAddress: String, $expectedReleaseDate: date, $firstName: String, $isArtworkReady: Boolean, $lastName: String, $logoUrl: String, $role: String!, $solWalletAddress: String, $twitterUrl: String, $userId: String!, $userType: String, $websiteUrl: String) {
  insert_users_one(
    object: {aliasName: $aliasName, contactNumber: $contactNumber, country: $country, cryptoActivityRating: $cryptoActivityRating, cryptoConfidenceRating: $cryptoConfidenceRating, cryptoExperienceRating: $cryptoExperienceRating, cryptoOffRampStrategy: $cryptoOffRampStrategy, description: $description, discordUrl: $discordUrl, email: $email, ethWalletAddress: $ethWalletAddress, expectedReleaseDate: $expectedReleaseDate, firstName: $firstName, isArtworkReady: $isArtworkReady, lastName: $lastName, logoUrl: $logoUrl, role: $role, solWalletAddress: $solWalletAddress, twitterUrl: $twitterUrl, userId: $userId, userType: $userType, websiteUrl: $websiteUrl}
  ) {
    aliasName
    contactNumber
    country
    cryptoActivityRating
    cryptoConfidenceRating
    cryptoExperienceRating
    cryptoOffRampStrategy
    description
    discordUrl
    email
    ethWalletAddress
    expectedReleaseDate
    firstName
    id
    isArtworkReady
    lastName
    logoUrl
    role
    solWalletAddress
    twitterUrl
    userId
    userType
    websiteUrl
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      aliasName: // value for 'aliasName'
 *      contactNumber: // value for 'contactNumber'
 *      country: // value for 'country'
 *      cryptoActivityRating: // value for 'cryptoActivityRating'
 *      cryptoConfidenceRating: // value for 'cryptoConfidenceRating'
 *      cryptoExperienceRating: // value for 'cryptoExperienceRating'
 *      cryptoOffRampStrategy: // value for 'cryptoOffRampStrategy'
 *      description: // value for 'description'
 *      discordUrl: // value for 'discordUrl'
 *      email: // value for 'email'
 *      ethWalletAddress: // value for 'ethWalletAddress'
 *      expectedReleaseDate: // value for 'expectedReleaseDate'
 *      firstName: // value for 'firstName'
 *      isArtworkReady: // value for 'isArtworkReady'
 *      lastName: // value for 'lastName'
 *      logoUrl: // value for 'logoUrl'
 *      role: // value for 'role'
 *      solWalletAddress: // value for 'solWalletAddress'
 *      twitterUrl: // value for 'twitterUrl'
 *      userId: // value for 'userId'
 *      userType: // value for 'userType'
 *      websiteUrl: // value for 'websiteUrl'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($aliasName: String, $contactNumber: String, $country: String, $cryptoActivityRating: Int, $cryptoConfidenceRating: Int, $cryptoExperienceRating: Int, $cryptoOffRampStrategy: String, $description: String, $discordUrl: String, $email: String, $ethWalletAddress: String, $expectedReleaseDate: date, $firstName: String, $isArtworkReady: Boolean, $lastName: String, $logoUrl: String, $solWalletAddress: String, $twitterUrl: String, $userId: String!, $userType: String, $websiteUrl: String) {
  update_users_by_pk(
    pk_columns: {userId: $userId}
    _set: {aliasName: $aliasName, contactNumber: $contactNumber, country: $country, cryptoActivityRating: $cryptoActivityRating, cryptoConfidenceRating: $cryptoConfidenceRating, cryptoExperienceRating: $cryptoExperienceRating, cryptoOffRampStrategy: $cryptoOffRampStrategy, description: $description, discordUrl: $discordUrl, email: $email, ethWalletAddress: $ethWalletAddress, expectedReleaseDate: $expectedReleaseDate, firstName: $firstName, isArtworkReady: $isArtworkReady, lastName: $lastName, logoUrl: $logoUrl, solWalletAddress: $solWalletAddress, twitterUrl: $twitterUrl, userType: $userType, websiteUrl: $websiteUrl}
  ) {
    aliasName
    contactNumber
    country
    cryptoActivityRating
    cryptoConfidenceRating
    cryptoExperienceRating
    cryptoOffRampStrategy
    description
    discordUrl
    email
    ethWalletAddress
    expectedReleaseDate
    firstName
    id
    isArtworkReady
    lastName
    logoUrl
    role
    solWalletAddress
    twitterUrl
    userId
    userType
    websiteUrl
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      aliasName: // value for 'aliasName'
 *      contactNumber: // value for 'contactNumber'
 *      country: // value for 'country'
 *      cryptoActivityRating: // value for 'cryptoActivityRating'
 *      cryptoConfidenceRating: // value for 'cryptoConfidenceRating'
 *      cryptoExperienceRating: // value for 'cryptoExperienceRating'
 *      cryptoOffRampStrategy: // value for 'cryptoOffRampStrategy'
 *      description: // value for 'description'
 *      discordUrl: // value for 'discordUrl'
 *      email: // value for 'email'
 *      ethWalletAddress: // value for 'ethWalletAddress'
 *      expectedReleaseDate: // value for 'expectedReleaseDate'
 *      firstName: // value for 'firstName'
 *      isArtworkReady: // value for 'isArtworkReady'
 *      lastName: // value for 'lastName'
 *      logoUrl: // value for 'logoUrl'
 *      solWalletAddress: // value for 'solWalletAddress'
 *      twitterUrl: // value for 'twitterUrl'
 *      userId: // value for 'userId'
 *      userType: // value for 'userType'
 *      websiteUrl: // value for 'websiteUrl'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
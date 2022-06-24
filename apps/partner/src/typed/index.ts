/* eslint-disable */
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

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
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

export type Int_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _cast?: InputMaybe<Int_Cast_Exp>;
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

/** columns and relationships of "collections" */
export type Collections = {
  __typename?: 'collections';
  collectionBannerUrl: Scalars['String'];
  collectionDetailsUrl: Scalars['String'];
  collectionPreviewUrl: Scalars['String'];
  currency: Scalars['String'];
  floorPrice: Scalars['Int'];
  id: Scalars['uuid'];
  isVerified: Scalars['Boolean'];
  longDescription?: Maybe<Scalars['String']>;
  mintingBannerUrl: Scalars['String'];
  mintingCollectionPreviewUrl: Scalars['String'];
  shortDescription?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  totalSupply: Scalars['Int'];
  userId: Scalars['String'];
  whitelistMemo: Scalars['String'];
};

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
  __typename?: 'collections_aggregate';
  aggregate?: Maybe<Collections_Aggregate_Fields>;
  nodes: Array<Collections>;
};

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
  __typename?: 'collections_aggregate_fields';
  avg?: Maybe<Collections_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Collections_Max_Fields>;
  min?: Maybe<Collections_Min_Fields>;
  stddev?: Maybe<Collections_Stddev_Fields>;
  stddev_pop?: Maybe<Collections_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collections_Stddev_Samp_Fields>;
  sum?: Maybe<Collections_Sum_Fields>;
  var_pop?: Maybe<Collections_Var_Pop_Fields>;
  var_samp?: Maybe<Collections_Var_Samp_Fields>;
  variance?: Maybe<Collections_Variance_Fields>;
};


/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Collections_Avg_Fields = {
  __typename?: 'collections_avg_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Bool_Exp>>;
  _not?: InputMaybe<Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Bool_Exp>>;
  collectionBannerUrl?: InputMaybe<String_Comparison_Exp>;
  collectionDetailsUrl?: InputMaybe<String_Comparison_Exp>;
  collectionPreviewUrl?: InputMaybe<String_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  floorPrice?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isVerified?: InputMaybe<Boolean_Comparison_Exp>;
  longDescription?: InputMaybe<String_Comparison_Exp>;
  mintingBannerUrl?: InputMaybe<String_Comparison_Exp>;
  mintingCollectionPreviewUrl?: InputMaybe<String_Comparison_Exp>;
  shortDescription?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  totalSupply?: InputMaybe<Int_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  whitelistMemo?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "collections" */
export enum Collections_Constraint {
  /** unique or primary key constraint on columns "id" */
  CampainsPkey = 'campains_pkey',
  /** unique or primary key constraint on columns "slug" */
  CampainsSlugKey = 'campains_slug_key'
}

/** input type for incrementing numeric columns in table "collections" */
export type Collections_Inc_Input = {
  floorPrice?: InputMaybe<Scalars['Int']>;
  totalSupply?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "collections" */
export type Collections_Insert_Input = {
  collectionBannerUrl?: InputMaybe<Scalars['String']>;
  collectionDetailsUrl?: InputMaybe<Scalars['String']>;
  collectionPreviewUrl?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  floorPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  longDescription?: InputMaybe<Scalars['String']>;
  mintingBannerUrl?: InputMaybe<Scalars['String']>;
  mintingCollectionPreviewUrl?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
  whitelistMemo?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Collections_Max_Fields = {
  __typename?: 'collections_max_fields';
  collectionBannerUrl?: Maybe<Scalars['String']>;
  collectionDetailsUrl?: Maybe<Scalars['String']>;
  collectionPreviewUrl?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  floorPrice?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  longDescription?: Maybe<Scalars['String']>;
  mintingBannerUrl?: Maybe<Scalars['String']>;
  mintingCollectionPreviewUrl?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  whitelistMemo?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Collections_Min_Fields = {
  __typename?: 'collections_min_fields';
  collectionBannerUrl?: Maybe<Scalars['String']>;
  collectionDetailsUrl?: Maybe<Scalars['String']>;
  collectionPreviewUrl?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  floorPrice?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  longDescription?: Maybe<Scalars['String']>;
  mintingBannerUrl?: Maybe<Scalars['String']>;
  mintingCollectionPreviewUrl?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalSupply?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['String']>;
  whitelistMemo?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "collections" */
export type Collections_Mutation_Response = {
  __typename?: 'collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collections>;
};

/** on_conflict condition type for table "collections" */
export type Collections_On_Conflict = {
  constraint: Collections_Constraint;
  update_columns?: Array<Collections_Update_Column>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  collectionBannerUrl?: InputMaybe<Order_By>;
  collectionDetailsUrl?: InputMaybe<Order_By>;
  collectionPreviewUrl?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  floorPrice?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isVerified?: InputMaybe<Order_By>;
  longDescription?: InputMaybe<Order_By>;
  mintingBannerUrl?: InputMaybe<Order_By>;
  mintingCollectionPreviewUrl?: InputMaybe<Order_By>;
  shortDescription?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  totalSupply?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  whitelistMemo?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collections */
export type Collections_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  CollectionBannerUrl = 'collectionBannerUrl',
  /** column name */
  CollectionDetailsUrl = 'collectionDetailsUrl',
  /** column name */
  CollectionPreviewUrl = 'collectionPreviewUrl',
  /** column name */
  Currency = 'currency',
  /** column name */
  FloorPrice = 'floorPrice',
  /** column name */
  Id = 'id',
  /** column name */
  IsVerified = 'isVerified',
  /** column name */
  LongDescription = 'longDescription',
  /** column name */
  MintingBannerUrl = 'mintingBannerUrl',
  /** column name */
  MintingCollectionPreviewUrl = 'mintingCollectionPreviewUrl',
  /** column name */
  ShortDescription = 'shortDescription',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  TotalSupply = 'totalSupply',
  /** column name */
  UserId = 'userId',
  /** column name */
  WhitelistMemo = 'whitelistMemo'
}

/** input type for updating data in table "collections" */
export type Collections_Set_Input = {
  collectionBannerUrl?: InputMaybe<Scalars['String']>;
  collectionDetailsUrl?: InputMaybe<Scalars['String']>;
  collectionPreviewUrl?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  floorPrice?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  longDescription?: InputMaybe<Scalars['String']>;
  mintingBannerUrl?: InputMaybe<Scalars['String']>;
  mintingCollectionPreviewUrl?: InputMaybe<Scalars['String']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
  whitelistMemo?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Collections_Stddev_Fields = {
  __typename?: 'collections_stddev_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Collections_Stddev_Pop_Fields = {
  __typename?: 'collections_stddev_pop_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Collections_Stddev_Samp_Fields = {
  __typename?: 'collections_stddev_samp_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Collections_Sum_Fields = {
  __typename?: 'collections_sum_fields';
  floorPrice?: Maybe<Scalars['Int']>;
  totalSupply?: Maybe<Scalars['Int']>;
};

/** update columns of table "collections" */
export enum Collections_Update_Column {
  /** column name */
  CollectionBannerUrl = 'collectionBannerUrl',
  /** column name */
  CollectionDetailsUrl = 'collectionDetailsUrl',
  /** column name */
  CollectionPreviewUrl = 'collectionPreviewUrl',
  /** column name */
  Currency = 'currency',
  /** column name */
  FloorPrice = 'floorPrice',
  /** column name */
  Id = 'id',
  /** column name */
  IsVerified = 'isVerified',
  /** column name */
  LongDescription = 'longDescription',
  /** column name */
  MintingBannerUrl = 'mintingBannerUrl',
  /** column name */
  MintingCollectionPreviewUrl = 'mintingCollectionPreviewUrl',
  /** column name */
  ShortDescription = 'shortDescription',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  TotalSupply = 'totalSupply',
  /** column name */
  UserId = 'userId',
  /** column name */
  WhitelistMemo = 'whitelistMemo'
}

/** aggregate var_pop on columns */
export type Collections_Var_Pop_Fields = {
  __typename?: 'collections_var_pop_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Collections_Var_Samp_Fields = {
  __typename?: 'collections_var_samp_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Collections_Variance_Fields = {
  __typename?: 'collections_variance_fields';
  floorPrice?: Maybe<Scalars['Float']>;
  totalSupply?: Maybe<Scalars['Float']>;
};

export type Date_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _cast?: InputMaybe<Date_Cast_Exp>;
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
  /** delete data from the table: "collections" */
  delete_collections?: Maybe<Collections_Mutation_Response>;
  /** delete single row from the table: "collections" */
  delete_collections_by_pk?: Maybe<Collections>;
  /** delete data from the table: "user_status" */
  delete_user_status?: Maybe<User_Status_Mutation_Response>;
  /** delete single row from the table: "user_status" */
  delete_user_status_by_pk?: Maybe<User_Status>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "collections" */
  insert_collections?: Maybe<Collections_Mutation_Response>;
  /** insert a single row into the table: "collections" */
  insert_collections_one?: Maybe<Collections>;
  /** insert data into the table: "user_status" */
  insert_user_status?: Maybe<User_Status_Mutation_Response>;
  /** insert a single row into the table: "user_status" */
  insert_user_status_one?: Maybe<User_Status>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "collections" */
  update_collections?: Maybe<Collections_Mutation_Response>;
  /** update single row of the table: "collections" */
  update_collections_by_pk?: Maybe<Collections>;
  /** update data of the table: "user_status" */
  update_user_status?: Maybe<User_Status_Mutation_Response>;
  /** update single row of the table: "user_status" */
  update_user_status_by_pk?: Maybe<User_Status>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CollectionsArgs = {
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collections_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_StatusArgs = {
  where: User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Status_By_PkArgs = {
  text: Scalars['String'];
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
export type Mutation_RootInsert_CollectionsArgs = {
  objects: Array<Collections_Insert_Input>;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collections_OneArgs = {
  object: Collections_Insert_Input;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_StatusArgs = {
  objects: Array<User_Status_Insert_Input>;
  on_conflict?: InputMaybe<User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Status_OneArgs = {
  object: User_Status_Insert_Input;
  on_conflict?: InputMaybe<User_Status_On_Conflict>;
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
export type Mutation_RootUpdate_CollectionsArgs = {
  _inc?: InputMaybe<Collections_Inc_Input>;
  _set?: InputMaybe<Collections_Set_Input>;
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_By_PkArgs = {
  _inc?: InputMaybe<Collections_Inc_Input>;
  _set?: InputMaybe<Collections_Set_Input>;
  pk_columns: Collections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_StatusArgs = {
  _set?: InputMaybe<User_Status_Set_Input>;
  where: User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Status_By_PkArgs = {
  _set?: InputMaybe<User_Status_Set_Input>;
  pk_columns: User_Status_Pk_Columns_Input;
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
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "user_status" */
  user_status: Array<User_Status>;
  /** fetch aggregated fields from the table: "user_status" */
  user_status_aggregate: User_Status_Aggregate;
  /** fetch data from the table: "user_status" using primary key columns */
  user_status_by_pk?: Maybe<User_Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_StatusArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};


export type Query_RootUser_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};


export type Query_RootUser_Status_By_PkArgs = {
  text: Scalars['String'];
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
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "user_status" */
  user_status: Array<User_Status>;
  /** fetch aggregated fields from the table: "user_status" */
  user_status_aggregate: User_Status_Aggregate;
  /** fetch data from the table: "user_status" using primary key columns */
  user_status_by_pk?: Maybe<User_Status>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_StatusArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};


export type Subscription_RootUser_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Status_Order_By>>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};


export type Subscription_RootUser_Status_By_PkArgs = {
  text: Scalars['String'];
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

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
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

/** user status enums */
export type User_Status = {
  __typename?: 'user_status';
  text: Scalars['String'];
};

/** aggregated selection of "user_status" */
export type User_Status_Aggregate = {
  __typename?: 'user_status_aggregate';
  aggregate?: Maybe<User_Status_Aggregate_Fields>;
  nodes: Array<User_Status>;
};

/** aggregate fields of "user_status" */
export type User_Status_Aggregate_Fields = {
  __typename?: 'user_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Status_Max_Fields>;
  min?: Maybe<User_Status_Min_Fields>;
};


/** aggregate fields of "user_status" */
export type User_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_status". All fields are combined with a logical 'AND'. */
export type User_Status_Bool_Exp = {
  _and?: InputMaybe<Array<User_Status_Bool_Exp>>;
  _not?: InputMaybe<User_Status_Bool_Exp>;
  _or?: InputMaybe<Array<User_Status_Bool_Exp>>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_status" */
export enum User_Status_Constraint {
  /** unique or primary key constraint on columns "text" */
  StatusPkey = 'status_pkey'
}

export enum User_Status_Enum {
  Blocked = 'blocked',
  Pending = 'pending',
  Success = 'success'
}

/** Boolean expression to compare columns of type "user_status_enum". All fields are combined with logical 'AND'. */
export type User_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Status_Enum>;
  _in?: InputMaybe<Array<User_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Status_Enum>;
  _nin?: InputMaybe<Array<User_Status_Enum>>;
};

/** input type for inserting data into table "user_status" */
export type User_Status_Insert_Input = {
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Status_Max_Fields = {
  __typename?: 'user_status_max_fields';
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Status_Min_Fields = {
  __typename?: 'user_status_min_fields';
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_status" */
export type User_Status_Mutation_Response = {
  __typename?: 'user_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Status>;
};

/** on_conflict condition type for table "user_status" */
export type User_Status_On_Conflict = {
  constraint: User_Status_Constraint;
  update_columns?: Array<User_Status_Update_Column>;
  where?: InputMaybe<User_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "user_status". */
export type User_Status_Order_By = {
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_status */
export type User_Status_Pk_Columns_Input = {
  text: Scalars['String'];
};

/** select columns of table "user_status" */
export enum User_Status_Select_Column {
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "user_status" */
export type User_Status_Set_Input = {
  text?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_status" */
export enum User_Status_Update_Column {
  /** column name */
  Text = 'text'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  aliasName?: Maybe<Scalars['String']>;
  charityAbn?: Maybe<Scalars['String']>;
  charityAcceptDirectDonations?: Maybe<Scalars['Boolean']>;
  charityAddress?: Maybe<Scalars['String']>;
  charityAllowProxyFundraiser?: Maybe<Scalars['Boolean']>;
  charityApprovalBeforeGoLive?: Maybe<Scalars['Boolean']>;
  charityCreateFundraiser?: Maybe<Scalars['Boolean']>;
  charityEntityType?: Maybe<Scalars['String']>;
  charityName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
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
  maticWalletAddress?: Maybe<Scalars['String']>;
  primaryContactAddress?: Maybe<Scalars['String']>;
  primaryContactDateOfBirth?: Maybe<Scalars['date']>;
  role?: Maybe<Scalars['String']>;
  solWalletAddress?: Maybe<Scalars['String']>;
  status?: Maybe<User_Status_Enum>;
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
  charityAbn?: InputMaybe<String_Comparison_Exp>;
  charityAcceptDirectDonations?: InputMaybe<Boolean_Comparison_Exp>;
  charityAddress?: InputMaybe<String_Comparison_Exp>;
  charityAllowProxyFundraiser?: InputMaybe<Boolean_Comparison_Exp>;
  charityApprovalBeforeGoLive?: InputMaybe<Boolean_Comparison_Exp>;
  charityCreateFundraiser?: InputMaybe<Boolean_Comparison_Exp>;
  charityEntityType?: InputMaybe<String_Comparison_Exp>;
  charityName?: InputMaybe<String_Comparison_Exp>;
  contactEmail?: InputMaybe<String_Comparison_Exp>;
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
  maticWalletAddress?: InputMaybe<String_Comparison_Exp>;
  primaryContactAddress?: InputMaybe<String_Comparison_Exp>;
  primaryContactDateOfBirth?: InputMaybe<Date_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  solWalletAddress?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<User_Status_Enum_Comparison_Exp>;
  twitterUrl?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
  userType?: InputMaybe<String_Comparison_Exp>;
  websiteUrl?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "userId" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "userId" */
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
  charityAbn?: InputMaybe<Scalars['String']>;
  charityAcceptDirectDonations?: InputMaybe<Scalars['Boolean']>;
  charityAddress?: InputMaybe<Scalars['String']>;
  charityAllowProxyFundraiser?: InputMaybe<Scalars['Boolean']>;
  charityApprovalBeforeGoLive?: InputMaybe<Scalars['Boolean']>;
  charityCreateFundraiser?: InputMaybe<Scalars['Boolean']>;
  charityEntityType?: InputMaybe<Scalars['String']>;
  charityName?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
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
  maticWalletAddress?: InputMaybe<Scalars['String']>;
  primaryContactAddress?: InputMaybe<Scalars['String']>;
  primaryContactDateOfBirth?: InputMaybe<Scalars['date']>;
  role?: InputMaybe<Scalars['String']>;
  solWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<User_Status_Enum>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  aliasName?: Maybe<Scalars['String']>;
  charityAbn?: Maybe<Scalars['String']>;
  charityAddress?: Maybe<Scalars['String']>;
  charityEntityType?: Maybe<Scalars['String']>;
  charityName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
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
  maticWalletAddress?: Maybe<Scalars['String']>;
  primaryContactAddress?: Maybe<Scalars['String']>;
  primaryContactDateOfBirth?: Maybe<Scalars['date']>;
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
  charityAbn?: Maybe<Scalars['String']>;
  charityAddress?: Maybe<Scalars['String']>;
  charityEntityType?: Maybe<Scalars['String']>;
  charityName?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
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
  maticWalletAddress?: Maybe<Scalars['String']>;
  primaryContactAddress?: Maybe<Scalars['String']>;
  primaryContactDateOfBirth?: Maybe<Scalars['date']>;
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
  charityAbn?: InputMaybe<Order_By>;
  charityAcceptDirectDonations?: InputMaybe<Order_By>;
  charityAddress?: InputMaybe<Order_By>;
  charityAllowProxyFundraiser?: InputMaybe<Order_By>;
  charityApprovalBeforeGoLive?: InputMaybe<Order_By>;
  charityCreateFundraiser?: InputMaybe<Order_By>;
  charityEntityType?: InputMaybe<Order_By>;
  charityName?: InputMaybe<Order_By>;
  contactEmail?: InputMaybe<Order_By>;
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
  maticWalletAddress?: InputMaybe<Order_By>;
  primaryContactAddress?: InputMaybe<Order_By>;
  primaryContactDateOfBirth?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  solWalletAddress?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
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
  CharityAbn = 'charityAbn',
  /** column name */
  CharityAcceptDirectDonations = 'charityAcceptDirectDonations',
  /** column name */
  CharityAddress = 'charityAddress',
  /** column name */
  CharityAllowProxyFundraiser = 'charityAllowProxyFundraiser',
  /** column name */
  CharityApprovalBeforeGoLive = 'charityApprovalBeforeGoLive',
  /** column name */
  CharityCreateFundraiser = 'charityCreateFundraiser',
  /** column name */
  CharityEntityType = 'charityEntityType',
  /** column name */
  CharityName = 'charityName',
  /** column name */
  ContactEmail = 'contactEmail',
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
  MaticWalletAddress = 'maticWalletAddress',
  /** column name */
  PrimaryContactAddress = 'primaryContactAddress',
  /** column name */
  PrimaryContactDateOfBirth = 'primaryContactDateOfBirth',
  /** column name */
  Role = 'role',
  /** column name */
  SolWalletAddress = 'solWalletAddress',
  /** column name */
  Status = 'status',
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
  charityAbn?: InputMaybe<Scalars['String']>;
  charityAcceptDirectDonations?: InputMaybe<Scalars['Boolean']>;
  charityAddress?: InputMaybe<Scalars['String']>;
  charityAllowProxyFundraiser?: InputMaybe<Scalars['Boolean']>;
  charityApprovalBeforeGoLive?: InputMaybe<Scalars['Boolean']>;
  charityCreateFundraiser?: InputMaybe<Scalars['Boolean']>;
  charityEntityType?: InputMaybe<Scalars['String']>;
  charityName?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
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
  maticWalletAddress?: InputMaybe<Scalars['String']>;
  primaryContactAddress?: InputMaybe<Scalars['String']>;
  primaryContactDateOfBirth?: InputMaybe<Scalars['date']>;
  role?: InputMaybe<Scalars['String']>;
  solWalletAddress?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<User_Status_Enum>;
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
  CharityAbn = 'charityAbn',
  /** column name */
  CharityAcceptDirectDonations = 'charityAcceptDirectDonations',
  /** column name */
  CharityAddress = 'charityAddress',
  /** column name */
  CharityAllowProxyFundraiser = 'charityAllowProxyFundraiser',
  /** column name */
  CharityApprovalBeforeGoLive = 'charityApprovalBeforeGoLive',
  /** column name */
  CharityCreateFundraiser = 'charityCreateFundraiser',
  /** column name */
  CharityEntityType = 'charityEntityType',
  /** column name */
  CharityName = 'charityName',
  /** column name */
  ContactEmail = 'contactEmail',
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
  MaticWalletAddress = 'maticWalletAddress',
  /** column name */
  PrimaryContactAddress = 'primaryContactAddress',
  /** column name */
  PrimaryContactDateOfBirth = 'primaryContactDateOfBirth',
  /** column name */
  Role = 'role',
  /** column name */
  SolWalletAddress = 'solWalletAddress',
  /** column name */
  Status = 'status',
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

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
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

export type GetAllUsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', aliasName?: string | null, charityEntityType?: string | null, charityAddress?: string | null, charityName?: string | null, charityAbn?: string | null, charityAcceptDirectDonations?: boolean | null, charityCreateFundraiser?: boolean | null, charityAllowProxyFundraiser?: boolean | null, charityApprovalBeforeGoLive?: boolean | null, contactNumber?: string | null, contactEmail?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, maticWalletAddress?: string | null, primaryContactAddress?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null, status?: User_Status_Enum | null, createdAt: any }> };

export type GetUserDetailsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserDetailsQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', aliasName?: string | null, charityEntityType?: string | null, charityAddress?: string | null, charityName?: string | null, charityAbn?: string | null, charityAcceptDirectDonations?: boolean | null, charityCreateFundraiser?: boolean | null, charityAllowProxyFundraiser?: boolean | null, charityApprovalBeforeGoLive?: boolean | null, contactNumber?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, contactEmail?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, maticWalletAddress?: string | null, primaryContactAddress?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null } | null };

export type CreateUserDetailsMutationVariables = Exact<{
  aliasName?: InputMaybe<Scalars['String']>;
  charityEntityType?: InputMaybe<Scalars['String']>;
  charityAddress?: InputMaybe<Scalars['String']>;
  charityName?: InputMaybe<Scalars['String']>;
  charityAbn?: InputMaybe<Scalars['String']>;
  charityAcceptDirectDonations?: InputMaybe<Scalars['Boolean']>;
  charityAllowProxyFundraiser?: InputMaybe<Scalars['Boolean']>;
  charityApprovalBeforeGoLive?: InputMaybe<Scalars['Boolean']>;
  charityCreateFundraiser?: InputMaybe<Scalars['Boolean']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
  cryptoOffRampStrategy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discordUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  ethWalletAddress?: InputMaybe<Scalars['String']>;
  expectedReleaseDate?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  isArtworkReady?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  maticWalletAddress?: InputMaybe<Scalars['String']>;
  primaryContactAddress?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
  solWalletAddress?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserDetailsMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', aliasName?: string | null, charityEntityType?: string | null, charityAddress?: string | null, charityName?: string | null, charityAbn?: string | null, charityAcceptDirectDonations?: boolean | null, charityCreateFundraiser?: boolean | null, charityAllowProxyFundraiser?: boolean | null, charityApprovalBeforeGoLive?: boolean | null, contactNumber?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, contactEmail?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, maticWalletAddress?: string | null, primaryContactAddress?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null } | null };

export type UpdateUserDetailsMutationVariables = Exact<{
  aliasName?: InputMaybe<Scalars['String']>;
  charityEntityType?: InputMaybe<Scalars['String']>;
  charityAddress?: InputMaybe<Scalars['String']>;
  charityName?: InputMaybe<Scalars['String']>;
  charityAbn?: InputMaybe<Scalars['String']>;
  charityAcceptDirectDonations?: InputMaybe<Scalars['Boolean']>;
  charityAllowProxyFundraiser?: InputMaybe<Scalars['Boolean']>;
  charityApprovalBeforeGoLive?: InputMaybe<Scalars['Boolean']>;
  charityCreateFundraiser?: InputMaybe<Scalars['Boolean']>;
  contactNumber?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  cryptoActivityRating?: InputMaybe<Scalars['Int']>;
  cryptoConfidenceRating?: InputMaybe<Scalars['Int']>;
  cryptoExperienceRating?: InputMaybe<Scalars['Int']>;
  cryptoOffRampStrategy?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  discordUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  ethWalletAddress?: InputMaybe<Scalars['String']>;
  expectedReleaseDate?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  isArtworkReady?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  logoUrl?: InputMaybe<Scalars['String']>;
  maticWalletAddress?: InputMaybe<Scalars['String']>;
  primaryContactAddress?: InputMaybe<Scalars['String']>;
  solWalletAddress?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  userType?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserDetailsMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', aliasName?: string | null, contactNumber?: string | null, country?: string | null, cryptoActivityRating?: number | null, cryptoConfidenceRating?: number | null, cryptoExperienceRating?: number | null, cryptoOffRampStrategy?: string | null, description?: string | null, discordUrl?: string | null, email?: string | null, contactEmail?: string | null, ethWalletAddress?: string | null, expectedReleaseDate?: any | null, firstName?: string | null, id: any, isArtworkReady?: boolean | null, lastName?: string | null, logoUrl?: string | null, role?: string | null, solWalletAddress?: string | null, twitterUrl?: string | null, userId: string, userType?: string | null, websiteUrl?: string | null, charityEntityType?: string | null, charityAddress?: string | null, charityName?: string | null, charityAbn?: string | null, primaryContactAddress?: string | null, charityAcceptDirectDonations?: boolean | null, charityCreateFundraiser?: boolean | null, charityAllowProxyFundraiser?: boolean | null, charityApprovalBeforeGoLive?: boolean | null, maticWalletAddress?: string | null } | null };


export const GetAllUsersDocument = gql`
    query GetAllUsers($limit: Int) {
  users(limit: $limit) {
    aliasName
    charityEntityType
    charityAddress
    charityName
    charityAbn
    charityAcceptDirectDonations
    charityCreateFundraiser
    charityAllowProxyFundraiser
    charityApprovalBeforeGoLive
    contactNumber
    contactEmail
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
    maticWalletAddress
    primaryContactAddress
    role
    solWalletAddress
    twitterUrl
    userId
    userType
    websiteUrl
    status
    createdAt
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserDetailsDocument = gql`
    query GetUserDetails($userId: String!) {
  users_by_pk(userId: $userId) {
    aliasName
    charityEntityType
    charityAddress
    charityName
    charityAbn
    charityAcceptDirectDonations
    charityCreateFundraiser
    charityAllowProxyFundraiser
    charityApprovalBeforeGoLive
    contactNumber
    country
    cryptoActivityRating
    cryptoConfidenceRating
    cryptoExperienceRating
    cryptoOffRampStrategy
    description
    discordUrl
    email
    contactEmail
    ethWalletAddress
    expectedReleaseDate
    firstName
    id
    isArtworkReady
    lastName
    logoUrl
    maticWalletAddress
    primaryContactAddress
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
 * __useGetUserDetailsQuery__
 *
 * To run a query within a React component, call `useGetUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDetailsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetUserDetailsQuery, GetUserDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDetailsQuery, GetUserDetailsQueryVariables>(GetUserDetailsDocument, options);
      }
export function useGetUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDetailsQuery, GetUserDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDetailsQuery, GetUserDetailsQueryVariables>(GetUserDetailsDocument, options);
        }
export type GetUserDetailsQueryHookResult = ReturnType<typeof useGetUserDetailsQuery>;
export type GetUserDetailsLazyQueryHookResult = ReturnType<typeof useGetUserDetailsLazyQuery>;
export type GetUserDetailsQueryResult = Apollo.QueryResult<GetUserDetailsQuery, GetUserDetailsQueryVariables>;
export const CreateUserDetailsDocument = gql`
    mutation CreateUserDetails($aliasName: String, $charityEntityType: String, $charityAddress: String, $charityName: String, $charityAbn: String, $charityAcceptDirectDonations: Boolean, $charityAllowProxyFundraiser: Boolean, $charityApprovalBeforeGoLive: Boolean, $charityCreateFundraiser: Boolean, $contactNumber: String, $country: String, $cryptoActivityRating: Int, $cryptoConfidenceRating: Int, $cryptoExperienceRating: Int, $cryptoOffRampStrategy: String, $description: String, $discordUrl: String, $email: String, $contactEmail: String, $ethWalletAddress: String, $expectedReleaseDate: date, $firstName: String, $isArtworkReady: Boolean, $lastName: String, $logoUrl: String, $maticWalletAddress: String, $primaryContactAddress: String, $role: String!, $solWalletAddress: String, $twitterUrl: String, $userId: String!, $userType: String, $websiteUrl: String) {
  insert_users_one(
    object: {aliasName: $aliasName, charityEntityType: $charityEntityType, charityAddress: $charityAddress, charityName: $charityName, charityAbn: $charityAbn, charityAcceptDirectDonations: $charityAcceptDirectDonations, charityCreateFundraiser: $charityCreateFundraiser, charityAllowProxyFundraiser: $charityAllowProxyFundraiser, charityApprovalBeforeGoLive: $charityApprovalBeforeGoLive, contactNumber: $contactNumber, country: $country, cryptoActivityRating: $cryptoActivityRating, cryptoConfidenceRating: $cryptoConfidenceRating, cryptoExperienceRating: $cryptoExperienceRating, cryptoOffRampStrategy: $cryptoOffRampStrategy, description: $description, discordUrl: $discordUrl, email: $email, contactEmail: $contactEmail, ethWalletAddress: $ethWalletAddress, expectedReleaseDate: $expectedReleaseDate, firstName: $firstName, isArtworkReady: $isArtworkReady, lastName: $lastName, logoUrl: $logoUrl, maticWalletAddress: $maticWalletAddress, primaryContactAddress: $primaryContactAddress, role: $role, solWalletAddress: $solWalletAddress, twitterUrl: $twitterUrl, userId: $userId, userType: $userType, websiteUrl: $websiteUrl}
  ) {
    aliasName
    charityEntityType
    charityAddress
    charityName
    charityAbn
    charityAcceptDirectDonations
    charityCreateFundraiser
    charityAllowProxyFundraiser
    charityApprovalBeforeGoLive
    contactNumber
    country
    cryptoActivityRating
    cryptoConfidenceRating
    cryptoExperienceRating
    cryptoOffRampStrategy
    description
    discordUrl
    email
    contactEmail
    ethWalletAddress
    expectedReleaseDate
    firstName
    id
    isArtworkReady
    lastName
    logoUrl
    maticWalletAddress
    primaryContactAddress
    role
    solWalletAddress
    twitterUrl
    userId
    userType
    websiteUrl
  }
}
    `;
export type CreateUserDetailsMutationFn = Apollo.MutationFunction<CreateUserDetailsMutation, CreateUserDetailsMutationVariables>;

/**
 * __useCreateUserDetailsMutation__
 *
 * To run a mutation, you first call `useCreateUserDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserDetailsMutation, { data, loading, error }] = useCreateUserDetailsMutation({
 *   variables: {
 *      aliasName: // value for 'aliasName'
 *      charityEntityType: // value for 'charityEntityType'
 *      charityAddress: // value for 'charityAddress'
 *      charityName: // value for 'charityName'
 *      charityAbn: // value for 'charityAbn'
 *      charityAcceptDirectDonations: // value for 'charityAcceptDirectDonations'
 *      charityAllowProxyFundraiser: // value for 'charityAllowProxyFundraiser'
 *      charityApprovalBeforeGoLive: // value for 'charityApprovalBeforeGoLive'
 *      charityCreateFundraiser: // value for 'charityCreateFundraiser'
 *      contactNumber: // value for 'contactNumber'
 *      country: // value for 'country'
 *      cryptoActivityRating: // value for 'cryptoActivityRating'
 *      cryptoConfidenceRating: // value for 'cryptoConfidenceRating'
 *      cryptoExperienceRating: // value for 'cryptoExperienceRating'
 *      cryptoOffRampStrategy: // value for 'cryptoOffRampStrategy'
 *      description: // value for 'description'
 *      discordUrl: // value for 'discordUrl'
 *      email: // value for 'email'
 *      contactEmail: // value for 'contactEmail'
 *      ethWalletAddress: // value for 'ethWalletAddress'
 *      expectedReleaseDate: // value for 'expectedReleaseDate'
 *      firstName: // value for 'firstName'
 *      isArtworkReady: // value for 'isArtworkReady'
 *      lastName: // value for 'lastName'
 *      logoUrl: // value for 'logoUrl'
 *      maticWalletAddress: // value for 'maticWalletAddress'
 *      primaryContactAddress: // value for 'primaryContactAddress'
 *      role: // value for 'role'
 *      solWalletAddress: // value for 'solWalletAddress'
 *      twitterUrl: // value for 'twitterUrl'
 *      userId: // value for 'userId'
 *      userType: // value for 'userType'
 *      websiteUrl: // value for 'websiteUrl'
 *   },
 * });
 */
export function useCreateUserDetailsMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserDetailsMutation, CreateUserDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserDetailsMutation, CreateUserDetailsMutationVariables>(CreateUserDetailsDocument, options);
      }
export type CreateUserDetailsMutationHookResult = ReturnType<typeof useCreateUserDetailsMutation>;
export type CreateUserDetailsMutationResult = Apollo.MutationResult<CreateUserDetailsMutation>;
export type CreateUserDetailsMutationOptions = Apollo.BaseMutationOptions<CreateUserDetailsMutation, CreateUserDetailsMutationVariables>;
export const UpdateUserDetailsDocument = gql`
    mutation UpdateUserDetails($aliasName: String, $charityEntityType: String, $charityAddress: String, $charityName: String, $charityAbn: String, $charityAcceptDirectDonations: Boolean, $charityAllowProxyFundraiser: Boolean, $charityApprovalBeforeGoLive: Boolean, $charityCreateFundraiser: Boolean, $contactNumber: String, $country: String, $cryptoActivityRating: Int, $cryptoConfidenceRating: Int, $cryptoExperienceRating: Int, $cryptoOffRampStrategy: String, $description: String, $discordUrl: String, $email: String, $contactEmail: String, $ethWalletAddress: String, $expectedReleaseDate: date, $firstName: String, $isArtworkReady: Boolean, $lastName: String, $logoUrl: String, $maticWalletAddress: String, $primaryContactAddress: String, $solWalletAddress: String, $twitterUrl: String, $userId: String!, $userType: String, $websiteUrl: String) {
  update_users_by_pk(
    pk_columns: {userId: $userId}
    _set: {aliasName: $aliasName, charityEntityType: $charityEntityType, charityAddress: $charityAddress, charityName: $charityName, charityAbn: $charityAbn, charityAcceptDirectDonations: $charityAcceptDirectDonations, charityCreateFundraiser: $charityCreateFundraiser, charityAllowProxyFundraiser: $charityAllowProxyFundraiser, charityApprovalBeforeGoLive: $charityApprovalBeforeGoLive, contactNumber: $contactNumber, country: $country, cryptoActivityRating: $cryptoActivityRating, cryptoConfidenceRating: $cryptoConfidenceRating, cryptoExperienceRating: $cryptoExperienceRating, cryptoOffRampStrategy: $cryptoOffRampStrategy, description: $description, discordUrl: $discordUrl, email: $email, contactEmail: $contactEmail, ethWalletAddress: $ethWalletAddress, expectedReleaseDate: $expectedReleaseDate, firstName: $firstName, isArtworkReady: $isArtworkReady, lastName: $lastName, logoUrl: $logoUrl, maticWalletAddress: $maticWalletAddress, primaryContactAddress: $primaryContactAddress, solWalletAddress: $solWalletAddress, twitterUrl: $twitterUrl, userType: $userType, websiteUrl: $websiteUrl}
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
    contactEmail
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
    charityEntityType
    charityAddress
    charityName
    charityAbn
    primaryContactAddress
    charityAcceptDirectDonations
    charityCreateFundraiser
    charityAllowProxyFundraiser
    charityApprovalBeforeGoLive
    maticWalletAddress
  }
}
    `;
export type UpdateUserDetailsMutationFn = Apollo.MutationFunction<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;

/**
 * __useUpdateUserDetailsMutation__
 *
 * To run a mutation, you first call `useUpdateUserDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserDetailsMutation, { data, loading, error }] = useUpdateUserDetailsMutation({
 *   variables: {
 *      aliasName: // value for 'aliasName'
 *      charityEntityType: // value for 'charityEntityType'
 *      charityAddress: // value for 'charityAddress'
 *      charityName: // value for 'charityName'
 *      charityAbn: // value for 'charityAbn'
 *      charityAcceptDirectDonations: // value for 'charityAcceptDirectDonations'
 *      charityAllowProxyFundraiser: // value for 'charityAllowProxyFundraiser'
 *      charityApprovalBeforeGoLive: // value for 'charityApprovalBeforeGoLive'
 *      charityCreateFundraiser: // value for 'charityCreateFundraiser'
 *      contactNumber: // value for 'contactNumber'
 *      country: // value for 'country'
 *      cryptoActivityRating: // value for 'cryptoActivityRating'
 *      cryptoConfidenceRating: // value for 'cryptoConfidenceRating'
 *      cryptoExperienceRating: // value for 'cryptoExperienceRating'
 *      cryptoOffRampStrategy: // value for 'cryptoOffRampStrategy'
 *      description: // value for 'description'
 *      discordUrl: // value for 'discordUrl'
 *      email: // value for 'email'
 *      contactEmail: // value for 'contactEmail'
 *      ethWalletAddress: // value for 'ethWalletAddress'
 *      expectedReleaseDate: // value for 'expectedReleaseDate'
 *      firstName: // value for 'firstName'
 *      isArtworkReady: // value for 'isArtworkReady'
 *      lastName: // value for 'lastName'
 *      logoUrl: // value for 'logoUrl'
 *      maticWalletAddress: // value for 'maticWalletAddress'
 *      primaryContactAddress: // value for 'primaryContactAddress'
 *      solWalletAddress: // value for 'solWalletAddress'
 *      twitterUrl: // value for 'twitterUrl'
 *      userId: // value for 'userId'
 *      userType: // value for 'userType'
 *      websiteUrl: // value for 'websiteUrl'
 *   },
 * });
 */
export function useUpdateUserDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>(UpdateUserDetailsDocument, options);
      }
export type UpdateUserDetailsMutationHookResult = ReturnType<typeof useUpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationResult = Apollo.MutationResult<UpdateUserDetailsMutation>;
export type UpdateUserDetailsMutationOptions = Apollo.BaseMutationOptions<UpdateUserDetailsMutation, UpdateUserDetailsMutationVariables>;
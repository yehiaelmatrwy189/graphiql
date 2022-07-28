/**
 *  Copyright (c) 2021 GraphQL Contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from 'react';

/**
 * GraphiQL
 */

import { GraphiQL } from './components/GraphiQL';
export { GraphiQL };
export default GraphiQL;

/**
 * Definitions
 */
export type { GraphiQLProps } from './components/GraphiQL';

export type {
  Fetcher,
  FetcherOpts,
  FetcherParams,
  FetcherResult,
  FetcherReturnType,
  Observable,
  Storage,
  SyncFetcherResult,
} from '@graphiql/toolkit';

/**
 * Toolbar
 */
export { ToolbarMenu, ToolbarMenuItem } from './components/ToolbarMenu';
export { ToolbarSelect, ToolbarSelectOption } from './components/ToolbarSelect';

/**
 * Legacy exports
 */
import {
  onHasCompletion as _onHasCompletion,
  QueryEditor as OrigQueryEditor,
  VariableEditor as OrigVariableEditor,
} from '@graphiql/react';
import {
  fillLeafs as _fillLeafs,
  getSelectedOperationName as _getSelectedOperationName,
  mergeAst as _mergeAst,
} from '@graphiql/toolkit';

export const onHasCompletion: typeof _onHasCompletion = function onHasCompletion(
  ...args
) {
  console.warn(
    'Importing `onHasCompletion` from `graphiql` is deprecated and will be removed in the next major version. Please switch to importing the `onHasCompletion` function provided by the `@graphiql/react` package.',
  );
  return _onHasCompletion(...args);
};

export const QueryEditor: typeof OrigQueryEditor = function QueryEditor(props) {
  console.warn(
    'Importing `QueryEditor` from `graphiql` is deprecated and will be removed in the next major version. Please switch to importing the `QueryEditor` component provided by the `@graphiql/react` package.',
  );
  return <OrigQueryEditor {...props} />;
};

export const VariableEditor: typeof OrigVariableEditor = function VariableEditor(
  props,
) {
  console.warn(
    'Importing `VariableEditor` from `graphiql` is deprecated and will be removed in the next major version. Please switch to importing the `VariableEditor` component provided by the `@graphiql/react` package.',
  );
  return <OrigVariableEditor {...props} />;
};

export const fillLeafs: typeof _fillLeafs = function fillLeafs(...args) {
  console.warn(
    'Importing `fillLeafs` from `graphiql` is deprecated and will be removed in the next major version. Please switch to importing the `fillLeafs` function provided by the `@graphiql/toolkit` package.',
  );
  return _fillLeafs(...args);
};

export const getSelectedOperationName: typeof _getSelectedOperationName = function getSelectedOperationName(
  ...args
) {
  console.warn(
    'Importing `getSelectedOperationName` from `graphiql` is deprecated and will be removed in the next major version. Please switch to importing the `getSelectedOperationName` function provided by the `@graphiql/toolkit` package.',
  );
  return _getSelectedOperationName(...args);
};

export const mergeAst: typeof _mergeAst = function mergeAst(...args) {
  console.warn(
    'Importing `mergeAst` from `graphiql` is deprecated and will be removed in the next major version. Please switch to importing the `mergeAst` function provided by the `@graphiql/toolkit` package.',
  );
  return _mergeAst(...args);
};
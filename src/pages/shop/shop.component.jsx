import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collections-overview.component.jsx';
import CollectionPage from '../collection/collection.component.jsx';

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

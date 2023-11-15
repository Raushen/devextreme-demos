import React from 'react';
import TreeView, { TreeViewTypes } from 'devextreme-react/tree-view';

import service, { ProductType } from './data.ts';

const products = service.getProducts();

const App = () => {
  const [currentItem, setCurrentItem] = React.useState(products[0]);

  const selectItem = React.useCallback((e: TreeViewTypes.ItemClickEvent & { itemData: ProductType }) => {
    setCurrentItem({ ...e.itemData });
  }, [setCurrentItem]);

  return (
    <div className="form">
      <TreeView
        id="simple-treeview"
        items={products}
        dataStructure="plain"
        displayExpr="name"
        parentIdExpr="categoryId"
        keyExpr="ID"
        width={300}
        onItemClick={selectItem}
      />
      {currentItem.price && (
        <div id="product-details">
          <img alt={currentItem.name} src={currentItem.icon} />
          <div className="name">{currentItem.name}</div>
          <div className="price">{`$${currentItem.price}`}</div>
        </div>
      )}
    </div>
  );
};

export default App;
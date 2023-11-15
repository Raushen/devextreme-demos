import React from 'react';
import FilterBuilder, { FilterBuilderTypes } from 'devextreme-react/filter-builder';
import Button from 'devextreme-react/button';
import List from 'devextreme-react/list';
import DataSource from 'devextreme/data/data_source';
import { filter, fields, products } from './data.ts';
import CustomItem from './CustomItem.tsx';

const App = () => {
  const dataSource = React.useRef(new DataSource({
    store: products,
  }));
  const filterBuilderInstance = React.useRef(null);
  const [value, setValue] = React.useState(filter);

  const setFilterBuilderInstance = (ref: { instance: any; }) => {
    filterBuilderInstance.current = ref.instance;
    refreshDataSource();
  };

  const onValueChanged = React.useCallback((e: FilterBuilderTypes.ValueChangedEvent) => {
    setValue(e.value);
  }, [setValue]);

  const refreshDataSource = React.useCallback(() => {
    dataSource.current.filter(filterBuilderInstance.current.getFilterExpression());
    dataSource.current.load();
  }, []);

  return (
    <div>
      <div className="filter-container">
        <FilterBuilder ref={setFilterBuilderInstance}
          fields={fields}
          value={value}
          onValueChanged={onValueChanged} />
        <Button
          text="Apply Filter"
          type="default"
          onClick={refreshDataSource} />
        <div className="dx-clearfix"></div>
      </div>
      <div className="list-container">
        <List dataSource={dataSource.current} itemRender={CustomItem} />
      </div>
    </div>
  );
};

export default App;
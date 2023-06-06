import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import ColumnHiding from './components/ColumnHiding';
import StickyTable from './components/StickyTable';
import GraphqlTable from './components/GraphqlTable';

function App() {
  return (
    <div className="App">
      {/* <BasicTable/> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <ColumnHiding /> */}
      {/* <StickyTable /> */}
      <GraphqlTable />
    </div>
  );
}

export default App;

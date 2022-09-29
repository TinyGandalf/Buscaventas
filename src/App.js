import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Queries from './components/Queries';
import Sellers from './components/Sellers';
import MercadoLibre from './services/MercadoLibre';

function App() {
  const [queries, setQueries] = useState([]);

  const handleSearch = (text) => {
    const queryText = text.trim().toUpperCase();

    if (queryText === '') {
      console.warn('The query title was empty.');
      return;
    }
    if (queries.find((query) => query.title === queryText)) {
      console.warn("There's already a query with the title:", queryText);
      return;
    }

    const placeholderQuery = MercadoLibre.search(queryText);
    setQueries(queries.concat(placeholderQuery));

    placeholderQuery.actualQuery.then(
      (query) => setQueries(
        (currentQueries) => currentQueries
          .filter((q) => q.id !== placeholderQuery.id)
          .concat(query)
      )
    );
  };

  const handleFilterQuery = (id) => console.log('Filtering query', id);

  const handleRemoveQuery = (id) => {
    const query = queries.find((q) => q.id === id);

    if (query.isPlaceholder) query.cancel();

    setQueries(queries.filter((q) => query !== q));
  };

  return (
    <div className="App">
      <h1>Buscaventas</h1>

      <SearchBar onSearch={handleSearch} />

      <Queries queries={queries} onFilter={handleFilterQuery} onRemove={handleRemoveQuery} />

      <Sellers queries={queries} />
    </div>
  );
}

export default App;

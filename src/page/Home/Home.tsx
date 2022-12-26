import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";

import { Search } from "../../components/Search/Search";
import { IWorkOrders } from "../../type/data";
import DataTable from "../../components/Block/DataTable";

import PaginationBlock from "../../components/Pagination";
import {
  getWorkOrdersFilterFalse,
  getWorkOrdersSearch,
} from "../../api/workOrders/workOrders.requests";
import { Sort } from "../../components/Sort";

function Home() {
  const [items, setItems] = useState<IWorkOrders[]>();
  const [itemsSort, setItemsSort] = useState("");
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState<number>(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      getWorkOrdersFilterFalse({ page }, itemsSort).then(({ data }) => {
        setItems(data.results);
        setTotalCount(Math.ceil(data.count / 10));
      });
      window.scrollTo(0, 0);

      if (search) {
        getWorkOrdersSearch(search).then(({ data }) => setItems(data.results));
      }
    } catch (error) {
      alert(error);
    }
  }, [page, search, itemsSort]);

  return (
    <>
      <div className="top__block">
        <div>
          <h2>Выберите Наряд на производство</h2>
          <div className="seactAndSort">
            <Search search={search} setSearch={setSearch} />
            <Sort setItemsSort={setItemsSort} />
          </div>
        </div>

        <Link to="/addwork">
          <div>
            <button>Добавить заказ на производство</button>
          </div>
        </Link>
      </div>

      <div>
        <DescriptionBlock />
        {search && <h2>по запросу {search} нашлось</h2>}
        {items ? (
          items.map((el, index) => <DataTable key={index} {...el} />)
        ) : (
          <h1>Loading</h1>
        )}

        <PaginationBlock
          totalCount={totalCount}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default Home;

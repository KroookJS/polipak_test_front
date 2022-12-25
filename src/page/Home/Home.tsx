import axios from "../../api/axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";

import { Search } from "../../components/Search/Search";
import { IWorkOrders } from "../../type/data";
import DataTable from "../../components/Block/DataTable";

import PaginationBlock from "../../components/Pagination";
import { getWorkOrders } from "../../api/workOrders/workOrders.requests";

function Home() {
  const [items, setItems] = useState<IWorkOrders[]>();
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState<number>(1);
  const [page, setPage] = useState(1);

  React.useEffect(() => {
    try {
      getWorkOrders({ page }).then(({ data }) => {
        setItems(data.results);
        setTotalCount(Math.ceil(data.count / 10));
      });
      window.scrollTo(0, 0);
    } catch (error) {
      alert(error);
    }
  }, [page]);

  const filterPay = items
    ? items.filter((el) => el.number.toLowerCase().includes(search))
    : [];

  return (
    <>
      <div className="top__block">
        <div>
          <h2>Выберите Наряд на производство</h2>
          <Search search={search} setSearch={setSearch} />
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
          filterPay.map((el, index) => <DataTable key={index} {...el} />)
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

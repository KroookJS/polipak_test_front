import axios from "../../api/axios";
import { useState, useEffect } from "react";
import BlockNom from "../../components/Block/BlockNom";

import { IProduct } from "../../type/data";
import { getNomenclatures } from "../../api/workOrders/workOrders.requests";

function Production() {
  const [nomenclature, setNomenclature] = useState<IProduct[]>();

  useEffect(() => {
    getNomenclatures().then(({ data }) => setNomenclature(data.results));
  }, []);

  return (
    <>
      <h2>Выберите номенклатуру</h2>
      <div className=".df-block">
        {nomenclature ? (
          nomenclature.map((el) => <BlockNom key={el.id} {...el} />)
        ) : (
          <h1>Loadin</h1>
        )}
      </div>
    </>
  );
}

export default Production;

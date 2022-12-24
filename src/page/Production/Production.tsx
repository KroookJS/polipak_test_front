import axios from "../../axios";
import { useState, useEffect } from "react";
import BlockNom from "../../components/Block/BlockNom";

import { INomenclatureProps } from "../../type/data";

function Production() {
  const [nomenclature, setNomenclature] = useState<INomenclatureProps[]>();

  useEffect(() => {
    axios
      .get("nomenclatures/")
      .then(({ data }) => setNomenclature(data.results));
  }, []);
  console.log(nomenclature);

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

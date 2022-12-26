import * as React from "react";
import styles from "./AddPost.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "../../api/axios";
import { Checkbox } from "@mui/material";
import { IProduct } from "../../type/data";
import Button from "@mui/material/Button";
import { AddOrderField } from "./AddOrderField";
import { useNavigate, useParams } from "react-router-dom";

import NativePickers from "../../components/NativePickers";
import { getNomenclatures } from "../../api/workOrders/workOrders.requests";

export default function AddWork() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [isFinished, setIsFinished] = React.useState(false);
  const [selectedMaterialId, setSelectedMaterialId] = React.useState(1);
  const [selectedProductId, setSelectedProductId] = React.useState(1);
  const [date, setData] = React.useState<null | string>(null);

  const [products, setProducts] = React.useState<IProduct[]>([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  React.useEffect(() => {
    getNomenclatures().then(({ data }) => setProducts(data.results));

    if (id) {
      try {
        axios.get(`workorders/${id}/`).then(({ data }) => {
          setNumber(data.number);
          setData(data.start_date);
          setIsFinished(data.is_finished);
          setSelectedMaterialId(data.material.id);
          setSelectedProductId(data.product.id);
          setIsLoading(true);
        });
      } catch (error) {
        alert("Ошибка при получении заказа");
        setIsLoading(true);
      }
    } else {
      setIsLoading(true);
    }
  }, []);

  const getDataFormat = (str: string) => {
    setData(str);
  };

  const onSubmit = async () => {
    try {
      const find = {
        number,
        start_date: date,
        material: selectedMaterialId,
        product: selectedProductId,
        is_finished: isFinished,
      };

      const { data } = isEdit
        ? await axios.put(`workorders/${id}/`, find)
        : await axios.post("workorders/", find);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Ошибка при создании заказа!");
    }
  };

  return (
    <>
      <h2 className={styles.ml}>Добавить закз на производства</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "450px" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={styles.container}>
          <div className={styles.textDecs}>
            <h4>Номер: в</h4>
          </div>
          <TextField
            error={!number ? true : false}
            variant="filled"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            id="outlined-basic"
            label="Номер"
            /* variant="outlined" */
          />
        </div>
        <div className={styles.container}>
          <div className={styles.textDecs}>
            <h4>Дата начало, план:</h4>
          </div>
          <NativePickers date={date} getDataFormat={getDataFormat} />
        </div>
        <div className={styles.container}>
          <div className={styles.textDecs}>
            <h4>Завершен:</h4>
          </div>
          <Checkbox
            onClick={() => setIsFinished(!isFinished)}
            color="success"
          />
        </div>

        <AddOrderField
          title="Материал:"
          fieldLabel="Материал:"
          onChange={(e) => setSelectedMaterialId(Number(e.target.value))}
          helperText="Выберите значение"
          isLoading={isLoading}
          products={products}
          selectedProductId={selectedMaterialId}
        />
        <AddOrderField
          title="Продукция"
          fieldLabel="Продукция"
          onChange={(e) => setSelectedProductId(Number(e.target.value))}
          helperText="Выберите значение"
          isLoading={isLoading}
          products={products}
          selectedProductId={selectedProductId}
        />
      </Box>

      <div className={styles.ml}>
        <Button
          color="primary"
          disabled={false}
          size="large"
          variant="text"
          onClick={onSubmit}
        >
          Cохранить
        </Button>
      </div>
    </>
  );
}

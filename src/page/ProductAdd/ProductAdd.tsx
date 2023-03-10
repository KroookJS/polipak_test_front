import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductAdd.module.scss";
import { IProductsProps } from "../../type/data";

import ProductBlock from "../../components/Block/ProductsBlock";
import {
  getWorkOrdersProduct,
  postWorkOrdersProduct,
} from "../../api/workOrders/workOrders.requests";

function ProductAdd() {
  const [products, setProducts] = useState<IProductsProps[]>([]);
  const [value, setValue] = useState("");
  const { id } = useParams();

  const currentId = id ? id : "";

  const addProducts = useCallback(async () => {
    try {
      await postWorkOrdersProduct(currentId, { weight: value });
      setValue("");
    } catch (error) {
      alert('Возникла ошибка при добавлении продукта');
      console.log();
    }
  }, [value]);

  useEffect(() => {
    try {
      if (id) {
        getWorkOrdersProduct(id).then(({ data }) => setProducts(data));
      }
    } catch (error) {
      alert('Возникла ошибка при получении продуктов');
      
    }
  }, [addProducts]);

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "450px" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2 className={styles.ml}>Добавить продукцию</h2>

        <TextField
          label="Масса, кг."
          id="outlined-start-adornment"
          type="number"
          onChange={(e) => setValue(e.target.value)}
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />

        <div className={styles.ml}>
          <Button
            color="primary"
            disabled={false}
            size="large"
            variant="text"
            onClick={addProducts}
          >
            Cохранить
          </Button>
        </div>
      </Box>

      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontWeight: 300,
        }}
      >
        Список добавленых продуктов
      </h2>
      <div className={styles.displayProduct}>
        {products.length >= 1 ? (
          products.map((el) => {
            return <ProductBlock key={el.id} {...el} />;
          })
        ) : (
          <h3
            style={{
              textAlign: "center",
              marginTop: "50px",
              fontWeight: 300,
            }}
          >
            Нет добавленых продуктов
          </h3>
        )}
      </div>
    </div>
  );
}

export default ProductAdd;

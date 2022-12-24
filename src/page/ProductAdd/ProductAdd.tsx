import { Box, Button, InputAdornment, TextField } from "@mui/material";
import axios from "../../axios";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductAdd.module.scss";
import { IProductsProps } from "../../type/data";

import ProductBlock from "../../components/Block/ProductsBlock";

function ProductAdd() {
  const [products, setProducts] = React.useState<IProductsProps[]>([]);
  const [value, setValue] = React.useState("");
  const { id } = useParams();

  const addProducts = async () => {
    await axios.post(`workorders/${id}/products/`, {
      weight: value,
    });
  };

  React.useEffect(() => {
    axios
      .get(`/workorders/${id}/products/`)
      .then(({ data }) => setProducts(data));
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

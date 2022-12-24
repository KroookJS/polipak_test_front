import * as React from "react";
import styles from "./AddPost.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import axios from "../../axios";
import { Checkbox, NativeSelect } from "@mui/material";
import { INomenclatureProps } from "../../type/data";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
/* import { DatePicker } from "@material-ui/pickers"; */
import Button from "@mui/material/Button";

import { useNavigate, useParams } from "react-router-dom";

import NativePickers from "../../components/NativePickers";

export default function AddWork() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [isFinished, setIsFinished] = React.useState(false);
  const [material, setMaterial] = React.useState(1);
  const [product, setProduct] = React.useState(1);
  const [date, setData] = React.useState<null | string>(null);

  const [products, setProducts] = React.useState<INomenclatureProps[]>([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  React.useEffect(() => {
    axios.get("nomenclatures/").then(({ data }) => setProducts(data.results));

    if (id) {
      try {
        axios.get(`workorders/${id}/`).then(({ data }) => {
          setNumber(data.number);
          setData(data.start_date);
          setIsFinished(data.is_finished);
          setMaterial(data.material.id);
          setProduct(data.product.id);
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
        material: material,
        product: product,
        is_finished: isFinished,
      };

      const { data } = isEdit
        ? await axios.put(`workorders/${id}/`, find)
        : await axios.post("workorders/", find);
      /*  const _id = isEdit ? id : data._id; */

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Ошибка при создании заказы!");
    }
  };

  console.log(products);

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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            id="outlined-basic"
            label="Номер"
            variant="outlined"
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

        <div className={styles.container}>
          <div className={styles.textDecs}>
            <h4>Материал:</h4>
          </div>
          {isLoading ? (
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue={material}
              onChange={(e) => setMaterial(Number(e.target.value))}
              helperText="Please select your currency"
            >
              {products.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.code + " " + option.name}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <h2>Загрузка</h2>
          )}
        </div>

        <div className={styles.container}>
          <div className={styles.textDecs}>
            <h4>Продукция:</h4>
          </div>
          {isLoading ? (
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue={product}
              onChange={(e) => setProduct(Number(e.target.value))}
              helperText="Please select your currency"
            >
              {products.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.code + " " + option.name}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <h2>Загрузка</h2>
          )}
        </div>
        <div></div>
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
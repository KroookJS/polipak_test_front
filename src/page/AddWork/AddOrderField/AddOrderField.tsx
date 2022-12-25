import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { IProduct } from "../../../type/data";
import styles from "./AddOrderField.module.scss";

type TProps = {
  title: string;
  fieldLabel: string;
  helperText: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isLoading: boolean;
  products: IProduct[];
  selectedProductId: number;
};
export const AddOrderField: FC<TProps> = ({
  title,
  fieldLabel,
  helperText,
  onChange,
  isLoading,
  products,
  selectedProductId,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textDecs}>
        <h4>{title}:</h4>
      </div>
      {isLoading ? (
        <TextField
          select
          label={fieldLabel}
          defaultValue={selectedProductId}
          onChange={(e) => onChange(e)}
          helperText={helperText}
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
  );
};

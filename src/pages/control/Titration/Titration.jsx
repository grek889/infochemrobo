import React, { useState } from "react";
import styles from "./Titration.module.scss";
import {
  Checkbox,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";

export const Titration = () => {
  const [reagent, setReagent] = React.useState("");
  const [C, setC] = React.useState("");
  const [V, setV] = React.useState("");
  const [W, setW] = React.useState("");
  const [p, setp] = React.useState("");
  const [firstRow, setFirstRow] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });
  const [secondRow, setSecondRow] = useState({
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const [thirdRow, setThirdRow] = useState({
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
  });
  const [fourthRow, setFourthRow] = useState({
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
  });

  const firstChange = (event) => {
    setFirstRow({
      ...firstRow,
      [event.target.name]: event.target.checked,
    });
  };
  const secondChange = (event) => {
    setSecondRow({
      ...secondRow,
      [event.target.name]: event.target.checked,
    });
  };
  const thirdChange = (event) => {
    setThirdRow({
      ...thirdRow,
      [event.target.name]: event.target.checked,
    });
  };
  const fourthChange = (event) => {
    setFourthRow({
      ...fourthRow,
      [event.target.name]: event.target.checked,
    });
  };

  console.log(firstRow, secondRow);

  return (
    <div className={styles.container}>
      <div>
        <Typography className={styles.title} variant="h3">
          Выберите свободную пробирку
        </Typography>
        <FormControl sx={{ mx: 3 }} component="fieldset" variant="standard">
          <FormGroup row className={styles.centredFormGroup}>
            <Checkbox checked={firstRow[1]} onChange={firstChange} name="1" />
            <Checkbox checked={firstRow[2]} onChange={firstChange} name="2" />
            <Checkbox checked={firstRow[3]} onChange={firstChange} name="3" />
            <Checkbox checked={firstRow[4]} onChange={firstChange} name="4" />
          </FormGroup>
          <FormGroup row>
            <Checkbox checked={secondRow[5]} onChange={secondChange} name="5" />
            <Checkbox checked={secondRow[6]} onChange={secondChange} name="6" />
            <Checkbox checked={secondRow[7]} onChange={secondChange} name="7" />
            <Checkbox checked={secondRow[8]} onChange={secondChange} name="8" />
            <Checkbox checked={secondRow[9]} onChange={secondChange} name="9" />
            <Checkbox
              checked={secondRow[10]}
              onChange={secondChange}
              name="10"
            />
          </FormGroup>
          <FormGroup row className={styles.centredFormGroup}>
            <Checkbox checked={thirdRow[11]} onChange={thirdChange} name="11" />
            <Checkbox checked={thirdRow[12]} onChange={thirdChange} name="12" />
            <Checkbox checked={thirdRow[13]} onChange={thirdChange} name="13" />
            <Checkbox checked={thirdRow[14]} onChange={thirdChange} name="14" />
            <Checkbox checked={thirdRow[15]} onChange={thirdChange} name="15" />
          </FormGroup>
          <FormGroup row className={styles.centredFormGroup}>
            <Checkbox
              checked={fourthRow[16]}
              onChange={fourthChange}
              name="16"
            />
            <Checkbox
              checked={fourthRow[17]}
              onChange={fourthChange}
              name="17"
            />
            <Checkbox
              checked={fourthRow[18]}
              onChange={fourthChange}
              name="18"
            />
            <Checkbox
              checked={fourthRow[19]}
              onChange={fourthChange}
              name="19"
            />
            <Checkbox
              checked={fourthRow[20]}
              onChange={fourthChange}
              name="20"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className={styles.formInputs}>
        <Typography className={styles.title} variant="h3">
          Введите реагент *
        </Typography>
        <TextField
          //   disabled
          id="reagent"
          value={reagent}
          onChange={(event) => {
            setReagent(event.target.value);
          }}
          helperText={
            <>
              *Если вы используете неизвестный <br /> нашей базе реагент,
              добавьте его
              <br />
              молярную массу по ссылке
            </>
          }
        />
      </div>
      <div className={styles.formInputs}>
        <Typography className={styles.title} variant="h3">
          Введите значение C или W
        </Typography>
        <TextField
          placeholder="Введите С [моль/л]"
          id="C"
          value={C}
          onChange={(event) => {
            setC(event.target.value);
          }}
        />
        <TextField
          placeholder="Введите W [%]"
          id="W"
          value={W}
          onChange={(event) => {
            setW(event.target.value);
          }}
        />
        <TextField
          placeholder="Введите p [г/см3] *"
          id="p"
          value={p}
          onChange={(event) => {
            setp(event.target.value);
          }}
        />
        <TextField
          placeholder="Введите V, 0-45000 [мкл]"
          id="V"
          value={V}
          onChange={(event) => {
            setV(event.target.value);
          }}
          helperText="*По умолчанию р = 1 [г/см3]"
        />
      </div>
    </div>
  );
};

import React from "react";
import styles from "./ManipulatorCard.module.scss";
import Robo from "@/assets/Robo.png";
import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const ManipulatorCard = ({ isActive, ...props }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={classNames(styles.cardInfo, isActive && styles.active)}>
        <Typography variant="h2" className={styles.title}>
          {props.title}
        </Typography>
        <Typography className={styles.subtitle} variant="body1">
          {props.subtitle}
        </Typography>
        <Button
          className={styles.cardButton}
          variant="contained"
          onClick={() => {
            navigate("/control");
          }}
        >
          Записаться
        </Button>
      </div>
      <img className={styles.cardImg} src={props.src} alt="robot" />
    </div>
  );
};

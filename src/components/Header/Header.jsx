import React from "react";
import Logo from "@/assets/Logo.svg";
import Avatar from "@/assets/Avatar.svg";
import styles from "./Header.module.scss";
import { IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../services/isAuth";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img
        onClick={() => {
          navigate("/");
        }}
        className={styles.logo}
        src={Logo}
        alt="logo"
      />
      {isAuth() && (
        <div className={styles.user}>
          <Typography variant="subtitle1" className={styles.userName}>
            Иван Иванов
          </Typography>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      )}
    </header>
  );
};

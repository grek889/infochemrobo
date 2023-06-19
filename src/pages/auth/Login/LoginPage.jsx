import React, { useState } from "react";
import styles from "./Login.module.scss";
import { Button, InputLabel, Link, TextField, Typography } from "@mui/material";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components";

const loginSchema = object({
  login: string().email("Некорректный email").required("Не указан логин"),
  password: string().required("Не указан пароль"),
});

export const LoginPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    localStorage.setItem("user", 1);
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Typography variant="h1" className={styles.title}>
            WELCOME TO INFOCHEMROBO!
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Нет аккаунта?
            <Link href="#">Зарегистрируйтесь</Link>
          </Typography>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputLabel className={styles.label} htmlFor="login">
              Логин
            </InputLabel>
            <Controller
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <TextField
                  error={error != null && true}
                  helperText={error?.message}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={styles.input}
                  placeholder="Введите логин..."
                />
              )}
              name="login"
              control={control}
            />
            <InputLabel className={styles.label} htmlFor="password">
              Пароль
            </InputLabel>
            <Controller
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <TextField
                  error={error != null && true}
                  helperText={error?.message}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  id="password"
                  className={styles.input}
                  placeholder="Введите пароль..."
                />
              )}
              name="password"
              control={control}
            />
            <Button type="submit" variant="contained" className={styles.button}>
              Войти
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

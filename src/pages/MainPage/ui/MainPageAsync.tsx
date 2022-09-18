import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Исскуственная задержка. В реальном проекте так не делеаем
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);

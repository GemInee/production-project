import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/about"}>О сайте</Link>
      <Link to={"/"}>Главная</Link>
      <AppRouter />
    </div>
  );
};

export default App;

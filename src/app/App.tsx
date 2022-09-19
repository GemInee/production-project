import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter />
    </div>
  );
};

export default App;

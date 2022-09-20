import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/about"}
          className={cls.mainLink}
        >
          О сайте
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Главная
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;

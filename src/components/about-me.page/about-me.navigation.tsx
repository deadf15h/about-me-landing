import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWidth } from "../../hooks/use-width";
import cn from "classnames";
import "./about-me.navigation.sass";

const AboutMeNavigation = () => {
  const goTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { isMobileWidth, isDesktopWidth } = useWidth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const { t } = useTranslation();

  return (
    <div className={cn("navigation", { _open: isOpen })}>
      {isMobileWidth ? (
        <div className="header__btn" onClick={toggleMenu}>
          <div className={cn("header__btn-row", { _opened: isOpen })} />
          <div className={cn("header__btn-row", { _opened: isOpen })} />
          <div className={cn("header__btn-row", { _opened: isOpen })} />
        </div>
      ) : (
        <>
          <div className="navigation__item" onClick={() => goTo("#home")}>
            {t("home")}
          </div>
          <div
            className="navigation__item"
            onClick={() => goTo("#description")}
          >
            {t("about me")}
          </div>
          <div className="navigation__item" onClick={() => goTo("#skills")}>
            {t("skills")}
          </div>
          <div className="navigation__item" onClick={() => goTo("#portfolio")}>
            {t("portfolio")}
          </div>
          <div className="navigation__item" onClick={() => goTo("#contacts")}>
            {t("contacts")}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMeNavigation;

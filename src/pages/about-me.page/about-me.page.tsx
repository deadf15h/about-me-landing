import AboutMeContacts from "../../components/about-me.page/about-me.contacts";
import AboutMeDescription from "../../components/about-me.page/about-me.description";
import AboutMeHome from "../../components/about-me.page/about-me.home";
import AboutMeNavigation from "../../components/about-me.page/about-me.navigation";
import AboutMePortfolio from "../../components/about-me.page/about-me.portfolio";
import AboutMeSkills from "../../components/about-me.page/about-me.skills";
import { useTheme } from "../../hooks/use-theme";
import "./about-me.page.sass";

const AboutMePage = () => {
  const { isDark } = useTheme();

  return (
    <div className="about-me">
      <AboutMeNavigation />
      <AboutMeHome />
      <AboutMeDescription />
      <AboutMeSkills />
      <AboutMePortfolio />
      <AboutMeContacts />
    </div>
  );
};

export default AboutMePage;

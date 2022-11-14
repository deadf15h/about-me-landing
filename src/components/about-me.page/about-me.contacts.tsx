import AppearingContainer from "../appearing-container";
import AboutMeContactsItem from "./about-me.contacts-item";
import iLinkedinLogo from "../../assets/img/linkedin-logo.png";
import iGithubLogo from "../../assets/img/github-logo.png";
import "./about-me.contacts.sass";

const AboutMeContacts = () => {
  return (
    <div className="about-me__container">
      <div className="contacts">
        <div className="about-me__title" id="contacts">
          Contacts
        </div>
        <AppearingContainer time={1} offset={-300}>
          <div className="about-me__subtitle contacts__subtitle">
            Want to know more or just chat? <br />
            You are welcome!
          </div>
          <a href="https://t.me/thelogsamurai" target="_blank">
            <div className="contacts__button">Send message</div>
          </a>
          <div className="contacts__list">
            <AboutMeContactsItem
              socialNetworkLogo={iLinkedinLogo}
              socialNetworkLink="https://www.linkedin.com/in/nikolai-morozov-45864b220/"
            />
            <AboutMeContactsItem
              socialNetworkLogo={iGithubLogo}
              socialNetworkLink="https://github.com/dalogsamurai"
            />
          </div>
        </AppearingContainer>
      </div>
    </div>
  );
};

export default AboutMeContacts;

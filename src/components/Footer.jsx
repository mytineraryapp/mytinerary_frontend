import("../App.css");

function Footer() {
  return (
    <div className="footerContainer">
      <div className="member">
        <span className="name">Connor Smith</span>
        <br />
        <span className="position">Project Lead</span>
        <br />
        <div className="links">
          <a href="https://github.com/nthconnor" className="socialLink">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/connor-smith-6660492a9/"
            className="socialLink"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="member">
        <span className="name">Abel Meseret</span>
        <br />
        <span className="position">Frontend Lead</span>
        <br />
        <div className="links">
          <a href="https://github.com/ameseret">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abel-meseret-a71386226/"
            className="socialLink"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="member">
        <span className="name">Michelle Oberg</span>
        <br />
        <span className="position">Backend Lead</span>
        <br />
        <div className="links">
          <a href="https://github.com/Moberg242">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/michelle-oberg-89487431b/"
            className="socialLink"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

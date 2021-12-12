import logosvg from "./img/Footer.svg";
import socialmedia from "./img/SocialMedia.png";

const Bathtub = (props) => {
  return (
    <section className={props.class}>
      <div>
        <img src={logosvg} alt="footerlogo" />
      </div>
      <div>
        <img src={socialmedia} alt="socialmedia" />
      </div>
    </section>
  );
};

export default Bathtub;

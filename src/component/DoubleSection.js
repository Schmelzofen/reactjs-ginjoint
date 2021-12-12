const DoubleSectionElement = (props) => {
  return (
    <div>
      <img src={props.image} />
      <h2>{props.text}</h2>
      <p>{props.tag}</p>
    </div>
  );
};

const DoubleSection = (props) => {
  return (
    <section className={props.class}>
      <DoubleSectionElement
        image={"/img/gin1.png"}
        text={
          "“A trick door opening to Bathtub Gin, a hopping Chelsea gin joint harkening back to the days of false store fronts”"
        }
        tag={"THE GUARDIAN"}
      />
      <DoubleSectionElement
        image={"/img/jack1.png"}
        text={
          "“Life on the inside: exactly how you imagined it’d be... nailhead-tucked bar stools and—smack-dab in the center of the room—a glass-covered, claw-foot bathtub.”"
        }
        tag={"URBAN DADDY"}
      />
    </section>
  );
};

export default DoubleSection;

const SectionComponent = (props) => {
  return (
    <section className={props.class}>
      <article>
        <span>{props.caption}</span>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>{props.button}</button>
      </article>
      <article>
        <img src={props.image} />
      </article>
    </section>
  );
};

export default SectionComponent;

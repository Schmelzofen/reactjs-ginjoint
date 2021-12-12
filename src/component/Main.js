const MainElement = (props) => {
  return (
    <section>
      <p>{props.titleUp}</p>
      <h1>{props.titleMain}</h1>
      <p>{props.titleDown}</p>
    </section>
  );
};

const Main = () => {
  return (
    <section className="Hero">
      <MainElement
        titleUp={"A CLASSIC"}
        titleMain={"GIN JOINT"}
        titleDown={"NEW YORK"}
      />
    </section>
  );
};

export default Main;

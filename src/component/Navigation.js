const NavigationElement = (props) => {
  return <li>{props.name}</li>;
};

const Navigation = (props) => {
  return (
    <section className={props.class}>
      <ul>
        <NavigationElement name={"HOME"} />
        <NavigationElement name={"ENTERTAINMENT"} />
        <NavigationElement name={"SHOP"} />
        <NavigationElement name={"EVENTS"} />
        <NavigationElement name={"CONTACT"} />
      </ul>
    </section>
  );
};

export default Navigation;

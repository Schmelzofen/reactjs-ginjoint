const FooterBarElement = (props) => {
  return (
    <ul>
      <p>{props.title}</p>
      <li>{props.first}</li>
      <li>{props.second}</li>
      <li>{props.third}</li>
      <li>{props.fourth}</li>
    </ul>
  );
};

const FooterBar = (props) => {
  return (
    <section className={props.class}>
      <div>
        <img src="/img/Logo.png" alt="logo" />
      </div>
      <FooterBarElement
        title={"FIND US"}
        first={"132 9TH AVENUE"}
        second={"NEW YORK, NY 10011"}
        third={"646-599-1671"}
        fourth={"INFO@BTGNYC.COM"}
      />
      <FooterBarElement
        title={"HOURS OF OPERATION"}
        first={"MONDAY"}
        second={"TUESDAY - FRIDAY"}
        third={"SATURDAY"}
        fourth={"SUNDAY"}
      />
      <FooterBarElement
        title={""}
        first={"8AM - 4PM"}
        second={"8AM - 10PM"}
        third={"9AM - 10PM"}
        fourth={"9AM - 4PM"}
      />
    </section>
  );
};

export default FooterBar;

const GalleryComponent = (props) => {
  return (
    <section>
      <div className={props.class}>
        <span>{props.title}</span>
      </div>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <h3>{props.description}</h3>
    </section>
  );
};

const Gallery = (props) => {
  return (
    <section className={props.class}>
      <h2>
        Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly
        entertainment is currently on pause. Stay tuned for updates on our
        reopening date and new events, coming soon!
      </h2>
      <article>
        <GalleryComponent
          class={"galley1"}
          title={"Jazz n' Jive"}
          date={"EVERY MONDAY"}
          time={"9-11PM"}
          description={
            "Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands."
          }
        />
        <GalleryComponent
          class={"galley2"}
          title={"Burlesque After Dark"}
          date={"EVERY TUESDAY & SUNDAY"}
          time={"9:30PM"}
          description={
            "Enter the world of burlesque and lose yourself in enticing witty performances, exceptional cocktails, and lively music."
          }
        />
        <GalleryComponent
          class={"galley3"}
          title={"DJs & Dance Tracks"}
          date={"Every Thursday, Friday & Saturday Night"}
          time={"FROM 9PM & 10PM"}
          description={
            "If you're looking for a packed crowd, come when the party is bigger, the pace is faster, and the morals are looser."
          }
        />
      </article>
    </section>
  );
};

export default Gallery;

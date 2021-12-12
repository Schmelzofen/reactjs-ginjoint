import Navigation from "./component/Navigation";
import Main from "./component/Main";
import SectionComponent from "./component/SectionComponent";
import Gallery from "./component/Gallery";
import DoubleSection from "./component/DoubleSection";
import FooterBar from "./component/FooterBar";
import Bathtub from "./component/Bathtub";

import bathtubimg from "./component/img/bathtubgin.png";
import drinksimg from "./component/img/drinks.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navigation class={"Navigation"} />
      <Main />
      <SectionComponent
        class={"SectionRepeat"}
        caption={"ABOUT"}
        title={"THE STORY OF BATHTUB GIN"}
        text={
          'Gin was the predominant drink in the United States during the Prohibition-Era 1920`s and many variations were created. "Bathtub gin" was developed in response to the poor-quality of alcohol that was available at the time.'
        }
        button={"Read More"}
        image={bathtubimg}
      />
      <Gallery class={"Gallery"} />
      <SectionComponent
        class={"SectionRepeat"}
        caption={"COCKTAIL & FOOD MENUS"}
        title={"HAND CRAFTED COCKTAILS & DAMN GOOD EATS"}
        text={
          "We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes."
        }
        button={"See Menus"}
        image={drinksimg}
      />
      <DoubleSection class={"DoubleSection"} />
      <FooterBar class={"FooterBar"} />
      <Bathtub class={"Bathtub"} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

export function SelectSD({ info }) {
  const [selectedProperty, setSP] = useState("light");

  /*
  monsterId
  */
  return (
    <div className="contentsWrapper">
      열린 던전 :
      <header className="selectProp">
        <div
          className="property"
          name="light"
          onClick={(e) => setSP(e.target.getAttribute("name"))}
        >
          빛
        </div>
        <div
          className="property"
          name="dark"
          onClick={(e) => setSP(e.target.getAttribute("name"))}
        >
          암
        </div>
        <div
          className="property"
          name="water"
          onClick={(e) => setSP(e.target.getAttribute("name"))}
        >
          물
        </div>
        <div
          className="property"
          name="fire"
          onClick={(e) => setSP(e.target.getAttribute("name"))}
        >
          불
        </div>
        <div
          className="property"
          name="wind"
          onClick={(e) => setSP(e.target.getAttribute("name"))}
        >
          풍
        </div>
      </header>
      <div className="selectMon">
        <Monsters prop={selectedProperty} />
      </div>
    </div>
  );
}

function Monsters(props) {
  const List = {
    light: [
      "Yeti",
      "Hellhound",
      "Salamander",
      "Howl",
      "Imp",
      "Viking",
      "Pixie",
      "Fairy",
      "Warbear",
      "Inugami",
      "Harpu",
      "Vagabond",
      "BearMan",
      "CowGirl",
    ],
    dark: [
      "Fairy",
      "Warbear",
      "Garuda",
      "Salamander",
      "Howl",
      "Imp",
      "Pixie",
      "Yeti",
      "Hellhound",
      "Inugami",
      "Harpu",
      "Vagabond",
      "BearMan",
      "Viking",
    ],
    fire: [
      "Yeti",
      "Garuda",
      "Harpu",
      "Howl",
      "Imp",
      "Pixie",
      "Fairy",
      "Harpy",
      "Serpent",
      "Griffon",
      "Vagabond",
      "MagicalArcher",
      "BearMan",
      "Viking",
      "BeastHunter",
    ],
    water: [
      "Hellhound",
      "Garuda",
      "Salamander",
      "Vagabond",
      "Imp",
      "Viking",
      "Pixie",
      "Harpy",
      "Serpent",
      "Golem",
      "Griffon",
      "Inferno",
      "Werewolf",
      "MagicalArcher",
      "BearMan",
      "GrimReaper",
    ],
    wind: [
      "Fairy",
      "Yeti",
      "Hellhound",
      "Warbear",
      "Harpu",
      "Howl",
      "Imp",
      "Viking",
      "Pixie",
      "Golem",
      "Inferno",
      "Werewolf",
      "MagicalArcher",
      "BearMan",
      "Lizardman",
    ],
  };
  const { prop: property } = props;
  const selected = List[property];
  return (
    <div>
      {selected.map((ele, key) => {
        return (
          <img
            src={`../SD/${property}/${ele}(${property}).jpg`}
            className="monsters"
            key={key}
          />
        );
      })}
    </div>
  );
}

import Link from "next/link"
import React from "react";
const CHTRID = 5;


export default function Page(){
    
    return (
        <div>
            <h1>StarWars character table</h1>
            <h2>The main goal is to create app to fetch StarWars characters from API. (GraphQl)</h2>
            <p>Show them in a table, and access their information by clicking on the table</p>
            <Link href={`/character/${CHTRID}`}>Character {CHTRID}</Link>   
        </div>
    )
}


/**
 * 
 * {
  "id": 1,
  "name": "Luke Skywalker",
  "height": 1.72,
  "mass": 73,
  "gender": "male",
  "homeworld": "tatooine",
  "wiki": "http://starwars.wikia.com/wiki/Luke_Skywalker",
  "image": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
  "born": -19,
  "bornLocation": "polis massa",
  "died": 34,
  "diedLocation": "ahch-to",
  "species": "human",
  "hairColor": "blond",
  "eyeColor": "blue",
  "skinColor": "light",
  "cybernetics": "Prosthetic right hand",
  "affiliations": [
    "Alliance to Restore the Republic",
    "Red Squadron",
    "Rogue Squadron",
    "Massassi Group",
    "Leia Organa's team",
    "Endor strike team",
    "Jedi Order",
    "Bright Tree tribe",
    "New Republic",
    "Resistance"
  ],
  "masters": [
    "Obi-Wan Kenobi",
    "Yoda"
  ],
  "apprentices": [
    "Leia Organa",
    "Ben Solo (along with a dozen apprentices)",
    "Rey"
  ],
  "formerAffiliations": []
}
 */
import React, { useEffect, useState } from "react";
import { ListItem } from "../list-item/list-item";
import "./list.css";

export function List() {
  const [parcs, setParcs] = useState({ records: [] });

  useEffect(() => {
    fetch(
      "https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_parcs-jardins-nantes&refine.table_pique_nique=OUI"
    )
      .then((response) => response.json())
      .then((data) => setParcs(data));
  }, []);

  return (
    <div className="card-container">
      {parcs.records.map((element) => (
        <ListItem parc={element} key={element.recordid} />
      ))}
    </div>
  );
}

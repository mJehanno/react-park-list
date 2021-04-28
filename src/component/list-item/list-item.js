import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./list-item.css";

export function ListItem(props) {
  const position = [
    props.parc.geometry.coordinates[1],
    props.parc.geometry.coordinates[0]
  ];
  console.log(position);
  return (
    <div className="card">
      <div className="map">
        <Map center={position} className="map-container" zoom="15">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{props.parc.fields["nom_complet"]}</Popup>
          </Marker>
        </Map>
      </div>
      <h2>{props.parc.fields["nom_complet"]}</h2>
      <div className="infos">
        <span className="address">{props.parc.fields["adresse"]}</span>
        <span className="transport">
          {props.parc.fields["acces_transport_commun"]}
        </span>
      </div>
    </div>
  );
}

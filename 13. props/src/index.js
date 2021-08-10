import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} width="125px" height="125px" />
      <p>{props.ph}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Fleabag"
      ph="12345678"
      img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fleabag-phoebe-t-1-1565085472.jpg?crop=0.583xw:0.972xh;0.211xw,0.0283xh&resize=640:*"
      alt="Fleabag"
      email="Fleabag@priest.com"
    />
    <Card
      name="Harvey Specter"
      img="https://i.pinimg.com/474x/e5/3e/ca/e53eca294ee120942b43a41031cdc70c.jpg"
      alt="chuckimg"
      ph="12394792"
      email="Harvey@specter.com"
    />
    <Card
      name="Thomas Shelby"
      img="https://i2-prod.birminghammail.co.uk/incoming/article11256820.ece/ALTERNATES/s1200c/JS88492176.jpg"
      alt="Tommy"
      ph="+918 372 574"
      email="Tommy@shelby.com"
    />
  </div>,
  document.getElementById("root")
);

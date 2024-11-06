import React from 'react';
import "../Components/style/client.css"
import img from "../assets/guvi.png"
const Client = () => {
  return (
    <div id='Client' className="my-clients">
      <h2>Worked With</h2>
      <p> 
        I have had the opportunity to work with a diverse company. The notable
        Company I have worked with is.
      </p>
      <div className="client-logos">
        <img src={img} alt="Guvi" />
      </div>
    </div>
  );
};

export default Client;

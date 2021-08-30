import React from "react";
import "./FormatStats.css";

export function user_data(data) {
  if (data && data.username) {
    return (
      <div>
        <h1 className="title">UserData.json Stats</h1> <br />
        <h3 className="stat">Username: {data.username}</h3> <br />
        <h3 className="stat">Email: {data.email}</h3> <br />
        <h3 className="stat">Country: {data.country}</h3> <br />
        <h3 className="stat">Birthday: {data.birthday}</h3> <br />
        <h3 className="stat">Gender: {data.gender}</h3> <br />
        <h3 className="stat">Postal Code: {data.postalCode}</h3> <br />
        <h3 className="stat">Mobile Number: {data.mobileNumber}</h3> <br />
        <h3 className="stat">Date Created: {data.creationTime}</h3> <br /><br /><br />
      </div>
    );
  }
}
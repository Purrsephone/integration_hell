import React from "react";
import "./FormatStats.css";

export function payments(data) {
  if (data && data.creation_date) {
    var today = new Date();
    let year = data.creation_date.substring(0, 4);
    const diffYear = today.getFullYear() - year;
    return (
      <div>
        <h1 className="title">Payments.json Stats</h1> <br />
        <h3 className="stat">You have been on spotify for {diffYear} years.</h3> <br />
        <h3 className="stat">Payment Method: {data.payment_method}</h3> <br />
        <h3 className="stat">Your postal code is {data.postal_code}.</h3> <br />
        <h3 className="stat">The date you added your payment information is {data.creation_date}.</h3> <br />
      </div>
    );
  }
}

import React from "react";
import "./FormatStats.css";
import { collapseTable } from "/Users/purrsephone/Desktop/integration_hell/my-app/src/components/CollapseTable";
import { arrtoStr } from "./Functions";

function inf_analys(
  products,
  user_type,
  soc_groups,
  tv,
  outdated,
  other,
  devices
) {
  let product_arr = arrtoStr(products);
  let user_type_arr = arrtoStr(user_type);
  let soc_groups_arr = arrtoStr(soc_groups);
  let tv_arr = arrtoStr(tv);
  let outdated_arr = arrtoStr(outdated);
  let other_arr = arrtoStr(other);
  let devices_arr = arrtoStr(devices);

  return (
    <div>
      <h6 className="stat">You are associated with {products.length} products/companies. </h6>
      <h6 className="collapseTitle">{collapseTable({product_arr}, "See Associated Products")}</h6> <br />
      <h6 className="stat">
        You are in {user_type.length} general user groups, assumptions about you
        made for the purpose of marketing
      </h6>
      <h6 className="collapseTitle">{collapseTable({user_type_arr}, "See Associated User Groups")}</h6><br />
      <h6 className="stat">You are associated with {devices.length} devices</h6>
      <h6 className="collapseTitle">{collapseTable({devices_arr}, "See Associated Devices")}</h6><br />
      <h6 className="stat"> You are in {soc_groups.length} social/political groups</h6>
      <h6 className="collapseTitle">{collapseTable({soc_groups_arr}, "See Social Groups")}</h6> <br />
      <h6 className="stat">You are in {tv.length} groups based around TV content</h6>
      <h6 className="collapseTitle">{collapseTable({tv_arr}, "See TV-based groups")}</h6><br />
      <h6 className="stat">
        You are in {outdated.length} outdated ad groups, meaning they no longer
        show you the corresponding ad(s)
      </h6>
      <h6 className="collapseTitle">{collapseTable({outdated_arr}, "See Outdated Ads")}</h6><br />
      <h6 className="stat">
        You are in {other.length} other categories, which may or may not fall
        into one of the above groups and just did not contain a keyword
      </h6>
      <h6 className="collapseTitle">{collapseTable({other_arr}, "See Other Groups")}</h6><br />
    </div>
  );
}

export function inferences(data) {
  var products = [];
  var user_type = [];
  var soc_groups = [];
  var tv = [];
  //var hulu_link = false;
  var devices = [];
  var outdated = [];
  var other = [];
  var words;
  if (data && data.inferences) {
    for (var i = 0; i < data.inferences.length; i++) {
      var str = data.inferences[i];
      if (str.includes("[Do Not Use")) {
        words = str.split("[Do Not Use");
        outdated.push(words[0].substring(2));
      } else if (str.includes("Politics")) {
        words = str.split("-");
        soc_groups.push(words[1]);
      } else if (str.includes("Cultural_Affinity")) {
        words = str.split("Cultural_Affinity");
        soc_groups.push(words[1]);
      } else if (
        str.includes("TV") ||
        str.includes("Subscriber") ||
        str.includes("Network") ||
        str.includes("Show") ||
        str.includes("Viewer") ||
        str.includes("Cable") ||
        str.includes("Hulu")
      ) {
        if (str.includes("Custom_")) {
          words = str.split("Custom_");
          tv.push(words[1]);
        } else {
          tv.push(str.substring(2));
        }
      } else if (
        str.includes("Buyers") ||
        str.includes("Owners") ||
        str.includes("Consumer") ||
        str.includes("Enthusiasts") ||
        str.toLowerCase().includes("lover") ||
        str.includes("Goer") ||
        str.includes("Shopper") ||
        str.includes("Intender") ||
        str.includes("Drinker") ||
        str.includes("Fan") ||
        str.includes("Competitor") ||
        str.toLowerCase().includes("purchaser") ||
        str.includes("Imitator") ||
        str.includes("Audience") ||
        str.includes("Gamer") ||
        str.includes("Wearer") ||
        str.includes("Cardholder") ||
        str.includes("Customer") ||
        str.includes("Stores") ||
        str.includes("Shops") ||
        str.includes("Supplies") ||
        str.includes("Visitor") ||
        str.includes("Tech") ||
        str.includes("Streaming") ||
        str.includes("Product") ||
        str.includes("Holder") ||
        str.includes("Contractor") ||
        str.includes("Shopping") ||
        str.includes("Retail") ||
        str.includes("Apparel") ||
        str.includes("Obsessed")
      ) {
        if (str.includes("Custom_")) {
          words = str.split("Custom_");
          products.push(words[1]);
        } else {
          products.push(str.substring(2));
        }
      } else if (
        str.includes("Streamer") ||
        str.includes("Listener") ||
        str.includes("Curator") ||
        str.includes("Commuter") ||
        str.includes("Income") ||
        str.includes("HHI") ||
        str.includes("Student") ||
        str.includes("Parent") ||
        str.includes("Majors") ||
        str.includes("Vacationer") ||
        str.includes("Leader") ||
        str.includes("Travelers") ||
        str.includes("Decision Maker") ||
        str.includes("Decision-Makers") ||
        str.includes("Veteran") ||
        str.includes("Employee") ||
        str.includes("Degree") ||
        str.includes("Mom") ||
        str.includes("Demographic") ||
        str.includes("Interest") ||
        str.includes("Dad") ||
        str.includes("Military") ||
        str.includes("Professional") ||
        str.includes("Remodelers") ||
        str.includes("Assets") ||
        str.includes("Likely") ||
        str.includes("Managers") ||
        str.includes("Graduate") ||
        str.includes("Police") ||
        str.toLowerCase().includes("persona") ||
        str.includes("College") ||
        str.includes("Lifestyle") ||
        str.includes("Individuals") ||
        str.includes("Enthusiast") ||
        str.includes("Personality") ||
        str.includes("Children") ||
        str.includes("Household") ||
        str.includes("Community") ||
        str.includes("Couple") ||
        str.includes("Divorce") ||
        str.includes("Health") ||
        str.includes("Family") ||
        str.includes("Diet") ||
        str.includes("Frequent") ||
        str.includes("Married") ||
        str.includes("Holidayers") ||
        str.includes("Pet") ||
        str.includes("Animal") ||
        str.includes("Running") ||
        str.includes("Runners") ||
        str.includes("Wedding") ||
        str.includes("Partier") ||
        str.includes("Speaker")
      ) {
        if (str.includes("Custom_")) {
          words = str.split("Custom_");
          user_type.push(words[1]);
        } else {
          if (str.includes("P_")) {
            user_type.push(str.substring(2));
          } else {
            user_type.push(str);
          }
        }
      } else if (
        str.includes("User") ||
        (str.includes("1P") && str.includes("Auto"))
      ) {
        if (str.includes("Custom_")) {
          words = str.split("Custom_");
          devices.push(words[1]);
        } else {
          devices.push(str.substring(2));
        }
      } else if (str.includes("2P")) {
        products.push(str.substring(2));
      } else {
        if (str.includes("Custom_")) {
          words = str.split("Custom_");
          other.push(words[1]);
        } else {
          if (str.includes("P_")) {
            other.push(str.substring(2));
          } else {
            other.push(str);
          }
        }
      }
    }
    return (
      <div>
        <h1 className="title">Inferences.json Stats</h1> <br />
        Spotify has you in {data.inferences.length} different marketing groups,
        to serve you a variety of ads.
        <br />
        Longer lists typically indicate you linked your account with another
        site or you may not have premium. <br /> The user group, devices, and other
        categories will typically be your longest if you did not link you
        account with another device.
        <br /> <br />
        {inf_analys(
          products,
          user_type,
          soc_groups,
          tv,
          outdated,
          other,
          devices
        )} <br /> <br />
      </div>
    );
  }
}

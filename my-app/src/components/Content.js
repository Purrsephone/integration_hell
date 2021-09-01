import React, { useState } from "react";
import "./About.css";
import Search from "./Search";
import DisplayInfo from "./DisplayInfo";
import { SideBar } from './SideBar';
import { highlightSelection } from '../utils';
import styled from 'styled-components';

var color = "pink";

function GetCurrColor()
{
  return color;
};

const Outer = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
`;

const Inner = styled.div`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;

const PurpleButton = styled.div`
  border: none;
  color: black;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 12px;
  width: 108px;
  height: 40px;
  padding: 8px 0;
  background-color: #F5B5FC;
  margin: 4px 2px
`;

const PinkButton = styled.div`
  border: none;
  color: black;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 12px;
  width: 108px;
  height: 40px;
  padding: 8px 0;
  background-color: #FCB1B1;
  margin: 4px 2px
`;

const YellowButton = styled.div`
  border: none;
  color: black;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 12px;
  width: 108px;
  height: 40px;
  padding: 8px 0;
  background-color: #F0F696;
  margin: 4px 2px
`;

const GreenButton = styled.div`
  border: none;
  color: black;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 12px;
  width: 108px;
  height: 40px;
  padding: 8px 0;
  background-color: #96F7D2;
  margin: 4px 2px
`;

function Content({ setSelected }) {
  const onMouseUp = () => {
    //source: https://stackoverflow.com/questions/7380190/select-whole-word-with-getselection
    var sel;
    if (window.getSelection && (sel = window.getSelection()).modify) {
        sel = window.getSelection();
        if (!sel.isCollapsed) {

            // Detect if selection is backwards
            var range = document.createRange();
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);
            var backwards = range.collapsed;
            range.detach();

            // modify() works on the focus of the selection
            var endNode = sel.focusNode, endOffset = sel.focusOffset;
            sel.collapse(sel.anchorNode, sel.anchorOffset);

            var direction = [];
            if (backwards) {
                direction = ['backward', 'forward'];
            } else {
                direction = ['forward', 'backward'];
            }

            sel.modify("move", direction[0], "character");
            sel.modify("move", direction[1], "word");
            sel.extend(endNode, endOffset);
            sel.modify("extend", direction[1], "character");
            sel.modify("extend", direction[0], "word");
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        if (textRange.text) {
            textRange.expand("word");
            // Move the end back to not include the word's trailing space(s),
            // if necessary
            while (/\s$/.test(textRange.text)) {
                textRange.moveEnd("character", -1);
            }
            textRange.select();
        }
    }
    sel = sel.toString();
    console.log(typeof(sel));
    if (sel === '') {
      return;
    }
    setSelected(sel);
    highlightSelection();

  };

  function SetPink()
  {
    color = "pink";
    return;
  };

  function SetPurple()
  {
    color = "purple";
    return;
  };

  function SetGreen(col)
  {
    color = "green";
    return;
  };

  function SetYellow()
  {
    color = "yellow";
    return;
  };

  const libraryInfo = "Your library file contains a list of all of the songs and albums you have saved to your Spotify library."
  const userDataInfo = "Your user data file contains misc. information about your account, including your email, username, birthdate, gender, and zip code whether or not you’ve linked it to Facebook or your phone number."
  const streamingHistoryInfo = "The streaming history file contains a list of all the songs you have played in the past year in addition to which date and time the song was played, the name of the artist, the name of the song, and how long you listened to the song in ms."
  const playlistInfo = "Your playlist library contains the entirety of all of the playlists you have made on Spotify."
  const inferencesInfo = "Your inferences file includes marketing groups you’ve been placed with, ads that you see on other accounts linked with your Spotify account (Hulu), and your interests."
  const paymentsInfo = "The payments file contains the payment method, card number, country to which account is linked, postal-code, and the creation date of your account."
  const identityInfo = "The identity file contains the information about you that would show up on your Spotify profile."
  const followInfo = "The follow file contains information about what users are following you and what users and artist’s you’re following."
  const searchQueriesInfo = "The search queries file contains a history of all the searches you’ve made on spotify in the past 3 months."

  return (
    <Outer>
      <Inner onMouseUp={onMouseUp}>
      <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
            <p class="about-text">
            <i>Instructions: Click the colored buttons to change the color of the highlighter.
            Use your cursor to highlight things you find interesting, confusing, surprising, or creepy.
            Then answer the prompt in the box that appears to the right.</i>
            </p>
              <Search />
              <p class="about-text">
              <PinkButton onClick={SetPink}>Interesting</PinkButton>
              <GreenButton onClick={SetGreen}>Confusing</GreenButton>
              <YellowButton onClick={SetYellow}>Surprising</YellowButton>
              <PurpleButton onClick={SetPurple}>Creepy</PurpleButton>
              </p>
              <h1 class="about-text">Your Json Files</h1>
              <p>
                <div id="about-text">
                  <DisplayInfo text={libraryInfo} header="Library"/>
                  <DisplayInfo text={userDataInfo} header="User Data"/>
                  <DisplayInfo text={streamingHistoryInfo} header="Streaming History"/>
                  <DisplayInfo text={playlistInfo} header="Playlist"/>
                  <DisplayInfo text={inferencesInfo} header="Inferences"/>
                  <DisplayInfo text={paymentsInfo} header="Payments"/>
                  <DisplayInfo text={identityInfo} header="Identity"/>
                  <DisplayInfo text={followInfo} header="Follow"/>
                  <DisplayInfo text={searchQueriesInfo} header="Search"/>
                </div>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      </Inner>
      {/*<div>{selected}</div>*/}
    </Outer>
  );
}

export { Content };
export { GetCurrColor };

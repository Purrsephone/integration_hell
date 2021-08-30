import React, { useState } from "react";
import "./About.css";
import Search from "./Search";
import DisplayInfo from "./DisplayInfo";
import DisplaySearch from "./DisplaySearch";
import DisplayFollow from "./DisplayFollow";
import { SideBar } from './SideBar';
import { highlightSelection } from '../utils';
import styled from 'styled-components';

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


function Content({ setSelected }) {
  const onMouseUp = () => {
    const s = window.getSelection().toString();

    if (s === '') {
      return;
    }
    setSelected(s);
    console.log(s);
    highlightSelection();
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
    <Outer onMouseUp={onMouseUp}>
      <Inner>
      <div className="about">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <Search />
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
                  <DisplayFollow />
                  <DisplaySearch />
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

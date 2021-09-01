import React from 'react';
import styled from 'styled-components';
import {GetCurrColor} from '../components/Content';

const Outer = styled.div`
  //min-width: 300px;
  width: 100%;
  max-width: 300px;
  max-height: 100%;
  overflow-y: auto;
  border-left: 1px solid grey;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const InputBox = styled.div`
  border-radius: 3px;
  border: 1px solid #F933FF;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0;
`;

const Selection = styled.div`
  border-radius: 3px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0;
`;

//would be nice to have specific text boxes based on colors
function GetWord()
{
  var word = "";
  var col = GetCurrColor();
  switch(col)
  {
    case "pink":
      word = "interesting";
      break;
    case "green":
      word = "confusing";
      break;
    case "yellow":
      word = "surprising";
      break;
    case "purple":
      word = "creepy"
      break;
  }
  return word;
}

function SideBar({ selections = [] }) {
  //reversing isn't working
  //also, text isn't binding to proper thing
  return (
    <Outer>
      <Inner>
        {selections.map((selection, i) => (
          <Selection key={i}>"{selection}"<br></br><i>Please explain why you highlighted the above text.</i><textarea name={i} cols="30" rows="5"></textarea></Selection>
        ))}
      </Inner>
    </Outer>
  );
  //nothing is being executed after this
  //selections.reverse();
  //console.log("TEST");
  //count += 1;
}

export { SideBar };

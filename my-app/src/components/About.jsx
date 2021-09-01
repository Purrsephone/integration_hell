import React, { useState } from 'react';
import { Content } from './Content';
import { SideBar } from './SideBar';
import styled from 'styled-components';

const Outer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

const Inner = styled.div`
  display: flex;
  //border: 1px solid grey;
  width: 100%;
  max-width: 900px;
`;

function About() {
  const [selections, setSelected] = useState([]);

  const onSelect = selection => {
    //setSelected([selection, ...selections]);
    setSelected([...selections, selection]);
  };

  return (
    <Outer>
        <Content setSelected={onSelect} />
        <SideBar selections={selections} />
    </Outer>
  );
}


export { About };




export default About;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 250px;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: gray;
`;

const SidebarItem = styled.select`
    width:200px;
    background-color:pink;
    height:50px;
`; 

const SideBar = () => {
    return <Container>
      <SidebarItem>
        <option >
          Deneme
        </option>
      </SidebarItem>
      <SidebarItem>
        <option>
          Deneme
        </option>
      </SidebarItem>
    </Container>;
};

export default SideBar;

import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Game from './Game';

function Container() {
  return (
    <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
`;

export default Container;
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'rebass'; 

import Home from './home/Home';
import Areas from './home/Areas';
import Noty from './notification/Noty';
import ThemeProvider from './ThemeProvider';


const NotyWithArea = (props) =>{
  const { match } = props;
  const { trail } = match.params;
  return  <Noty trail={trail}/>;
};

function App() {
  return (
    <ThemeProvider>
      <Box
        sx={{height: "100%"}}
        variant="fullContainer"
      >
        <Box className="App" variant="fullContainer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/areas/nuuksio_national_park" component={Areas} />
            <Route path="/noty/:trail" component={NotyWithArea} />
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

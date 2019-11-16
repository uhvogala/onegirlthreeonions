import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Box } from 'rebass'; 

import Home from './home/Home';
import Noty from './notification/Noty';
import ThemeProvider from './ThemeProvider';


const NotyWithArea = (props) =>{
  const { match } = props;
  const { area } = match.params;
  return  <Noty area={area}/>;
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
            <Route path="/areas/:area" component={Home} />
            <Route path="/noty/:area" component={NotyWithArea} />
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

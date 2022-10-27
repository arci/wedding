import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

function App() {
  const [open, setOpen] = useState(false);  

  return (
    <div className="App">
       {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
          This is what is in the drawer
      </SwipeableDrawer>
      <img src={logo} className="App-logo" alt="logo" />
      <p>fabio - marília</p>
      <p>Saturday, July 8, 2023 at 6 pm in Ragusa, Sicily</p>
      <p>Formal invitation and details to follow.</p>
    </div>
  );
}

export default App;

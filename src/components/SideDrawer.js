import React from 'react';
import { Drawer,Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dashboard, People, VideoLibrary, Home, ExitToApp } from '@material-ui/icons';

const SideDrawer = () => {
  return (
    <Drawer open={true}>
      <div style={{ backgroundColor: '#1A1A1A', width: '250px',height:'100%' }}>
        <List>
          <ListItem button >
            <ListItemIcon>
              <Dashboard style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <People style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Masterclass" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <People style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="VIP Consultation" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <VideoLibrary style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Video Module" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Home style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Home Page Banners" style={{ color: 'white' }} />
          </ListItem>
        </List>
      
      </div>
      <Button>LogOut</Button>
    </Drawer>
  );
};

export default SideDrawer;

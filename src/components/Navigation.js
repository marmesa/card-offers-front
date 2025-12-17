import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import XIcon from '@mui/icons-material/X';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Share"
        value="Share"
        icon={<SendIcon />}
        onClick={() => console.log('Enviado para o seu email!')}
      />
      <BottomNavigationAction
        label="WhatsApp"
        value="WhatsApp"
        icon={<WhatsAppIcon />}
      />
      <BottomNavigationAction
        label="Instagram"
        value="Instagram"
        icon={<InstagramIcon />}
      />
      <BottomNavigationAction 
        label="X" 
        value="X" 
        icon={<XIcon />} 
      />
    </BottomNavigation>
  );
}
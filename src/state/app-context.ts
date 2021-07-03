import React from 'react';
import { isPlatform } from '@ionic/react'


const AppContext = React.createContext({ isDesktop: false });

export default AppContext;
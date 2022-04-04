import React, { useState } from 'react';

import { Box, Tabs, Tab } from '@mui/material';

export default function Navbar({ router }) {

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'grey' }}>
      <Tabs onChange={(e, route) => router.navigate(route)} variant="scrollable">
       { router.routes.map(route => <Tab label={route} value={route}/>)}
      </Tabs>
    </Box>);

  }

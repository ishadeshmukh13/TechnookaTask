import Header from './Components/Header';
import SideBar from './Components/SideBar';
import InterviewDetails from './Components/InterviewDetails';

import { Box } from '@mui/material';

function App() {
  return (
    <Box style={{
    minHeight: '100vh',
    }}>
      <Header />
      <Box sx={webStyle.mainContainer}>
        <Box sx={webStyle.sidebarContainer}>
          <SideBar />
        </Box>
        <Box sx={webStyle.mainContentContainer}>
          <InterviewDetails />
        </Box>
      </Box>
    </Box>
  );
}

const webStyle = {
  mainContainer: {
    width: '100%',
    display: 'flex',
  },
  sidebarContainer: {
    width: '25%',
    borderRight: '1px solid #DCDCDC',
    boxShadow: '5px 0 10px rgba(0, 0, 0, 0.2)',
  },
  mainContentContainer: {
    width: '75%',
    padding: '20px',
    overflowY: 'auto',
    marginBottom: '20px',
  },
};

export default App;

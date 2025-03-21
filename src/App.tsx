import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Tooltip, Box } from '@mui/material'
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone'
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone'
import DataPage from './pages/DataPage'
import AnalysePage from './pages/AnalysePage'
import OptimisePage from './pages/OptimisePage'
import NavigationTabs from './components/NavigationTabs'

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <AppBar elevation={3} position='sticky'>
        <Toolbar>
          <IconButton edge='start' color='inherit'>
            <ScienceTwoToneIcon />
          </IconButton>

          <Typography
            variant='h6'
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 'bold'
            }}
          >
            AlgaeCultiviser
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title='Download Data'>
            <IconButton color='inherit'>
              <CloudDownloadTwoToneIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <NavigationTabs />
      </AppBar>
      <Box
        sx={{
          mt: 3, // Margin at the top
          width: '100%',
          height: 'calc(100vh - 115px)', // Dynamically adjust height (AppBar + NavigationTabs = ~115px)
          margin: '0 auto',
          padding: 2, // Keep padding for consistent spacing
          boxSizing: 'border-box', // Ensure padding is included in the height calculation
          overflow: 'auto', // Allow scrolling if content overflows
        }}
      >
        <Routes>
          <Route path='/' element={<DataPage />} />
          <Route path='/analyse' element={<AnalysePage />} />
          <Route path='/optimise' element={<OptimisePage />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App

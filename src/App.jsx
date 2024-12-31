import AppRoutes from './routes/index'
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  
  const theme = createTheme(
    {
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            root: {
              '&::-webkit-scrollbar': {
                width: '8px',
                marginRight: '5px'
              },
              '&::-webkit-scrollbar-track': {
                background: '#cfe31e', 
                borderRadius: '100px'
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#cfe31e',
                borderRadius: '100px'
              },
            }
          }
        }
      },
      palette: {
        primary: { main: "#2576d2" },
        text : {primary: "#000000", secondary: "#ffffff"}
      },
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

import Form from "./components/Form";
import { makeStyles,createTheme,ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main:'#5b2fad'
    },
    secondary:{
      main:'#428f48'
    }
  },
});
function App() {
  return (
    <div >
       <ThemeProvider theme={theme}>
            <Form />
       </ThemeProvider>
      
    </div>
  );
}

export default App;

import { createTheme } from '@material-ui/core/styles';
import { CorPrimaria } from './Colors';
import { CorNeutra } from './Colors';

const TemaMaterial = createTheme({
  palette: {
    primary: {
      main: CorPrimaria,
      contrastText: "white"
    },
    text: {
        primary: CorNeutra
    }
  }
})

export default TemaMaterial 

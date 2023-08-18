import './App.css';
import FindingFalcon from './finding_Falcon';
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="App"> 
      <SnackbarProvider >   
        <FindingFalcon />
      </SnackbarProvider> 
    </div>
  );
}

export default App;

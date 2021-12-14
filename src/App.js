import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    );
}

export default App;

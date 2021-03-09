import './App.css';
import Main from './Components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Main />
    </div>
    </Provider>
  );
}

export default App;

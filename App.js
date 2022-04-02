import StopWatch from './src/index'
import { store } from './src/redux/Store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <StopWatch/>
    </Provider>
  );
}


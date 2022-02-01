import { Provider } from 'react-redux';
import store from './store';
import Auth from './pages/Auth';

export default function App() {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
}

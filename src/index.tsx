import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App';
import { Provider } from 'react-redux';
import store from './Storage/Redux/store';
import { SpeedInsights } from "@vercel/speed-insights/react"

// import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
<App /> 
<SpeedInsights/>

  </Provider>
      
);


import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //the main place where the react aoolication gets rendered to
root.render(<App />);  // rending whats inside the app and <App /> is not regular js syntax it is jsx and the App is component

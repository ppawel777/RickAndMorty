import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.scss'

// eslint-disable-next-line react-refresh/only-export-components
const AppRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppRouter />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

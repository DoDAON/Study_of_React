import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

import Library from './chapter_03/Library.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* 챕터 3 */}
    <Library />
  </StrictMode>,
)
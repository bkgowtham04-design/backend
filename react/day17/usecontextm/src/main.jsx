import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import Inputprovider from './provider/Inputprovider.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
<ThemeProvider>


<Inputprovider>



<App />
</Inputprovider>

</ThemeProvider>
 







   
  
)

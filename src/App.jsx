import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Componant/Layout/Layout'
import Portfolio from './Componant/Portfolio/Portfolio'
import Home from './Componant/Home/Home'
import Navbar from './Componant/Navbar/Navbar'
import Footer from './Componant/Footer/Footer'
import Contact from './Componant/Contact/Contact'
import About from './Componant/About/About'
import '@fortawesome/fontawesome-free/css/all.min.css';

let routes = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'navbar',element:<Navbar/>},
    {path:'footer',element:<Footer/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'about',element:<About/>},


  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App

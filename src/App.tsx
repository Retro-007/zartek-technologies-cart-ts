import React from 'react'
import Home from './pages/Home'
import { DataProvider } from './context/DataContext'
import Header from './components/header/Index'
import { ChakraProvider } from '@chakra-ui/react'
import "./assets/custom.css"
import { CartProvider } from './context/CartContext'


function App() {

  return (
    <React.Fragment>
      <ChakraProvider>
        <DataProvider>
          <CartProvider>


            <Header />

            <Home />

          </CartProvider>
        </DataProvider>
      </ChakraProvider>

    </React.Fragment>
  )
}

export default App

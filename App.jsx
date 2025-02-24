
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { AppLayout } from './Components/Layout/AppLayout'
import { ErrorComp } from './Components/AllPoducts/ErrorPage/ErrorPage'
import { CartComp } from './Components/CartPage/Cart'
import { MenProductPageComp } from './Components/AllPoducts/ProductCatagory/MenCatagory/MenProductPage'
import { AllProducts } from './Components/AllPoducts/ElectronicProductPage/Products'
import { CartItemsComp } from './Components/CartPage/CartItems'




// function App() {
//   return (
//     <>
//     <BrowserRouter>
// <Navigation />
// <CarouselComponent />
// {/* <AllProducts /> */}
// <ProductCatogaryEle/>
// <MenCatagory />
// <FooterComp />
//     </BrowserRouter>
//     </>
//   )
// }

// export default App


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
     
      {
        path: "men",
        element: <MenProductPageComp />,
      },
      {
        path: "electronic",
        element: <AllProducts />,
      },  
      {
        path: "cart",
        element: <CartItemsComp />,
      },    
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;

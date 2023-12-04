import { BrowserRouter, Routes, Route } from "react-router-dom";
import "~/assets/scss/style.scss";
import Home from "./containers/Home";
import publicRoutes from "./services/router";
import Layout from "./containers/Layout";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          {publicRoutes.map((route,index) => {
            return <Route key={index}  path={route.path} element={<Layout>< route.element /></Layout> } />
          })}
      </Routes>
    </BrowserRouter>
  )
}

export default App

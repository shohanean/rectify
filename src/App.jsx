import React from "react";

import Master from "./layouts/Master";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Master />}>
        <Route path="/" element={<Index />} /> 
        <Route path="details/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

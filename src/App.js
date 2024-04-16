import { createBrowserRouter,Link,Route,Router,Routes ,NavLink, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import RootLayouts from "./Layouts/RootLayouts";
import HelpLayout from "./Layouts/HelpLayout";
import Faq from "./pages/faq";
import Contact, { contactAction } from "./pages/Contact";
import Error from "./pages/Error";
import CareerLayout from "./Layouts/CareerLayout";
import Career, { careerLoader } from "./pages/Career";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayouts />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} action={(req) => contactAction(req)} />

        </Route>


        <Route path="careers" element={<CareerLayout/>} errorElement={<CareersError/>}>
            <Route index element={<Career/>} loader={careerLoader}/>
            <Route path="careers/:id" element={<CareerDetails/>} loader={careerDetailsLoader}/>
        </Route>
       


        <Route path="*" element={<Error/>}/>
      </Route>
    )
  )

function App() {
  return (
  
         <RouterProvider router={router}/>

   
  );
}

export default App

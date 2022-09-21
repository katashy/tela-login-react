
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Login } from "../Pages/Login";
import { Register } from "../Pages/register";

export const AppRouter = () => {
return(
   < Router>
     <Routes>
        <Route path="/Login" exact element={<Login/>} />
        <Route path="/Register" exact element={<Register/>} />

     </Routes>
   </Router>
);

}
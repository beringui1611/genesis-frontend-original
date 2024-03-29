import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../containers/Home";
import Farm from "../containers/Farm";
import Whitepaper from "../containers/Whitepaper"
import Buy from "../containers/Buy"

function MyRoutes(){
    return (
        <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/buy" element={<Buy/>}/>
            <Route path="/whitepaper" element={<Whitepaper/>}/>
            <Route path="/farm" element={<Farm/>}/>
          </Routes>
        </Router>
    );
};

export default MyRoutes;
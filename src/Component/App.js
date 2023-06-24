import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom';
import { Navbar ,Home,PostDetail ,CreatePost } from "./";

function App() {
  return (
    
    <div className="Container">
    <Navbar />
     
     <Routes>
      <Route exact path="/" Component={Home} />
    
        <Route exact path="/post/:postId" Component={PostDetail} />
        <Route exact path="/create-post" Component={CreatePost} />

      </Routes>
  
    </div>
   
  );
}

export default App;

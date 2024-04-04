import React from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import SCP002Data from './scp_002.json';
import SCP003Data from './scp_003.json';
import SCP004Data from './scp_004.json';
import SCP005Data from './scp_005.json';
import SCP006Data from './scp_006.json';
import scp002Image from './800px-SCP002.jpg';
import scp004Image from './SCP004_door.jpg';
import scp005Image from './SCP-005.jpg';
import './App.css';

class MyClass extends React.Component {
  render() {
    return <div className="title">Secure Contain Protect.</div>;
  }
}

function SCPDetails() {
  const { id } = useParams();
  let scp;
  let scpImage;

  switch (id) {
    case 'SCP-002':
      scp = SCP002Data;
      scpImage = scp002Image;
      break;
    case 'SCP-003':
      scp = SCP003Data;
      // Assign image for SCP-003
      break;
    case 'SCP-004':
      scp = SCP004Data;
      scpImage = scp004Image;
      break;
    case 'SCP-005':
      scp = SCP005Data;
      scpImage = scp005Image;
      break;
    case 'SCP-006':
      scp = SCP006Data;
      // Assign image for SCP-006
      break;
    default:
      return <div>SCP not found</div>;
  }

  return (
    <div className="scp-container">
      <h2>{scp?.item}</h2>
      <div className="image-row">
        <img src={scp005Image} alt={"scp 005"} />
        <img src={scp004Image} alt={"scp 004"} />
        <img src={scp002Image} alt={"scp 002"} />
      </div>
      <p>Object Class: {scp?.class}</p>
      <p>Containment: {scp?.containment}</p>
      <p>Description: {scp?.description}</p>
    </div>
  );
}
  

function App() {
  return (
    <div>
     
      <nav className="navbar">
        <NavLink className="navbar-link" to="/scp/SCP-002">SCP-002</NavLink>
        <NavLink className="navbar-link" to="/scp/SCP-003">SCP-003</NavLink>
        <NavLink className="navbar-link" to="/scp/SCP-004">SCP-004</NavLink>
        <NavLink className="navbar-link" to="/scp/SCP-005">SCP-005</NavLink>
        <NavLink className="navbar-link" to="/scp/SCP-006">SCP-006</NavLink>
      </nav>
      <div className="container">
        <MyClass />
        <Routes>
          <Route path="/scp/:id" element={<SCPDetails />} />
        </Routes>
      </div>
      <footer className="footer">
        
      </footer>
    </div>
  );
}




export default App;

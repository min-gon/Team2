import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VideoMeeting from "./pages/VideoMeeting";
import Mainpage from "./pages/Mainpage";
import CreateRoom from "./pages/CreateRoom";
import RoomList from "./pages/RoomList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FindPassword from "./pages/FindPassword";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "233505782576-acmbig2ssomblm8c8spashbrj6004jdl.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/video" element={<VideoMeeting />} />
            <Route path="/createroom" element={<CreateRoom />} />
            <Route path="/findroom" element={<RoomList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/findpwd" element={<FindPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider >
  );
}

export default App;
// App.js

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import VideoMeeting from "./pages/VideoMeeting";
// import Mainpage from "./pages/Mainpage";
// import CreateRoom from "./pages/CreateRoom";
// import RoomList from "./pages/RoomList";
// import Login from "./pages/Login"; // 새로 추가한 파일을 import

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Mainpage />} />
//           <Route path="/video" element={<VideoMeeting />} />
//           <Route path="/cr" element={<CreateRoom />} />
//           <Route path="/roomList" element={<RoomList />} />
//           <Route path="/login" element={<Login />} /> {/* 로그인 페이지 경로 추가 */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

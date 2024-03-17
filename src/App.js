// //for insert process
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Insert from './Component/Insert/Insert';
// import SuccessMSG from './Component/SuccessMSG';
// import ErrorMSG from './Component/ErrorMSG';

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Insert/>}></Route>
//       <Route path="/success" element={<SuccessMSG/>}></Route>
//       <Route path="/error" element={<ErrorMSG/>}></Route>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//for select process

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorMSG from "./Component/ErrorMSG";
import Read from "./Component/Read/Read";
import ReadProcess from "./Component/ReadProcess";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/readprocess/:id" element={<ReadProcess />} />
          <Route path="/error" element={<ErrorMSG />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// //for update process
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ErrorMSG from "./Component/ErrorMSG";
// import Read from "./Component/Read/Read";
// import ReadProcess from "./Component/ReadProcess";
// import SuccessMSG from "./Component/SuccessMSG"
// import Update from "./Component/Update/Update";
// import Delete from "./Component/Delete/Delete";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Read />} />
//           <Route path="/readprocess/:id" element={<ReadProcess />} />
//           <Route path="/update/:id" element={<Update/>}/>
//           <Route path="/delete/:id" element={<Delete/>}/>
//           <Route path="/success" element={<SuccessMSG />} />
//           <Route path="/error" element={<ErrorMSG />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
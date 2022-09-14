import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./components/GetImages";
import Image from "./components/Image";
import Error from './components/Error';
import ImageDetailed from "./pages/ImageDetailed";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          <Route path="/image/:id" element={<ImageDetailed />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

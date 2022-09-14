import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetImages from "./components/GetImages";
import Error from './components/Error';
import Header from './components/Header';
import ImageDetailed from "./pages/ImageDetailed";
import Search from './pages/Search'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<GetImages />} />
            <Route path="/image/:id" element={<ImageDetailed />} />
            <Route path="*" element={<Error />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  )
}

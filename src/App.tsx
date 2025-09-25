import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
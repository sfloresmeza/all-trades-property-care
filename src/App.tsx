import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound.tsx";
import Index from "@/pages/Index.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
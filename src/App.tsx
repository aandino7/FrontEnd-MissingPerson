import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Missing from "./routes/missing/missing.component";
import Upload from "./routes/upload/upload.component";
import Found from "./routes/found/found.component";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="missing" element={<Missing />} />
        <Route path="upload" element={<Upload />} />
        <Route path="found" element={<Found />} />
      </Route>
    </Routes>
  );
};

export default App;
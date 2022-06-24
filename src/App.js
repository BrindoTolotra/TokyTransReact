import './bootstrap-4.0.0/dist/css/bootstrap.css'
import './App.css'
import { Header } from "./Components/Header";
import { SectionApropos } from "./Components/SectionApropos";
import { SectionQuality } from "./Components/SectionQuality";
function App() {
  return (
    <>
      <Header/>
      <SectionApropos/>
      <SectionQuality className="quality"/>
    </>
  )
}

export default App;

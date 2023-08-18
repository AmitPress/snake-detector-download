import './App.css'
import {AppInfo} from './components/AppInfo.jsx'
import {Slides} from './components/Slides.jsx'
const App = () => {
  return (<>
  <div className="wrapper">
    <Slides />
    <AppInfo />
  </div>
  </>)
}
export default App
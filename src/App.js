
import PlateForm from "./components/PlateForm";
import PlateList from "./components/PlateList";
import Navbars from "./components/Navbars";



const App = () => (

  <div style={{ width: '80%', margin: 'auto' }}>
    <Navbars/>  
    <PlateForm></PlateForm>
    <hr></hr>
    <PlateList></PlateList>
  </div>
)



export default App;

import './App.css'
import { FormComponent } from './components/form/form.component'
import { HeroComponent } from './components/hero/hero.component'
import { MapComponent } from './components/map/map.component'
function App() {
  

  return (
    <div className='relative'>
      <HeroComponent />
      <MapComponent />
      <FormComponent />
    </div>
  )
}

export default App

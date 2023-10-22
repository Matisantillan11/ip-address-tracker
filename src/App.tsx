
import './App.css'

import { FormComponent } from './components/form/form.component'
import { HeroComponent } from './components/hero/hero.component'
import { MapComponent } from './components/map/map.component'
import { useLocation } from './hooks/useLocation'


function App() {
  const { locationData, isLoading, searchValue, setSearchValue } = useLocation();

  return (

      <div className='relative'>
        <HeroComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        <MapComponent />
        <FormComponent locationData={locationData} isLoading={isLoading}/>
      </div>
  )
}

export default App

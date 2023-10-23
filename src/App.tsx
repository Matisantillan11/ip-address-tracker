import { FormComponent } from './components/form/form.component'
import { HeroComponent } from './components/hero/hero.component'
import { MapComponent } from './components/map/map.component'
import { useLocation } from './hooks/useLocation'


function App() {
  const { locationData, isLoading, searchValue, setSearchValue } = useLocation();

  return (
      <div className='relative overflow-hidden'>
        <HeroComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
        <MapComponent locationData={locationData} isLoading={isLoading}/>
        <FormComponent locationData={locationData} isLoading={isLoading}/>
      </div>
  )
}

export default App

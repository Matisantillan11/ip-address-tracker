import { Dispatch, FC, SetStateAction } from 'react';
import './hero.styles.css'
import { Searcher } from './searcher/searcher.component'

interface HeroProps { 
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>
}
export const HeroComponent:FC<HeroProps> = ({ searchValue, setSearchValue}) => {
    return (
        <div className='hero_container'>
            <h1>IP Address Tracker</h1>
            <Searcher value={searchValue} onChangeInput={setSearchValue} placeholder='Search for any IP address or domain' />
        </div>
    )
}
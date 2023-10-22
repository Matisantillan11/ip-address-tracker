import './hero.styles.css'
import { Searcher } from './searcher/searcher.component'

export const HeroComponent = () => {
    return (
        <div className='hero_container'>
            <h1>IP Address Tracker</h1>
            <Searcher placeholder='Search for any IP address or domain' />
        </div>
    )
}
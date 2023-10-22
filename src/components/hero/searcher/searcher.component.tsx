import { FC, HTMLProps } from 'react';
import './searcher.styles.css';

interface SearcherProps extends HTMLProps<HTMLInputElement>{}
export const Searcher: FC<SearcherProps> = (props) => {
    return (
        <div className="searcher_wrapper">
            <input {...props} />
            <div className='searcher_action'></div>
        </div>
    )
}
import { Dispatch, FC, HTMLProps, SetStateAction } from 'react';
import './searcher.styles.css';

interface SearcherProps extends HTMLProps<HTMLInputElement>{
    onChangeInput: Dispatch<SetStateAction<string>>
}
export const Searcher: FC<SearcherProps> = (props) => {
    const { onChangeInput } = props;
    return (
        <div className="searcher_wrapper">
            <input {...props} onChange={(e) => onChangeInput(e.target.value)} />
            <div className='searcher_action'>
                <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L8 8L2 14" stroke="white" stroke-width="3"/>
                </svg>
            </div>
        </div>
    )
}
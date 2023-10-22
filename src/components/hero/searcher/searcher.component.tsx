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
            <div className='searcher_action'></div>
        </div>
    )
}
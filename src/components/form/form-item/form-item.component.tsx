import { FC } from "react";
import './form-item.styles.css'

interface FormItemProps {
    title: string;
    description: string
}

export const FormItem:FC<FormItemProps> = ({ title, description }) => {
    return (
        <div className="form-item_container" >
            <p className="form-item_container--title">{ title } </p>
            <p className="form-item_container--description">{ description }</p>
        </div>
    )
}
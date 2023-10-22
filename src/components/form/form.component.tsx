import { FormItem } from './form-item/form-item.component'
import { formMock } from './form-item/mock/form-mock'
import './form.styles.css'

export const FormComponent = () => {
    return <div className='form_container'>
        {formMock.map(({ title, description }) => ( <FormItem title={title} description={description} />))}
    </div>
}
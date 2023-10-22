import { FC } from 'react'
import { TrackedLocation } from '../../interfaces/location.interface'
import { FormItem } from './form-item/form-item.component'
import './form.styles.css'
import { EmptyForm } from './form-item/empty'

interface FormProps {
    locationData: TrackedLocation | undefined
    isLoading: boolean
}
export const FormComponent:FC<FormProps> = ({ locationData, isLoading }) => {
    return <div className='form_container'>
         {!!locationData && !isLoading ? (
            <>
                <FormItem title='IP ADDRESS' description={locationData!.ip} />
                <FormItem title='LOCATION' description={`${locationData!.location.city}, ${locationData!.location.region} ${locationData!.location.postalCode}`} />
                <FormItem title='TIMEZONE' description={locationData!.location.timezone} />
                <FormItem title='ISP' description={locationData!.isp} />
            </>
         ) : <EmptyForm />}
    </div>
}
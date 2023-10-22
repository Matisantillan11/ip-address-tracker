import { FormItem } from "./form-item.component"

export const EmptyForm = () => {
    return <>
    <FormItem title='IP ADDRESS' description='-' />
    <FormItem title='LOCATION' description='-' />
    <FormItem title='TIMEZONE' description='-' />
    <FormItem title='ISP' description='-' />
</>
}
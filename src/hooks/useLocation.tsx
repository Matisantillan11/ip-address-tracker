import { useState } from "react"
import { getIpInformation } from "../services/location.service"


const IP_REGEX =  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

import { useQuery } from 'react-query'

export const useLocation = () => { 
    const [searchValue, setSearchValue] = useState<string>('')

    const { data: locationData, isLoading } = useQuery({
      queryKey: [
        'getIpInformation', searchValue
      ],
      queryFn: () => searchValue.length > 0 && IP_REGEX.test(searchValue) && getIpInformation(searchValue)
    })

    return { locationData, isLoading, searchValue, setSearchValue }
}
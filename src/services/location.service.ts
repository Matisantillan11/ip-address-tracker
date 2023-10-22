const API_KEY = import.meta.env.VITE_GEO_API_KEY

export const getIpInformation = async (ipAddress: string) => {
   try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`)
        const data = response.json();
        return data
   } catch (error) {
       //IGNORE
   }
}
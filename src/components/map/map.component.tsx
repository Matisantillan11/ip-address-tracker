import './map.styles.css'
import 'leaflet/dist/leaflet.css';

import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

import { TrackedLocation } from '../../interfaces/location.interface';
import { FC, useMemo } from 'react';

interface MapProps {
    locationData: TrackedLocation | undefined
    isLoading: boolean
}

const MarkerComponent = ({ latAndLang }: { latAndLang: LatLngExpression }) => {
    const map = useMap(); 
    map.setView(latAndLang, 13)
   
    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={latAndLang} />
        </>
    )
}

export const MapComponent:FC<MapProps> = ({ locationData, isLoading}) => {
    
    const latAndLang = useMemo(() => {
        if(!isLoading && !!locationData){
            return [locationData?.location.lat, locationData?.location.lng] as LatLngExpression
        }
    
        return [51.505, -0.09] as LatLngExpression

    }, [isLoading, locationData])

    return (
        <div className="map_container">
            <MapContainer center={latAndLang} zoom={13} scrollWheelZoom={false}>
                <MarkerComponent latAndLang={latAndLang}/>
            </MapContainer>
        </div>
    )
}
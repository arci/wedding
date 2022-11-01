import "./Map.css"

import { useEffect, useState } from "react";

interface MarkerProps {
    name: string;
    lat: number;
    lng: number;
}

function Marker(props: MarkerProps) {
    const { lat, lng } = props;
    const [marker, setMarker] = useState<google.maps.Marker>();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    const options = {
        position: new google.maps.LatLng(lat, lng)
    }
    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};

export default Marker;
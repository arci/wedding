import "./Map.css"
import airport from './airport.png';
import wedding from './wedding.png';

import { useEffect, useRef, useState } from "react";
import React from "react";

interface MapProps {
    zoom: number;
    center: number[];
    children?: JSX.Element[];
}

function Map(props: MapProps) {
    const { zoom, center, children } = props;

    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();


    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                zoom,
                center: new google.maps.LatLng(center[0], center[1]),
                mapTypeControl: false,
                streetViewControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,

            }));
        }
    }, [ref, map]);


    const dimoraDiSpartivento = new google.maps.LatLng(36.8785649, 14.6960739)
    const cataniaAirport = new google.maps.LatLng(37.4732189, 15.0598244)
    const comisoAirport = new google.maps.LatLng(36.9983724, 14.6029192)
    const airportIcon = {
        url: airport,
        scaledSize: new google.maps.Size(50, 50)
    };
    const weddingIcon = {
        url: wedding,
        scaledSize: new google.maps.Size(50, 50)
    };

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
        position: dimoraDiSpartivento,
        title: "Dimora di Spartivento",
        icon: weddingIcon,
        map
    }
    useEffect(() => {
        if (marker && map) {
            marker.setOptions(options);
            marker.addListener("click", () => {
                // const url = 'https://goo.gl/maps/zZXhB9tBja8pvPMg8' // dimora
                // const url = 'https://goo.gl/maps/XzBZc2BG7DiGwWC3A' // comiso - dimora
                const url = 'https://goo.gl/maps/EDjE9BZLJYT2ebz46' // catania - dimora
                // @ts-ignore
                window.open(url, '_blank').focus();
              });
        }
    }, [marker, options]);

    return (
        <>
            <div ref={ref} id="map" />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    return React.cloneElement(child, { map });
                }
            })}
            <p className="anchor" />
        </>
    )
}

export default Map;
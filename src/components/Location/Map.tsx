import "./Map.css"
import airport from './airport.png';
import location from './location.png';

import { useEffect, useRef, useState } from "react";

interface MapProps {
    zoom: number;
    center: number[];
}

function Map(props: MapProps) {
    const { zoom, center } = props;

    // map
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
                mapId: "7360cdc3f6fb8bec"

            }));
        }
    }, [ref, map, center, zoom]);


    // location marker
    const [dimoraDiSpartiventoMarker, setDimoraDiSpartiventoMarker] = useState<google.maps.Marker>();
    
    useEffect(() => {
        if (!dimoraDiSpartiventoMarker) {
            setDimoraDiSpartiventoMarker(new google.maps.Marker());
        }
        
    }, [dimoraDiSpartiventoMarker, map]);
    useEffect(() => {
        const weddingIcon = {
            url: location,
            scaledSize: new google.maps.Size(40, 50)
        };
        const dimoraDiSpartivento = new google.maps.LatLng(36.8785649, 14.6960739)
        const dimoraDiSpartiventoOptions = {
            position: dimoraDiSpartivento,
            title: "Dimora di Spartivento",
            icon: weddingIcon,
            map
        }
        if (dimoraDiSpartiventoMarker && map) {
            dimoraDiSpartiventoMarker.setOptions(dimoraDiSpartiventoOptions);
            dimoraDiSpartiventoMarker.addListener("click", () => {
                const url = 'https://goo.gl/maps/zZXhB9tBja8pvPMg8'
                // @ts-ignore
                window.open(url, '_blank').focus();
            });
        }
    }, [map, dimoraDiSpartiventoMarker]);
    
    // catania airport
    const [cataniaAirportMarker, setCataniaAirportMarker] = useState<google.maps.Marker>();
    useEffect(() => {
        if (!cataniaAirportMarker) {
            setCataniaAirportMarker(new google.maps.Marker());
        }
        
    }, [cataniaAirportMarker, map]);
    useEffect(() => {
        const airportIcon = {
            url: airport,
            scaledSize: new google.maps.Size(40, 50)
        };
        const cataniaAirport = new google.maps.LatLng(37.4732189, 15.0598244)
        const cataniaAirportOptions = {
            position: cataniaAirport,
            title: "Dimora di Spartivento",
            icon: airportIcon,
            map
        }
        if (cataniaAirportMarker && map) {
            cataniaAirportMarker.setOptions(cataniaAirportOptions);
            cataniaAirportMarker.addListener("click", () => {
                const url = 'https://goo.gl/maps/EDjE9BZLJYT2ebz46'
                // @ts-ignore
                window.open(url, '_blank').focus();
            });
        }
    }, [map, cataniaAirportMarker]);

    // comiso airport
    const [comisoAirportMarker, setComisoAirportMarker] = useState<google.maps.Marker>();
    useEffect(() => {
        if (!comisoAirportMarker) {
            setComisoAirportMarker(new google.maps.Marker());
        }
        
    }, [map, comisoAirportMarker]);
    useEffect(() => {
        const airportIcon = {
            url: airport,
            scaledSize: new google.maps.Size(40, 50)
        };
        const comisoAirport = new google.maps.LatLng(36.9983724, 14.6029192)
        const comisoAirportOptions = {
            position: comisoAirport,
            title: "Dimora di Spartivento",
            icon: airportIcon,
            map
        }
        if (comisoAirportMarker && map) {
            comisoAirportMarker.setOptions(comisoAirportOptions);
            comisoAirportMarker.addListener("click", () => {
                const url = 'https://goo.gl/maps/XzBZc2BG7DiGwWC3A'
                // @ts-ignore
                window.open(url, '_blank').focus();
            });
        }
    }, [map, comisoAirportMarker]);

    return (
        <>
            <div ref={ref} id="map" />
        </>
    )
}

export default Map;
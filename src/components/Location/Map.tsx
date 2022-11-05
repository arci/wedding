import "./Map.css"
import airport from './airport.png';
import location from './location.png';

import { useEffect, useRef, useState } from "react";

interface MapProps {
    zoom: number;
    center: number[];
    children?: JSX.Element[];
}

function Map(props: MapProps) {
    const { zoom, center, children } = props;

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
    }, [ref, map]);


    // markers
    const airportIcon = {
        url: airport,
        scaledSize: new google.maps.Size(40, 50)
    };
    const weddingIcon = {
        url: location,
        scaledSize: new google.maps.Size(40, 50)
    };

    const dimoraDiSpartivento = new google.maps.LatLng(36.8785649, 14.6960739)
    const [dimoraDiSpartiventoMarker, setDimoraDiSpartiventoMarker] = useState<google.maps.Marker>();
    const dimoraDiSpartiventoOptions = {
        position: dimoraDiSpartivento,
        title: "Dimora di Spartivento",
        icon: weddingIcon,
        map
    }
    useEffect(() => {
        if (!dimoraDiSpartiventoMarker) {
            setDimoraDiSpartiventoMarker(new google.maps.Marker());
        }

    }, [dimoraDiSpartiventoMarker, map]);
    useEffect(() => {
        if (dimoraDiSpartiventoMarker && map) {
            dimoraDiSpartiventoMarker.setOptions(dimoraDiSpartiventoOptions);
            dimoraDiSpartiventoMarker.addListener("click", () => {
                const url = 'https://goo.gl/maps/zZXhB9tBja8pvPMg8'
                // @ts-ignore
                window.open(url, '_blank').focus();
            });
        }
    }, [dimoraDiSpartiventoMarker, dimoraDiSpartiventoOptions]);

    const cataniaAirport = new google.maps.LatLng(37.4732189, 15.0598244)
    const [cataniaAirportMarker, setCataniaAirportMarker] = useState<google.maps.Marker>();
    const cataniaAirportOptions = {
        position: cataniaAirport,
        title: "Dimora di Spartivento",
        icon: airportIcon,
        map
    }
    useEffect(() => {
        if (!cataniaAirportMarker) {
            setCataniaAirportMarker(new google.maps.Marker());
        }

    }, [cataniaAirportMarker, map]);
    useEffect(() => {
        if (cataniaAirportMarker && map) {
            cataniaAirportMarker.setOptions(cataniaAirportOptions);
            cataniaAirportMarker.addListener("click", () => {
                const url = 'https://goo.gl/maps/EDjE9BZLJYT2ebz46'
                // @ts-ignore
                window.open(url, '_blank').focus();
            });
        }
    }, [cataniaAirportMarker, cataniaAirportOptions]);

    const comisoAirport = new google.maps.LatLng(36.9983724, 14.6029192)
    const [comisoAirportMarker, setComisoAirportMarker] = useState<google.maps.Marker>();
    const comisoAirportOptions = {
        position: comisoAirport,
        title: "Dimora di Spartivento",
        icon: airportIcon,
        map
    }
    useEffect(() => {
        if (!comisoAirportMarker) {
            setComisoAirportMarker(new google.maps.Marker());
        }

    }, [comisoAirportMarker, map]);
    useEffect(() => {
        if (comisoAirportMarker && map) {
            comisoAirportMarker.setOptions(comisoAirportOptions);
            comisoAirportMarker.addListener("click", () => {
                const url = 'https://goo.gl/maps/XzBZc2BG7DiGwWC3A'
                // @ts-ignore
                window.open(url, '_blank').focus();
            });
        }
    }, [comisoAirportMarker, comisoAirportOptions]);

    return (
        <>
            <div ref={ref} id="map" />
        </>
    )
}

export default Map;
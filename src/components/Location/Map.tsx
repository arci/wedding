import "./Map.css"

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
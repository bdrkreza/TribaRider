import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '600px'
};

const location = {
    lat: 23.733348,
    lng: 90.406707,
};

function GoogleDirection({ origin, destination }) {
    console.log(origin, destination);
    const [directionResponse, setDirection] = useState(null)
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDkvipmvW2M_fEywlDfjb69rLIg68nYPlI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                        // required
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: "Driving"
                        }}
                        // required
                        callback={res => {
                            if (res !== null) {
                                setDirection(res)
                            }
                        }}

                    />
                }

                {
                    directionResponse && <DirectionsRenderer
                        // required
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleDirection;
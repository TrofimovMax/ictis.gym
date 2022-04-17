import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from 'react-yandex-maps';

function ContactsPage() {
    return (
        <>
            {/* Map Section Begin */}
            <div class="contact-map">
                <YMaps width="inherit" height="inherit">
                    <Map
                        width='100%'
                        height='586px'
                        defaultState={{
                            center: [47.202233, 38.935670],
                            zoom: 15,
                            controls: [],
                            size: (500, 500),
                        }}
                    >
                        <Placemark geometry={[47.202233, 38.935670]} />
                        <ZoomControl options={{ float: 'right' }} />
                        <FullscreenControl />
                    </Map>
                </YMaps>
            </div>
            {/* Map Section End */}
        </>
    );
}

export { ContactsPage };
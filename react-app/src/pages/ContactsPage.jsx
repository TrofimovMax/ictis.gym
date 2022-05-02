import { YMaps, Map, Placemark, FullscreenControl, ZoomControl } from 'react-yandex-maps';

function ContactsPage() {
    return (
        <>
            {/* Map Section Begin */}
            <div className="contact-map">
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
                        <Placemark geometry={[47.205891, 38.940869]} />
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
import Map from '../../components/Map.js';
import Page from '../../components/Page.js';
import crystalLocations from '../../data/crystal/locations.js';
import joeLocations from '../../data/joe/locations.js';

import './index.scss';

const TravelPage = () => {
    return (
        <Page
            title="Joe and Crystal's Travels"
            description="A map showing the states Joe and Crystal Spandrusyszyn have spent time in"
        >
            <div className="combinedMap">
                <Map color="joe" type="primary" locations={joeLocations} />
                <Map color="crystal" type="secondary" locations={crystalLocations} />
                <div className="legend">
                    <div className="joe">
                        <div className="dot" /> <a href="/joe">Joe Spandrusyszyn</a>
                    </div>
                    <div className="crystal">
                        <div className="dot" /> <a href="/crystal">Crystal Spandrusyszyn</a>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default TravelPage;

import Card from '../../components/Card.js';
import CardColumns, { CardColumn } from '../../components/CardColumns.js';
import CardEntry from '../../components/CardEntry.js';
import Hero from '../../components/Hero.js';
import Icon from '../../components/Icon.js';
import Map from '../../components/Map.js';
import Page from '../../components/Page.js';
import locations from '../../data/crystal/locations.js';

import hero from './hero.webp';

const CrystalPage = () => {
    return (
        <Page title="Crystal Spandrusyszyn">
            <Hero
                src={hero}
                title={
                    <>
                        Crystal
                        <br />
                        Spandrusyszyn
                    </>
                }
            />
            <CardColumns>
                <CardColumn>
                    <Card title="Basic Information">
                        <CardEntry title="Formerly Known As">Crystal Spagnola</CardEntry>
                        <CardEntry title="Gender">Female</CardEntry>
                        <CardEntry title="Birthday">March 17</CardEntry>
                    </Card>
                    <Card title="Contact Information">
                        <CardEntry title="Email">
                            <a href="mailto:crystal@spandrusyszyn.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="email" /> crystal@spandrusyszyn.com
                            </a>
                        </CardEntry>
                    </Card>
                    <Card title="Work">
                        <CardEntry title="Occupation">&quot;1950&apos;s&quot; Housewife</CardEntry>
                        <CardEntry title="Spandrusyszyn Household">2010 - present</CardEntry>
                    </Card>
                    <Card title="Education">
                        <CardEntry
                            title={
                                <a href="https://www.rit.edu" target="_blank" rel="noopener noreferrer">
                                    Rochester Institute of Technology
                                </a>
                            }
                        >
                            BS in ASL-English Interpretation
                            <br />
                            2006-2010
                        </CardEntry>
                        <CardEntry
                            title={
                                <a href="https://www.nwcsd.k12.ny.us/" target="_blank" rel="noopener noreferrer">
                                    Niagara-Wheatfield High School
                                </a>
                            }
                        >
                            2002 - 2006
                        </CardEntry>
                    </Card>
                </CardColumn>
                <CardColumn>
                    <Card title="Family">
                        <CardEntry title={<a href="/joe">Joe Spandrusyszyn</a>}>Husband</CardEntry>
                        <CardEntry
                            title={
                                <>
                                    <a href="/sam">Sam</a> and <a href="/dean">Dean</a> Spandrusyszyn
                                </>
                            }
                        >
                            Cats <Icon name="cats" />
                        </CardEntry>
                        <CardEntry
                            title={
                                <>
                                    Ron and{' '}
                                    <a
                                        href="http://www.airsculptureballoonart.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Janice
                                    </a>{' '}
                                    Spagnola
                                </>
                            }
                        >
                            Parents
                        </CardEntry>
                        <CardEntry title="Kim Spagnola">Younger Sister</CardEntry>
                    </Card>
                    <Card title="Travel History">
                        <Map color="crystal" type="singular" locations={locations} />
                        <br />
                        <a href="/combinedTravel">See Family Travel History</a>
                    </Card>
                </CardColumn>
            </CardColumns>
        </Page>
    );
};

export default CrystalPage;

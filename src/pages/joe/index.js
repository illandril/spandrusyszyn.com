import Card from '../../components/Card.js';
import CardColumns, { CardColumn } from '../../components/CardColumns.js';
import CardEntry from '../../components/CardEntry.js';
import Hero from '../../components/Hero.js';
import Icon from '../../components/Icon.js';
import Map from '../../components/Map.js';
import Page from '../../components/Page.js';
import locations from '../../data/joe/locations.js';

import hero from './hero.webp';

const JoePage = () => {
    return (
        <Page title="Joe Spandrusyszyn">
            <Hero
                src={hero}
                title={
                    <>
                        Joe
                        <br />
                        Spandrusyszyn
                    </>
                }
            />
            <CardColumns>
                <CardColumn>
                    <Card title="Basic Information">
                        <CardEntry title="Formerly Known As">Joseph Andrusyszyn</CardEntry>
                        <CardEntry title="Gender">Male</CardEntry>
                        <CardEntry title="Birthday">July 23</CardEntry>
                    </Card>
                    <Card title="Contact Information">
                        <CardEntry title="Email">
                            <a href="mailto:joe@spandrusyszyn.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="email" /> joe@spandrusyszyn.com
                            </a>
                        </CardEntry>
                        <CardEntry title="Web Presence">
                            <a href="https://www.facebook.com/illandril" target="_blank" rel="noopener noreferrer">
                                <Icon name="facebook" /> Facebook
                            </a>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/joespandrusyszyn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name="linkedin" /> LinkedIn
                            </a>
                            <br />
                            <a href="https://twitter.com/illandril" target="_blank" rel="noopener noreferrer">
                                <Icon name="twitter" /> Twitter
                            </a>
                            <br />
                            <a href="https://github.com/illandril" target="_blank" rel="noopener noreferrer">
                                <Icon name="github" /> GitHub
                            </a>
                        </CardEntry>
                    </Card>
                    <Card title="Work">
                        <CardEntry title="Occupation">Software Engineering</CardEntry>
                        <CardEntry
                            title={
                                <a href="https://www.rocsoft.com" target="_blank" rel="noopener noreferrer">
                                    Rochester Software Associates
                                </a>
                            }
                        >
                            Senior Software Engineer, 2014 - present
                            <br />
                            Software Engineer, 2008 - 2014
                            <br />
                            Software Engineer Co-op, 2006 - 2008
                        </CardEntry>
                    </Card>
                    <Card title="Education">
                        <CardEntry
                            title={
                                <a href="https://www.rit.edu" target="_blank" rel="noopener noreferrer">
                                    Rochester Institute of Technology
                                </a>
                            }
                        >
                            BS in Software Engineering
                            <br />
                            2003-2008
                        </CardEntry>
                        <CardEntry
                            title={
                                <a href="https://www.liverpool.k12.ny.us" target="_blank" rel="noopener noreferrer">
                                    Liverpool High School
                                </a>
                            }
                        >
                            1999 - 2003
                        </CardEntry>
                    </Card>
                </CardColumn>
                <CardColumn>
                    <Card title="Family">
                        <CardEntry title={<a href="/crystal">Crystal Spandrusyszyn</a>}>Wife</CardEntry>
                        <CardEntry
                            title={
                                <>
                                    <a href="/sam">Sam</a> and <a href="/dean">Dean</a> Spandrusyszyn
                                </>
                            }
                        >
                            Cats <Icon name="cats" />
                        </CardEntry>
                        <CardEntry title="Pete and Anne Andrusyszyn">Parents</CardEntry>
                        <CardEntry title="Jeremy Andrusyszyn">Older Brother</CardEntry>
                        <CardEntry title="Robyn Pepin">Younger Sister</CardEntry>
                    </Card>
                    <Card title="Travel History">
                        <Map color="joe" type="singular" locations={locations} />
                        <br />
                        <a href="/combinedTravel">See Family Travel History</a>
                    </Card>
                </CardColumn>
            </CardColumns>
        </Page>
    );
};

export default JoePage;

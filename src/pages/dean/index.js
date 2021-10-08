import Card from '../../components/Card.js';
import CardColumns, { CardColumn } from '../../components/CardColumns.js';
import CardEntry from '../../components/CardEntry.js';
import Hero from '../../components/Hero.js';
import Icon from '../../components/Icon.js';
import Page from '../../components/Page.js';

import hero from './hero.webp';

const DeanPage = () => {
    return (
        <Page title="Dean Spandrusyszyn">
            <Hero
                src={hero}
                title={
                    <>
                        Dean
                        <br />
                        Spandrusyszyn
                    </>
                }
            />
            <CardColumns>
                <CardColumn>
                    <Card title="Basic Information">
                        <CardEntry title="Namesake">
                            <a
                                href="http://en.wikipedia.org/wiki/Dean_Winchester"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Dean Winchester
                            </a>
                        </CardEntry>
                        <CardEntry title="Gender">Male</CardEntry>
                        <CardEntry title="Birthday">February 29</CardEntry>
                    </Card>
                    <Card title="Contact Information">
                        <CardEntry title="Email">
                            <a href="mailto:dean@spandrusyszyn.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="email" /> dean@spandrusyszyn.com
                            </a>
                        </CardEntry>
                    </Card>
                </CardColumn>
                <CardColumn>
                    <Card title="Work">
                        <CardEntry title="Occupation">Cat</CardEntry>
                        <CardEntry title="Spandrusyszyn Household">2010 - present</CardEntry>
                    </Card>
                    <Card title="Family">
                        <CardEntry title={<a href="/joe">Joe Spandrusyszyn</a>}>&quot;Father&quot;</CardEntry>
                        <CardEntry title={<a href="/crystal">Crystal Spandrusyszyn</a>}>&quot;Mother&quot;</CardEntry>
                        <CardEntry title={<a href="/sam">Sam Spandrusyszyn</a>}>
                            Twin Brother <Icon name="cats" />
                        </CardEntry>
                    </Card>
                </CardColumn>
            </CardColumns>
        </Page>
    );
};

export default DeanPage;

import Card from '../../components/Card.js';
import CardColumns, { CardColumn } from '../../components/CardColumns.js';
import CardEntry from '../../components/CardEntry.js';
import Hero from '../../components/Hero.js';
import Icon from '../../components/Icon.js';
import Page from '../../components/Page.js';

const SamPage = () => {
    return (
        <Page title="Sam Spandrusyszyn" description="Some details you might want to know about Sam Spandrusyszyn">
            <Hero
                src="/sam/hero.webp"
                alt="Photo of Sam Spandrusyszyn"
                title={
                    <>
                        Sam
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
                                href="http://en.wikipedia.org/wiki/Sam_Winchester"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sam Winchester
                            </a>
                        </CardEntry>
                        <CardEntry title="Gender">Male</CardEntry>
                        <CardEntry title="Birthday">February 29</CardEntry>
                    </Card>
                    <Card title="Contact Information">
                        <CardEntry title="Email">
                            <a href="mailto:sam@spandrusyszyn.com" target="_blank" rel="noopener noreferrer">
                                <Icon name="email" /> sam@spandrusyszyn.com
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
                        <CardEntry title={<a href="/dean">Dean Spandrusyszyn</a>}>
                            Twin Brother <Icon name="cats" />
                        </CardEntry>
                    </Card>
                </CardColumn>
            </CardColumns>
        </Page>
    );
};

export default SamPage;

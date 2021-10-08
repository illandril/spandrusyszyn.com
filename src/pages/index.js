// eslint-disable-next-line import/no-unresolved
import pronunciationCaptions from 'file-loader!./spandrusyszyn.vtt';

import Icon from '../components/Icon.js';
import Page from '../components/Page.js';

import crystal from './crystal.jpg';
import dean from './dean.jpg';
import joe from './joe.jpg';
import sam from './sam.jpg';
import pronunciation from './spandrusyszyn-justin.mp3';

import './index.scss';

const IndexPage = () => {
    return (
        <Page title="Spandrusyszyn Family">
            <div className="people">
                <div>
                    <a href="./joe">
                        {/* TODO Max size 526px */}
                        <img src={joe} alt="" aria-labelledby="joe-name" />
                        <div>
                            <div>
                                <div id="joe-name">Joe Spandrusyszyn</div>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                    </a>
                    <a href="./crystal">
                        <img src={crystal} alt="" aria-labelledby="crystal-name" />
                        <div>
                            <div>
                                <div id="crystal-name">Crystal Spandrusyszyn</div>
                                <div>&quot;1950&apos;s&quot; Housewife</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="./sam">
                        <img src={sam} alt="" aria-labelledby="sam-name" />
                        <div>
                            <div>
                                <div id="sam-name">Sam Spandrusyszyn</div>
                                <div>Shoe Sleeper</div>
                            </div>
                        </div>
                    </a>
                    <a href="./dean">
                        <img src={dean} alt="" aria-labelledby="dean-name" />
                        <div>
                            <div>
                                <div id="dean-name">Dean Spandrusyszyn</div>
                                <div>Loudmouth Extraordinaire</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="pronunciation">
                <span id="pronounce-label">Spandrusyszyn pronunciation:</span>
                <button
                    onClick={() => document.querySelector('.pronunciation audio').play()}
                    aria-label="Listen to the Spandrusyszyn pronunciation"
                >
                    <Icon name="play" /> ˈspændrusɪzɪn
                </button>
                <audio aria-labelledby="pronounce-label">
                    <source src={pronunciation} type="audio/mpeg" />
                    <track src={pronunciationCaptions} kind="captions" srcLang="en" label="English Captions" />
                </audio>
            </div>
        </Page>
    );
};

export default IndexPage;

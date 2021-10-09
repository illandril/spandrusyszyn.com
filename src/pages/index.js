// eslint-disable-next-line import/no-unresolved

import Icon from '../components/Icon.js';
import Page from '../components/Page.js';

const joe = '/joe.webp';
const crystal = '/crystal.webp';
const dean = '/dean.webp';
const sam = '/sam.webp';
const pronunciation = '/spandrusyszyn-justin.mp3';
const pronunciationCaptions = '/spandrusyszyn.vtt';

import './index.scss';

const IndexPage = () => {
    return (
        <Page title="Spandrusyszyn Family" description="The homepage of the Spandrusyszyn Family">
            <div className="people">
                <div>
                    <a href="./joe">
                        <img src={joe} alt="" aria-labelledby="joe-name" width={248} height={248} />
                        <div>
                            <div>
                                <div id="joe-name">Joe Spandrusyszyn</div>
                                <div>Software Engineer</div>
                            </div>
                        </div>
                    </a>
                    <a href="./crystal">
                        <img src={crystal} alt="" aria-labelledby="crystal-name" width={248} height={248} />
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
                        <img src={sam} alt="" aria-labelledby="sam-name" width={248} height={248} />
                        <div>
                            <div>
                                <div id="sam-name">Sam Spandrusyszyn</div>
                                <div>Shoe Sleeper</div>
                            </div>
                        </div>
                    </a>
                    <a href="./dean">
                        <img src={dean} alt="" aria-labelledby="dean-name" width={248} height={248} />
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
                <button aria-label="Listen to the Spandrusyszyn pronunciation">
                    <Icon name="play" /> ˈspændrusɪzɪn
                </button>
                <audio>
                    <source src={pronunciation} type="audio/mpeg" />
                    <track src={pronunciationCaptions} kind="captions" srcLang="en" label="English Captions" />
                </audio>
            </div>
        </Page>
    );
};

export default IndexPage;

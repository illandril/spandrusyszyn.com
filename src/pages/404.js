import Page from '../components/Page.js';

import './404.scss';

const NotFoundPage = () => {
    return (
        <Page title="Page Not Found">
            <div className="title404">Oops!</div>
            <div className="body404">
                The page you are looking for doesn&apos;t seem to exist!
                <br />
                <a href="/">Return to the Spandrusyszyn Family homepage.</a>
            </div>
        </Page>
    );
};

export default NotFoundPage;

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './Page.scss';

const Page = ({ children, title, description }) => {
    return (
        <>
            <Helmet
                title={title}
                htmlAttributes={{
                    lang: 'en',
                }}
            >
                <meta name="description" content={description} />
            </Helmet>
            <header>
                <nav>
                    <img src="/logo.png" alt="Small portrait of Joe and Crystal Spandrusyszyn" width={24} height={24} />
                    <a href="/">
                        Spa<del aria-hidden>gnola and A</del>ndrusyszyn Family
                    </a>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
};

Page.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Page;

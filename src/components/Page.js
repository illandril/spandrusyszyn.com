import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import logo from './logo.png';
import './Page.scss';

const Page = ({ children, title }) => {
    return (
        <>
            <Helmet title={title} />
            <header>
                <nav>
                    <img src={logo} alt="Small portrait of Joe and Crystal Spandrusyszyn" />
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
    children: PropTypes.node.isRequired,
};

export default Page;

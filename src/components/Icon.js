import Facebook from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg';
import GitHub from '@fortawesome/fontawesome-free/svgs/brands/github.svg';
import LinkedIn from '@fortawesome/fontawesome-free/svgs/brands/linkedin.svg';
import Twitter from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg';
import Envelope from '@fortawesome/fontawesome-free/svgs/solid/envelope.svg';
import Paw from '@fortawesome/fontawesome-free/svgs/solid/paw.svg';
import Play from '@fortawesome/fontawesome-free/svgs/solid/play.svg';
import UserTie from '@fortawesome/fontawesome-free/svgs/solid/user-tie.svg';
import PropTypes from 'prop-types';

import './Icon.scss';

const icons = new Map();
icons.set('email', Envelope);
icons.set('facebook', Facebook);
icons.set('linkedin', LinkedIn);
icons.set('twitter', Twitter);
icons.set('github', GitHub);
icons.set('cats', Paw);
icons.set('play', Play);
icons.set('portfolio', UserTie);

const Icon = ({ name }) => {
    const IconSVG = icons.get(name) || 'del';
    return (
        <i className="icon">
            <IconSVG />
        </i>
    );
};

Icon.propTypes = {
    name: PropTypes.oneOf([...icons.keys()]),
};

export default Icon;

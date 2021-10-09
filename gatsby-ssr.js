exports.onPreRenderHTML = ({ pathname, getPostBodyComponents, replacePostBodyComponents }) => {
    if (pathname === '/') {
        const postBodyComponents = getPostBodyComponents();
        postBodyComponents.push(<script key="pronounce" src="/pronounce.js" async />);
        replacePostBodyComponents(postBodyComponents);
    }
};

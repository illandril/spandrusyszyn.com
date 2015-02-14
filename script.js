(function(){
    if ( window.addEventListener ) {
        var updateScroll = function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if ( scrollTop != 0 ) {
                if ( document.body.className.indexOf('scrolled') == -1 ) {
                    document.body.className += ' scrolled';
                }
            } else {
                if ( document.body.className.indexOf('scrolled') != -1 ) {
                    document.body.className = document.body.className.replace(/ *scrolled */, '');
                }
            }
        };
        window.addEventListener('scroll', updateScroll, false);
        updateScroll();
    }
    if ( window.matchMedia && window.matchMedia( '(min-width:1024px)' ).matches ) {
        var cardCollections = document.querySelectorAll('.cards');
        for ( var i = 0; i < cardCollections.length; i++ ) {
            var columns = [document.createElement('div'),document.createElement('div')];
            columns[0].className = 'column';
            columns[1].className = 'column';
            var cardCollection = cardCollections[i];
            cardCollection.appendChild(columns[0]);
            cardCollection.appendChild(columns[1]);
            var cards = cardCollections[i].querySelectorAll('.card');
            for ( var ci = 0; ci < cards.length; ci++ ) {
                var col = columns[0];
                if ( columns[1].clientHeight < col.clientHeight ) {
                    col = columns[1];
                }
                col.appendChild(cards[ci]);
            }
        }
    }
})();
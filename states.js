(function() {
    var svgElem = null;
    var withSVGQueue = [];
    var initing = false;
    var init = function() {
        if (initing) {
            return;
        }
        initing = true;

        var svgReq = new XMLHttpRequest();
        svgReq.onload = function() {
            var svg = svgReq.responseText;
            var div = document.createElement('div');
            div.style.display = 'none';
            div.innerHTML = svg;
            document.body.appendChild(div);
            svgElem = div.querySelector('svg');
            while (withSVGQueue.length > 0) {
                (withSVGQueue.pop())(svgElem);
            }
        };
        svgReq.open("get", "states.svg", true);
        svgReq.send();
    };

    var withSVG = function(fn) {
        if (svgElem === null) {
            withSVGQueue.push(fn);
            init();
        } else {
            fn(svgElem);
        }
    };

    var _showStates = function(target, people, svgElem) {
        
        var statesClasses;
        if ( people.length == 1 ) {
            statesClasses = ['singular'];
        } else {
            statesClasses = ['primary', 'secondary', 'tertiary'];
        }

        var container = document.createElement('div');
        container.className = 'visitedStates';

        var title = document.createElement('div');
        title.className = 'visitedStatesTitle';

        var nameContainer = document.createElement('div');
        nameContainer.className = 'names';
        title.appendChild(nameContainer);

        var countsContainer = document.createElement('div');
        countsContainer.className = 'counts';
        title.appendChild(countsContainer);

        var display = document.createElement('div');
        display.className = 'visitedStatesDisplay';

        container.appendChild(title);
        container.appendChild(display);
        target.appendChild(container);

        for (var pi = 0; pi < people.length; pi++) {
            var states = svgElem.cloneNode(true);
            states.classList.add(statesClasses[pi]);
            states.classList.add(people[pi].color);
            states.style.opacity = (1 / (pi + 1));

            var passedThru = people[pi].passedThru;
            var visited = people[pi].visited;
            var lived = people[pi].lived;

            var i;
            for (i = 0; i < passedThru.length; i++) {
                states.querySelector('.state.' + passedThru[i]).classList.add('passedThru');
            }
            for (i = 0; i < visited.length; i++) {
                states.querySelector('.state.' + visited[i]).classList.add('visited');
            }
            for (i = 0; i < lived.length; i++) {
                states.querySelector('.state.' + lived[i]).classList.add('lived');
            }

            display.appendChild(states);

            if (people.length > 1) {
                var nameElem;
                if (people[pi].link != null) {
                    nameElem = document.createElement('a');
                    nameElem.href = people[pi].link;
                } else {
                    nameElem = document.createElement('span');
                }
                nameElem.className = 'name';
                nameElem.appendChild(document.createTextNode(people[pi].name));
                nameContainer.appendChild(nameElem);
            }
            var count = document.createElement('span');
            count.className = 'count';
            count.innerHTML = ((visited.length + lived.length) * 2) + '% Visited';
            countsContainer.appendChild(count);
        }
    };

    withSVG(function(svgElem) {
        _showStates(document.getElementById('states'), window.people, svgElem);
    });
})();
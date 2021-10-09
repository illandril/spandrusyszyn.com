(() => {
    const pronounceContainer = document.querySelector('.pronunciation');
    const button = pronounceContainer.querySelector('button');
    const audio = pronounceContainer.querySelector('audio');
    button.addEventListener(
        'click',
        () => {
            audio.play();
        },
        false
    );
    pronounceContainer.style.display = 'block';
})();

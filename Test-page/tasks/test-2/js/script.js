document.addEventListener('DOMContentLoaded', () => {
    const view = document.querySelector('.view');
    const viewImg = document.querySelector('.img-view');
    const grid = document.querySelector('.gridbox');

    function displayImg(index) {

        view.classList.remove('unactive', 'hide');
        view.classList.add('show');

        let width = view.offsetWidth;
        let height = view.offsetHeight;
        
        viewImg.setAttribute('src', index);

        if (height < width) {
            viewImg.style.height = `${height}px`;
            viewImg.style.width = `${height}px`;
        } else {
            viewImg.style.height = `${width}px`;
            viewImg.style.width = `${width}px`;
        }
    }

    grid.addEventListener('click', (event) => {
        if (event.target.classList.contains('img')) {
            const index = event.target.getAttribute('src');
            displayImg(index);
        }
    });

    view.addEventListener('click', (event) => {
        if (event.target.classList.contains('close')) {
            view.classList.remove('show');
            view.classList.add('hide');
            setTimeout(() => {
                view.classList.add('unactive');
            }, 900);
        }
    });
});
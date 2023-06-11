document.addEventListener('DOMContentLoaded', (event) => {
    const loadBtn = document.getElementById('loadBtn');
    const iframe = document.getElementById('iFrame');
    const textContent = document.getElementById('text-content');

    iframe.style.display = 'none';
    
    loadBtn.addEventListener('click', () => {
        textContent.style.display = 'none';
    iframe.style.display = 'block';

        iframe.width = iframe.contentWindow.document.body.scrollWidth;
        iframe.height = iframe.contentWindow.document.body.scrollHeight;
        iframe.src = 'https://scratch.mit.edu/projects/856850511/embed';
        iframe.requestFullscreen();
    });

});
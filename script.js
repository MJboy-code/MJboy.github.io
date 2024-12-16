document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('file');
    const files = fileInput.files;
    const progressBar = document.getElementById('progress');
    const progress = progressBar.querySelector('.progress');
    const message = document.getElementById('message');

    if (files.length === 0) {
        message.innerHTML = '<span style="color: red;">Please select files to upload.</span>';
        return;
    }

    progressBar.style.display = 'block';
    let width = 0;

    const interval = setInterval(() => {
        width += 10;
        progress.style.width = width + '%';

        if (width >= 100) {
            clearInterval(interval);
            message.innerHTML = '<span style="color: lime;">Files uploaded successfully!</span>';
            progressBar.style.display = 'none';
            progress.style.width = '0';
        }
    }, 200);
});

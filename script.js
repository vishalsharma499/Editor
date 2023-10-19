document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copy-button');
    const saveButton = document.getElementById('save-button');
    const lockButton = document.getElementById('lock-button');
    const codeArea = document.getElementById('code-area');

    let isLocked = false;

    // Load the code from local storage on page load
    if (localStorage.getItem('code')) {
        codeArea.value = localStorage.getItem('code');
    }

    copyButton.addEventListener('click', function () {
        if (isLocked) {
            codeArea.select();
            document.execCommand('copy');
            alert('Code copied to clipboard');
        } else {
            alert('Unlock the editor before copying.');
        }
    });

    saveButton.addEventListener('click', function () {
        const code = codeArea.value;
        // Save the code to local storage
        localStorage.setItem('code', code);
        alert('Code saved to local storage!');
    });

    lockButton.addEventListener('click', function () {
        isLocked = !isLocked;
        lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
        codeArea.readOnly = isLocked;
    });
});
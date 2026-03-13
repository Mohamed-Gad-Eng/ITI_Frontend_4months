let promptableStatus = null;

const installBtn = document.getElementById('installBtn');
if (installBtn) {
    installBtn.hidden = true;

    installBtn.addEventListener('click', async () => {
        if (!promptableStatus) return;

        installBtn.hidden = true;
        promptableStatus.prompt();

        try {
            const choiceResult = await promptableStatus.userChoice;
            console.log('install choice', choiceResult?.outcome);
        } finally {
            promptableStatus = null;
        }
    });
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    promptableStatus = event;
    if (installBtn) installBtn.hidden = false;
});

window.addEventListener('appinstalled', () => {
    promptableStatus = null;
    if (installBtn) installBtn.hidden = true;
});



window.addEventListener('load', event => {
    navigator.serviceWorker.register('sw.js')//, {scope:'/Pages/'})
        .then(reg => {
            console.log('service worker registered successfully', reg)
        }).catch(err => {
            console.log(err)
        })
})
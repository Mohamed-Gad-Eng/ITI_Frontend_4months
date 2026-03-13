window.addEventListener('load',event=>{
    navigator.serviceWorker.register('sw.js')
    .then(reg=>{
        console.log('service worker registered successfully',reg)

    })
    .catch(err=>{
        console.log(err)
    })
})
Notification.requestPermission(status=>{
    console.log('Notification Permission ',status)
})

document.getElementById('NotifcationBtn').addEventListener('click',()=>{
    if(Notification.permission == 'granted'){
        navigator.serviceWorker.getRegistration()
        .then(reg=>{
            let options={
                body:'welcome to our notification',
                icon:'images/notification-flat.png',
                actions:[
                    {action:'explore',title:'open link'},
                    {action:'close',title:'close notification'}
                ]
            }
            reg.showNotification('Hello World',options)
        })
        .catch(err=>{
            console.log(err)
        })
    }
})
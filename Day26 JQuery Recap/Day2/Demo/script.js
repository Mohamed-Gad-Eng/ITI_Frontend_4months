function TestFun(event){
            // $(this).text(obj.username).css('color','red')
            $(this).text(event.data.username).css('color','red')
            // $(this).text('changed').css('color','red')
        }
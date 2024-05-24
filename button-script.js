function sidebar_workspace_button(){
    const buttonEle = document.getElementById('sidebar-button')
    const ele = document.querySelector('.sidebar-container')
    
    if(buttonEle.innerText == '<'){
        ele.style.width = '20px';
        buttonEle.innerText = '>';
        ele.style.backgroundColor= 'white'
    }else{
        ele.style.width = '20%';
        buttonEle.innerText = '<';
        ele.style.backgroundColor = 'black'
    }

}
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function post(url, obj={}){
    let xhr = new XMLHttpRequest();
    return new Promise((reslove,reject)=>{
        xhr.open('post',url);
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(obj));
        xhr.onload = ()=>{
            if(xhr.status==200){
                let fin = JSON.parse(xhr.responseText);
                reslove(fin)
            }
            else{
                reject('erro');
            }
        }
    })
}

module.exports = {
    post
}
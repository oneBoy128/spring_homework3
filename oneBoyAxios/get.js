var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
function get(url, obj={params:''}){//ajax封装类似axios的get操作
    let paramsq = '';
    if(obj.params != ''){
        for(let key in obj.params){
            paramsq += key + '=' + obj.params[key] + '&';
        }
        paramsq = paramsq.substring(0,paramsq.length-1);
        url = url+'?'+paramsq;
    }
    return new Promise((reslove,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get',url);
        xhr.send();
        xhr.onload = ()=>{
            if(xhr.status==200){
                reslove(xhr.responseText);
            }
            else{
                reject(xhr.responseText);
            }
        }
    })
}

module.exports ={
    get
}
### 安装
```
npm install oneboy-byaxios
```

### 导入
```
const boy = require('oneBoyAxios')
```

### Get请求
```js
//调用get通过?参数1=值1&参数2=值2;
boy.get('http://localhost:3000/first?age=19&city=yunnan')
    .then(res=>{
        console.log(res)
    })

//调用get通过JSON
boy.get('http://localhost:3000/first',{params:{
            id:'xx10086'
        }})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
```

### Post请求
```js
boy.post('http://localhost:3000/first',{
    firstName:'Jay',
    lastName:'Chou'
})
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
```

### 开源协议
ISC
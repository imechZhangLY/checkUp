//深复制函数
export default function deepClone(obj){
    if(typeof(obj) === 'object'){
        if(obj instanceof Array){
            let newObj = [];
            obj.forEach(element => {
                newObj.push(element);
            });
            return newObj;
        }else{
            let newObj = {};
            for(let p in obj){
                newObj[p] = deepClone(p);
            }
            return newObj;
        }
    }else{
        return obj;
    }
}
class StrPlay extends String
{
    constructor(str,length){
     super(str,length);
    }
    // 裁剪一定长度字符串
    cut(end=80){
        try{
            return new StrPlay(this.slice(0,end));
        }catch(err){
            console.log(err);
        }
    }
    // 获取中文字符
    cwords(){
        try{
            return new StrPlay(this.match(/[\u4e00-\u9fa5《》（）【】《》？“”‘’：。，！\d]/g).join(''));
        }catch(err){
            console.log(err);
        }
    }
    // json类型字符串转json
    json(){
        try{
            return JSON.parse(this);
        }catch(err){
            console.log(err);
        }
    }
    // 去空格
    space(){
        try{
            return new StrPlay(this.replace(/\s*/g,""));
        }catch(err){
            console.log(err);
        }
    }
    //字符检查
    check(rep){
        try{
            return this.match(rep)?this.match(rep):[];
        }catch(err){
            console.log(err);
        }
    }
    // 去html标签
    tags(){
        try{
            return new StrPlay(this.replace(/<(\w*?)>|<\/\w*?>|<\w.*?>/g,""));
        }catch(err){
            console.log(err);
        }
    }
    // 字符串连接
    cat(){
        try{
            return new StrPlay(this + this.loop(arguments,function(item,index){
                return item.toString();
            }).join(""));
        }catch(err){
            console.log(err);
        }
    }
    // 遍历对象
    loop(obj,back){
        let i = 0;
        let arr = [];
        while(obj[i])
        {
            arr.push(back(obj[i],i));
            i++;
        }
        return arr;
    }
    // 是否在某个数组中
    in_array(arr){
        let ai = null;
        arr.filter((item,index)=>{
            if(item==this)
            {
                ai = index;
            }
        });
        return ai;
    }
    // 是否包含某个字符串
    in_str(str){
        return this.indexOf(str) == -1 ? false : true;
    }

}
module.exports = StrPlay
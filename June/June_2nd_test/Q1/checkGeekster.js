var list = ['geek', 'geekster', 'geeky'];
function checkGeekster(list){
    for(let i=0;i<list.length;i++){
        if(list[i]==='geekster'){
            list[i]=list[i+1]
            console.log("index->", i);
        }
    }
    list.pop()
    console.log(list);
}
checkGeekster(list)
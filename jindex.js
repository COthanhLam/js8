var number=[2,1,0,-8,-6,-7,4,3,5,9];
function domid(id){
    document.getElementById(id);
}
function check1(){
    var sum=0;
    for(var i=0;i<number.length;i++)
    {
        if(number[i]>0){
            sum+=number[i]
        }
    }
    console.log(sum);
    document.getElementById("result1").innerHTML = sum;
}

//bai 2
function check2(){
    var count=0;
for (var i=0;i<number.length;i++){
    if(number[i]>0){
        count+=1
    }

}
console.log(count);
    domid("result2").innerHTML = count;

}
//bai 3
function check3(){
    var min=number[0];
    for(var i=1;i<number.length;i++)
    {if ( number[i]<min){
        min=number[i]

    }

    }
    console.log(min);
    domid("result3").innerHTML= min;
}
// bai 4;
 function check4(){
    var minNum = 0;
    for (var i=0;i<number.length;i++){
        if()
    }
 }


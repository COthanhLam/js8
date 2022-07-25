var number=[4,2,0,-8,-6,-7,4,3,5,9];
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

}s
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
// // bai 4;
  function check4(){
   
    for (var i=0;i<number.length;i++)
    { if (number[i]>0){
        var minNum=1;
        if(number[i]<=minNum){
            minNum=number[i]
        }
    }
   
       
    }
    console.log(minNum);
 }
// bai 5
function check5(){
    var lastEven=0;
 
   for(i=number.length-1;i<number.length;i--){
     if(number[i]%2===0){
        lastEven =number[i];
        break
     }else {
        lastEven= -1
     }
   }
console.log(lastEven);
   
domid("result5").innerHTML=lastEven
    }
    // bai 6 
    function check6(){
        var pos1=+domid("gethepostion1").value;
        var pos2=+domid("gethepostion2").value;
        var change=0;
        var change2=0;
          change= number[pos1];
        change2=number[pos2]
        number[pos1]=change2;
        number[post2]=change;
        console.log( number[pos1], number[pos2]);
            domid("result6").innerHTML=number

    }
//bai 7
function check7(){
    
    for(j=number.length-1;j++;)
    {for (i=0;i<j;i++){
        if (number[i]>number[i+1]){
        var tmp=number[i];
        number[i]=number[i+1];
        number[i+1]=tmp;
        
    }
    }
    }
 console.log(number);

}
//bai 8
function findNt(numb){
    var count=0;
   
    for(i=1;i<=numb;i++){
        if(numb%i===0){
            count++
        }}


        if(count===2){
       return numb
        } else {
            return ''
        }
    
    

   }
   function check8(){
    var numberNt=0;
    for (var i=0;i<number.length;i++){
        if(number[i]===findNt(number[i])){
         
            numberNt=number[i]
            console.log(numberNt);
         
           break
        }else {
            numberNt=-1;
        }
    }  
    domid("result8").innerHTML=numberNt 
}
//bai 9

//bai 10
function check10(){
    var countB=0;
    var countS=0;
    for(i=0;i,number.length;i++)
    {
        if(number[i]>0){
            countB+=1;
        }else (number[i]<0) 
        {
            countS+=1;
        };
        if (countB>countS)
        {

            domid("result10").innerHTML= " duong nhieu hon";
        }else {
            domid("result10").innerHTML= " am nhieu hon";

        }
    }console.log(countB,countS)
}

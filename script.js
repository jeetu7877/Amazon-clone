let n=prompt("Enter the number : ");
let arr=[];
for(let i=0;i<n;i++){
  arr[i-1]=i;
}let sum=arr.reduce((res,curr)=>{
  return res+curr;
})
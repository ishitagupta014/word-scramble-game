const mess=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let words=['python','angular','swift','php','javascript','react','html','css','java','android','ruby','pascal','fortan','mysql','jquery'];
const createNewWords=()=>{
     let randum=Math.floor(Math.random()*words.length);
     let temp_words=words[randum];
     return temp_words;
}
const scrambleWords=(arr)=>{
       for(let i=arr.length-1;i>0;i--){
           let temp=arr[i];
           let j=Math.floor(Math.random()*(i+1));
           arr[i]=arr[j];
           arr[j]=temp;
       }
       return arr;

}
btn.addEventListener('click',function(){
          if(!play){
              play=true;
              btn.innerHTML="Guess";
             // guess.classList.toggle('hidden');
             guess.classList.remove('hidden');
             
             newWords=createNewWords();
             randWords=scrambleWords(newWords.split("")).join("");
             console.log(randWords);
             mess.innerHTML=`Guess the word: ${randWords}`;
          }
          else{
              let tempWord=guess.value;
              if(tempWord===newWords){
                       play=false;
                       mess.innerHTML=`Awesome It's correct.`;
                       btn.innerHTML='Start Again';
                       guess.classList.add('hidden');
                       guess.value="";

              }
              else{
                     mess.innerHTML=`Sorry Bro. It is not correct,Please try again  ${randWords}`;
                    
              }
          }
})

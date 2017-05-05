function myFunction(){
  var x = document.getElementById("input").value;
  var averageWords = 0;
  var spaceCounter = 0;
  var sentenceCounter = 0;
  var wordCounter = 1;
  for (var i = 0; i <= x.length; i++){
    if(x[i] === ''){
      spaceCounter++;
      wordCounter++;
    }
    if(x[i]=='.'||x[i]=='?'||x[i]=='!'){
      sentenceCounter++;
    }
  }
  averageWords = wordCounter / sentenceCounter;
  console.log(averageWords);
  document.getElementById("row1").innerHTML='there are an average of' + averageWords + 'words per sentence';
  document.getElementById("row2").innerHTML='there are' + spaceCounter + 'spaces in this text';
  document.getElementById("row3").innerHTML='there are' + wordCounter + 'words in this text';
  document.getElementById("row4").innerHTML='there are' + sentenceCounter + 'sentences in this text';
}
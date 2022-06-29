var randomnumber1=(Math.random()*6)+1;
randomnumber1=Math.floor(randomnumber1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");

var randomnumber2=(Math.random()*6)+1;
randomnumber2=Math.floor(randomnumber2);
document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");

if(randomnumber1===randomnumber2)
  document.querySelector("h1").textContent="Draw!"
else if(randomnumber1>randomnumber2)
  document.querySelector("h1").textContent="🚩Player 1 wins"
else
  document.querySelector("h1").textContent="Player 2 wins🚩"

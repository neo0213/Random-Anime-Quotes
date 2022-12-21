const title = document.getElementById('title');
const character = document.getElementById('char');
const card = document.getElementById('quote')




fetch("https://animechan.vercel.app/api/random")
          .then(response => response.json())
          .then(data => display(data));


function display(data){
    const anime = data.anime;
    const char = data.character;
    const quote = data.quote;


    title.innerText = char;
    character.innerText = anime;
    card.innerText = quote;

}


//change divCount var to change the number of animated bars
var divCount = 100;
var loopCount = 0;
var container = document.getElementById("container");
var containerWidth = container.width;
var stageHeight = container.clientHeight;
var stageWidth = container.clientWidth;
var speed = 105;
var randomSpeed = 3;
// empty arrays that will house the programatically created divs, 
// and store the used one's into another 'post animation' array -- so that they don't get animated again
var bars = [];
var previousRandomNums = [];

function createElement() {
  // create as many divs as declared in the 'divCount' var. 
  for (i = 1; i <= divCount; i++) {
    var newDiv = document.createElement("div");
    // add the newly created element into container div
    container.appendChild(newDiv);
    // assign an id to the newDivs
    newDiv.id = "bar" + i;
    // get id attribute and push into an array
    var newDivAtt = newDiv.getAttribute("id");
    bars.push(newDivAtt);
    styleElement();

  }

  // create divs
  function styleElement() {
    // Set styles
    var randomHeight = Math.floor(Math.random() * stageHeight);
    var randomWidth = Math.floor(Math.random() * 100);
    // Set the random colour
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    setLeftPos = Math.floor(Math.random() * stageWidth);
    // Assign styles
    document.getElementById('bar' + [i]).style.position = "absolute";
    document.getElementById('bar' + [i]).style.display = "block";
    document.getElementById('bar' + [i]).style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('bar' + [i]).style.width = randomWidth + "px";
    document.getElementById('bar' + [i]).style.top = -stageHeight + "px";
    document.getElementById('bar' + [i]).style.left = setLeftPos + "px";
    document.getElementById('bar' + [i]).style.height = randomHeight + "px";
    document.getElementById('bar' + [i]).style.border = "black 1px solid";
    
  }
  init();

  function init() {
      var randomNum = Math.floor(Math.random() * bars.length);
      animateBar();
      // animate the bars on a y value equal to the container height.
      function animateBar() {
        var chosenBar = document.getElementById(bars[randomNum]);
        TweenMax.to(chosenBar, randomSpeed, {y: stageHeight * 2, ease: Circ.easeInOut});
        TweenMax.to(chosenBar, 0, {delay: .1, onComplete: spliceArray});
      }
      // once animated, remove element from array so it can't be targeted again
      function spliceArray() {
        bars.splice(randomNum, 1);
        chosenBar = "";
        randomNum = "";
        checkLoopCount();
      }
    }
    //  run the animation for as long as there are bars left to animate
  function checkLoopCount() {
    if (loopCount < (divCount - 1)) {
      loopCount++;
      init();
    } else {
      
    }
  }
}

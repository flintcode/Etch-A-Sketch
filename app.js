
const container = document.querySelector("#container");
const reset = document.querySelector("#reset");         
const black = document.querySelector("#black");
const White = document.querySelector("#white");
const gray = document.querySelector("#gray");
const eraser = document.querySelector('#eraser');
const red = document.querySelector('#red');
const blue = document.querySelector("#blue");
const smallGrid = document.querySelector("#smallGrid");
const mediumGrid = document.querySelector("#mediumGrid");
const largeGrid = document.querySelector("#largeGrid");


function grid(rowNum){
    for (i = 0; i < rowNum; i++){
        for (j = 0; j < rowNum; j++){
            const square = document.createElement("div");
              square.classList.add("square");
                container.appendChild(square);
                  square.addEventListener('mouseover', function(e) {
                    square.style.background = "black";
            })

            black.addEventListener('click',colorBlack);
              function colorBlack(){
                square.addEventListener('mouseover', function(e) {
                  square.style.background = "black";
            })
            }
            
            gray.addEventListener('click',colorGray);
              function colorGray(){
                square.addEventListener('mouseover',function(e){
                  square.style.background = 'lightgray';
             });
            } 
            red.addEventListener('click',colorRed);
              function colorRed(){
                square.addEventListener('mouseover',function(e){
                  square.style.background = 'red';
             });
            } 
            green.addEventListener('click',colorGreen);
             function colorGreen(){
                square.addEventListener('mouseover', function(e){
                  e.target.style.background = "green";
               })   
              }
              blue.addEventListener('click',colorBlue);
                function colorBlue(){
                  square.addEventListener('mouseover', function(e){
                  square.style.background = "blue";
               })   
              }
            eraser.addEventListener('click', erase);
             function erase(){
                square.addEventListener('mouseover',function(e){
                 square.style.background = 'transparent';
               })
             }
             smallGrid.addEventListener('click',gridSmall);
               function gridSmall(){
                square.classList.remove('square');
                  square.classList.remove('squareLarge');
                    square.style.background = null;
                     square.classList.add('squareSmall');
             
            }
            mediumGrid.addEventListener('click',gridMedium);
              function gridMedium(){
                square.classList.remove('squareLarge');
                  square.style.background = null;
                    square.classList.add('square');
            }

            largeGrid.addEventListener('click',gridLarge);
                function gridLarge(){
                  square.classList.remove('squareSmall');
                    square.style.background = null;
                     square.classList.add("squareLarge");
            }
            reset.addEventListener('click',resetGrid);
              function resetGrid(){
                square.style.background = null;
              }
          } 
      }
    }
grid(50);
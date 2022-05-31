 let gridArray = [{
                    value:1, 
                    hexcode:'#2B8EAD'
                  },
                  {
                    value:2, 
                    hexcode:'#333333'
                  },
                  {
                    value:3, 
                    hexcode:'#6F98A8'
                  },
                  {
                    value:4, 
                    hexcode:'#E9E9E9'
                  },

                  {
                    value:5, 
                    hexcode:'#72C3DC'
                  },
                  {
                    value:6, 
                    hexcode:'#2B8EAD'
                  },
                  {
                    value:7, 
                    hexcode:'#6F98A8'
                  },
                  {
                    value:8, 
                    hexcode:'#BFBFBF'
                  },
                  {
                    value:9, 
                    hexcode:'#2F454E'
                  }];
 const sortButton = document.getElementById("sortButton");
 const shuffleButton = document.getElementById("shuffleButton");
 const cellContainer = document.getElementById("cellContainer");
 
 
 function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function sortArray(arr) {
     
    arr.sort(function (a, b) {
        return a.value - b.value;
      });

    return arr;
}

let renderGrids = (arr) => {
    console.log('111');
     let cell = "";
     arr.forEach((e,i) => {
          cell += "<div class='cell-wrapper'><div class='cell' style='background-color:"+e.hexcode+"'><span>" + e.value +  "</span></div></div>";
     });
    
     cellContainer.innerHTML = cell;
}

shuffleButton.addEventListener('click',() => {
    let shuffledArr =  shuffleArray(gridArray);
    renderGrids(shuffledArr);
 })

sortButton.addEventListener('click',() => {
   let sortedArr =  sortArray(gridArray);
   renderGrids(sortedArr);
})

renderGrids(gridArray);


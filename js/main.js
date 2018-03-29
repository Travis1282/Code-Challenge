////////////////CLICK LISTENERS FOR PAGE NAVS////////////////
//---------LETS GET DOWN ON SOME EVENT BUBBLING----------//
// document.querySelector('.heroNav').addEventListener('click', () => {
//   console.log(e)
//   scrollIt(document.querySelector('.mainContent'), 800);
// });



    const selectScroll = (e) => {
    	scrollIt(document.querySelector('.mainContent'), 800);
    	selectContent(e)

    }

    function selectContent(e) {
    	  console.log(e.target, e.currentTarget)

        if (e.target !== e.currentTarget) {
            var clickedItem = e.target.id;
            console.log("Hello " + clickedItem);
            // currentSlide(clickedItem)
        }
        e.stopPropagation();
    }

const 	heroDiamond = document.querySelector('.heroNav');
		heroDiamond.addEventListener("click", selectScroll, false);
////////////////CLICK LISTENERS FOR PAGE NAVS////////////////
//---------LETS GET DOWN ON SOME EVENT BUBBLING----------//


//---------Scroll Page and Trigger Main Content Slider ----------//


const selectScroll = (e) => {
	console.log(e.target.id)
	scrollIt(document.querySelector('.mainContent'), 800);
	selectContent(e)

}

//---------Select Main Content Slider ----------//

// let allTitles = document.getElementsByClassName('articleTitleWrapper')
// console.log(allTitles["0"].children[0])
// let title = ''

const selectContent = (e) => {

		const allTitles = document.getElementsByClassName('articleTitleWrapper')
					console.log(allTitles.length)

		let selectedItem = 0;
		
		for (let i = allTitles["0"].children.length - 1; i >= 0; i--) {

			console.log(e.target.id, allTitles["0"].children[i])

			if (e.target.id == allTitles["0"].children[i].className){
				selectedItem = i;
				allTitles["0"].children[i].style.transform='translateX(0px)';
				allTitles["0"].children[i].style.color = 'rgba(53, 61, 67, 1)';

			}	
			else if ( i > selectedItem ){
				allTitles["0"].children[i].style.transform='translateX(500px)';
				allTitles["0"].children[i].style.color = 'rgba(53, 61, 67, 0)';
			}	else {
				allTitles["0"].children[i].style.transform='translateX(-500px)';
				allTitles["0"].children[i].style.color = 'rgba(53, 61, 67, 0)';
			}
		}

    // if (e.target !== e.currentTarget) {
    // 	if(title != ''){ //--- if there is no title there then do not reset it
	   //      title[0].style.color = 'rgba(53, 61, 67, 0)';
	   //  }
    //     const clickedItem = e.target.id;
    //     title = document.getElementsByClassName(clickedItem)
    //     title[0].style.color = 'rgba(53, 61, 67, 1)';
    //     title[0].style.transform = 'translateX(0px)';
    // }
    e.stopPropagation();
}

//---------Listiner for diamonds ----------//

const 	heroDiamond = document.querySelector('.heroNav');
		heroDiamond.addEventListener("click", selectScroll, false);


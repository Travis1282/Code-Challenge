////////////////CLICK LISTENERS & THEIRFUNCTIONS////////////////
//-----------LETS GET DOWN ON SOME EVENT BUBBLING------------//


//---------Scroll Page and Trigger Main Content Slider ----------//

const selectScroll = (e) => {
	if (e.target != e.currentTarget) {
		selectContent(e)
		scrollIt(document.querySelector('.mainContent'), 800);
	}
}


//---------Select Main Content Slider ----------//

const selectContent = (e) => {
	if (e.target != e.currentTarget) {
		selected = e.target.id.slice(0, -1)//- transform id to match class
		const allTitles = document.getElementsByClassName('articleTitleWrapper')//--- get all titles to compare to the clicked id
		let selectedTitle = 0;

		for (let i = allTitles["0"].children.length - 1; i >= 0; i--) { //---- if item is the one selected animate to center and 100% opacity
			if (selected == allTitles["0"].children[i].className){
				selectedTitle = i;
				selectedTitle == 0 ? slideLeft.style.color = 'rgba(53, 61, 67, 0)': window.slideLeft.style.color = 'rgba(53, 61, 67, 1)' ;
				selectedTitle == allTitles["0"].children.length-1 ? window.slideRight.style.color = 'rgba(53, 61, 67, 0)': window.slideRight.style.color = 'rgba(53, 61, 67, 1)';

				allTitles["0"].children[i].style.transform='translateX(0px)';
				allTitles["0"].children[i].style.color = 'rgba(53, 61, 67, 1)';
			}	
			else if ( i > selectedTitle ){//---- if item ordered after the one selected make sure it is to the right
				allTitles["0"].children[i].style.transform='translateX(500px)';
				allTitles["0"].children[i].style.color = 'rgba(53, 61, 67, 0)';
			}	else {//---- if item ordered before the one selected keep make sure it is to the left
				allTitles["0"].children[i].style.transform='translateX(-500px)';
				allTitles["0"].children[i].style.color = 'rgba(53, 61, 67, 0)';
			}
		}
		highlights(e)
	}
}


//---------Listiner for diamonds ----------//

const 	heroDiamond = document.querySelector('.heroNav');
		heroDiamond.addEventListener("click", selectScroll, false);


//---------Listiner for pageNav ----------//

const	pageNav = document.querySelector('.pageNav')
		pageNav.addEventListener("click", selectContent, false);	



//---------Highlight Selected Sections ----------//

const highlights = (e) => {

	selected = e.target.id.slice(0, -1)

	const allTitles = document.getElementsByClassName('articleTitleWrapper')

	for (let i = 0; heroDiamond.querySelectorAll('.diamond').length > i; i++){

		const diamond = heroDiamond.querySelectorAll('.diamond');
		diamond[i].style.border = '1.5px solid rgba(255, 255, 255, .6)';
		const learnMore = heroDiamond.querySelectorAll('.learnMore');
		learnMore[i].style.color = 'rgba(255, 255, 255, .6)';
		const diamondTitle = heroDiamond.querySelectorAll('.title');
		diamondTitle[i].style.color = 'rgba(255, 255, 255, .6)';
		diamond[i].color = 'rgb(148, 153, 156)';
		
		const unselected = diamond[i].id.slice(0, -1) + 'P';
		const pageNavHighlight = document.getElementById(unselected)

		if (unselected != selected + 'P'){
			pageNavHighlight.style.color = 'rgb(148, 153, 156)';
		}else{
			pageNavHighlight.style.color = 'rgb(53, 61, 67)';
			}

		if (allTitles["0"].children[i].style.cssText == 'transform: translateX(0px); color: rgb(53, 61, 67);'){
			diamond[i].style.border = '1.5px solid rgba(255, 255, 255, 1)';
			learnMore[i].style.color = 'rgba(255, 255, 255, 1)';
			diamondTitle[i].style.color = 'rgba(255, 255, 255, 1)';
			diamond[i].id.color = 'rgb(148, 153, 156)';

			const selector = ''+selected+'P';
			const pageNavHighlight = document.getElementById(selector)
			pageNavHighlight.style.color = 'rgb(53, 61, 67)';
		}

	}
}




//---------Listiners for forward/back buttons ----------//

const sliderHandle = (e) => {

	const allTitles = document.getElementsByClassName('articleTitleWrapper')

	for (let i = 0; allTitles["0"].children.length > i; i++){
		if (allTitles["0"].children[i].style.cssText == 'transform: translateX(0px); color: rgb(53, 61, 67);'){

			let newTitle = {target: {}}

			if (e.target.id == 'slideRight' || e.target.id == 'nextButton' && i != allTitles["0"].children.length-1){
				i++
				newTitle.target.id = allTitles["0"].children[i].className + "Z";
				selectContent(newTitle)
			}

			if(e.target.id == 'slideLeft' && i != 0){
				 i--
				newTitle.target.id = allTitles["0"].children[i].className + "Z";
				selectContent(newTitle)
			}
		}
	}
}


//---------Left Right Slider Controler----------//


const	slideRight = document.getElementById('slideRight')
		slideRight.addEventListener("click", sliderHandle, false)

const	slideLeft = document.getElementById('slideLeft')
		slideLeft.addEventListener("click", sliderHandle, false)


//---------Next Button ----------//

const	nextButton = document.getElementById('nextButton')
		nextButton.addEventListener("click", sliderHandle, false)



//---------When the page loads select multiFamily ----------//

selectContent({target: {id:"multiFamilyS"}})


















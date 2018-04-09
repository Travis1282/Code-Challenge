/////////////////// Globals ///////////////////
const 	pageContentTitles = document.getElementsByClassName('articleTitleWrapper')[0].children;

let 	selectedTitle = 0, // ------ keep track of the selected section
		// ---- styles to be applied directly through js ---- //
		dimondNavSelectedColor = 'rgba(255, 255, 255, 1)',
		dimondNavSelectedBorder = '1.5px solid rgba(255, 255, 255, 1)',
		dimondNavUnselectedColor = 'rgba(255, 255, 255, .6)',
		dimondNavUnselectedBorder = '1.5px solid rgba(255, 255, 255, .6)',
		pageNavSelectedColor = 'rgb(53, 61, 67)',
		pageNavUnselectedColor = 'rgb(148, 153, 156)';


//---------Scroll Page and Trigger Main Content Slider ----------//

const selectRoute = (e) => {

	if (e.target != e.currentTarget) {
		let selected = e.target.id.slice(0, -1)//- transform id to match class
		if (e.target.className == 'diamond'){
			selectContent(selected)
			scrollIt(document.querySelector('.mainContent'), 800);
		}else if (e.path[1].className == 'pageNav') {
			selectContent(selected)
		}
	}else if (e.path[1].className == 'articleWrapper'){
		sliderAdvance(e.target.id)

	}else if (e.target.id == 'nextButton'){
		sliderAdvance(e.target.id)
	}
}


//---------Select Main Content Slider ----------//

const selectContent = (selected) => {
	
	selectedTitle = 0;
	const allTitles = document.getElementsByClassName('articleTitleWrapper')//--- get all titles to compare to the clicked id
	
	for (let i = pageContentTitles.length - 1; i >= 0; i--) {//---- if item is the one selected animate to center and 100% opacity

		if (selected == pageContentTitles[i].className){
			selectedTitle = i;
			arrowVanash()
			highlightSelected()
			pageContentTitles[i].id = 'articleTitleWrapperCenter'
		}	
		else if ( i < selectedTitle ){//---- if item ordered after the one selected make sure it is to the left
			pageContentTitles[i].id = 'articleTitleWrapperRight'
		}else {//---- if item ordered before the one selected keep make sure it is to the right
			pageContentTitles[i].id = 'articleTitleWrapperLeft'
		
		}
	}
}


//--------- Vanish the forward and reverse arrows when there is no more content ----------//

const arrowVanash = () => {
	// left slider is invisible if we are on the first item
	selectedTitle == 0 ? slideLeft.style.color = 'rgba(53, 61, 67, 0)': window.slideLeft.style.color = 'rgba(53, 61, 67, 1)' ;
	// right slider is invisible if we are on the last item 
	selectedTitle == pageContentTitles.length-1 ? window.slideRight.style.color = 'rgba(53, 61, 67, 0)': window.slideRight.style.color = 'rgba(53, 61, 67, 1)';
}


//--------- Slider and Next button back and forward sorting ----------//

const sliderAdvance = (whichWay) => {
	
	if (whichWay == 'slideRight' || whichWay =='nextButton' && selectedTitle < pageContentTitles.length-1){
				console.log('slideRight')

		selectContent(pageContentTitles[selectedTitle+1].className)

	}else if (whichWay == 'slideLeft' && selectedTitle > 0){
				console.log('slideLeft')

		selectContent(pageContentTitles[selectedTitle-1].className)
	}
}


//--------- Highlight Selected Sections ----------//

const highlightSelected = () => {

	const 	pageNodeNav = document.querySelectorAll('.pageNav'),
			diamond = heroDiamond.querySelectorAll('.diamond'),
			diamondTitle = heroDiamond.querySelectorAll('.title');

	for (let i = 0; pageContentTitles.length > i; i++){ 

		if (i == selectedTitle){
			diamondTitle[i].style.color = dimondNavSelectedColor;
			diamond[i].style.border = dimondNavSelectedBorder;
			pageNodeNav[0].children[i].style.color = pageNavSelectedColor;


		} else {
			diamondTitle[i].style.color = dimondNavUnselectedColor;
			diamond[i].style.border = dimondNavUnselectedBorder;
			pageNodeNav[0].children[i].style.color = pageNavUnselectedColor;

		}
	}
}


//---------Event Listeners for all buttons ----------//


const 	heroDiamond = document.querySelector('.heroNav');
		heroDiamond.addEventListener("click", selectRoute, false);

const	pageNav = document.querySelector('.pageNav');
		pageNav.addEventListener("click", selectRoute, false);	

const	slideRight = document.getElementById('slideRight')
		slideRight.addEventListener("click", selectRoute, false)

const	slideLeft = document.getElementById('slideLeft')
		slideLeft.addEventListener("click", selectRoute, false)

const	nextButton = document.getElementById('nextButton')
		nextButton.addEventListener("click", selectRoute, false)


//---------When the page loads select MultiFamily ----------//

selectContent('multiFamily')


















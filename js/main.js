const 	pageContentTitles = document.getElementsByClassName('articleTitleWrapper')[0].children;

let 	selectedTitle = 0, 
		dimondNavSelectedColor = 'rgba(255, 255, 255, 1)',
		dimondNavSelectedBorder = '1.5px solid rgba(255, 255, 255, 1)',
		dimondNavUnselectedColor = 'rgba(255, 255, 255, .6)',
		dimondNavUnselectedBorder = '1.5px solid rgba(255, 255, 255, .6)',
		pageNavSelectedColor = 'rgb(53, 61, 67)',
		pageNavUnselectedColor = 'rgb(148, 153, 156)';



const confirmValidClick = (e) => {
	if (e.target != e.currentTarget) routeButtonClicks(e)
	else if (e.path[1].className == 'articleWrapper' || e.target.id == 'nextButton') sortNextAndBack(e.target.id)
}

const routeButtonClicks = (click) => {
	if (click.target.className == 'diamond' || 'pageNav') checkIfScrollIsNeededAndTriggerSlider(click) 
}

const transformIdToMatchClass = (click) => {
	let selected = click.target.id.slice(0, -1)
	return selected
}

const checkIfScrollIsNeededAndTriggerSlider = (click) => {
	triggerSlider(transformIdToMatchClass(click)) 
	if (click.target.className == 'diamond') scrollIt(document.querySelector('.mainContent'), 800);
}

const triggerSlider = (selected) => {
	selectedTitle = 0;
	for (let i = pageContentTitles.length - 1; i >= 0; i--) {
		findSelectedSection(i, selected)
	}
}

const findSelectedSection = (i, selected) => {
	if (selected == pageContentTitles[i].className) activateSelectionAnimations(i)
	else if ( i < selectedTitle ) pageContentTitles[i].id = 'articleTitleWrapperRight'
	else pageContentTitles[i].id = 'articleTitleWrapperLeft'
}

const activateSelectionAnimations = (i) => {
	selectedTitle = i;
	hideArrows()
	highlightSelectedSections(i)
	pageContentTitles[i].id = 'articleTitleWrapperCenter'
}


const hideArrows = () => {
	selectedTitle == 0 ? slideLeft.style.opacity = '0': window.slideLeft.style.opacity = '1' ;
	selectedTitle == pageContentTitles.length-1 ? window.slideRight.style.opacity = '0': window.slideRight.style.opacity = '1';
}


const sortNextAndBack = (direction) => {
	if (direction == 'slideRight' || direction =='nextButton' && selectedTitle < pageContentTitles.length-1) triggerSlider(pageContentTitles[selectedTitle+1].className)
	else if (direction == 'slideLeft' && selectedTitle > 0)	triggerSlider(pageContentTitles[selectedTitle-1].className)
}

const highlightSelectedSections = (i) => {
	allTitlesArray = Array.from(pageContentTitles);
	let sortedSelections = allTitlesArray.map((value, i, array) => {
		if(i == selectedTitle ) performHighlight(i)
		else removeAllHilights(i)
	})
}

const performHighlight = (i) => {
	diamondTitle[i].style.color = dimondNavSelectedColor;
	diamond[i].style.border = dimondNavSelectedBorder;
	pageNodeNav[0].children[i].style.color = pageNavSelectedColor;
}

const removeAllHilights = (i) => {
	diamondTitle[i].style.color = dimondNavUnselectedColor;
	diamond[i].style.border = dimondNavUnselectedBorder;
	pageNodeNav[0].children[i].style.color = pageNavUnselectedColor;
}



const heroDiamond = document.querySelector('.heroNav');
const diamond = heroDiamond.querySelectorAll('.diamond');
const diamondTitle = heroDiamond.querySelectorAll('.title');
heroDiamond.addEventListener("click", confirmValidClick, false);

const pageNodeNav = document.querySelectorAll('.pageNav');
const pageNav = document.querySelector('.pageNav');
pageNav.addEventListener("click", confirmValidClick, false);	

const slideRight = document.getElementById('slideRight')
slideRight.addEventListener("click", confirmValidClick, false)

const slideLeft = document.getElementById('slideLeft')
slideLeft.addEventListener("click", confirmValidClick, false)

const nextButton = document.getElementById('nextButton')
nextButton.addEventListener("click", confirmValidClick, false)


//---------When the page loads select MultiFamily ----------//

triggerSlider('multiFamily')


















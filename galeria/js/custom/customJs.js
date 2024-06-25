/*===== Filterable Gallery with Lightbox ---=====*/
const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const lightboxCloseBtn = document.querySelector('.lightbox_close');
/*===== Gallery Filtering functionality =====*/
galleryTabs.forEach((currTab) => {
  currTab.addEventListener('click', (e) => {
    // removing the existing 'active' class from the tabs.
    e.target.parentElement.querySelector('.active').classList.remove('active');
    // adding the 'active' class to the currently clicked tab.
    e.target.classList.add('active');
    let filterValue = e.target.getAttribute('data-filter');
    galleryItems.forEach((currItem) => {
      if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
        currItem.classList.remove('hide');
        currItem.classList.add('show');
      }
      else {
        currItem.classList.remove('show');
        currItem.classList.add('hide');
      }
    });
  });
});
/*===== Lightbox functionality =====*/
galleryImgs.forEach((currImg) => {
  currImg.addEventListener('click', (e) => {
    let imgSrc = e.target.getAttribute('src');
    lightboxImg.setAttribute('src', imgSrc);
    lightbox.classList.add('open');
    body.classList.add('overflow_hide');
  });
});
// Function for closing the Lightbox
const lightboxClose = () => {
  lightbox.classList.remove('open');
  body.classList.remove('overflow_hide');
};
// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener('click', lightboxClose);
// closing the lightbox on clicking outside of it.
window.addEventListener('click', (e) => {
  if (e.target.className === 'lightbox_wrapper') {
    lightboxClose();
  }
});
// closing the lightbox on pressing the Escape key.
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightboxClose();
  }
});



/*CALCULATOR*/

function calculator(){
	var cena = prompt("Napíš predajnú cenu", "suma v eur");
	if(cena == null){
		alert("cena je povinný údaj")
	return;
}
	console.log(cena);	
		
	var typNehnutelnosti = prompt("Aký typ nehnuteľnosti", "byt alebo dom");
	if(typNehnutelnosti == null){
		alert("typ nehnuteľnosti je povinný údaj")
	return;
}
	
	var byt = 0.9;
	var dom = 1.1
	
	console.log(typNehnutelnosti);
	
	var proviziaByt = (cena * 0.01)*byt;
	var proviziaDom = (cena * 0.01)*dom;
	
	
	
	if(typNehnutelnosti == "byt"){
	cuteAlert({
		type: "success",
		title: "Tvoja provízia je",
		message: proviziaByt.toFixed(0) + "&nbsp;EUR",
		buttonText: "OK",
	});
	}else if(typNehnutelnosti == "dom"){
	cuteAlert({
		type: "success",
		title: "Tvoja provízia je",
		message: proviziaDom.toFixed(0) + "&nbsp;EUR",
		buttonText: "OK",
	});
	}
}
const currentPhoto = document.getElementById('current_photo');
let currentPhotoSrc = currentPhoto.src;

const galley__left = document.querySelector('.galley__left');

const photos = document.querySelectorAll('.photo-small');


galley__left.addEventListener( 'mouseover', e => {

    const el = e.target;

    photos.forEach( photo => {
 
         if( el === photo ) {
             currentPhoto.src = photo.src;
         }

    });

} );


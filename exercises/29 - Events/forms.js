const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
    // event.preventDefault();
    const shouldChangePage = confirm('THis website might be fraud');

    // if (shouldChangePage) {
    //     window.location = event.currentTarget.href;
    // }

    if (!shouldChangePage) {
        event.preventDefault();
    }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
    // e.currentTarget.querySelector('[name="email"]');
    const name = e.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('Sorry');
        e.preventDefault();
    }
});

function logEvent(e) {
    console.log(e.type);
    console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'


const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
    if (e.type === 'click' || e.key === 'Enter') {  
        console.log('You clicked the photo');
    }
    console.log(e.key);
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
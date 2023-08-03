const shareBtnDesktop = document.getElementById('share--btn-desktop')
const shareDesktop = document.getElementById('share--desktop')
const shareBgveryDarkishBlue = document.getElementById('share--bg--verydarkishblue')
const shareBtnMobile = document.getElementById('share--btn--mobile')
const shareBtnMobile1 = document.getElementById('share--btn--mobile1')
const shareMobile = document.getElementById('share--mobile')
const profile = document.getElementById('profile')

shareBtnDesktop.addEventListener('click', function() {
  shareDesktop.classList.toggle('hidden')
  shareDesktop.classList.toggle('flex')
  shareBgveryDarkishBlue.classList.toggle('bg-lightGrayishBlue')
  shareBgveryDarkishBlue.classList.toggle('bg-veryDarkGrayishBlue')
  shareBtnDesktop.classList.toggle('fill-veryDarkGrayishBlue')
  shareBtnDesktop.classList.toggle('fill-lightGrayishBlue')

})

shareBtnMobile.addEventListener('click', function() {
  profile.classList.toggle('hidden')
  profile.classList.toggle('flex')
  shareMobile.classList.toggle('hidden')
  shareMobile.classList.toggle('flex')
})

shareBtnMobile1.addEventListener('click', function() {
  profile.classList.toggle('hidden')
  profile.classList.toggle('flex')
  shareMobile.classList.toggle('hidden')
  shareMobile.classList.toggle('flex')
})


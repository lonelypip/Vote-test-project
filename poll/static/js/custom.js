const onSubmitForm = document.querySelectorAll('.onSubmitForm');
const wrapBox = document.querySelector('.wrap-box');
let currentWrap = wrapBox.firstElementChild;

currentWrap.classList.add('active');

onSubmitForm.forEach(item => {
   item.addEventListener('submit', sendForm)
});

function sendForm(e) {
   e.preventDefault();
   const radioBtn = document.querySelector(`#${e.target.id} .score`);

   $.ajax({
      type: 'POST',
      url: '',
      data: {
         login: radioBtn.value,
         csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
      },
      success:function() {
         console.log('Vote counted');
      }
   });
   
   const activeWrap = currentWrap.nextElementSibling;

   currentWrap.classList.remove('active');
   activeWrap.classList.add('active');

   currentWrap = activeWrap;

   if (activeWrap.nextElementSibling === null) {
      activeWrap.classList.remove('active');
      wrapBox.textContent = 'Спасибо за голосование!';
   };

   if (!activeWrap) return;
};
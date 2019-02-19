const onSubmitForm = document.querySelectorAll('.onSubmitForm');

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
};
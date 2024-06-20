var sliders = document.querySelectorAll(".image_slider"); //коллекция слайдеров
var image_open = false; //переменая состояни картинки


//увеличивает и уменьшает текущий слайд по нажатию на него
function clickHandler(event) {
  const currentSlide = Array.from(event.currentTarget.parentNode.querySelectorAll('.slide')).indexOf(event.currentTarget);
  
  console.log(image_open);
  console.log(currentSlide);
  
  if (image_open === false || event.currentTarget.style.transform !== "scale(2)") {
    event.currentTarget.style.transform = "scale(2)";
    event.currentTarget.style.borderRadius = "20px";
    event.currentTarget.style.boxShadow = "0px 0px 200px 10px black";
    image_open = true;
  } else {
    event.currentTarget.style.transform = "scale(1)";
    event.currentTarget.style.borderRadius = "0";
    event.currentTarget.style.boxShadow = "none";
    image_open = false;
  }
}

sliders.forEach(slider => {

      //коллекция слайдов
      var slides = slider.parentNode.querySelectorAll(".slide");

      //дэфолтный слайд
      var currentSlide = 0;
  
      //функция для отображения текущего слайда
      function showSlide(slideIndex) {
        for (var i = 0; i < 3; i++) {
          slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
      }
      
      showSlide(currentSlide);
      Array.from(slides).forEach(slide => {
        slide.addEventListener('click', clickHandler);
      });
      //кнопка предыдущего слайда
      var prev_button = slider.parentNode.querySelector('.prev_button'); //parent_node берет из конкретного родительского блока, таким образом нет конфликта между одинаковыми блоками
      prev_button.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        open_slide(currentSlide);
      });
  
      //кнопка следующего слайда
      var next_button = slider.parentNode.querySelector('.next_button'); 
      next_button.addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });
}); 





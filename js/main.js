var numblocks = 2;
var main_block = document.querySelector('.main_block'); 

//имитация БД
var names = ['Electro + Velo','Electro «Усиленный»']; //имена товаров
var price_old_arr = ['153 000 руб.', '153 000 руб.']; //старая цена
var price_new_arr = ['126 тыс. руб.', '126 тыс. руб.']; //новая цена
var product_labels = ["Если вам достаточно нагрузки до 70 кг — вам подойдет набор:", 'Если вам достаточно только электро моделей – вам подойдет набор:']
var description_block_arr = [['Скорость до 10 км/час','100+ кострукций','Нагрзука до 70кг' ],['Скорость до 10 км/час','20+ электромоделей','Нагрузка до 110 кг']];

for (var i = 0; i < numblocks; i++) {

    //общий блок для карточки и надписи над ней
    var base_block = document.createElement('div');
    base_block.setAttribute('class','base_block');
    main_block.appendChild(base_block);

    //надпись над карточкой
    var product_label = document.createElement('div');
    product_label.setAttribute('class', 'product_label');
    product_label.textContent = product_labels[i];
    base_block.appendChild(product_label);
    
    //блок карточки товара
    var product_card_block = document.createElement('div');
    product_card_block.setAttribute('class', 'product_card_block');
    base_block.appendChild(product_card_block);

    //блок названия товара
    var product_name_block = document.createElement('div');
    product_name_block.setAttribute('class', 'product_name_block');
    product_name_block.textContent = names[i];
    product_card_block.appendChild(product_name_block);

    //блок фото товара
    var image_block = document.createElement('div');
    image_block.setAttribute('class', 'image_block');
    product_card_block.appendChild(image_block);

    //кнопка назад
    var prev_button = document.createElement('button');
    prev_button.setAttribute('class', 'prev_button');
    prev_button.textContent = '<';
    image_block.appendChild(prev_button);

    //блок слайдера
    var image_slider = document.createElement('div');
    image_slider.setAttribute('class', 'image_slider')
    image_block.appendChild(image_slider);

    //слайды
    var slide = document.createElement('img');
    slide.setAttribute('class', 'slide');
    slide.setAttribute('src', 'imgs/' + i + '/first.jpg');
    image_slider.appendChild(slide);

    var slide = document.createElement('img');
    slide.setAttribute('class', 'slide');
    slide.setAttribute('src', 'imgs/' + i + '/second.jpg');
    image_slider.appendChild(slide);

    var slide = document.createElement('img');
    slide.setAttribute('class', 'slide');
    slide.setAttribute('src', 'imgs/' + i + '/third.jpg');
    image_slider.appendChild(slide);

    //кнопка вперед
    var next_button = document.createElement('button');
    next_button.setAttribute('class', 'next_button');
    next_button.textContent = '>';
    image_block.appendChild(next_button);

    //блок описания
    var description_block = document.createElement('div');
    description_block.setAttribute('class', 'description_block');
    product_card_block.appendChild(description_block);

    var description_block_ul = document.createElement('div');
    description_block_ul.setAttribute('class', 'ul');
    description_block.appendChild(description_block_ul);

    //блоки списка
    for (var n=0; n < 3; n++){
        var description_text = document.createElement('li');
        description_text.setAttribute('class', 'li');
        description_text.textContent = description_block_arr[i][n];
        description_block_ul.appendChild(description_text);
    }


    //блок цены
    var price_block = document.createElement('div');
    price_block.setAttribute('class', 'price_block');
    product_card_block.appendChild(price_block);

    var price_text = document.createElement('div');
    price_text.setAttribute('class', 'price_text_block');
    price_text.textContent = 'Стоимость:';
    price_block.appendChild(price_text);

    //блок старой цены
    var price_old = document.createElement('div');
    price_old.setAttribute('class', 'price_old_block');
    price_old.textContent = price_old_arr[i];
    price_block.appendChild(price_old);

    //блок новой цены
    var price_new = document.createElement('div');
    price_new.setAttribute('class', 'price_new_block');
    price_new.textContent = price_new_arr[i];
    price_block.appendChild(price_new);

}
    
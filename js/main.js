const btn = document.querySelector('.header__log-in');
const form = document.querySelector('#forma');
const popup = document.querySelector('.popup');
const btnSuccess = document.querySelector('.btn-success');
const closeForm = document.querySelector('.popup__close');
const btnExit = document.querySelector('.header__btn-exit')


const btnFilm = document.querySelector('.films');
const btnTV = document.querySelector('.tvshow');



// при нажатии на главной странице на кнопку войти
// добавляем к форме классы
// благодаря которым появляется модальное окно
btn.addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'block'
    form.classList.add('open');
    popup.classList.add('popup_open')
    
    btnSuccess.disabled = true;

    document.querySelector('.popup__info--check').innerHTML = ''


})


const popupForm = document.querySelector('.popup__form')
let login = ''
let password = ''

//Тип change используем для того чтобы увидеть
// каждый раз новые изменения если они есть в полях input 
// для того чтобы использовать некоторое условие при вводе данных и
// для того чтобы включилась кнопка  одправки данных (в дальнейшем в БД)
popupForm.addEventListener('change', () => {
     login = document.querySelector('.input--text__login').value;
     password = document.querySelector('.input--text__password').value;
    let check = document.querySelector('input[type=checkbox]');   

            // используем некоторые ограничения при вводе данных в input-ы
            // и если данные корректны то переводим кнопку
            // с положения disabled - false на true
            if(login.length >= 3 && password.length >= 7 && check.checked) {
                btnSuccess.disabled = false;
            } else {
                btnSuccess.disabled = true;
            }


            // sessionStorage.setItem('login', login)
            localStorage.setItem('login', login)
            // localStorage.setItem('password', password)

})


// при нажатии на конпку войти внутри формы 
// меняем конпку и записываем в localStorage данные 
btnSuccess.addEventListener('click', () => {

        document.querySelector('.popup').style.display = 'none'

        document.querySelector('.header__btn-exit').style.display = 'block'
        document.querySelector('.header__log-in').style.display = 'none'     

        // ключ / значение 
        document.querySelector('.header__text').innerHTML = localStorage.getItem('login', login);
})


document.querySelector('.header__text').innerHTML = localStorage.getItem('login', login);
console.log(document.querySelector('.header__text').textContent.length)
if(document.querySelector('.header__text').textContent.length) {
    document.querySelector('.header__btn-exit').style.display = 'block'
    document.querySelector('.header__log-in').style.display = 'none' 
}



// Закрытие формы
// внутри формы при нажатии на крестик форма закроется
closeForm.addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none'
})



// при правильном вводе логина и пароля и нажатии на кнопку войти
// измениться основная кнопка на главной странице "войти" на "выйти" 
btnExit.addEventListener('click', () => {
    document.querySelector('.header__log-in').style.display = 'block'
    document.querySelector('.header__text').innerHTML = ''

    document.querySelector('.header__btn-exit').style.display = 'none'

})




// Переключение на раздел с фильмами
btnTV.addEventListener('click', () => {

    document.querySelector('.choice-films').style.display = 'none'
    document.querySelector('.genres').style.display = 'none'
    document.querySelector('.tvchannel').style.display = 'block'

    document.querySelector('.films').classList.remove('filmstvshow--active')
    document.querySelector('.tvshow').classList.add('filmstvshow--active')
})



// Переключение на раздел с телепрограммами
btnFilm.addEventListener('click', () => {

    document.querySelector('.choice-films').style.display = 'block'
    document.querySelector('.genres').style.display = 'block'
    document.querySelector('.tvchannel').style.display = 'none'


    document.querySelector('.films').classList.add('filmstvshow--active')
    document.querySelector('.tvshow').classList.remove('filmstvshow--active')
})






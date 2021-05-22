//Get All Value
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');


//Now Work
one.addEventListener('click', () => {
    document.querySelector('.first').style.display = "block";
    document.querySelector('.second').style.display = "none";
    document.querySelector('.third').style.display = "none";
    document.querySelector('.fourth').style.display = "none";
   
    one.classList.add('active');
    two.classList.remove('active');
    three.classList.remove('active');
    four.classList.remove('active');
});

two.addEventListener('click', () => {
    document.querySelector('.second').style.display = "block";
    document.querySelector('.first').style.display = "none";
    document.querySelector('.third').style.display = "none";
    document.querySelector('.fourth').style.display = "none";

    two.classList.add('active');
    one.classList.remove('active');
    three.classList.remove('active');
    four.classList.remove('active');
});

three.addEventListener('click', () => {
    document.querySelector('.second').style.display = "none";
    document.querySelector('.first').style.display = "none";
    document.querySelector('.third').style.display = "block";
    document.querySelector('.fourth').style.display = "none";
   
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.add('active');
    four.classList.remove('active');
});
four.addEventListener('click', () => {
    document.querySelector('.second').style.display = "none";
    document.querySelector('.first').style.display = "none";
    document.querySelector('.third').style.display = "none";
    document.querySelector('.fourth').style.display = "block";
    
    one.classList.remove('active');
    two.classList.remove('active');
    four.classList.add('active');
    three.classList.remove('active');
});
five.addEventListener('click', () => {
    document.querySelector('.second').style.display = "none";
    document.querySelector('.first').style.display = "none";
    document.querySelector('.third').style.display = "none";
    document.querySelector('.fourth').style.display = "none";
    
    one.classList.remove('active');
    two.classList.remove('active');
    four.classList.remove('active');
    three.classList.remove('active');
});
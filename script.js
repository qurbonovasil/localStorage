
//registerdan malumotlarni saqlash

document.getElementById('register-btn').addEventListener('click',function(){
    const username=document.getElementById('register-username').value;
    const password=document.getElementById('register-password').value;

    if(username && password){
        localStorage.setItem('username',username)
        localStorage.setItem('password',password)

        document.getElementById('register').style.display='none';
        document.getElementById('login').style.display='block';

    }
});
//loginni bosganda malumotlarni homeda ko'rsatish

document.getElementById('login-btn').addEventListener('click',function(){
    const username=document.getElementById('login-username').value;
    const password=document.getElementById('login-password').value;

    const localStorageUsername=localStorage.getItem('username');
    const localStoragePassword=localStorage.getItem('password');


    if(username===localStorageUsername && password===localStoragePassword){

        document.getElementById('login').style.display='none';
        document.getElementById('home').style.display='block';

        document.getElementById('saved-username').textContent =localStorageUsername;
        document.getElementById('saved-password').textContent = localStoragePassword;
    }
    console.log(localStorageUsername,localStoragePassword);
});

//registerdagi login button
document.getElementById('loginShow').addEventListener('click',function(){

    document.getElementById('login').style.display='block';
    document.getElementById('register').style.display='none';
    document.getElementById('home').style.display='none';
})

//homedagai login va register button
document.getElementById('registerShow').addEventListener('click',function(){

    document.getElementById('login').style.display='none';
    document.getElementById('register').style.display='block';
    document.getElementById('home').style.display='none';

})
document.getElementById('loginShow1').addEventListener('click',function(){

    document.getElementById('login').style.display='block';
    document.getElementById('register').style.display='none';
    document.getElementById('home').style.display='none';
})
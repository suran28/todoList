const loginBtn = document.querySelector("#login");

async function handleLoginBtn(){
    console.log('start');
    const res = await axios.get('/login');
    console.log(res);
}

loginBtn.addEventListener("click",handleLoginBtn);
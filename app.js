
const DB_USER = [
	{
		username: "sonda",
		password: "terserah"
	}
]

const inputUsername = document.querySelector("#username");//gabisa diubah
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");
const inputKonfirmasipw = document.querySelector("#konfirmasipw");
const warningMsg = document.querySelector(".warning");

//bikin fungsi di java script
buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value;
    const valueInputKonfirmasipw = inputKonfirmasipw.value;
	
    //const gabisa diubah kalo flag bisa
    //let flag=0;

    //jika password sesuai
   if (valueInputPassword === valueInputKonfirmasipw) {

        warningMsg.classList.add("warning");

        const data = {
            username: valueInputUsername,
            password: valueInputPassword
        }

        DB_USER.push(data);

        //response sukses
        console.log("Registrasi Berhasil");
        console.log(DB_USER);
        alert("Registrasi Berhasil");
    }else{
        //respon jika password berbeda
        warningMsg.className = "alert bg-danger text-white text-center mb-5";
    }
    
    // //ini ngambil db, prosesnya kaya pake for, cuma dipersingkat
	// DB_USER.map((data) => {
	// 	if(data.username === valueInputUsername && data.password === valueInputPassword){
	// 		flag=1;
	// 	}
	// })

/*	if(flag === 1){
		console.log("Success");
	}else{
		console.log("Password dan Username Salah!!");
	}*/

})

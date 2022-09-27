const buttons = document.querySelector(".ana-kapsayıcı");
const upscr = document.querySelector(".up");
const downscr = document.querySelector(".down");
flag = false;
let sayı1 = 0 
let sayı2 = 0 
let işlem = ""

/*
buttons.addEventListener("click", (e) =>{
    let tıklanan = e.target.textContent;
            console.log(tıklanan)
            console.log(typeof tıklanan);

    downscr.textContent += tıklanan ; 

 
        if(tıklanan == "AC"){
            downscr.textContent = ""
            upscr.textContent = ""  
        }
        if(tıklanan == "="){
           let üstetaşı =  downscr.textContent.replace( "=", "");
           upscr.textContent = üstetaşı;
           downscr.textContent = eval(üstetaşı);
        }
    });*/

     //////////*ikinci yoll
     buttons.addEventListener("click", (e) => {
      if(e.target.classList.contains("num")){
         if(downscr.innerText == "0" || flag == true) {
            
            downscr.innerText = e.target.innerText // ekranın altında 0 yazıyorsa veya işlem tuşuna basılmışsa ekrana basılanı yazdır
            
         }else  {
            downscr.innerText += e.target.innerText //aksi durumda 
         }
         flag = false
         
      }else if(e.target.classList.contains("işlem")){
         upscr.innerText = e.target.innerText
         flag = true
      }
      
     })
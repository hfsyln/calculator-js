const buttons = document.querySelector(".ana-kapsayıcı");
const upscr = document.querySelector(".up");
const downscr = document.querySelector(".down");
let num = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
let result = 0

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
           downscr.textContent = eval(üstetaşı)

         /* //bu yöntemde sitringleri sayıya çevirip işlem yapmaya çalışıyorum NaN veriyor
            if(üstetaşı.includes("+")){
               let sayı= üstetaşı.split("+")
               console.log(sayı);  
               for(let i = 0; i <= sayı.length; i++){
                    result = +result + +sayı[i]
                    console.log(result)
                    downscr.textContent = +result
               }  
            }
            if(üstetaşı.includes("-")){
                let sayı= üstetaşı.split("-")
                console.log(sayı);  
                for(let i = 0; i <= sayı.length; i++){
                    result = +result - +sayı[0]
                 downscr.textContent = +result;
                }  
             }
             if(üstetaşı.includes("*")){
                let sayı= üstetaşı.split("*")
                console.log(sayı);  
                for(let i = 0; i <= sayı.length; i++){
                    result = +result * +sayı[0]
                 downscr.textContent = +result;
                }  
             }
             if(üstetaşı.includes("/")){
                let sayı= üstetaşı.split("/")
                console.log(sayı);  
                for(let i = 0; i <= sayı.length; i++){
                    result = +result / +sayı[0]
                 downscr.textContent = +result;
                }  
             }*/
        }
    }
    
  

    
    

);
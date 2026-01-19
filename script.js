let btns=document.querySelectorAll(".btnDecoration");
let ip= document.getElementById("ip");

for(let i=0;i<20;i++)
{
    btns[i].addEventListener("click",()=>{

        if(btns[i].innerHTML==="=")
        {
            try 
            {
                ip.value = eval(ip.value);
            } 
            catch(error) 
            {
                ip.value = error;
            }  

            setTimeout(() => 
                {
                    ip.value = "";
                }, 1500);
            
            
        }
        else if(btns[i].innerHTML==="DEL")
        {
            let temp="";
            for(let j=0;j<ip.value.length-1;j++)
            {
                temp+=ip.value[j];
            }
            ip.value=temp;
        }
        else if(btns[i].innerHTML==="AC")
        {
            ip.value="";
        }
        else
        {
          ip.value=ip.value+btns[i].innerHTML;
        }

    });
}
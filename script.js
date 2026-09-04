document.getElementById("done").addEventListener("click",()=>{
 const phone=document.getElementById("phone").value.trim();
 if(!phone){alert("من فضلك أدخل رقمًا للتجربة.");return;}
 alert("تم تسجيل الطلب في الوضع التجريبي فقط. لا توجد عملية سحب أو دفع حقيقية.");
});
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>alert("قسم تجريبي"));
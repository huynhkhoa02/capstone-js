document.querySelector('#btnSubmit').onclick=function()
{
    var inforUser= new userInforSignUp();
    inforUser.email=document.querySelector('#email').value;
    inforUser.name=document.querySelector('#name').value;
    inforUser.password=document.querySelector('#passWord').value;
    inforUser.phone=document.querySelector('#phone').value;
    inforUser.gender=document.getElementsByName('gender').checked;
    ;
    var promise=axios({
        url:'https://shop.cyberlearn.vn/api/Users/signup',
        method:'POST',
        ResponseType:JSON,
        data:inforUser   

    })
    promise.then(function(result)
    {
        console.log(result.data);
    })
    promise.catch(function(error){
        console.log(error)
    })
}

export const validate_name = (name: string, fieldID:string, maxCharacter:number):boolean =>{
    if(name)
    {
        if(name.length <= maxCharacter)
            return true;
        else
            document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Name exceeds maximum characters</h1>";
    }
    else
        document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Name cannot be empty</h1>";
    return false;
}

export const validate_email = (email: string, fieldID:string, maxCharacter:number):boolean =>{
    if(email)
    {
        if(email.length <= maxCharacter)
        {
            let regex:RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if(regex.test(email))
                return true;
            else
                document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Email is incorrect!</h1>";
        }
        else
            document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Email exceeds maximum characters</h1>";
    }
    else
        document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Email cannot be empty</h1>";
    return false
}

export const validate_password = (password: string, fieldID:string, maxCharacter:number):boolean =>{
    if(password)
    {
        if(password.length <= maxCharacter)
        {
            let regex:RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;
            if(regex.test(password))
                return true;
            else
                document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Password must be at least 4 characters, no more than 15 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit</h1>";
        }
        else
            document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Password exceeds maximum characters</h1>";
    }
    else
        document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Password cannot be empty</h1>";
    return false;
}

export const validate_second_password = (password: string, secondPassword: string, fieldID:string):boolean =>{
    if(secondPassword)
    {
        if(secondPassword === password)
            return true;
        else
            document.querySelector(`${fieldID}`)!.innerHTML = "<h1>This password is different</h1>";
    }
    else
        document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Please confirm your password</h1>";
    return false;
}

export const validate_email_login = (email:string, fieldID:string):boolean =>{
    if(email)
    {
        let regex:RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(regex.test(email))
            return true;
        else
            document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Invalid email</h1>";
    }
    else
        document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Email cannot be empty</h1>";
    return false;
} 

export const validate_password_login = (password:string, fieldID:string):boolean =>{
    if(!password)
    {
        document.querySelector(`${fieldID}`)!.innerHTML = "<h1>Password cannot be empty</h1>";
        return false;
    }
    return true;
}
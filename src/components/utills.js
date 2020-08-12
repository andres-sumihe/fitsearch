export const loadUser = (state) => {

    try {
        const serializedState = localStorage.getItem(state);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveUser = (username, password) => {
    try{
        const user = JSON.stringify(username);
        const pass = JSON.stringify(password);
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
    } catch (err){
        return undefined;
    }
}
export const setloginStatus = (status) => {
    try{
        const loginStatus = JSON.stringify(status);
        localStorage.setItem('status', loginStatus);
    } catch (err){
        return undefined;
    }
}
export const getloginStatus = (status) => {
    try {
        const serializedState = localStorage.getItem(status);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}
export const setMerchantName = (name) => {
    try{
        const loginStatus = JSON.stringify(name);
        localStorage.setItem('merchant', loginStatus);
    } catch (err){
        return undefined;
    }
}
export const getMerchantName = (name) => {
    try {
        const serializedState = localStorage.getItem(name);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}
export const setServiceName = (name) => {
    try{
        const loginStatus = JSON.stringify(name);
        localStorage.setItem('service', loginStatus);
    } catch (err){
        return undefined;
    }
}
export const getServiceName = (name) => {
    try {
        const serializedState = localStorage.getItem(name);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}
export const saveDataLogin = (data) => {
    try{
        const userData = JSON.stringify(data);
        localStorage.setItem('data', userData);
    } catch (err){
        return undefined;
    }
}
export const getDataLogin = (data) => {
    try {
        const serializedState = localStorage.getItem(data);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const nameSlicer = (name) => {
    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
}

export const saveData = (path, data) => {
    const fs = require("fs")
    fs.writeFile(path,JSON.stringify(data), err => {
        if(err) throw err;
        console.log("DONE WRITING");
    } )
}
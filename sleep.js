function sleep(number){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(number ** 2), 3000);
    });
}

sleep(25).then((res) => console.log(res))


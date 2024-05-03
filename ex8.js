let long = (s) => {
    let x = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " "){
            x += 1;
        }else{
            x = 0;
        }
        if (max < x){
                max = x;
        }
    }
    return max;
};
document.write(long("im a developer"));
function marsExploration(s) {
    let fails = 0;
    
    for(let i = 0; i<s.length; i++){
        if(s[i] == 'S' && s[i+1] == 'O' && s[i+2] == 'S'){
            console.log("good spelled");
            i += 2;
        }else{
            if(s[i] != 'S'){
                fails++;
            }
            
            if(s[i+1] != 'O'){
                fails++;
            }
            
            if(s[i+2] != 'S'){
                fails++;
            }

            i+=2;
        }
    
    }
    return fails;
}
const bigPalindrome = string => {
    let max = 1;
    for(let i = 0; i<Math.floor(string.length / 2); i++){
        let char = string[i];
        let j = string.length - 1;
        while(i != j){
            let charj = string[j];
            if(char == charj){
                let substring = string.substring(i,j+1);
                if(isPalindrome(substring) && substring.length > max){
                    max = substring.length;
                }
            }
            j--;
        }
    }    
    return max;
};

const isPalindrome = string => {
  let j = string.length - 1;
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] != string[j]) return false;
    j = j - 1;
  }
  return true;
};
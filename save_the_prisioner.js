// https://www.hackerrank.com/challenges/save-the-prisoner/problem?h_r=next-challenge&h_v=zen

const saveThePrisioner = (n, m, s) =>{
    return (m-1+s) % n || n
}


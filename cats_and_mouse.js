// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

const catAndMouse = (x, y, z) => {
    if(Math.abs(x - z) < Math.abs(y - z))
        return("Cat A")
    else if(Math.abs(x - z ) > Math.abs(y - z))
        return("Cat B")
    else
        return("Mouse C")
}

catAndMouse(1,3,2)
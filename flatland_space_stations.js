// https://www.hackerrank.com/challenges/flatland-space-stations/problem


const flatlandSpaceStations = (n, c) => {
    let values = [];

    for (let i = 0; i < n; i++) {
        let current = i;
        let min = Math.abs(current - c[0]); // default
        for (let j = 0; j < c.length; j++) {
            let distance = c[j];
            if (Math.abs(current - distance) < min)
                min = Math.abs(current - distance);
        }
        values.push(min);
    }

    return values.sort((a, b) => b - a)[0];
};

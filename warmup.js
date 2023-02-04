// Beautiful days at the movie
function beautifulDays(i, j, k) {
let count=0;
    for(let x=i;x<=j;x++)
    {
        let y=x.toString().split("").reverse().join("");
        let difference = x-y;
        if(difference%k==0)
        {
            count++;
        }
    }
    return count;
}

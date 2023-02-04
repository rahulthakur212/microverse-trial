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


//Jumping on the Clouds

function jumpingOnClouds(c) {
    // Write your code here
    let countJump = -1;
    for(let i = 0; i < c.length;){
        if(c[i + 2] == 0 && c[i+2] <= c.length){
            i = i + 2;
            countJump++;
        }
        else{
            i++;
            countJump++;
        }
    }
    
    return countJump;
}


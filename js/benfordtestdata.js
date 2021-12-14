function getRandomData()
{
    // Returns a list of 1000 numbers approximately
    // following the uniform distribution NOT the
    // Benford Distribution.

    const randomData = new Array(1000);

    for(let i = 0; i < 1000; i++)
    {
        randomData[i] = Math.floor(Math.random() * 1000);
    }

    return randomData;
}


function getBenfordData()
{
    // Returns a list of approximately 1000 numbers
    // approximately following the Benford Distribution.

    const BENFORD_PERCENTAGES = [0, 0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];

    let BenfordData = [];

    let randomfactor;
    let start;
    let max;

    for(let firstdigit = 1; firstdigit <= 9; firstdigit++)
    {
        // get a random number between 0.8 and 1.2
        randomfactor = (Math.random() * 0.4) + 0.8;

        max = Math.floor(1000 * BENFORD_PERCENTAGES[firstdigit] * randomfactor);

        for(let numcount = 1; numcount < max; numcount++)
        {
            start = firstdigit * 1000;
            BenfordData.push(randBetween(start, start + 1000));
        }
    }

    return BenfordData;
}


function randBetween(min, max)
{
    const range = max - min;

    n = (Math.random() * range) + min;

    return n;
}

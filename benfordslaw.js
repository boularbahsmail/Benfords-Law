
const calculateBenford = (data) => {
    /*
    Calculates a set of values from the numeric list
    input data showing how closely the first digits
    fit the Benford Distribution.
    Results are returned as a list of dictionaries.
    */

    //                               1      2      3      4      5      6      7      8      9
    const BenfordPercentages = [0, 0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046];

    let results = [];

    const firstDigits = data.map(function (item, index, array)
    {
        return item.toString()[0];
    });

    const firstDigitFrequencies = getDigitsFrequencies(firstDigits);

    let dataFrequency;
    let dataFrequencyPercent;
    let BenfordFrequency;
    let BenfordFrequencyPercent;
    let differenceFrequency;
    let differenceFrequencyPercent;

    for(let n = 1; n <= 9; n++) {
        dataFrequency = firstDigitFrequencies[n];
        dataFrequencyPercent = dataFrequency / data.length;
        BenfordFrequency = data.length * BenfordPercentages[n];
        BenfordFrequencyPercent = BenfordPercentages[n];
        differenceFrequency = dataFrequency - BenfordFrequency;
        differenceFrequencyPercent = dataFrequencyPercent - BenfordFrequencyPercent;

        results.push({"n": n,
            "dataFrequency": dataFrequency,
            "dataFrequencyPercent": dataFrequencyPercent,
            "BenfordFrequency": BenfordFrequency,
            "BenfordFrequencyPercent": BenfordFrequencyPercent,
            "differenceFrequency": differenceFrequency,
            "differenceFrequencyPercent": differenceFrequencyPercent});
    }

    return results;
}

// Get Digits Frequencies
const getDigitsFrequencies = (firstDigits) => {
    const digitCounts = Array(10).fill(0);

    for(let n of firstDigits) {
        digitCounts[n]++;
    }

    return digitCounts;
}

// Draw Table
const printAsTable = (BenfordTable) => {
    const width = 59;

    writeToConsole("-".repeat(width) + "<br/>", "console");
    writeToConsole("|   |      Data       |    Benford      |    Difference   |<br/>", "console");
    writeToConsole("| n |  Freq     Pct   |  Freq     Pct   |  Freq     Pct   |<br/>", "console");
    writeToConsole("-".repeat(width) + "<br/>", "console");

    for(let item of BenfordTable) {
        writeToConsole(`| ${item["n"]} `, "console");
        writeToConsole(`| ${item["dataFrequency"].toString().padStart(6, " ")} `, "console");
        writeToConsole(`| ${(item["dataFrequencyPercent"] * 100).toFixed(2).padStart(6, " ")} `, "console");
        writeToConsole(`| ${item["BenfordFrequency"].toFixed(0).padStart(6, " ")} `, "console");
        writeToConsole(`| ${(item["BenfordFrequencyPercent"] * 100).toFixed(2).padStart(6, " ")} `, "console");
        writeToConsole(`| ${item["differenceFrequency"].toFixed(0).padStart(6, " ")} `, "console");
        writeToConsole(`| ${(item["differenceFrequencyPercent"] * 100).toFixed(2).padStart(6, " ")} `, "console");
        writeToConsole("|<br/>", "console");
    }

    writeToConsole("-".repeat(width) + "<br/>", "console");
}

// Draw Graph
const printAsGraph = (BenfordTable) =>  {
    writeToConsole("<br/>  <span class='greenbg'>Benford's Distribution</span><br/>", "console");
    writeToConsole("  <span class='purplebg'>Data                  </span><br/><br/>", "console");

    writeToConsole("  0%       10%       20%       30%       40%       50%<br/>", "console");
    writeToConsole("  |         |         |         |         |         |<br/>", "console");

    for(let item of BenfordTable) {
        writeToConsole(` ${item["n"]} <span class="greenbg">${" ".repeat(item["BenfordFrequencyPercent"] * 100)}</span><br/>  <span class="purplebg">${" ".repeat(item["dataFrequencyPercent"] * 100)}</span><br/>`, "console");
    }
}

window.onload = function()
{
    const data = getRandomData();
    // const data = getBenfordData();

    const BenfordTable = calculateBenford(data);

    printAsTable(BenfordTable);
    printAsGraph(BenfordTable);
}

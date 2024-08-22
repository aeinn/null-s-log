const dayDifference = function(date1, date2){
    date1 = new Date(date1); date2 = new Date(date2);
    const msUnitPerDay = 1000 * 60 * 60 * 24;

    const date1_daySinceEpoch = Math.floor(date1 / msUnitPerDay);
    const date2_daySinceEpoch = Math.floor(date2 / msUnitPerDay);

    return Math.abs(date1_daySinceEpoch - date2_daySinceEpoch) + 1;
};
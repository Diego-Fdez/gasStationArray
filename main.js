function ArrayChallenge(strArr) {
  Number(strArr.splice(0, 1)[0]);
  let result;

  strArr.map((newStrArr, i) => {
    let count = 0;
    let gas = 0;
    let index = i;

    while (count < newStrArr.length) {
      //let nwStation = newStrArr[starIndex].split(':');
      let gasStation = newStrArr.split(':');

      gas = Number(gasStation[0]);
      let spendGas = Number(gasStation[1]);

      if (gas < spendGas) {
        break;
      } else {
        gas -= Number(gasStation[1]);

        index = index + 1 === newStrArr.length ? 0 : index + 1;
        //console.log(starIndex);
        count++;
      }
    }

    if (count === newStrArr.length) {
      result = i + 1;
    } else {
      result = 'impossible';
    }
  });

  return result;
}

console.log(ArrayChallenge(['4', '0:1', '2:2', '1:2', '3:1']));

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // below 30 => the number at the right past the number at left
  // above 30 => the number at the right to the number at left + 1
  // the mid day => 12:00
  // 9:45 => quarter to 10
  // 8:40 => 20 tO 9
  // TODO: real code goes here!
  const numbersString = {
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5: 'five',
    6: 'six',
    7:'seven',
    8:'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'tweleve',
    13:'thirteen',
    14:'forteen',
    15:'quarter',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20:'tweenty',
    21:'tweenty one',
    22:'tweenty two',
    23:'tweenty three',
    24:'tweenty four',
    25:'tweenty five',
    26:'tweenty six',
    27:'tweenty seven',
    28:'tweenty eight',
    29:'tweenty nine',
    30:'half'
  }
  if (time === '0:00') {
    return 'midnight';
  }
  const timeArr = time.split(':');
  const min = parseInt(timeArr[1])
  const hour = parseInt(timeArr[0])
  if(hour == 0 && min == 0){
    return 'midnight'
  }else if(hour == 12 && min == 0){
    return 'midday'
  }else if(min == 0){
    return `${numbersString[hour]} o'clock`
  }else{
    if(min <= 30){
      return `${numbersString[min]} past ${numbersString[hour]}`
    }else{
      return `${numbersString[60 - min]} to ${numbersString[hour + 1]}`
    }
  }

}

module.exports = { convertTimeToWords };
function saturdayFun (activity = 'roller-skate') {
    return `Today is Saturday, I want to ${activity}!`;
}
function mondayWork (activity = 'go to the office') {
    return `Today is Monday, I want to ${activity}!`;
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    }
   }
  
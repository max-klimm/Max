var gameBox = document.getElementById('box'), playerIndex = 1, players = ['O', 'X'], resultValues = [],
        winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
function onClick(sender) {
  sender.disabled = "disabled";
  sender.value = players[playerIndex];
if (playerIndex == 1) {
  playerIndex--;
}
  else playerIndex++;
  resetIfWinnerFound();
}
function isWinning(value)
{
  var combination, i, j;
  for (i = 0; i < winningCombinations.length; i++)
  {
    combination = winningCombinations[i];
      for (j = 0; j < combination.length; j++)
    {
         if (resultValues[combination[j]] != value) break;
    }
    if (j == 3) return true;
  }
  return false;
}
function reset()
{
  var i, inputs = gameBox.getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++)
  {
    inputs[i].disabled = inputs[i].value = '';
  }
  playerIndex = 1;
  resultValues = [];
}
function resetIfWinnerFound()
{
  var i, inputs = gameBox.getElementsByTagName('input');
  for (i = 0; i < inputs.length; i++)
  {
    resultValues[i] = inputs[i].value;
  }
  for (i = 0; i < players.length; i++)
  {
    if (isWinning(players[i]))
    {
      alert('WIN ' + players[i] + '!');
      reset();
    }
  }

}
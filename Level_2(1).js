//타겟넘버
function solution(numbers, target) {
  let answer = 0;
  DFS(0,0);
  function DFS(i, sum) {
      if (i < numbers.length){
          DFS(i+1, sum + numbers[i]);
          DFS(i+1, sum - numbers[i]);
      } else{
          if (sum === target){
              answer++
          }
      }
  }
  return answer;
}
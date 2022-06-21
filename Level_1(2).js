//음양 더하기
function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      answer += absolutes[i];
    } else {
      answer += absolutes[i] * -1;
    }
  }
  return answer;
}

//키패드 누르기
function solution(numbers, hand) {
  var answer = "";
  let keypad = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 1],
    [3, 2],
  ];
  let right_thumb = [3, 2];
  let left_thumb = [3, 0];

  for (let key of numbers) {
    //1, 4, 7 일때
    if ([1, 4, 7].includes(key)) {
      answer += "L";
      left_thumb = keypad[key - 1];
      //3, 6, 9 일때
    } else if ([3, 6, 9].includes(key)) {
      answer += "R";
      right_thumb = keypad[key - 1];
      //2, 5, 8, 0 일때
    } else {
      let key_right_thumb = 0;
      let key_left_thumb = 0;
      let here = keypad[key - 1];

      if (key === 0) {
        here = [3, 1];
      }

      for (let i = 0; i < 2; i++) {
        key_right_thumb += Math.abs(here[i] - right_thumb[i]);
        key_left_thumb += Math.abs(here[i] - left_thumb[i]);
      }
      //오른손거리=왼손거리
      if (key_right_thumb === key_left_thumb) {
        if (hand === "right") {
          answer += "R";
          right_thumb = here;
        } else {
          answer = answer.concat("L");
          left_thumb = here;
        }
        //오른손거리 > 왼손거리면 왼손
      } else if (key_right_thumb > key_left_thumb) {
        answer += "L";
        left_thumb = here;
        //오른손거리 > 왼손거리면 오른손
      } else {
        answer += "R";
        right_thumb = here;
      }
    }
  }
  return answer;
}

//실패율
function solution(N, stages) {
  var answer = [];
  let all_failure_rate = [];
  let max = 0;

  for (let i = 1; i < N + 1; i++) {
    let all_challengers = 0;
    let fail_user = 0;
    let failure_rate = 0;
    for (let user of stages) {
      //총 도전자
      if (user >= i) all_challengers += 1;
      //실패한 유저
      if (user === i) fail_user += 1;
    }
    //실패율
    failure_rate = fail_user / all_challengers;
    // 스테이지에 도달한 유저가 없는 경우 실패율은 0
    if (all_challengers == 0) failure_rate = 0;
    all_failure_rate.push(failure_rate);
  }
  //각 스테이지의 번호를 실패율의 내림차순으로 정렬
  for (let j = 0; j < all_failure_rate.length; j++) {
    max = Math.max(...all_failure_rate);
    answer.push(all_failure_rate.indexOf(max) + 1);
    all_failure_rate.splice(all_failure_rate.indexOf(max), 1, -1);
  }

  return answer;
}

//소수 만들기
function solution(nums) {
  let number = 0;
  let yaksu = [];
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        number = nums[i] + nums[j] + nums[k];
        yaksu = [];
        for (let s = 1; s < number + 1; s++) {
          if (number % s === 0) yaksu.push(s);
        }
        if (yaksu.length === 2) answer++;
      }
    }
  }
  return answer;
}

//내적
function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

function solution(a, b) {
  return a.reduce((acc, val, i) => (acc += val * b[i]), 0);
}

//약수의 개수와 덧셈
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let divisor = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisor++;
    }
    divisor % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return answer;
}

//로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  var same = [0, 0];
  var answer = [];

  for (let i of lottos) {
    if (win_nums.includes(i)) {
      same[0]++;
      same[1]++;
    }
    if (i === 0) same[0]++;
  }
  for (num of same) {
    if (num === 6) answer.push(1);
    else if (num === 5) answer.push(2);
    else if (num === 4) answer.push(3);
    else if (num === 3) answer.push(4);
    else if (num === 2) answer.push(5);
    else answer.push(6);
  }
  return answer;
}

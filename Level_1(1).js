//K번째 수
function solution(array, commands) {
  var answer = [];
  for (let num = 0; num < commands.length; num++) {
    let i = commands[num][0];
    let j = commands[num][1];
    let k = commands[num][2];

    let new_array = array.slice(i - 1, j).sort((a, b) => a - b);
    let new_num = new_array[k - 1];
    answer.push(new_num);
  }
  return answer;
}

//숫자문자열과 영단어
function solution(s) {
  let num_eng = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let eng of Object.keys(num_eng)) {
    if (s.includes(eng) === true) {
      s = s.replace(new RegExp(eng, "g"), num_eng[eng]);
    }
  }
  return Number(s);
}

//신규 아이디 추천
function solution(new_id) {
  var answer = new_id
    .toLowerCase() //1
    .replace(/[^a-z0-9-._]/g, "") //2
    .replace(/\.+(?=\.)/g, "") //3
    .replace(/^\.|\.$/g, "") //4
    .replace(/^$/g, "a"); //5

  if (answer.length >= 16) {
    answer = answer.substr(0, 15).replace(/\.$/g, ""); //6
  }

  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer = answer.concat(answer[answer.length - 1]); //7
    }
  }
  return answer;
}

//체육복
function solution(n, lost, reserve) {
  var answer = n;

  // 체육복을 도난당했지만 여벌이 없어 진짜 빌려야 하는 학생들
  let real_lost = lost.filter((x) => reserve.includes(x) == false);
  let real_reserve = reserve.filter((x) => lost.includes(x) == false);
  real_lost.sort((a, b) => a - b);

  for (let lost_number of real_lost) {
    // 앞번호의 학생에게 체육복을 빌릴 수 있는 학생
    if (real_reserve.includes(lost_number - 1)) {
      real_reserve.splice(real_reserve.indexOf(lost_number - 1), 1);
      // 뒷번호의 학생에게 체육복을 빌릴 수 있는 학생
    } else if (real_reserve.includes(lost_number + 1)) {
      real_reserve.splice(real_reserve.indexOf(lost_number + 1), 1);
      // 앞,뒷번호의 학생 모두에게 체육복을 빌릴 수 없는 학생
    } else {
      answer -= 1;
    }
  }
  return answer;
}

//모의고사
function solution(answers) {
  var answer = [];

  let supo_1 = [];
  let supo_2 = [];
  let supo_3 = [];
  let all_supo = [0, 0, 0];

  //수포자 1의 답
  while (supo_1.length < answers.length) {
    for (let j of [1, 2, 3, 4, 5]) {
      supo_1.push(j);
      if (supo_1.length === answers.length) {
        break;
      }
    }
  }

  //수포자 2의 답
  while (supo_2.length < answers.length) {
    for (let j of [2, 1, 2, 3, 2, 4, 2, 5]) {
      supo_2.push(j);
      if (supo_2.length === answers.length) {
        break;
      }
    }
  }

  //수포자 3의 답
  while (supo_3.length < answers.length) {
    for (let j of [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]) {
      supo_3.push(j);
      if (supo_3.length === answers.length) {
        break;
      }
    }
  }

  //답지와 비교해 정답수 체크
  for (let i = 0; i < answers.length; i++) {
    if (supo_1[i] === answers[i]) {
      all_supo[0] += 1;
    }

    if (supo_2[i] === answers[i]) {
      all_supo[1] += 1;
    }

    if (supo_3[i] === answers[i]) {
      all_supo[2] += 1;
    }
  }

  //최댓값 찾기
  let max = Math.max(...all_supo);

  //최댓값과 같은 학생을 answer에추가
  for (let i = 0; i < all_supo.length; i++) {
    if (all_supo[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}

//완주하지 못한 선수
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

//두 개 뽑아서 더하기
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length - i; j++) {
      num = numbers[i] + numbers[i + j];
      answer.push(num);
    }
  }
  answer = [...new Set(answer)]; //중복제거
  answer = answer.sort((a, b) => a - b); //오름차순

  return answer;
}

//폰켓몬
function solution(nums) {
  var answer = 0;

  let can_get = nums.length / 2;
  nums = [...new Set(nums)];

  if (nums.length > can_get) {
    answer = can_get;
  } else {
    answer = nums.length;
  }

  return answer;
}

//없는 숫자 더하기
function solution(numbers) {
  var answer = 0;

  for (let i = 0; i < 10; i++) {
    if (numbers.includes(i) !== true) {
      answer += i;
    }
  }
  return answer;
}

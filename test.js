//ข้อ.1

//ใช้ hashmap นับจำนวนที่มีซ้ำใน array
//ใช้ sort หาตัวที่มีมากสุด
// เอาไปเก็บลง object แสดงผล ตัวที่มากที่สุดและรอบที่มากที่สุด
const first = (num) => {
  const count = {};
  const answer = {};
  for (let i = 0; i < num.length; i++) {
    count[num[i]] = count[num[i]] + 1 || 1;
  }

  answer[
    Object.keys(count)
      .sort((a, b) => count[b] - count[a])
      .slice(0, 1)
  ] =
    count[
      Object.keys(count)
        .sort((a, b) => count[b] - count[a])
        .slice(0, 1)
    ];
  return answer;
};
//ข้อ 2.
//เอาคนที่เวลาเยอะสุดสองคนไปด้วยกัน แล้วตามได้คนเวลาน้อย
//เก็บข้อมูลเป็น array
const second = (t) => {
  t.sort((a, b) => b - a);

  const firstgo = [t[0], t[1]];
  const secondgo = [t[2], t[3]];
  return [firstgo, secondgo];
};
console.log(second([5, 7, 8, 2]));
//ข้อ 3.
// ใช้ if กรองตัวที่น้อยกว่า หมื่นให้มันรันไวกว่า
function primeFactorsTo(max) {
  var store = [],
    i,
    j,
    primes = [];
  const num = Number.MAX_SAFE_INTEGER;
  if (max < 9999) {
    for (i = 2; i <= max * 10; ++i) {
      if (!store[i]) {
        primes.push(i);
        for (j = i << 1; j <= max * 10; j += i) {
          store[j] = true;
        }
      }
    }
  } else {
    for (i = 2; i <= 99999999; ++i) {
      if (!store[i]) {
        primes.push(i);
        for (j = i << 1; j <= 99999999; j += i) {
          store[j] = true;
        }
      }
    }
  }

  return primes[max - 1];
}

console.log(primeFactorsTo(2000)); //17389
console.log(primeFactorsTo(50000)); //611953
console.log(primeFactorsTo(1000000)); //15485863
console.log(primeFactorsTo(20000000));

//ข้อ4.
// ขวดวารปไปข้างหน้าขวดสุดท้าย
//ขวดถอยกลลับ ซ้ายสุด

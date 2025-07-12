// Demerit Points

//  Speed Limit = 70
// 5 -> 1 demerit point
// MATH.floor(1.3)
// 12 or more demerit points -> License suspended

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const demeritPointPer5 = 5;

  if (speed < speedLimit + demeritPointPer5) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / demeritPointPer5);
  if (points >= 12) console.log("License suspended");
  else console.log(`Points: ${points}`);
}

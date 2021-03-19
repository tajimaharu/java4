let points = [100,100,100,100,100,100,100,100];
let number = points.length

function get_achievement(points){
  let sum = 0;
  for(let i=0; i < number; i++){
      sum += points[i];}
  let par = sum / (100 * number);
  if (0.8 <= par) {return "「A」";
     }else if (0.6 <= par){return "「B」";
     }else if (0.4 <= par){return "「C」";
     }else {return "「D」";};
};
function get_pass_or_failure(points){
  let judge = "合格";
  for (let i=0; i < number; i++) {
    if (points[i] < 60) {
      judge = "不合格";
      break;}}
  return judge;
};
function judgement(points) {
  let achievement = get_achievement(points);
  let pass_or_failure = get_pass_or_failure(points);
  return `あなたの成績は${achievement}です！${pass_or_failure}です！`;
};
console.log(judgement(points));

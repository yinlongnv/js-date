window.onload = function() {
  // 获取当前系统时间
  var show = this.document.getElementById("show");

  showTime();

  // 实现高考倒计时
  var timeShow = this.document.getElementById("timeShow");

  var curtime = new this.Date(); // 当前时间
  var endtime = new this.Date("2020,6,6"); // 结束时间
  // Math.ceil向上取整
  var lefttime = this.Math.ceil(
    (endtime.getTime() - curtime.getTime()) / (24 * 60 * 60 * 1000)
  ); //得到剩余天数

  if (lefttime > 0) {
    timeShow.innerHTML = "高考倒计时：" + lefttime + "天";
  } else {
    timeShow.innerHTML = "时间一去不复返~";
  }

  // 实现限时抢
  var leftTimeShow = this.document.getElementById("leftTimeShow");

  showLeftTime();
};
// 设定定时器，每隔0.5秒刷新一次倒计时时间
function showLeftTime() {
  var endTime = new this.Date("2019/9/9,12:00:00"); // 结束时间
  var nowTime = new this.Date(); // 当前时间

  var leftTime = this.parseInt((endTime.getTime() - nowTime.getTime()) / 1000); //得到剩余秒数取整

  var d = this.parseInt(leftTime / (24 * 60 * 60)); //得到剩余天数
  var h = this.parseInt((leftTime / (60 * 60)) % 24); //得到剩余小时数
  var m = this.parseInt((leftTime / 60) % 60); //得到剩余分钟数
  var s = this.parseInt(leftTime % 60); //得到剩余秒数

  if (leftTime < 0) {
    leftTimeShow.innerHTML = "限时抢购已结束~";
  } else {
    leftTimeShow.innerHTML =
      "限时抢购还剩：" + d + "天 " + h + "时 " + m + "分 " + s + "秒 ";
    setTimeout(showLeftTime, 500);
  }
}
// 如果分和秒小于10，修改格式为两位数
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// 设置定时器，每隔0.5秒刷新一次当前系统时间
function showTime() {
  var myDate = new this.Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var date = myDate.getDate();
  var d = myDate.getDay();
  var h = myDate.getHours();
  var m = myDate.getMinutes();
  var s = myDate.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  var weekdays = new this.Array(7);
  weekdays[0] = "星期日";
  weekdays[1] = "星期一";
  weekdays[2] = "星期二";
  weekdays[3] = "星期三";
  weekdays[4] = "星期四";
  weekdays[5] = "星期五";
  weekdays[6] = "星期六";

  show.innerHTML =
    "获取当前系统时间：" +
    year +
    "年" +
    month +
    "月" +
    date +
    "日" +
    weekdays[d] +
    h +
    ":" +
    m +
    ":" +
    s;

  setTimeout(showTime, 500);
}

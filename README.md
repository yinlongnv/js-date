# js-date
使用JavaScript Date()对象

一、获取当前系统时间
1.月份获取后要 +1 才能得到当前值。
2.星期 是 0-6，其中0表示星期日，需要做一些处理。
3.为了达到同步的效果，需要设定定时器，每隔0.5秒刷新显示时间。
4.时 和 秒 在个位数的时候只显示一位数，需要自己封装个函数使其显示成两位数。

二、实现高考倒计时
1.Math.ceil向上取整。
2.时间相减获得的是毫秒差，需要经过一定处理得到需要的时间差。

二、实现限时抢
1.设置结束时间可以用 var endTime = new this.Date("2019/9/9,12:00:00");
2.利用取余 % ，并取整获得剩余具体时分秒。
3.设置计时器实时显示限时倒计时时间。
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~ (between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~ (between / 3600), ' hour')
  } else {
    return pluralize(~~ (between / 86400), ' day')
  }
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') 
      return [
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '日'
      ][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(publishTime) {
  var d_minutes,
    d_hours,
    d_days;
  var timeNow = parseInt(new Date().getTime() / 1000); //转换为服务器当前时间戳
  var d;
  d = timeNow - publishTime/1000;
  d_days = parseInt(d / 86400);
  d_hours = parseInt(d / 3600);
  d_minutes = parseInt(d / 60);
  if (d_days > 0 && d_days < 4) {
    return d_days + "天前";
  } else if (d_days <= 0 && d_hours > 0) {
    return d_hours + "小时前";
  } else if (d_hours <= 0 && d_minutes > 0) {
    return d_minutes + "分钟前";
  } else {
    var y = new Date(publishTime);
    
    //return s.getFullYear()+"年";s.getFullYear()+"年"
    return y.getFullYear()+"年"+Number(y.getMonth()+1)  + "月" + y.getDate() + "日" +y.getHours() + "时"+y.getMinutes() + "分";
  }
}
  export function html2Text(val) {
    const div = document.createElement('div')
    div.innerHTML = val
    return div.textContent || div.innerText
  }

  export function toThousandslsFilter(num) {
    return (+ num || 0)
      .toString()
      .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
  }

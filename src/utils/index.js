function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

// 工具函数库
// eslint-disable-next-line no-unused-vars
const that = {}

that.byDateAddDay = function (date, day) {
  let newDate = new Date(date.getTime() + day * 24 * 60 * 60 * 1000)
  return that.formatDateStr(newDate)
}
that.formatDateStr = function (date) {
  // eslint-disable-next-line one-var
  let MM = '', DD = ''
  if (date.getMonth() > 8) { MM = (date.getMonth() + 1).toString() } else { MM = '0' + (date.getMonth() + 1).toString() }
  if (date.getDate() > 9) { DD = date.getDate().toString() } else { DD = '0' + date.getDate().toString() }
  return date.getFullYear() + '-' + MM + '-' + DD
}

// 比较两个日期字符
that.compareDate = function (date1, date2) {
  let strValue1 = date1.split('-')
  let date1Temp = new Date(strValue1[0], parseInt(strValue1[1], 10) - 1, parseInt(strValue1[2], 10))
  let strValue2 = date2.split('-')
  let date2Temp = new Date(strValue2[0], parseInt(strValue2[1], 10) - 1, parseInt(strValue2[2], 10))
  if (date1Temp.getTime() === date2Temp.getTime()) {
    return 0// date1等于date2
  } else if (date1Temp.getTime() > date2Temp.getTime()) {
    return 1// date1大于date2
  } else {
    return -1// date1小于date2
  }
}

// b=true 不考虑null
that.extend = function (des, src, b = false) {
  for (let i in des) {
    if (b) {
      des[i] = src[i]
      break
    }
    if (this.isNotNull(src[i])) {
      des[i] = src[i]
    }
  }
  return des
}
that.extendNotNull = function (des, src) {
  for (let i in des) {
    if (this.isNotDeepNull(src[i])) {
      des[i] = src[i]
    }
  }
  return des
}

// want = 指定拷贝key
that.copyValue = function (des, src, {want, exclude} = {}) {
  if (this.isNotNull(want)) {
    want.forEach(item => { des[item] = src[item] })
  } else {
    for (let i in des) {
      if (this.isNotNull(exclude) && exclude.indexOf(i) >= 0) {
        continue
      }
      if (this.isNotNull(src[i]) && (this.isArray(src[i]) ? (src[i].length > 0) : true)) {
        des[i] = src[i]
      }
    }
  }
  return des
}

// 过滤到 对象的 空 值
that.dataFilterNull = function (data) {
  let _fun = function (d) {
    for (let key in d) {
      if (!that.isNotNull(d[key])) {
        delete d[key]
      } else if (that.isObject(d[key])) {
        // eslint-disable-next-line no-unused-expressions
        Object.keys(d).length === 0 ? delete d[key] : ''
        _fun(d[key])
      } else if (that.isArray(d[key])) {
        // eslint-disable-next-line no-unused-expressions
        d[key].length === 0 ? delete d[key] : ''
        d[key].forEach(item => {
          if (that.isObject(item)) {
            _fun(item)
          }
        })
      }
    }
  }
  _fun(data)
  return data
}

that.isArray = function (o) {
  return o != null && typeof o === 'object' && 'splice' in o && 'join' in o
}

that.isFunction = function (o) {
  return typeof o === 'function'
}

that.isObject = function (o) {
  return typeof o === 'object'
}

that.isString = function (o) {
  return typeof o === 'string'
}

that.isBoolean = function (o) {
  return typeof o === 'boolean'
}

that.isUndefined = function (o) {
  return typeof o === 'undefined'
}

that.isNumber = function (o) {
  return typeof o === 'number'
}
that.isNotNull = function (o) {
  return (!!o)
}
that.isNotDeepNull = function (o) {
  if (this.isArray(o)) {
    return o.length > 0
  }
  if (this.isObject(o)) {
    return JSON.stringify(o) !== '{}'
  }
  return (!!o)
}
export default that

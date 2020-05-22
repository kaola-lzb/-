
// 获取url
/**
 *  replace split indexOf substring 用到的方法
 * @param {*} url 
 */
const queryString = (url) => {
    let urlObj = {};
    let index = url.indexOf("?") + 1;
    let hrefArr = url.substring(index).split('&');
    if (index !== 0) {
        hrefArr.forEach((item, index) => {
            let d = item.split('=');
            urlObj[d[0]] = d[1];
        })
    }
    return urlObj
}


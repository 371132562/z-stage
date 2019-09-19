//json数据转为FormData
export const initFormData = (data = {}) => {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret.replace(/&$/, '')
}

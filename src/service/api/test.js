import Request from '@/service/Request'

export default new (class Test extends Request {
    test(data = {}) {
        return this.post('http://localhost:3000/cats', data, true)
    }
})()

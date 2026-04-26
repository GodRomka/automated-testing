const axios = require('axios')

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

describe('API tests', () => {

    test('1. GET all posts', async () => {
        const res = await axios.get(BASE_URL)
        expect(res.status).toBe(200)
    })

    test('2. GET one post', async () => {
        const res = await axios.get(`${BASE_URL}/1`)
        expect(res.data.id).toBe(1)
    })

    test('3. POST post', async () => {
        const res = await axios.post(BASE_URL, { title: 'test' })
        expect(res.status).toBe(201)
    })

    test('4. PUT post', async () => {
        const res = await axios.put(`${BASE_URL}/1`, {
            id: 1,
            title: 'updated'
        })
        expect(res.status).toBe(200)
    })

    test('5. DELETE post', async () => {
        const res = await axios.delete(`${BASE_URL}/1`)
        expect(res.status).toBe(200)
    })

})
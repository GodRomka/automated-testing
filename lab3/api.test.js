const axios = require('axios')

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

describe('GET /posts', () => {

    test('Отримати всі записи (status 200)', async () => {
        const res = await axios.get(BASE_URL)
        expect(res.status).toBe(200)
    })

    test('Відповідь є масивом', async () => {
        const res = await axios.get(BASE_URL)
        expect(Array.isArray(res.data)).toBe(true)
    })

    test('Масив не пустий', async () => {
        const res = await axios.get(BASE_URL)
        expect(res.data.length).toBeGreaterThan(0)
    })

    test('Є обʼєкт з id = 1', async () => {
        const res = await axios.get(BASE_URL)
        const post = res.data.find(p => p.id === 1)
        expect(post).toBeDefined()
    })

    test('Обʼєкт має поле title', async () => {
        const res = await axios.get(BASE_URL)
        expect(res.data[0]).toHaveProperty('title')
    })
})

describe('GET /posts/:id', () => {

    test('Отримати один запис', async () => {
        const res = await axios.get(`${BASE_URL}/1`)
        expect(res.status).toBe(200)
    })

    test('id = 1', async () => {
        const res = await axios.get(`${BASE_URL}/1`)
        expect(res.data.id).toBe(1)
    })

    test('є title', async () => {
        const res = await axios.get(`${BASE_URL}/1`)
        expect(res.data).toHaveProperty('title')
    })

    test('є body', async () => {
        const res = await axios.get(`${BASE_URL}/1`)
        expect(res.data).toHaveProperty('body')
    })

    test('є userId', async () => {
        const res = await axios.get(`${BASE_URL}/1`)
        expect(res.data).toHaveProperty('userId')
    })
})

describe('POST /posts', () => {

    test('Створення запису (status 201)', async () => {
        const res = await axios.post(BASE_URL, {
            title: 'test',
            body: 'test body',
            userId: 1
        })
        expect(res.status).toBe(201)
    })

    test('Повертається title', async () => {
        const res = await axios.post(BASE_URL, {
            title: 'test'
        })
        expect(res.data.title).toBe('test')
    })

    test('Повертається id', async () => {
        const res = await axios.post(BASE_URL, {
            title: 'test'
        })
        expect(res.data).toHaveProperty('id')
    })

    test('Тип даних обʼєкт', async () => {
        const res = await axios.post(BASE_URL, {})
        expect(typeof res.data).toBe('object')
    })

    test('є userId', async () => {
        const res = await axios.post(BASE_URL, { userId: 1 })
        expect(res.data).toHaveProperty('userId')
    })
})

describe('PUT /posts/:id', () => {

    test('Оновлення запису (status 200)', async () => {
        const res = await axios.put(`${BASE_URL}/1`, {
            id: 1,
            title: 'updated',
            body: 'updated body',
            userId: 1
        })
        expect(res.status).toBe(200)
    })

    test('Оновлюється title', async () => {
        const res = await axios.put(`${BASE_URL}/1`, {
            id: 1,
            title: 'updated',
            body: 'updated body',
            userId: 1
        })
        expect(res.data.title).toBe('updated')
    })

    test('є id', async () => {
        const res = await axios.put(`${BASE_URL}/1`, {
            id: 1
        })
        expect(res.data).toHaveProperty('id')
    })

    test('є body', async () => {
        const res = await axios.put(`${BASE_URL}/1`, {
            body: 'test'
        })
        expect(res.data).toHaveProperty('body')
    })

    test('є userId', async () => {
        const res = await axios.put(`${BASE_URL}/1`, {
            userId: 1
        })
        expect(res.data).toHaveProperty('userId')
    })
})

describe('DELETE /posts/:id', () => {

    test('Видалення запису (status 200)', async () => {
        const res = await axios.delete(`${BASE_URL}/1`)
        expect(res.status).toBe(200)
    })

    test('Порожня відповідь', async () => {
        const res = await axios.delete(`${BASE_URL}/1`)
        expect(res.data).toEqual({})
    })

    test('Тип відповіді object', async () => {
        const res = await axios.delete(`${BASE_URL}/1`)
        expect(typeof res.data).toBe('object')
    })

    test('Без помилки', async () => {
        const res = await axios.delete(`${BASE_URL}/1`)
        expect(res.status).toBeLessThan(400)
    })

    test('Запит виконується', async () => {
        const res = await axios.delete(`${BASE_URL}/1`)
        expect(res).toBeDefined()
    })
})
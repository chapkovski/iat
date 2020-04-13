const leftKey = 'a';
const rightKey = 's';
// somewhere here we'll inject data from django
const data = [
    {
        id: 1,
        left: [{ text: 'Fat' }],
        right: [{ text: 'Slim' }],
        body: { text: 'Fatso', belongs: 'left' }
    },
    {
        id: 2,
        left: [{ text: 'Fat' }],
        right: [{ text: 'Slim' }],
        body: { text: 'Fatty', belongs: 'left' }
    }
]
const params = { leftKey, rightKey, data }
export default params

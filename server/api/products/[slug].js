export default defineEventHandler(event => ({
    path: 'https://63f2d751f28929a9df605107.mockapi.io/nttp/' + event.context.params
}))
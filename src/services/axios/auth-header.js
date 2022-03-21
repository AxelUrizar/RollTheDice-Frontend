export default function authHeader() {
    const user = localStorage.getItem('user');
    user ? { Authorization: user } : {}
}
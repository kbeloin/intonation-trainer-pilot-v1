// necessary when using XHR requests

export const getCSRF = () => {
    try {
    const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1]
    return token
    } catch (e) {console.log('No CSRF token present. Are cookies disabled?')}
}
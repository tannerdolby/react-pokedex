export function titleCase(str) {
    if (!str || !str.length || typeof str !== 'string') {
        return '';
    }

    return str[0].toUpperCase() + str.slice(1);
}

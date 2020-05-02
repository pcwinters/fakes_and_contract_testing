export const createTodoFetcher = (baseUrl="http://localhost:3001/") => () => {
    return fetch(`${baseUrl}todos`)
        .then(response => response.json());
}
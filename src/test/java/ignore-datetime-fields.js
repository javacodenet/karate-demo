function fn(response) {
    console.log(response);
    response.createdAt = new Date();
    return {
        ...response,
        createdAt: '#ignore',
        updatedAt: '#ignore'
    }
}

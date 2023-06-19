export function createRange(
    length,
    initializer
    ) {
      
    return [...new Array(length)].map((_, index) => initializer(index));
}  

export function getMockItems() {
    return createRange(
        5, (index) => ({
            id: index + 1
        })
    )
}
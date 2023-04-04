export const deleteItem = <T>(data: T, cb: (item) => number) => data.splice(data.findIndex(cb), 1)

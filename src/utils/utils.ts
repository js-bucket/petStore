export const getQueryParam = (paramObject : {status: string, name: string} ) => {
    let query = '';
    Object.keys(paramObject).forEach(item => {
        if(paramObject[item as keyof typeof paramObject]) {
            query += `${item}=${paramObject[item as keyof typeof paramObject]}&`
        }
    })
    return query;
}
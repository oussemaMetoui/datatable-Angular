export function sort(key: string, order: number,  list: []) {
    // this.order = order
    list.sort((a: any, b: any) => {
        if (a[key] < b[key]) {
            return 1 * -order;
        } else if (a[key] > b[key]) {
            return 1 * order;
        } else {
            return 0;
        }
    });
    return list
}
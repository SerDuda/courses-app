export const getDate = () => {
    const nowDate = new Date();
    const date = `${nowDate.getDate()}/${(nowDate.getMonth() + 1)}/${nowDate.getFullYear()}`; 

    return date
}
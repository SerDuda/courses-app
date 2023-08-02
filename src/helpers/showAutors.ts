type Author = {
    id: string,
    name: string,
}

export const showAuthors = (courseList: string[], authorsList: Author[]) => {
    // eslint-disable-next-line array-callback-return
    const authorsArr = authorsList.map((elem: { id: string, name: string }) => {
        if (courseList.includes(elem.id)) {
            return elem.name
        }
    }
    ).filter(el => el !== undefined)

    return authorsArr.join(', ')
}
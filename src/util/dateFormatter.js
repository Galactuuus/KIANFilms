const getDate = (unformattedDate) => {
    const date = new Date(unformattedDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const dateFormatted = `${day}-${month}-${year}`;

    return dateFormatted
}

export default getDate;
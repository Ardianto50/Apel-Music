export const formatDate = (inpDate) => {
    const date = new Date(inpDate || '2023-07-12T00:00:00');

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(date);
    return formattedDate;
}
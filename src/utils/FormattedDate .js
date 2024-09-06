export default function FormattedDate(dateStr) {
    const date = new Date(dateStr);
    // Get the month and year
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' }); // 'long' for full month name, 'short' for abbreviated
    // Format the output
    const formattedDate = `${month} ${year}`;
    return formattedDate;
}

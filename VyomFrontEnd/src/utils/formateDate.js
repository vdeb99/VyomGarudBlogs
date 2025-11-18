const formatDate = (dateString) => {
    if(!dateString) return '';
    const date=new Date(dateString);
    console.log(date)
    return date.toLocaleDateString('en-US',{
        year:'numeric',
        month:'long',
        day:'numeric'
    });

}
export default formatDate;
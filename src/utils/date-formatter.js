export const formatAMPM = (createdAt) => {
    // let [month, date, year] = createdAt;
    if(!createdAt) return;
    let [month, date, year] = new Date(createdAt?.toString()).toLocaleDateString("en-US").split("/");
    let d = new Date(createdAt);
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = date + "-" + month + "-" + year + " at " + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
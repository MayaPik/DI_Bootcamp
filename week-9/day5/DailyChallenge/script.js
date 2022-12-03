function formatDate(date){
    let arr = []
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes= date.getMinutes()
    let seconds = date.getSeconds()
    arr.push(year,month,day,hours,minutes,seconds)
    
    let modifiedArr = arr.map(function(element){
        if (element<10) {
            return "0" + element.toString();
        } else {
            return element.toString();
        }
    });
    
    return modifiedArr.toString().replaceAll(",","")
}

formatDate(new Date(2020, 6, 4, 8, 0, 0)) //"20200704080000"
formatDate(new Date(2019, 11, 31, 23, 59, 59)) //"20191231235959"
formatDate(new Date(2020, 6, 4)) //"20200704000000"

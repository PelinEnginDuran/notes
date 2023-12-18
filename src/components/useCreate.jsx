const useCreate =()=>{
    const date=new Date()
    const month =date.getMonth()
    let monthName
    switch (month) {
        case 0:
            monthName="ocak"
            break;
    case 1:
        monthName="şubat"
        break;
        case 2:
        monthName="mart"
        break;
        case 3:
        monthName="nisan"
        break;
        case 4:
        monthName="mayıs"
        break;
        case 5:
        monthName="haziran"
        break;
        case 6:
        monthName="temmuz"
        break;
        case 7:
        monthName="ağustos"
        break;
        case 8:
        monthName="eylül"
        break;
        case 9:
        monthName="ekim"
        break;
        case 10:
        monthName="kasım"
        break;
        case 11:
        monthName="aralık"
        break;
        default:
            break;
    }
    const dateObj =`${monthName} ${date.getDate()}, ${date.getFullYear()}, [${date.getHours()}:${date.getMinutes()}]`
    return dateObj
}
export default useCreate
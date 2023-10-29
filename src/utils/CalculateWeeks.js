function CalculateWeeks(dateOfBirth){
    let defaultDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    let d1 = new Date(dateOfBirth)
    let dob = [d1.getDate(),d1.getMonth()+1,d1.getFullYear()]
    let d2 = new Date()
    let currentDate = [d2.getDate(),d2.getMonth()+1,d2.getFullYear()]
    console.log(dob[1], currentDate[1])
    let years = 0
    let months = 0
    if(dob[1]<currentDate[1]){
        years = currentDate[2]-dob[2]
        months = currentDate[1]-dob[1]
    }else if(dob[1]>currentDate[1]){
        years = (currentDate[2]-1)-dob[2]
        let count = 0
        let temp = dob[1]
        if(temp<12){
            for(let i = temp; i<12;i++){
                count++
                temp++
                continue
            }
            temp=0
        }
        if(temp<currentDate[1]){
            for(let i = temp; i<currentDate[1];i++){
                count++
                temp++
                continue
            }
        }
        months = count
    }else{
        years = currentDate[2]-dob[2]
    }

    console.log('months'+months,'years: '+years);

    let days = Math.floor((years*365.25)+(365.25/12*months)+(dob[0]<currentDate[0]?currentDate[0]-dob[0]:defaultDays[dob[1]-1]+dob[0]-currentDate[0]))
    console.log(days);
    let weeks = Math.floor(days/7)
    console.log(weeks);
    return weeks

    }




export default  CalculateWeeks
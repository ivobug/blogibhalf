import Vue from 'vue'

const months=[
    'Siječanj',
    'Veljača',
    'Ožujak',
    'Travanj',
    'Svibanj',
    'Lipanj',
    'Srpanj',
    'Kolovoz',
    'Rujan',
    'Listopad',
    'Studeni',
    'Prosinac'
]

const dateFilter=value=>{
    return formatDate(value)
}


function formatDate(inputDate){
    const date=new Date(inputDate);
    const year= date.getFullYear();
    const month= date.getMonth();
    const day= date.getDate();
    const formattedDate = day +". "+ months[month]+" "+year;
    return formattedDate

}

Vue.filter('date', dateFilter)
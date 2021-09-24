function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var quest = document.forms['myForm']["Question"].value;

    if (quest.length > 200) {
        seterror("question", "*The length of the Question must not exceed 50 characters");
        returnval = false;
    }

    if (quest.length == 0) {
        seterror("question", "*Length of Question cannot be zero!");
        returnval = false;
    }

    var top = document.forms['myForm']["Topic"].value;

    if (top.length > 50) {
        seterror("topic", "*Topic length should be less than 15");
        returnval = false;
    }

    var tg = document.forms['myForm']["Tag"].value;
    if (tg.length > 100) {
        seterror("tags", "*tags should contains letter less than 10");
        returnval = false;
    }



    return returnval;
}

function addQuestion() {

    var total_task = []
    const key = JSON.parse(localStorage.getItem("questi"));
    // console.log(key);
    if (key != null) {
        for (let i = 0; i < key.length; i++) {
            total_task.push(key[i]);
        }
    }
    // console.log("The array is", total_task)
    const query = document.getElementById("questionss").value;
    const topics = document.getElementById("topicss").value;
    const tags = document.getElementById("tagss").value;


    const myTags = tags.split(",");


    // document.write("The current month is " + monthNames[d.getMonth()]);
    // console.log(monthNames[d.getMonth()], "/", month, "/", year)
    if (query != "" && topics != "" && tags != "") {
        total_task.push({ "query": query, "topic": topics, "tag": myTags })
    } else {
        window.alert("Please Enter Correct Data")
    }
    localStorage.setItem("questi", JSON.stringify(total_task))
    location.reload()
}

function searchQuery() {

    var schh = document.getElementById("sch").value.toUpperCase();
    // console.log(schh)
    let query = ''
    var key = JSON.parse(localStorage.getItem("questi"));
    for (let i = 0; i < key.length; i++) {
        if (key[i].query.toUpperCase().indexOf(schh) > -1) {
            query += `<tr><td>${i + 1}</td><td>${key[i].query}</td><td>${key[i].topic}</td><td>${key[i].tag}</td></tr>`;
        }
    }
    

    document.getElementById("result").innerHTML = query
    // location.reload()
}

function searchTag(){

    var schh = document.getElementById("schhh").value.toUpperCase();
    // console.log(schh)
    let query = ``
    var key = JSON.parse(localStorage.getItem("questi"));
    
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < key[i].tag.length; j++) {
            // console.log(key[i].tag[j])
            
            if (key[i].tag[j].toUpperCase().indexOf(schh)>-1) {

                query+= `<tr><td>${i + 1}</td><td>${key[i].query}</td><td>${key[i].topic}</td><td>${key[i].tag}</td></tr>`;
                
            }
                
                // console.log(j)
                // break;
                // query += `<tr><td>${j+1}</tr></td>`
            

}
}
document.getElementById("result").innerHTML = query
}
function showAll(){
    
    var schh = document.getElementById("sch").value.toUpperCase();
    // console.log(schh)
    let query = ''
    var key = JSON.parse(localStorage.getItem("questi"));
    for (let i = 0; i < key.length; i++) {
        if (key[i].query.toUpperCase().indexOf(schh) > -1) {
            query += `<tr><td>${i + 1}</td><td>${key[i].query}</td><td>${key[i].topic}</td><td>${key[i].tag}</td></tr>`;
        }
    }
    

    document.getElementById("result").innerHTML = query
}
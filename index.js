let counter = 0;


function count_up(){
    counter++;
    document.getElementById("counter").innerHTML = counter;
    console.log(`Counter increment: `+counter)
}
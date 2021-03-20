//DOM to get all the info you need from the HTML forms
//I will need the; fullname, phonenumber, route, bus, seat selected, time, date of travel and seats booked and ticket prices
const form = document.querySelector('form')
const container = document.querySelector('.container')
const userName = document.getElementById('user-name')
const userNumber = document.getElementById('user-number')
const route = document.getElementById('routes')
const bus = document.querySelector('#buses')
const time = document.querySelector('#time-of-travel')
const travelDate = document.getElementById('travel-date')

const bookedSeats = document.querySelector('#booked-seats')
const priceOfTicket = document.getElementById('total-price')

let ticketPrice = parseInt(document.getElementById('routes').value)
//console.log(ticketPrice)

//functions to execute our code



function updateSelectedCount(){

    const selectedSeats = document.querySelectorAll('.row-seats .seat.selected')
   // console.log(selectedSeats)

   const selectedSeatsCount = selectedSeats.length  //code derives the actual number/indexes of the seats booked from the node
   //console.log(selectedSeatsCount)

   bookedSeats.innerText = selectedSeatsCount;
   priceOfTicket.innerText = ticketPrice * selectedSeatsCount

}

//function to give ticket details to our customer

/*function NewTicket(fullName, phoneNumber, route, bus, time, dateOfTravel){
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.route = route;
    this.bus = bus;
    this.time = time;
    this.dateOfTravel = dateOfTravel;
}

NewTicket.prototype.newTicket = function(){return `Dear ${this.fullName} of ${this.phoneNumber}. Your trip of ${this.route} using ${this.bus}. Your bus departs at ${this.time} on ${this.dateOfTravel}`}

$('#formdata').submit(function(event){
    event.preventDefault()

    let inputtedFullName = $("input#user-name").val()
    let inputtedPhoneNumber = $("input#user-number").val()
    let inputtedRoute = $("input#routes").val()
    let inputtedBus = $("input#buses").val()
    let inputtedTime = $("input#time-of-travel").val()
    let inputtedDateOfTravel = $("input#travel-date").val()

    let newTickets = new NewTicket(inputtedFullName, inputtedPhoneNumber, inputtedRoute, inputtedBus, inputtedTime, inputtedDateOfTravel);
    $("#list").append("<span class = 'tickets'>" + newTickets.newTicket() + "</span>")
}) */



//eventListeners for our code

container.addEventListener('click' , function(event){
    event.preventDefault();

    if(event.target.classList.contains('seat') && !event.target.classList.contains('occupied')){

    }(event.target.classList.toggle('selected'))

    updateSelectedCount()

    
});

route.addEventListener('change', function(event){

    ticketPrice = parseInt(event.target.value)
    console.log(ticketPrice)
    updateSelectedCount()
})

$('#payvia').click(function(){
    $('.payments').show()
})


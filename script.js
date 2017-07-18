
function getQuote() {
   var trumpSearchEndpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
   console.log(trumpSearchEndpoint)

   fetch(trumpSearchEndpoint)
       .then(function(data) {
           return data.json()
       })
       .then(function(json) {
           console.log(json)
           var donaldText = json.message
           caption.innerHTML = donaldText 
       }
       )
       .catch(
           err=> {console.log(err)})
   // function myFunction() {
   // location.reload();
}

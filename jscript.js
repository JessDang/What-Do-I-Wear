function getData() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pittsburgh?unitGroup=us&key=YOUR_API_KEY&contentType=json", {
        "method": "GET",
        "headers": {
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
    document.write();
}
console.log(getData());
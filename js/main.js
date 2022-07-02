
var elItem = document.querySelectorAll(".features-list-item");
var elLink = document.querySelectorAll(".features-list-link");

var elBox = document.querySelectorAll(".features-click")


elLink.forEach(function(myLink){


    myLink.addEventListener("click",function(myEvent){
        myEvent.preventDefault();

        elItem.forEach(function(myItem){
            myItem.classList.remove("features-bottom-border")
        });

        myLink.parentElement.classList.add("features-bottom-border")

        elBox.forEach(function(featuresItems){
            featuresItems.classList.remove("features-click-block");
        });

        document.querySelector(myLink.getAttribute("href")).classList.add("features-click-block")
    })

});



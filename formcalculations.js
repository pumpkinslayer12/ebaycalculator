 //Set up an associative array
 //The keys represent the size of the shipping flat
 //The values represent the cost of the shipping flat
 var flat_prices = new Array();
 flat_prices["Flat1"]=6.7;
 flat_prices["Flat2"]=7;
 flat_prices["Flat3"]=7.25;
 flat_prices["Flat4"]=7.2;
 flat_prices["Flat5"]=13.65;
 flat_prices["Flat6"]=13.65;
 flat_prices["Flat7"]=18.90;
 
	 
// getflatSizePrice() finds the price based on the size of the flat.
// Here, we need to take user's the selection from radio button selection
function getFlatPrice()
{  
    var flatPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["flatform"];
    //Get a reference to the flat the user Chooses name=selectedflat":
    var selectedFlat = theForm.elements["selectedflat"];
    //Here since there are 7 radio buttons selectedFlat.length = 7
    //We loop through each radio buttons
    for(var i = 0; i < selectedFlat.length; i++)
    {
        //if the radio button is checked
        if(selectedFlat[i].checked)
        {
            //we set flatPrice to the value of the selected radio button
            //by using the flat_prices array
            //We get the selected Items value
            flatPrice = flat_prices[selectedFlat[i].value];
            //If we get a match then we break out of this loop
            break;
        }
    }
    //We return the flatPrice
    return flatPrice;
}

//This function gets the ebay rate
function getEbayRate()
{
    var formValue=document.getElementById('sellingprice').value;
    var rate=formValue*.10;
    return rate;
}

//This function gets the paypal rate
function getPaypalRate()
{
    var formValue=document.getElementById('sellingprice').value;
    var rate=formValue*.029 + .35;
    return rate;
}

function getPurchasePrice(){
     var rate=document.getElementById('purchaseprice').value;
        return rate;
    }
function getSellingPrice(){
     var rate=document.getElementById('sellingprice').value;
        return rate;
    }
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var totalProfit = getSellingPrice()-getPurchasePrice()-getFlatPrice()-getPaypalRate()-getEbayRate();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total profit $"+totalProfit.toFixed(2);

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
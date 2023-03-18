function random_text()
{};
var random_text = new random_text();
// Set the number of text strings to zero to start
var number = 0;
// Incremental list of all possible Text
random_text[number++] = "Random Text11"
random_text[number++] = "Random Text2"
random_text[number++] = "Random Text3"
random_text[number++] = "Random Text4"
random_text[number++] = "Random Text5"
// Create a random number with limits based on the number
// of possible random text strings

var random_number = Math.floor(Math.random() * number);
// Write out the random text to the browser
document.write(random_text[random_number]);



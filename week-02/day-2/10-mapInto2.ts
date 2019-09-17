// Create a map where the keys are strings and the values are strings with the following initial values

// Key	Value
// 978-1-60309-452-8	A Letter to Jo
// 978-1-60309-459-7	Lupus
// 978-1-60309-444-3	Red Panda and Moon Bear
// 978-1-60309-461-0	The Lab

let iSBN = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab",
}

// Print all the key-value pairs in the following format

// A Letter to Jo (ISBN: 978-1-60309-452-8)
// Lupus (ISBN: 978-1-60309-459-7)
// Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
// The Lab (ISBN: 978-1-60309-461-0)
let keyArray: string[] = Object.keys(iSBN);

for (let i = 0; i < keyArray.length; i++){
    console.log(`${iSBN[keyArray[i]]} (ISBN: ${keyArray[i]})`)
}
// Remove the key-value pair with key 978-1-60309-444-3

delete iSBN["978-1-60309-444-3"];

// Remove the key-value pair with value The Lab

for (let i = 0; i < keyArray.length; i++){
    if(iSBN[keyArray[i]] == "The Lab"){
        delete iSBN[keyArray[i]];
    }
};

console.log(iSBN);

// Add the following key-value pairs to the map

// Key	Value
// 978-1-60309-450-4	They Called Us Enemy
// 978-1-60309-453-5	Why Did We Trust Him?

iSBN["978-1-60309-450-4"] = "They Called Us Enemy";
iSBN["978-1-60309-453-5"] = "Why Did We Trust Him?";

// Print whether there is an associated value with key 478-0-61159-424-8 or not

console.log(iSBN.hasOwnProperty["478-0-61159-424-8"]);

// Print the value associated with key 978-1-60309-453-5

console.log(iSBN["978-1-60309-453-5"]);
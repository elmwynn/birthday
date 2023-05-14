let num = 26;
const toggleOne = () => {
    const one = document.getElementById("one");
    one.textContent = (one.textContent === "") 
    ? "A MESSAGE"
    : (one.textContent === "A MESSAGE")
    ? "YOU"
    : (one.textContent === "YOU")
    ? "Emojis to"
    : (one.textContent === "Emojis to")
    ? String.fromCodePoint(9996)
    : (one.textContent === String.fromCodePoint(9996))
    ? "THINGS"
    : (one.textContent === "THINGS")
    ? "SARA"
    : (one.textContent === "SARA")
    ? "FUNNY"
    : (one.textContent === "FUNNY")
    ? "AWESOME ANGSTBLADER"
    : (one.textContent === "AWESOME ANGSTBLADER")
    ? "Good taste in music"
    : (one.textContent === "Good taste in music")
    ? "You bless people with your existence"
    : (one.textContent === "You bless people with your existence")
    ? "You lived 26"
    : (one.textContent === "You lived 26")
    ? "Happy"
    :  String.fromCodePoint(9801);
 
}

const toggleTwo = () => {
    const two = document.getElementById("two");
    two.textContent = (two.textContent === "") 
    ? "FOR"
    : (two.textContent === "FOR")
    ? "ARE"
    : (two.textContent === "ARE")
    ? "describe"
    : (two.textContent === "describe")
    ? String.fromCodePoint(11088)
    : (two.textContent ===  String.fromCodePoint(11088))
    ? "THAT"
    : (two.textContent === "THAT")
    ? "VERY"
    : (two.textContent === "VERY")
    ? "KIND"
    : (two.textContent === "KIND")
    ? "AWESOME FRIEND"
    : (two.textContent === "AWESOME FRIEND")
    ? "Good taste in wine"
    : (two.textContent === "Good taste in wine")
    ? "You bless the world with your wit"
    : (two.textContent === "You bless the world with your wit")
    ? "great years so far"
    : (two.textContent === "great years so far")
    ? "Birthday"
    : String.fromCodePoint(127874);
    

   
}

const toggleThree = () => {
    const three = document.getElementById("three");
    three.textContent = (three.textContent === "") 
    ? "SARA"
    : (three.textContent === "SARA")
    ? "COOL"
    : (three.textContent === "COOL")
    ? "you"
    : (three.textContent === "you")
    ? String.fromCodePoint(127378)
    : (three.textContent ===  String.fromCodePoint(127378))
    ? "MAKE"
    : (three.textContent === "MAKE")
    ? "AWESOME"
    : (three.textContent === "AWESOME")
    ? "SMART"
    : (three.textContent === "SMART")
    ? "AWESOME STYLE"
    : (three.textContent === "AWESOME STYLE")
    ? "Good taste in... food"
    : (three.textContent === "Good taste in... food")
    ? "You bless Ramsay with food and toys"
    : (three.textContent === "You bless Ramsay with food and toys")
    ? "So here's to 26+ more!"
    : (three.textContent === "So here's to 26+ more!")
    ? "Sara"
    : String.fromCodePoint(127752);
}

const buttonTextChange = () => {
    const button = document.querySelector("button");
    console.log(button.textContent);
    button.textContent = (button.textContent === "Click here if you're cool: 26")
    ? "Keep clicking: 25"
    : (button.textContent === "Keep clicking: 25")
    ? "Keep going: 24"
    : (button.textContent === "Keep going: 24")
    ? "Let's skip ahead to when you awesomely graduated early: 20"
    : (button.textContent === "Let's skip ahead to when you awesomely graduated early: 20")
    ? "Let's skip ahead to when you awesomely entered college: 18"
    : (button.textContent ==="Let's skip ahead to when you awesomely entered college: 18")
    ? "Let's skip ahead more: 8"
    : (button.textContent === "Let's skip ahead more: 8")
    ? "I hope you're reading as you're clicking: 7"
    : (button.textContent === "I hope you're reading as you're clicking: 7")
    ? "We're at the finalllll countdownnn: 6"
    : (button.textContent === "We're at the finalllll countdownnn: 6")
    ? "NA NANA NANA: 5"
    : (button.textContent === "NA NANA NANA: 5")
    ? "NA NAN NA NA NA NA: 4"
    : (button.textContent === "NA NAN NA NA NA NA: 4")
    ? "3"
    : (button.textContent === "3")
    ? "2"
    : (button.textContent === "2")
    ? "1"
    : "26 clicks!! 26 years!!"
}

const allToggle = () => {
    toggleOne();
    toggleTwo();
    toggleThree();
    buttonTextChange();
}



const button = document.querySelector("button");
button.addEventListener("click", (event) => allToggle());
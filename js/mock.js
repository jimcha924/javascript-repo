
// var firstText = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.";

// var secondText = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

// var thirdText = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."



var container = document.querySelector('.container-fluid');

// NavBar
var homeAnchor = createAnchor("#", "Home", "nav-link active");
var categoriesAnchor = createAnchor("#", "Categories", "nav-link");
var highAnchor = createAnchor("#", "HighOnCoding", "nav-link active")

var nav = document.createElement('nav');
nav.setAttribute('class', "navbar navbar-expand-lg bg-blue")

nav.append(highAnchor);
nav.append(homeAnchor);
nav.append(categoriesAnchor);

function createAnchor(url, text, css){
    var anchor = document.createElement('a');
    anchor.setAttribute('class', css);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor
}
// *******

container.append(nav);

// DIV creation
var myDiv = document.createElement("div")
myDiv.setAttribute("class", "container")
container.append(myDiv);

function createDiv(css, text){
    var div = document.createElement('div')
    div.setAttribute('class', css)
    div.setAttribute('text', text)
    div.textContent = text;
    return div
}

// First section divs
var section1 = createDiv("row bg-gray p-4 mt-3");
    var d1ra = createDiv("col h2", "Curse of the Current Reviews");
    var d1rb = createDiv("", "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.");


// Second section divs
var section2 = createDiv("row p-1 mt-3 mb-1");
    var d2ra = createDiv("row h4 text-primary", "Hello WatchKit");
    var d2rb = createDiv("row", "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.");
    var d3ra = createDiv("row bg-warning text-white");
    var d3rb = createDiv("col-2", "8 comments");
    var d3rc = createDiv("col-2", "24 likes");


// Section 3 divs
var section3 = createDiv("row p-1 mt-3 mb-1");
    var r3div1 = createDiv("row h4 text-primary", "Introduction to Swift");
    var r3div2 = createDiv("row", "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.");
    var r3div3 = createDiv("row bg-warning text-white");
    var r3d3c1 = createDiv("col-2", "8 comments");
    var r3d3c2 = createDiv("col-2", "26 likes");


// Appends
    section1.append(d1ra);
    section1.append(d1rb);
    d3ra.append(d3rb);
    d3ra.append(d3rc);
    section2.append(d2ra);
    section2.append(d2rb);
    section2.append(d3ra);
    r3div3.append(r3d3c1);
    r3div3.append(r3d3c2);
    section3.append(r3div1);
    section3.append(r3div2);
    section3.append(r3div3);
    myDiv.append(section1);
    myDiv.append(section2);
    myDiv.append(section3);

container.append(myDiv);


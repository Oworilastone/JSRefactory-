 // 1. Get the first paragraph using document.querySelector(tagname)
 let firstPara = document.querySelector("p");
 console.log("First paragraph using querySelector:", firstPara.textContent);

 // 2. Get each paragraph using document.querySelector('#id')
 let para1 = document.querySelector("#para1");
 let para2 = document.querySelector("#para2");
 let para3 = document.querySelector("#para3");
 let para4 = document.querySelector("#para4");
 console.log("Using ID selectors:", para1.textContent, para2.textContent, para3.textContent, para4.textContent);

 // 3. Get all paragraphs as a NodeList using document.querySelectorAll(tagname)
 let allParagraphs = document.querySelectorAll("p");
 console.log("All paragraphs as NodeList:", allParagraphs);

 // 4. Loop through NodeList and get text content of each paragraph
 allParagraphs.forEach((para, index) => {
     console.log(`Paragraph ${index + 1} content:`, para.textContent);
 });

 // 5. Set text content of the fourth paragraph
 para4.textContent = "Fourth Paragraph - Updated";

 // 6. Set id and class attribute using different methods
 allParagraphs[0].setAttribute("id", "first");
 allParagraphs[0].setAttribute("class", "first-class");

 allParagraphs[1].id = "second";
 allParagraphs[1].className = "second-class";

 allParagraphs[2].setAttribute("id", "third");
 allParagraphs[2].classList.add("third-class");

 allParagraphs[3].id = "fourth";
 allParagraphs[3].classList.add("fourth-class");
const bodyContainer = document.getElementById('container');


//Changing heading in list, adding new list item (on page load)
document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    
    //Creating and appending the header
    const heading1 = document.createElement('h1');
    heading1.innerHTML = "Tortoise and the Hare";
    bodyContainer.appendChild(heading1);
    //Creating and appending the Sub-header
    const heading2 = document.createElement('h2');
    heading2.innerHTML = "A Folktale in JS";
    bodyContainer.appendChild(heading2);
    //Creating and appending 3 paragraphs
    const para1 = document.createElement('p');
    para1.innerHTML = "<strong>THE HARE</strong> was once boasting of his speed before the other animals. <em>“I have never yet been beaten,”</em> said he, <em>“when I put forth my full speed. I challenge any one here to race with me.”</em>";
    bodyContainer.appendChild(para1);

    const para2 = document.createElement('p');
    para2.innerHTML = "The Tortoise said quietly, <em>“I accept your challenge.”</em><em>“That is a good joke,”</em> said the Hare; <em>“I could dance round you all the way.</em>";
    bodyContainer.appendChild(para2);

    const para3 = document.createElement('p');
    para3.innerHTML = "<em>“Keep your boasting till you’ve beaten,”</em> answered the Tortoise. <em>“Shall we race?”</em>";
    bodyContainer.appendChild(para3);
    //Creating and appending Unordered List
    const ul1 = document.createElement('ul');
    bodyContainer.appendChild(ul1);
    //Creating and appending List Items
    const newListitem1 = document.createElement('li');
    newListitem1.innerHTML = "<em>“PLODDING WINS THE RACE.”</em>";
    ul1.appendChild(newListitem1);
    const newListitem2 = document.createElement('li');
    newListitem2.innerHTML = "<em>“PLODDING WINS THE RACE.”</em>";
    ul1.appendChild(newListitem2);
    const newListitem3 = document.createElement('li');
    newListitem3.innerHTML = "<em>“PLODDING WINS THE RACE.”</em>";
    ul1.appendChild(newListitem3);

  });
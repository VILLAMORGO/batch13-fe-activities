# batch13-fe-activities

User Stories

1. As a user, I want my tribute page to have an element with a corresponding id="main", which contains all other elements.

2. As a user, I want to see an element with a corresponding id=“title”, which contains a string (i.e. text) that describes the subject of the tribute page (e.g. “Steve Jobs”).

3. As a user, I want to see a div element with a corresponding id=“img-div”.

4. As a user, I want to see a an img element with a corresponding id=“image” within the 'img-div' element.

5. As a user, I want to see an element with a corresponding id="img-caption" that contains text content describing the image show in img-div.

6. As a user, I want to see an element with a corresponding id="tribute-info" which contains text content describing the subject of the tribute page.

7. As a user, I want to see an element with a corresponding id=“tribute- link”, which links to an outside site that contains additional information about the subject of the tribute page.

HINT: You must give your element an attribute of target and set it to _blank in order for your link to open in a new tab (i.e. target=“_blank”).

8. As a user, I want the img element to be responsive to resizing, relative to the width of its parent element.

9. As a user, I want the img element to be centered within its parent element.

10. As a user, I want to read a post, article, or story about the person with at least 2 headings in h1 ... h6, and paragraphs in p.


<!-- Interpretation -->

1.  My tribute page should have an element with a corresponding id=“main”, which contains all other elements.

<div id="main">

2. The pontential user of the page should see an element with a corresponding id=“title”, which contains a string (i.e. text) that describes the subject of the tribute page (e.g. “Eiichiro Oda”).

<div id="title">

3. The potential user of the page should also see a div element with a corresponding id=“img-div”.

<div id="img-div">

4. The potential user of the page should also see a an image element with a corresponding id=“image” within the 'img-div' element.

<img id="image">

5. The potential user of the page should also see an element with a corresponding id="img-caption" that contains text content describing the image show in img-div.
<p id="img-caption">
6. The potential user of the page should also see an element with a corresponding id="tribute-info" which contains text content describing the subject of the tribute page.

<div id="tribute-info" class="Awards">
        <p style="font-size:20px"><strong> Eiichiro Oda has received several awards and titles. His Awards lists: :</strong></p> </div>

7. The potential user of the page should also see an element with a corresponding id=“tribute- link”, which links to an outside site that contains additional information about the subject of the tribute page.

<nav id="tribute-link"><ul class="container">
          <li><a href="Main.html" target="blank">Main</a></li></ul> </nav>

8.I need to secure the responsiveness of the image upon resizing.

9. I need to center the image element within its parent element.

10. I need to create a link with an article tributing the the person I have chosen. At least 2 header ranging from h1 - h6. The article must be in paragraph p.
#helpMe

Multiples utility functions, which facilitate your work.

---

### Version

**1.0.0**

---

### Dependencies

**jQuery-1.9.1 ++** (http://jquery.com/download/)

---

### Getting Started

Place the **helpMe.js** file in your default JavaScript vendor directory. Link the script before the end of your **body** and after **jquery.js**.

```
<script src="js/vendor/jquery-1.9.1.min.js"></script>
<script src="js/vendor/helpMe.js"></script>
```
Here you go ! You're now ready to use helpMe. Here some of the most commons functions.

```
//Used to get where the scroll is at in the page.
$(window).scroll(function(){
    //Exemple scrollOffets : Object { x=0, y=319}
    console.log("scrollOffets :", Me.help.getScrollOffsets());
}).scroll();

//Get the width of the page (with the scrollbar if there one)
//Exemple: PageTotalWidth : 1920
console.log("PageTotalWidth :", Me.help.getTotalW());

//Get the height of the page (with the scrollbar if there one)
//Exemple: PageTotalHeight : 1235
console.log("PageTotalHeight :", Me.help.getTotalH());

//Return true if their a vertical scroll
console.log("HasVerticalScroll :", Me.help.hasVScroll());

//Return true if their a horizontal scroll
console.log("HasHorizontalScroll :", Me.help.hasHScroll());

//Get the width of the scrollbar
//Exemple: Scrollbar : 17
console.log("Scrollbar :", Me.help.getScrollbarSize());

```
---


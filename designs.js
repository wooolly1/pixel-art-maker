const ht = document.getElementById('inputHeight').value;
const wh = document.getElementById('inputWidth').value;
const tables = document.getElementById("pixelCanvas");
const color = document.getElementById("colorPicker");
/**
 * got the ideas from few sources which is github and codepen 
 * 
 * This method is used to draw a grid on the page using the input
 * entered by the user: width & heigth. In addition, it deletes any 
 * previous grid that might be drawn by this mehtod. 
 * 
 * @param {Number} ht the height enter by the user.  
 * @param {Number} wh the width entered by the user.
 */
function makeGrid(ht, wh) {
    tables.innerHTML = '';
    for (let row = 0; row < ht; row++) {
        let tr = document.createElement('tr');
        tables.appendChild(tr);

        for (let cols = 0; cols < wh; cols++) {
            var table = document.createElement('td');
            table.addEventListener("click", function (e) {
                e.target.style.backgroundColor = color.value;
            });
            tr.appendChild(table);
        }
    }
}
/**
 * This listener is used to submit the user values to make the grid
 * which also prevent the page to reload when the color is chosen
 */
document.getElementById("sizePicker").addEventListener("submit", function (e) {
    e.preventDefault();
    const ht = document.getElementById('inputHeight').value;
    const wh = document.getElementById('inputWidth').value;
    makeGrid(ht, wh);

});


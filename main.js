// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);
// import swal from 'sweetalert';

// when you open browser (goes to website), start the timer
// const docIDArr = document.querySelectorAll('*[id]');
const divArr = [...document.getElementsByTagName('div')];

// console.log(divArr);
// console.log("divArr type: ", Array.isArray(divArr));
// console.log(docIDArr[0]);

function changeDom() {
    
    let start = divArr.length - 1;

    function inner() {
        // divArr[start].parentNode.removeChild(divArr[start]);
        const sp1 = document.createElement("h1");
        sp1.id = "newDiv";
        // sp1_content = document.createTextNode("Work on algos!!!");
        // sp1.appendChild(sp1_content);
        sp1.innerText = "Work on Algos!!!"


        divArr[start].parentNode.replaceChild(sp1, divArr[start])
        start -= 1;
        console.log("start: ", start)
        if (start === 1) {
            console.log("interval cleared!!!!")
            // alert("done!!!!!")
            // break;
            clearInterval(interval);
        }
    }
        // for (let i = start; i >= 0; i +=1) {
        //     divArr[i].parentNode.removeChild(divArr[i]);

        return inner;
}

const removeEl = changeDom();


const interval = setInterval(removeEl, 50);

// function changeDom() {


    
//     const contents = document.getElementById('img');
//     console.log("contents parent: ", contents.parentNode)
//     contents.parentNode.removeChild(contents);
// }
// every interval, increment index by 1

// call the changeDom function with the index



// function changeDom() {
    
//     // const contents = document.getElementById('img');
//     for (let i = divArr.length - 1; i >= 0; i +=1) {
//         divArr[i].parentNode.removeChild(divArr[i]);

//     }
// }
// when timer reaches 30 seconds, pop up?? with selection??

    // emoji's for selection (happy, depress, unmotivated etc..)

        // when clicked, pop up with random motivation quotes etc...
        
        
// document.body.src = 'https://images.app.goo.gl/cvydRS6kLYBQsfES6';
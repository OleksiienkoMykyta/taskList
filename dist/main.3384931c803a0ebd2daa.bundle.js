/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
function listMaker() {
  bodyMaker();
  document.querySelector('#button').addEventListener("click", function (event) {
    if (document.querySelector('#input').value !== "") {
      liAdder(document.querySelector('#input').value);
      document.querySelector('#input').value = "";
      sortFunc();
    }
  });
  document.querySelector('#input').addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      if (document.querySelector('#input').value !== "") {
        liAdder(document.querySelector('#input').value);
        document.querySelector('#input').value = "";
        sortFunc();
      }
    }
  });
}

function liAdder(val) {
  var li = document.createElement('li');
  li.id = 'li';
  li.innerHTML = val;
  document.querySelector('#ul').append(li);
} // function sort() {
//     let items = document.querySelectorAll('#ul li');
//     let arr = [];
//     if (localStorage.getItem('tasks') != null) {
//         let lastItem = items.length - 1;
//         arr = JSON.parse(localStorage.getItem('tasks'));
//         arr.push(arr.push(items[lastItem].innerHTML));
//
//         document.querySelector('#li').remove();
//         for(let i = 0; i < arr.length; i++){
//             liAdder(arr[i]);
//         }
//         localStorage.clear();
//         localStorage.setItem('tasks', JSON.stringify(arr));
//
//     } else {
//         arr.push(items[0].innerHTML);
//         document.querySelectorAll('#li').value = "";
//
//         liAdder(arr[0]);
//         localStorage.setItem('tasks', JSON.stringify(arr));
//     }
// }


function sortFunc() {
  var items = document.querySelectorAll('#ul li');
  var arr = [];

  for (var i = 0; i < items.length; i++) {
    arr.push(items[i].innerHTML);
  }

  arr.sort();
  document.querySelector('#ul').innerHTML = "";

  for (var _i = 0; _i < arr.length; _i++) {
    liAdder(arr[_i]);
  }
}

function bodyMaker() {
  var div = document.createElement('div');
  div.classList.add('container');
  document.body.prepend(div);
  var button = document.createElement('button');
  button.id = 'button';
  button.innerHTML = 'Добавить';
  div.prepend(button);
  var input = document.createElement('input');
  input.id = 'input';
  div.prepend(input);
  var ul = document.createElement('ul');
  ul.id = 'ul';
  ul.classList.add('ul');
  div.append(ul);
}

document.addEventListener('DOMContentLoaded', function (event) {
  listMaker();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBSixDQUFjQyxHQUFkLENBQWtCLFdBQWxCO0FBQ0F2QixFQUFBQSxRQUFRLENBQUN3QixJQUFULENBQWNDLE9BQWQsQ0FBc0JKLEdBQXRCO0FBRUEsTUFBSUssTUFBTSxHQUFHMUIsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQWdCLEVBQUFBLE1BQU0sQ0FBQ2YsRUFBUCxHQUFZLFFBQVo7QUFDQWUsRUFBQUEsTUFBTSxDQUFDZCxTQUFQLEdBQW1CLFVBQW5CO0FBQ0FTLEVBQUFBLEdBQUcsQ0FBQ0ksT0FBSixDQUFZQyxNQUFaO0FBRUEsTUFBSUMsS0FBSyxHQUFHM0IsUUFBUSxDQUFDVSxhQUFULENBQXVCLE9BQXZCLENBQVo7QUFDQWlCLEVBQUFBLEtBQUssQ0FBQ2hCLEVBQU4sR0FBVyxPQUFYO0FBQ0FVLEVBQUFBLEdBQUcsQ0FBQ0ksT0FBSixDQUFZRSxLQUFaO0FBRUEsTUFBSUMsRUFBRSxHQUFHNUIsUUFBUSxDQUFDVSxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQWtCLEVBQUFBLEVBQUUsQ0FBQ2pCLEVBQUgsR0FBUSxJQUFSO0FBQ0FpQixFQUFBQSxFQUFFLENBQUNOLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixJQUFqQjtBQUNBRixFQUFBQSxHQUFHLENBQUNSLE1BQUosQ0FBV2UsRUFBWDtBQUNIOztBQUVENUIsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBVUMsS0FBVixFQUFpQjtBQUMzREwsRUFBQUEsU0FBUztBQUNaLENBRkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2tMaXN0Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbGlzdE1ha2VyKCkge1xyXG4gICAgYm9keU1ha2VyKCk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0JykudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGlBZGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dCcpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgc29ydEZ1bmMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKS52YWx1ZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbGlBZGRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBzb3J0RnVuYygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsaUFkZGVyKHZhbCkge1xyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmlkID0gJ2xpJztcclxuICAgIGxpLmlubmVySFRNTCA9IHZhbDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bCcpLmFwcGVuZChsaSk7XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHNvcnQoKSB7XHJcbi8vICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdWwgbGknKTtcclxuLy8gICAgIGxldCBhcnIgPSBbXTtcclxuLy8gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSAhPSBudWxsKSB7XHJcbi8vICAgICAgICAgbGV0IGxhc3RJdGVtID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuLy8gICAgICAgICBhcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcclxuLy8gICAgICAgICBhcnIucHVzaChhcnIucHVzaChpdGVtc1tsYXN0SXRlbV0uaW5uZXJIVE1MKSk7XHJcbi8vXHJcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpJykucmVtb3ZlKCk7XHJcbi8vICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XHJcbi8vICAgICAgICAgICAgIGxpQWRkZXIoYXJyW2ldKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbi8vICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcbi8vXHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGFyci5wdXNoKGl0ZW1zWzBdLmlubmVySFRNTCk7XHJcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2xpJykudmFsdWUgPSBcIlwiO1xyXG4vL1xyXG4vLyAgICAgICAgIGxpQWRkZXIoYXJyWzBdKTtcclxuLy8gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNvcnRGdW5jKCkge1xyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3VsIGxpJyk7XHJcbiAgICBsZXQgYXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGFyci5wdXNoKGl0ZW1zW2ldLmlubmVySFRNTCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyLnNvcnQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bCcpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpQWRkZXIoYXJyW2ldKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvZHlNYWtlcigpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xyXG5cclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5pZCA9ICdidXR0b24nO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICfQlNC+0LHQsNCy0LjRgtGMJztcclxuICAgIGRpdi5wcmVwZW5kKGJ1dHRvbik7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LmlkID0gJ2lucHV0JztcclxuICAgIGRpdi5wcmVwZW5kKGlucHV0KTtcclxuXHJcbiAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdWwuaWQgPSAndWwnO1xyXG4gICAgdWwuY2xhc3NMaXN0LmFkZCgndWwnKTtcclxuICAgIGRpdi5hcHBlbmQodWwpO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsaXN0TWFrZXIoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJsaXN0TWFrZXIiLCJib2R5TWFrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ2YWx1ZSIsImxpQWRkZXIiLCJzb3J0RnVuYyIsImtleUNvZGUiLCJ2YWwiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImFyciIsImkiLCJsZW5ndGgiLCJwdXNoIiwic29ydCIsImRpdiIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJwcmVwZW5kIiwiYnV0dG9uIiwiaW5wdXQiLCJ1bCJdLCJzb3VyY2VSb290IjoiIn0=
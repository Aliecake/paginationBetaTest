/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version
*/

"use strict";

// GLOBAL VARIABLES - You'll use these below
const studentContainer = document.querySelector('.student-list');
const linkContainer = document.querySelector('.link-list');
const searchContainer = document.querySelector('.header');

const dataList = data.results;
const perPage = 10;


// 1. THE SHOW PAGE FUNCTION

// Create your showPage function, passing it two parameters - list, page

const showPage = (list, page) => {

   studentContainer.innerHTML = ``
   
   const perPage = 10;

   for(let ii = 0; ii < list.length; ii++) {
      const studentTemplate = `
      <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[ii].picture.large}">
            <h3>${list[ii].name.first} ${list[ii].name.last}</h3>
            <span class="email">${list[ii].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${formatDate(list[ii].registered.date)}</span>
         </div>
      </li>
   `;

      if(ii >= (page * perPage) - perPage && ii < page * perPage){
         studentContainer.insertAdjacentHTML(`beforeend`, studentTemplate)
      }
   }

}

showPage(dataList, 1)

// 2. THE APPEND PAGE LINKS FUNCTION

const appendPageLinks = (list) => {
   linkContainer.innerHTML = ``;

   const linkCount = Math.ceil(list.length / 10);
   

   for (let jj = 0; jj < linkCount; jj ++){
      const htmlTemplate = `<li><a href="#">${jj + 1}</a></li>`
      linkContainer.insertAdjacentHTML(`beforeend`, htmlTemplate)
   }
   linkContainer.firstElementChild.firstElementChild.className = `active`
}

   linkContainer.addEventListener(`click`, (e) => {
      if (event.target.tagName === `A`){
         const links = document.querySelectorAll(`.link-list a`)

         links.forEach(link => {
            link.className = ``;

         })
         event.target.className = `active`

         showPage(dataList, e.target.innerHTML)
      }
   })


appendPageLinks(dataList)


// Feel free to try out adding the search feature and pagination search results

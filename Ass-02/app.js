//SIR ISHAQ'S ASSIGNMENT 
// //===================ASSIGNMMENT 2==========================

// //=====================   QUESTION 1   ============================

// function parent_function(number_1){
//     return function child_function(number_2){
//         return number_1 + number_2;
//     }
// }

// let parent = parent_function(argument_1);
// let final = parent(argument_2);

// console.log("the parent function's argument you entered is: ", argument_1);
// console.log("the child function's argument you entered is: ", argument_2);
// console.log("the addition of both of the given argumnets is: ",final );

// //=====================QUESTION 2============================
// let no_to_search = +prompt("enter the number you want to search: ");
// let arr = [];
// //============random number generating and placing in array:
// for (let i = 1; i <= 30; i++) {
//     let random_no = Math.round(Math.random() * 100);
//     arr.push(random_no);
// }

// let sorted_array = arr.sort(function(a,b){
//     if(a>b) {
//         return b;
//     }
//     return -1;
// })

// array_length = sorted_array.length;
// console.log("the original array is:", sorted_array);
// console.log("the number you searched for is : ", no_to_search);


// let i = 0;

// function recursion(array){
//     if (no_to_search === sorted_array[i]) {
//         return true;
//     }
//     else if(i < array_length-1){
//         i = i+1;
//         recursion();
//        }
//     else{ 
//         return;
//     }
// }

// recursion(sorted_array);

// if (recursion()==true){
//     console.log("true");
// }
// else{
//     console.log("flase");
// }

// //=====================QUESTION 3============================
 
// let contentOfPara = prompt("enter your content");
// let para_element = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];

// function addingPara(String){
//     para_element.innerHTML = String;
//     parent.appendChild(para_element);
//     parent.insertAdjacentElement("afterbegin",para_element);
//     return para_element;
// }

// console.log(addingPara(contentOfPara));

// //=====================QUESTION 4============================

// let list_content = prompt("enter list content:");

// let first_parent = document.getElementsByTagName("body")[0];
// let new_unorderd_list = document.createElement("ul");

// first_parent.appendChild(new_unorderd_list);

// first_parent.insertAdjacentElement("afterbegin",new_unorderd_list);

// let creting_list = document.createElement("li");


// function adding_content_in_list(string){
//     new_unorderd_list.appendChild(creting_list);
//     creting_list.innerHTML = string;
// }

// adding_content_in_list(list_content);

// //=====================QUESTION 5============================

// let heading_1 = document.querySelector("#heading1");
// let heading_2 = document.querySelector("#heading2");

// function changes(id ,color){
//     id.style.backgroundColor = color;
// }
// changes(heading_2,'green');

// //=====================QUESTION 6============================

// localStorage.clear();  
// let object_1 = {
//     name:"alisha",
//     age: 18,
//     phone_no:"03214567890",
//     height:"5'4",
//     cnic: "98765432100",
//     eng_marks:48,
//     urdu_marks:60,
//     maths_marks:94
// }

// let object_2 = {
//     name:"alina",
//     age: 16,
//     phone_no:"098763567891",
//     height:"4'3",
//     cnic: "26783567300",
//     eng_marks:80,
//     urdu_marks:60,
//     maths_marks:100
// }

// let object_3 = {
//     name:"Amna",
//     age: 28,
//     phone_no:"9683472942",
//     height:"5'1",
//     cnic: "72942947249",
//     eng_marks:44,
//     urdu_marks:66,
//     maths_marks:88
// }

// function saving_object(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key,new_object);
// }

// saving_object("data of alisha",object_1);
// saving_object("data of alina",object_2);
// saving_object("data of amna",object_3);

// //=====================QUESTION 7============================

// let object_1 = {
//     name:"alisha",
//     age: 13,
//     phone_no:"03219876543",
//     height:"5'8",
//     cnic: "465879989898",
//     eng_marks:93,
//     urdu_marks:74,
//     maths_marks:68
// }

// let object_2 = {
//     name:"arbish",
//     age: 18,
//     phone_no:"6789945689",
//     height:"5'3",
//     cnic: "1234567788",
//     eng_marks:70,
//     urdu_marks:44,
//     maths_marks:26
// }

// let object_3 = {
//     name:"maheen",
//     age: 21,
//     phone_no:"98567788888",
//     height:"5'6",
//     cnic: "8786447588",
//     eng_marks:50,
//     urdu_marks:88,
//     maths_marks:66
// }

// let i = 0;
//  function saving_object(key , value){
//        i = i+ 1
//         let new_object = JSON.stringify(value);
//         localStorage.setItem(key,new_object);
//         console.log("CONVERTED OBJECT  ",i," INTO STRING FORM \n\n", new_object)
//     }

// let j =0;
// function retrieve(object_name){
//     j = j+1;
//     let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//     console.log("CONVERTED OBJECT  ",j," INTO OBJECT FORM FROM STRING FORM \n\n", retrieved_object)
// }
 
// saving_object("data of alisha",object_1);
// retrieve('data of alisha')
// saving_object("data of arbish",object_2);
// retrieve('data of arbish')
// saving_object("data of maheen",object_3);
// retrieve('data of maheen')

// //=====================QUESTION 8============================

// localStorage.clear() 
// let object_1 = {
    //     name:"alisha",
    //     age: 13,
    //     phone_no:"03219876543",
    //     height:"5'8",
    //     cnic: "465879989898",
    //     eng_marks:93,
    //     urdu_marks:74,
    //     maths_marks:68
    // }
    
    // let object_2 = {
    //     name:"arbish",
    //     age: 18,
    //     phone_no:"6789945689",
    //     height:"5'3",
    //     cnic: "1234567788",
    //     eng_marks:70,
    //     urdu_marks:44,
    //     maths_marks:26
    // }
    
    // let object_3 = {
    //     name:"maheen",
    //     age: 21,
    //     phone_no:"98567788888",
    //     height:"5'6",
    //     cnic: "8786447588",
    //     eng_marks:50,
    //     urdu_marks:88,
    //     maths_marks:66
    // }
// let arr;
// function saving_object(key, value) {
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
//     arr = [object_1];
//     localStorage.setItem("name", JSON.stringify(arr[0]['name'])) ;
//     localStorage.setItem("age", JSON.stringify(arr[0]['age'])) ;
//     localStorage.setItem("phone no", JSON.stringify(arr[0]['phone_no'])) ;
//     localStorage.setItem("height", JSON.stringify(arr[0]['height'])) ;
//     localStorage.setItem("cnic", JSON.stringify(arr[0]['cnic'])) ;
//     localStorage.setItem("eng_marks", JSON.stringify(arr[0]['eng_marks'])) ;
//     localStorage.setItem("urdu_marks", JSON.stringify(arr[0]['urdu_marks'])) ;
//     localStorage.setItem("maths_marks", JSON.stringify(arr[0]['maths_marks'])) ;
//     console.log("object in string form \n", new_object)
// }
// function retrieve(object_name){
//     let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//     console.log("object converted to object from string form\n\n" , retrieved_object)
// }

// saving_object("data of alisha", object_1);
// retrieve('data of alisha')

//  saving_object("data of arbish", object_2);
//  retrieve('data of arbish')

//  saving_object("data of maheen", object_3);
// retrieve('data of maheen')

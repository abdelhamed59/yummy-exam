// loading ////////////////////////////////////////////////////////////
$(document).ready(function(){
    $(`.sk-circle`).fadeOut(500,function(){
        $(`.loading`).slideUp(500,function(){
            $(`body`).css({overflow:`auto`})
        })
    })
})







// sideBar /////////////////////////////////////////////////////////////////////
$(`#sideIcon`).on(`click`, function () {


    if ($(`#sideBar`).css(`left`) == `0px`) {
        // $(`#sideIcon`).removeClass(`fa-xmark`).addClass(`fa-bars`)
        // $(`#sideBar`).animate({left:`-${$(`.contectSide`).innerWidth()}`},500)
        // $(`.links`).animate({left:`-${$(`.links`).innerWidth()}`,top:`300px`},800)
        closeSideNav()

    } else {
        // $(`#sideIcon`).removeClass(`fa-bars`).addClass(`fa-xmark`)
        // $(`#sideBar`).animate({left:0},500)
        // $(`.link1`).animate({left:0,top:0},600)
        // $(`.link2`).animate({left:0,top:0},700)
        // $(`.link3`).animate({left:0,top:0},800)
        // $(`.link4`).animate({left:0,top:0},900)
        // $(`.link5`).animate({left:0,top:0},1000)
        openSideNav()


    }



})
function openSideNav() {
    $("#sideBar").animate(
        {
            left: 0,
        },
        500
    );

    $("#sideIcon").removeClass("fa-bars").addClass("fa-xmark");

    $(".links").each(function (index) {
        $(this).animate(
            {
                top: 0,
            },
            (index + 5) * 100
        );
    });
}

function closeSideNav() {
    let boxWidth = $(".contectSide").outerWidth();
    $("#sideBar").animate(
        {
            left: -boxWidth,
        },
        500
    );

    $("#sideIcon").addClass("fa-bars").removeClass("fa-xmark");

    $(".links").animate(
        {
            top: 300,
        },
        500
    );
}
closeSideNav()


$(`#searchLi`).on(`click`, function () {
    $(`#searchSection`).removeClass(`d-none`).addClass(`d-block`);
    closeSideNav()
    $(`#areaSection`).addClass(`d-none`);
    $(`#homeSection`).addClass(`d-none`);
    $(`#categorySection`).addClass(`d-none`);
    $(`#ingredientSection`).addClass(`d-none`);
    $(`#detailsSection`).addClass(`d-none`);
    $(`#contactUs`).addClass(`d-none`);
    
})

$(`#categoryLi`).on(`click`, function () {
    $(`#categorySection`).removeClass(`d-none`).addClass(`d-block`);
    closeSideNav()
    $(`#areaSection`).addClass(`d-none`);
    $(`#homeSection`).addClass(`d-none`);
    $(`#searchSection`).addClass(`d-none`);
    $(`#ingredientSection`).addClass(`d-none`);
    $(`#detailsSection`).addClass(`d-none`);
    $(`#contactUs`).addClass(`d-none`);

})

$(`#areaLi`).on(`click`, function () {
    $(`#areaSection`).removeClass(`d-none`).addClass(`d-block`);
    closeSideNav()
    $(`#categorySection`).addClass(`d-none`);
    $(`#homeSection`).addClass(`d-none`);
    $(`#searchSection`).addClass(`d-none`);
    $(`#ingredientSection`).addClass(`d-none`);
    $(`#detailsSection`).addClass(`d-none`);
    $(`#contactUs`).addClass(`d-none`);


})
$(`#IngredientLi`).on(`click`, function () {
    $(`#ingredientSection`).removeClass(`d-none`).addClass(`d-block`);
    closeSideNav()
    $(`#categorySection`).addClass(`d-none`);
    $(`#homeSection`).addClass(`d-none`);
    $(`#searchSection`).addClass(`d-none`);
    $(`#areaSection`).addClass(`d-none`);
    $(`#detailsSection`).addClass(`d-none`);
    $(`#contactUs`).addClass(`d-none`);

})
$(`#ContactLi`).on(`click`, function () {
    $(`#contactUs`).removeClass(`d-none`).addClass(`d-block`);
    closeSideNav()
    $(`#categorySection`).addClass(`d-none`);
    $(`#homeSection`).addClass(`d-none`);
    $(`#searchSection`).addClass(`d-none`);
    $(`#areaSection`).addClass(`d-none`);
    $(`#detailsSection`).addClass(`d-none`);
    $(`#ingredientSection`).addClass(`d-none`);

})
// _____________________________________________________________________________________

// api home section///////////////////////////////////////////////////
function runHomeSection() {
    async function getHomeAPI() {
        let homeAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        let homeSource = await homeAPI.json();
        // console.log(homeSource.meals);
        return homeSource.meals;
    }

    function displayHomeSection(data) {
        let cartona = ``;
        for (let i = 0; i < data.length; i++) {
            cartona += `<div  class="col-md-3 " onclick="runDetalisSetion(${data[i].idMeal})" id="cardHome" >
          <div class=" footImg position-relative">
              <img class="w-100  position-relative" src="${data[i].strMealThumb}" alt="">
              <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                  <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                  <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                  <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
    
              </div>
              <div class="layer position-absolute d-flex align-items-center">
                  <p class="fs-3 text-capitalize ps-2">${data[i].strMeal}</p>
              </div>
          </div>
    
      </div>`

        }
        document.querySelector(`#homeSection`).innerHTML = cartona;
    }
    async function runHome() {
        let getHome = await getHomeAPI()
        displayHomeSection(getHome)
    }
    runHome()
}
runHomeSection()
// ___________________________________________________________________________

// api category section /////////////////////////////////////////////////////////
function runCategorySection() {
    async function getCategoryAPI() {
        let categoryAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let categorySource = await categoryAPI.json();
        console.log(categorySource.categories);
        return categorySource.categories;
    }

    function displayCategorySection(data) {
        let cartona = ``
        for (let i = 0; i < data.length; i++) {
            cartona += `<div class="col-md-3" onclick=runFilerCategory("${data[i].strCategory}")>
            <div class=" footImg position-relative">
                <img class="w-100  position-relative" src="${data[i].strCategoryThumb}" alt="">
                <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                    <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                    <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                    <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
    
                </div>
                <div class="layer position-absolute py-3 px-3 ">
                    <h3 class="text-center">${data[i].strCategory}</h3>
                    <p class="pb-3 mb-3 h-75  overflow-hidden">${data[i].strCategoryDescription}</p>
                </div>
            </div>
    
        </div>`

        }

        document.querySelector(`#categoryRow`).innerHTML = cartona;
    }
    async function runCategory() {
        let getCategory = await getCategoryAPI()
        displayCategorySection(getCategory)
    }
    runCategory()
}
runCategorySection()
// ________________________________________________________________________________

// api area section ////////////////////////////////////////////////
function runAreaSection() {
    async function getAreaAPI() {
        let areaAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let areaSource = await areaAPI.json()
        return areaSource.meals;
    }


    function displayAreaSection(data) {
        let cartona = ``
        for (let i = 0; i<data.length; i++) {
            cartona += `<div  onclick = runFilterArea("${data[i].strArea}")  class="col-md-3 card-col text-white d-flex flex-column justify-content-center align-items-center" >
            <i class="fa-solid fa-house-laptop"></i>
            <h1>${data[i].strArea}</h1>
        </div>`
        }

        document.querySelector(`#areaRow`).innerHTML = cartona;
    }
    async function runArea() {
        let getArea = await getAreaAPI()
        displayAreaSection(getArea)
    }
    runArea()
}
runAreaSection()
// __________________________________________________________________________________

// api Ingredients section //////////////////////////////////////////////////////////
function runIngredientSection() {
    async function getIngredientAPI() {
        let ingredientsAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let ingredientSource = await ingredientsAPI.json();
        return ingredientSource.meals
    }

    function displayIngredientSection(data) {
        let cartona = ``
        for (let i = 0; i < 20; i++) {
            cartona += ` <div onclick=runIngredientsFilter("${data[i].strIngredient}") class="col-md-3 text-white d-flex flex-column justify-content-center align-items-center">
            <i class="fa-solid fa-drumstick-bite"></i>
            <h2 class="mb-3">${data[i].strIngredient}</h2>
            <p class="pb-3 mb-3 IngredientP fs-5 overflow-hidden">${data[i].strDescription}</p>
    
        </div>`

        }
        document.querySelector(`#IngredientsSection`).innerHTML = cartona;
    }
    async function runIngredients() {
        let getIngredient = await getIngredientAPI()
        displayIngredientSection(getIngredient);

    }
    runIngredients()
}
runIngredientSection()
// ___________________________________________________________________________________

// search by name section ////////////////////////////////////////////////////
function runSearchByNameSection() {
    async function getSearchNamwAPI(name) {
        let searchNameAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        let searchNameSource = await searchNameAPI.json();
        return searchNameSource.meals;
    }
    function displaySearchName(data) {
        let cartona = ``
        for (let i = 0; i < data.length; i++) {
            cartona += `<div class="col-md-3">
            <div class=" footImg position-relative">
                <img class="w-100  position-relative" src="${data[i].strMealThumb}" alt="">
                <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                    <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                    <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                    <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
    
                </div>
                <div class="layer position-absolute d-flex align-items-center">
                    <p class="fs-3 text-capitalize ps-2">${data[i].strMeal}</p>
                </div>
            </div>
    
        </div>`

        }
        document.querySelector(`#searchRow`).innerHTML = cartona

    }
    async function runSearchName(SBN) {
        let searchName = await getSearchNamwAPI(SBN)
        displaySearchName(searchName)

    }
    document.querySelector(`#searchByName`).addEventListener(`input`, function () {
        runSearchName(document.querySelector(`#searchByName`).value)
    })
}
runSearchByNameSection()
//_________________________________________________________________________________________

// search by first letter section ////////////////////////////////////////////////
function runSearchByLetter() {
    async function getSearchByFirstLetterAPI(letter) {
        let searchLetterAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        let searchLetterSource = await searchLetterAPI.json()
        return searchLetterSource.meals;
    }
    getSearchByFirstLetterAPI()
    function displaySearchByFirstLetter(data) {
        let cartona = ``
        for (let i = 0; i < data.length; i++) {
            cartona += `<div class="col-md-3">
            <div class=" footImg position-relative">
                <img class="w-100  position-relative" src="${data[i].strMealThumb}" alt="">
                <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                    <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                    <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                    <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
    
                </div>
                <div class="layer position-absolute d-flex align-items-center">
                    <p class="fs-3 text-capitalize ps-2">${data[i].strMeal}</p>
                </div>
            </div>
    
        </div>`

        }
        document.querySelector(`#searchRow`).innerHTML = cartona

    }
    async function runSearchByfirstLetter(SBL) {
        let searchLetter = await getSearchByFirstLetterAPI(SBL)
        displaySearchByFirstLetter(searchLetter)

    }
    document.querySelector(`#searchByLetter`).addEventListener(`input`, function () {
        runSearchByfirstLetter(document.querySelector(`#searchByLetter`).value)
    })
}
runSearchByLetter()

// __________________________________________________________________________________________

// detalis section //////////////////////////////////////////////////////////////////////////
function runDetalisSetion(id) {
    document.querySelector(`#detailsSection`).classList.remove(`d-none`)
    document.querySelector(`#homeSection`).classList.add(`d-none`)
    document.querySelector(`#searchSection`).classList.add(`d-none`)
    document.querySelector(`#categorySection`).classList.add(`d-none`)
    document.querySelector(`#areaSection`).classList.add(`d-none`)
    document.querySelector(`#ingredientSection`).classList.add(`d-none`)

    async function getDetailsAPI(id) {
        let detailsapi = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let detailsSource = await detailsapi.json()
        return detailsSource.meals
    }
    function displayDetails(data) {

        let cartona = ``
        for (let i = 0; i < data.length; i++) {
            cartona = `<div class="col-md-4 text-white">
    <img class="w-100" src="${data[i].strMealThumb}" alt="">
     <h1>${data[i].strMeal}</h1>
     </div>
     <div class="col-md-8 text-white">
     <h1>Instructions</h1>
     <p>${data[i].strInstructions}</p>
    <h3>
         <span>Area : </span>
         ${data[i].strArea}
     </h3>
     <h3>
         <span>Category : </span>
         ${data[i].strCategory}
     </h3>
     <h3>Recipes :</h3>
     <ul class="list-unstyled d-flex g-3 flex-wrap">
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient1}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient2}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient3}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient4}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient5}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient6}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient7}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient8}</li>
         <li class="alert alert-info m-2 p-1">${data[i].strIngredient9}</li>
         
        
     </ul>
     <h3>Tags :</h3>
     <ul class="list-unstyled d-flex g-3 flex-wrap">
    
         <li class="alert alert-danger m-2 p-1">${data.strTags}</li>
     </ul>
     <a target="_blank" href="${data.strSource}" class="btn btn-success">Source</a>
     <a target="_blank" href="${data.strYoutube}">Youtube</a>
     </div>`;


        }
        document.querySelector(`#detailsRow`).innerHTML = cartona
    }
    async function runDetalis(id) {
        let detalidApi = await getDetailsAPI(id)
        displayDetails(detalidApi)

    }
    runDetalis(id)
}
// ____________________________________________________________________________________


//  filter by category //////////////////////////////////////////////////////////////
    async function getFilterCategoryAPI(id) {
        let filterCategoryapi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`);
        let filterCategorySource = await filterCategoryapi.json();
        console.log(filterCategorySource.meals);
        return filterCategorySource.meals;

    }
    function displayFilterCategory(data) {
        let cartona = ``;
        for (let i = 0; i <data.length; i++) {
            cartona += `<div  class="col-md-3 " onclick="runDetalisSetion(${data[i].idMeal})" id="cardHome" >
          <div class=" footImg position-relative">
              <img class="w-100  position-relative" src="${data[i].strMealThumb}" alt="">
              <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                  <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                  <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                  <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
    
              </div>
              <div class="layer position-absolute d-flex align-items-center">
                  <p class="fs-3 text-capitalize ps-2">${data[i].strMeal}</p>
              </div>
          </div>
    
      </div>`

        }
        document.querySelector(`#homeSection`).innerHTML = cartona;
    }
    async function runFilerCategory(id) {
        document.querySelector(`#categorySection`).classList.add(`d-none`)
    document.querySelector(`#homeSection`).classList.remove(`d-none`)
        let getFilterCategory = await getFilterCategoryAPI(id)
        displayFilterCategory(getFilterCategory)
    }
    // _________________________________________________________________________________________________
  

// filter BY area //////////////////////////////////////////////////////////
    async function filterByAreaAPI(area) {
        let getAreaFilterApi = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        let getAreaFilterSource = await getAreaFilterApi.json()
        console.log(getAreaFilterSource);
        return getAreaFilterSource.meals
    }
    function displyFilterArea(data) {
        let cartona = ``
        for (let i = 0; i < data.length; i++) {
            cartona += `<div  class="col-md-3 " onclick="runDetalisSetion(${data[i].idMeal})"  >
            <div class=" footImg position-relative">
                <img class="w-100  position-relative" src="${data[i].strMealThumb}" alt="">
                <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                    <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                    <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                    <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
      
                </div>
                <div class="layer position-absolute d-flex align-items-center">
                    <p class="fs-3 text-capitalize ps-2">${data[i].strMeal}</p>
                </div>
            </div>
      
        </div>`

        }
        document.querySelector(`#homeSection`).innerHTML=cartona;
    }
    async function runFilterArea(area) {
        document.querySelector(`#homeSection`).classList.remove(`d-none`)
    
        document.querySelector(`#searchSection`).classList.add(`d-none`)
        document.querySelector(`#categorySection`).classList.add(`d-none`)
        document.querySelector(`#areaSection`).classList.add(`d-none`)
        document.querySelector(`#ingredientSection`).classList.add(`d-none`)
        let getAreaFilter = await filterByAreaAPI(area)
        displyFilterArea(getAreaFilter)
    }
    // __________________________________________________________________________________________


    // filter by Ingredients ////////////////////////////////////////////////////////////////////
    async function filterByIngredients(i) {
        let getIngredientAPI = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${i}  `)
        let getIngredientSource = await getIngredientAPI.json()
        console.log(getIngredientSource.meals);
        return getIngredientSource.meals
    }
    
    function displayIngrediesFilter(data) {
        let cartona = ``
        for (let i = 0; i < data.length; i++) {
            cartona += `<div  class="col-md-3 " onclick="runDetalisSetion(${data[i].idMeal})"  >
            <div class=" footImg position-relative">
                <img class="w-100  position-relative" src="${data[i].strMealThumb}" alt="">
                <div class="icons d-flex flex-column bg-transparent position-absolute  top-0 end-0 p-2">
                    <div class="icon  mb-3"><i class="fa-solid fa-camera "></i></div>
                    <div class="icon  mb-3"><i class="fa-solid fa-paste "></i></div>
                    <div class="icon  mb-3"> <i class="fa-solid fa-ellipsis "></i></div>
      
                </div>
                <div class="layer position-absolute d-flex align-items-center">
                    <p class="fs-3 text-capitalize ps-2">${data[i].strMeal}</p>
                </div>
            </div>
      
        </div>`

        }
        document.querySelector(`#homeSection`).innerHTML=cartona;
    }
    async function runIngredientsFilter(i) {
        document.querySelector(`#homeSection`).classList.remove(`d-none`)
        document.querySelector(`#searchSection`).classList.add(`d-none`)
        document.querySelector(`#categorySection`).classList.add(`d-none`)
        document.querySelector(`#areaSection`).classList.add(`d-none`)
        document.querySelector(`#ingredientSection`).classList.add(`d-none`)
        let getIngredientsFilter = await filterByIngredients(i)
        displayIngrediesFilter(getIngredientsFilter)
    }
    // ____________________________________________________________________________________________

    






































   




// validate nameInput

function validateEmailInput() {
    let emailInput = document.querySelector(`#emailInput`)
    let regex = /@[a-z]{1,}\.[a-z]{2,3}$/;
    if (regex.test(emailInput.value) == true) {
        document.querySelector(`#wrongMail`).classList.add(`d-none`)
        return true
    } else {
        document.querySelector(`#wrongMail`).classList.remove(`d-none`)
        return false
    }

}
// validate phoneInput
function validatePhoneInput() {
    let phoneInput = document.querySelector(`#phoneInput`)
    let regex = /^01[0125][0-9]{8}$/;
    if (regex.test(phoneInput.value) == true) {
        document.querySelector(`#wrongePhone`).classList.add(`d-none`)
        return true
    } else {
        document.querySelector(`#wrongePhone`).classList.remove(`d-none`)
        return false
    }

}
// validate age
function validateAge() {
    let ageInput = document.querySelector(`#ageInput`)
    let regex = /^[1-9]{1}[0-9]{1}$/;
    if (regex.test(ageInput.value) == true) {
        document.querySelector(`#wrongeAge`).classList.add(`d-none`)
        return true
    } else {
        document.querySelector(`#wrongeAge`).classList.remove(`d-none`)
        return false
    }

}
// validate password
let passwordInput = document.querySelector(`#passwordInput`)
function validatePassword() {

    let regex = /^[a-z0-9]{1,}[a-z0-9]{7,}/;
    if (regex.test(passwordInput.value) == true) {
        document.querySelector(`#wrongePassword`).classList.add(`d-none`)
        return true
    } else {
        document.querySelector(`#wrongePassword`).classList.remove(`d-none`)
        return false
    }

}
// validate Repasswrd
function validateRepassword() {
    let repasswordInput = document.querySelector(`#repasswordInput`)
    if (repasswordInput.value == passwordInput.value) {
        document.querySelector(`#wrongeRepassword`).classList.add(`d-none`)
        return true
    } else {
        document.querySelector(`#wrongeRepassword`).classList.remove(`d-none`)
        return false
    }

}




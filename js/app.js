const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();

  const categoryContainer = document.getElementById("category-bar-container");

  data.data.news_category.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <button onclick="loadNews('${item.category_id}')" style="background-color:yellow; padding: 0.8rem;font-weight: bolder">${item.category_name}</button>
    `;
    categoryContainer.appendChild(div);
  });
};

const loadNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await res.json();
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";
  data.data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("singleNews");
    div.innerHTML = `
            <div class="news-photo">
                <img src="${item.image_url}" alt="">
            </div>
            <div class="news-info">
                <div class="news-header">
                    <h4>${item.title}</h4>
                    <p class="news-badge">
                        ${item.rating.badge} <sup> <h6 class="news-rating">${
      item.rating.number
    }</h6> </sup>
                    </p>
                </div>
                <p>
                    ${item.details.slice(0, 200)}
                </p>


                <div class="news-footer">
                    <div class="author">
                        <div class=""> 
                            <img src="" alt="">
                        </div>
                        <div class="author-info">
                            <h6>Md David</h6>
                            <p>Date: 12-12-2024</p>
                        </div>
                    </div>
                    <div class="Views-author">
                        <img class="view-img" src="${item.author.img}" alt="">
                        <p>450</p>
                    </div>
                    <div class="details-btn-container">
                        <button onclick="showDetails('${
                          item._id
                        }')" class="details-btn">Details</button>
                    </div>
                </div>
            </div>
            `;
    newsContainer.appendChild(div);
  });
  loadingSpinner.style.display = "none";
};

const showDetails = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );
  const data = await res.json();
  data.data.forEach((data) => {
    const showDetails = document.getElementById("show-details");
    showDetails.innerHTML = `
        <img src="${data.image_url}">
        `;
  });

  my_modal_5.showModal();
};

const handleSearch = () => {
  const value = document.getElementById("search-box").value;
  loadNews(value);
};

const loadingSpinner = document.getElementById("loading-spiner");
loadingSpinner.style.display = "block";

setInterval(() => {
  loadNews("01");
}, 2000);
loadCategory();

// const loadNews = async (id) => {
// const loadingSpinner = document.getElementById("loading-spiner");
// loadingSpinner.style.display = "block";

//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${id}`
//   );
//   const data = await res.json();
//   console.log(data.data);
//   const newsContainer = document.getElementById("news-container");
//   newsContainer.innerText = "";
//   data.data.forEach((item) => {
//     const div = document.createElement("div");
//     div.classList.add("singleNews");
//     div.innerHTML = `
//             <div class="news-photo">
//                 <img src="${item.image_url}" alt="">
//             </div>
//             <div class="news-info">
//                 <div class="news-header">
//                     <h4>${item.title}</h4>
//                     <p class="news-badge">
//                         ${item.rating.badge} <sup> <h6 class="news-rating">${
//       item.rating.number
//     }</h6> </sup>
//                     </p>
//                 </div>
//                 <p>
//                     ${item.details.slice(0, 200)}
//                 </p>

//                 <div class="news-footer">
//                     <div class="author">
//                         <div class="">
//                             <img src="" alt="">
//                         </div>
//                         <div class="author-info">
//                             <h6>Md David</h6>
//                             <p>Date: 12-12-2024</p>
//                         </div>
//                     </div>
//                     <div class="Views-author">
//                         <img class="view-img" src="${item.author.img}" alt="">
//                         <p>450</p>
//                     </div>
//                     <div class="details-btn-container">
//                         <button onclick="showDetails('${
//                           item._id
//                         }')" class="details-btn">Details</button>
//                     </div>
//                 </div>
//             </div>
//             `;
//     newsContainer.appendChild(div);
//   });

//   loadingSpinner.style.display = "none";
// };

// loadNews("01");

// loadCategory();

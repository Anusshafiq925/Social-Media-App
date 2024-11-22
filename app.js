var selectedImgPath;
var selectedTextColor;
var bg = document.getElementsByClassName("bg-image");

// bg image selector

function selectedImg(src) {
  for (var i = 0; i < bg.length; i++) {
    bg[i].className = "bg-image";
  }

  event.target.className = "border-3 border-white border bg-image";

  selectedImgPath = src;
  document.getElementById(
    "description"
  ).style.backgroundImage = `url(${selectedImgPath})`;
  document.getElementById(
    "title"
  ).style.backgroundImage = `url(${selectedImgPath})`;
}

// for color picker

function colorPicker() {
  selectedTextColor = document.getElementById("color").value;
  document.getElementById("description").style.color = selectedTextColor;
  document.getElementById("title").style.color = selectedTextColor;
}

// for like increment

var like = 0;
function likes() {
  if (like === 0) {
    ++like;
    document.getElementById("counter").className = "count d-flex p-1 d-block";
    document.getElementById("like").classList.add("text-primary");
    document.getElementById("likesCount").innerHTML = like;
  } else {
    --like;
    document.getElementById("counter").className = "count d-flex p-1 d-none";
    document.getElementById("like").classList.remove("text-primary");
  }
  console.log(like);
}

// for Comment increment

var comment = 0;

function comments() {
  var commented = document.getElementById("addComment");
  if (commented.value.trim() !== "") {
    ++comment;
    document.getElementById("comment").classList.add("text-primary");
    document.getElementById("counter").className = "count d-flex p-1 d-block";
    document.getElementById("post").classList.remove("mb-4");
    document.getElementById("post").classList.add("m-0");

    document.getElementById("commentBox").innerHTML += `
    <div class="card rounded-4 p-2 bg-secondary my-2" >
            <label for="addComment" class="text-white px-2"
              ><span>~@${userName.value}</span
              ><span class="small text-white-50"> commented</span></label
            >
            <div id="commented" class="card bg-white rounded-4 p-2"></div>
          </div>
    `;
    document.getElementById("commentsCount").innerHTML = comment;
    document.getElementById("commented").innerHTML = commented.value;
    document.getElementById("addCommentBox").classList.add("d-none");
  } else {
    --comment;
    Swal.fire("Please add some text!");
  }
}

// for commentbox

function addComment() {
  document.getElementById("addCommentBox").classList.remove("d-none");
  // document.getElementById("addCommentBox").classList.add("d-block");
  document.getElementById("addCommentBox").innerHTML = `
  
   <label for="addComment" class="text-white px-2">Add Comment</label>
            <textarea
              class="rounded-4 p-2 my-2 text-capitalize"
              name="addComment"
              id="addComment"
            ></textarea>
            <div class="btnDiv d-flex justify-content-end">
              <button class="btn btn-secondary " onclick="comments()">
                Comment
              </button>
            </div>`;
}

// submitpost code
var date = new Date().toUTCString();
var userName = document.getElementById("userName");
var title = document.getElementById("title");
var description = document.getElementById("description");
function submitpost() {
  var listing = document.getElementById("postListing");

  if (userName.value.trim() !== "") {
    if (title.value.trim() !== "") {
      if (description.value.trim() !== "") {
        listing.innerHTML += `
         <div class="card mb-4 rounded-4" id="post">
            <div
              class="card-header d-flex justify-content-between p-2 rounded-top-4 bg-dark text-white small"
            >
              <span id="getName">~@${userName.value} </span> <span>${date} </span>
            </div>
            <div class="card-body background" style="background-image: url(${selectedImgPath}); color:${selectedTextColor}; ">
              <h5 class="card-title">${title.value}</h5>
              <p class="card-text">${description.value} </p>
            </div>
            <hr class="m-0" />
            <div class="count d-flex p-1 d-none" id="counter">
              <div class="col-4 small px-2 text-light-emphasis">
                <span id="likesCount">${like} </span><span class="like"> Like</span>
              </div>
              <div class="col-4 small text-light-emphasis">
                <span id="commentsCount">0 </span><span class="comment">Comment</span>
              </div>
              <div class="col-4 small px-3 text-light-emphasis">
                <span id="sharesCount">0 </span><span class="share">Share</span>
              </div>
            </div>
            <div
              class="card-footer d-flex justify-content-evenly p-0 rounded-bottom-4"
            >
              <button id="like" class="btn" onclick="likes()"> <i class="fa-regular fa-thumbs-up"></i> Like</button>
              <hr class="vr" />
              <button id="comment" class="btn" onclick="addComment()"><i class="fa-regular fa-comment"></i> Comment</button>
              <hr class="vr" />
              <button id="share" class="btn"><i class="fa-solid fa-share"></i> Share</button>
            </div>
          </div>

          <div class="card rounded-4 p-2 bg-dark my-2 d-none" id="addCommentBox">
           
          </div>

          <div id="commentBox" class="mb-2">

          </div>`;

        // userName.value = "";
        title.value = "";
        description.value = "";
        for (var i = 0; i < bg.length; i++) {
          bg[i].className = "bg-image";
        }
        document.getElementById("description").style.backgroundImage = `url()`;
        document.getElementById("title").style.backgroundImage = `url()`;
        selectedTextColor = document.getElementById("color").value = "#000000";
      } else {
        Swal.fire("Description is required!");
      }
    } else {
      Swal.fire("Title is required!");
    }
  } else {
    Swal.fire("User Name is required!");
  }
}

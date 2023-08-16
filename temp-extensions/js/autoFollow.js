var currentSite;
currentSite = window.location.href;

run(currentSite)

async function run(currentSite) {
  if (
    !currentSite.includes("tiktok.com") &&
    !currentSite.includes("instagram.com/")
  ) {
    alert("only works in tiktok or instagram");
  } else {
    if (currentSite.includes("tiktok.com")) {
      console.log("Like video on TikTok");
      var index = 0
      do {
        let likeButton = document.getElementsByClassName("tiktok-8seq2m-ButtonActionItem");
          if (likeButton) {
            console.log("button exists");
//            if(likeButton[0].querySelector("svg").getAttribute('fill') === "rgba(22, 24, 35, 1.0)") {
//              likeButton[0].click();
//              index++;
//            }
//              if(likeButton.getAttribute('aria-pressed') == false) {
                likeButton[0].click();
                index++;
//              }
          }
          let nextButton = document.getElementsByClassName(
            "tiktok-1s9jpf8-ButtonBasicButtonContainer-StyledVideoSwitch"
          );
          if (nextButton) {
          console.log("nextButton exists");
            nextButton[0].click();
          }
      } while(index < 50)

      let closeButton = document.getElementsByClassName(
        "tiktok-yg0pvs-ButtonBasicButtonContainer-StyledCloseIconContainer"
      );
      closeButton[0].click();
      alert("Liking finished");
    } else if (currentSite.includes("instagram.com")) {
      let followButton = document.getElementsByClassName(
        "sqdOP  L3NKy   y3zKF     "
      );
      if (followButton) {
        console.log("follow button exists");
        for (let i = 0; i < 10; i++) {
          console.log(followButton[i].textContent);
          if (followButton[i].textContent == "UnFollow") {
            console.log("wait");
            followButton[i].click();
            console.log("waited");
            await sleep(2000)
          } else {
            i--;
            continue;
          }
        }
      }
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/* let likeButton = document.getElementsByClassName(
      "tiktok-yfmapq-SpanIconWrapper e1bs7gq21"
    );
    if (likeButton) {
      console.log("button exists");
      likeButton[0].click();
    }
    let nextButton = document.getElementsByClassName(
      "tiktok-eeutzd-ButtonBasicButtonContainer-StyledVideoSwitchV2 e1xqvjno15"
    );
    if (nextButton) {
      nextButton[0].click();
    }


    let usernameInput = document.getElementsByClassName("tiktok-vzysje-InputElement ev30f212")
    usernameInput[0].removeAttribute("placeholder")
    usernameInput[0].setAttribute("value", "duet japan2u")
    
    let submitButton = document.querySelectorAll("button[type='submit']")
    if(submitButton){
        console.log("submit exists")
        submitButton[0].click()
        console.log("submit clciked")
    }
*/

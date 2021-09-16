// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"


export default {

  //   Header Details ---------------------
  name: "Rollins, Edward",
  headerTagline: [
    //Line 1 For Header
    "Progressing",
    //Line 2 For Header
    "Building",
    //Line 3 For Header
    "Learning",
  ],
  //   Header Paragraph
  headerParagraph:
  "My name is Rollins, Edward, thank you for visiting my site. I am a Computer Science graduate of 2018 and have been working with professional companies such as AllState for 3 years. Here you will get to know a bit about me. From hobbies to knowledge, this page contains it all",

  //Contact Email
  contactEmail: "errollins.jr@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One: Budget Tracker", //Project Title - Add Your Project Title Here
      para:
        "", 
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://user-images.githubusercontent.com/43302610/133486069-97ed815b-0410-4926-aa38-9a36d8e69a2e.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Errollinsjr/Track-Your-Budget",
    },
    {
      title: "Project Two: ShareSp@ce", 
      para:
        "", 
      
      imageSrc:
        "https://github.com/Errollinsjr/ShareSpaceProjectTwo/raw/main/public/images/Untitled_%20Aug%2011,%202021%205_58%20PM.gif",
      
      url: "https://github.com/Errollinsjr/ShareSpaceProjectTwo",
    },
    {
      title: "Project Three: Ape Data", 
      para:
        "", 
      
      imageSrc:
        "https://github.com/Errollinsjr/ApeData/raw/main/assets/ProjectPic.png",
      
      url: "https://github.com/Errollinsjr/ApeData",
    },
    {
      title: "Project Four: API Table", 
      para:
        "", 

      imageSrc:
        "https://user-images.githubusercontent.com/43302610/132970499-d725afe2-1633-4f1c-ae16-acf027a28c06.png",
      
      url: "https://github.com/Errollinsjr/Employee-Directory-React",
    },
    {
      title: "Project Five: Simple Password Generator", 
      para:
        "", 

      imageSrc:
        "https://user-images.githubusercontent.com/43302610/118163996-9c419a00-b3f0-11eb-85c9-e8051f6eedbb.png",
      
      url: "https://github.com/Errollinsjr/ASCII-table-password-genetator",
    },
    {
      title: "Six: GitHub For All Other Works", 
      para:
        "", 

      imageSrc:
        "https://i.ibb.co/RCHmRcs/Screen-Shot-2021-09-15-at-2-22-52-PM.png",
      
      url: "https://github.com/Errollinsjr?tab=repositories",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Born in Ohio, I spent half my life there as a child. My passion growing up was always video games & computers.",
  aboutParaTwo:
    "I moved through many states with my Ma, Michigan, Virginia, etc, and ultimately ended up in North Carolina.",
  aboutParaThree:
    "Here I attended WSSU for 4 years of Computer Science alongside four years in the National Guard. I've been working in Allstate's computer department for 3 years now while also graduating UNCC full-stack bootcamp.",
  aboutImage:
    "https://avatars.githubusercontent.com/u/43302610?v=4",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
      img: designIcon,
      para:
        "SQL",
    },
    {
      img: codeIcon,
      para:
        "Java",
    },
  ],
  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Conclusion",
  promotionPara:
    "Thanks for visiting my page, I hope that any further inquires you reach out to me!",
  // End Promotion Section -----------------

  //   Contact Section --------------
  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/errollinsjr" }
  ],

  // End Contact Section ---------------
}


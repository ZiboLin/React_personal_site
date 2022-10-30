import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import bigLap1 from "../img/bigLap1.png"
import bigLap2 from "../img/bigLap2.png"
import skydive from "../img/skydive.png"
import tibet from "../img/tibet.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

// export let colors = ["rgb(249, 189, 62)", "rgb(123, 132, 1)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Zibo",
    lastName: "Lin",
    initials: "ZL", 
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🏀',
            text: 'Love Basketball'
        },
        {
            emoji: '🌍',
            text: 'Used to be a Photographer, a Chef, a Baker and a Quant Trader'
        },
        {
            emoji: "💼",
            text: "Software Engineer at National Australia Bank"
        },
        {
            emoji: "📧",
            text: "zibolin9564@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        {
            link: "https://github.com/ZiboLin",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/zibolin88",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am Zibo. I'm a software engineer at Telstra. I studied CompSci at the University of Adelaide. I love doing challenge things and push my limit.",
   
    skills:
        {
            proficientWith: ['Java', 'Solidity', 'C++', 'Python', 'TypeScript', 'AWS','Linux', 'Splunk', 'ITIL:ServiceNow', 'AppDynamics'],
            exposedTo: ['Blockchain', 'Machine Learning', 'Quant trading']
        }
    ,
    hobbies: [
        {
            label: 'Drove 20,000kms alone in 40 days to travel the Big Lap of Australia',
            emoji: '🦘'
        },
        {
            label: 'Climbed the Mount Everest (only make it to 5,550m atitude though...)',
            emoji: '🏔️'
        },
        {
            label: 'Raced a 1000cc/200HP motorcycle and managed to get my knee down at corners!',
            emoji: '🏍️'
        },
        {
            label: 'Cooked for my family most of the time since I was 16 years old',
            emoji: '👨‍🍳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ],
    fun_things:[
        //Turns out that the URL to embed a YouTube video is https://www.youtube.com/embed/VIDEO_ID 
        {
            title: "The Big Lap of Australia part 1",
            YT_link: "https://www.youtube.com/embed/wTivsRBOVoA",
            image: bigLap1
        },
        {
            title: "The Big Lap of Australia part 2",
            YT_link: "https://www.youtube.com/embed/wTivsRBOVoA",
            image: bigLap2
        },
        {
            title: "Sky Diving",
            YT_link: "https://www.youtube.com/embed/PBPDfVD0X8o",
            image: skydive
        },
        {
            title: "Trip to Tibet",
            YT_link:"https://www.youtube.com/embed/PBPDfVD0X8o",
            image:tibet
        }
    ]
}
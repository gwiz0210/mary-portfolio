const siteMetadata = {
    title: `Mary Gansallo
    `,
    subTitle:`In permanent beta: designing, building, learning, repeat`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    ogImage: `/images/wall.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Product | UX Design | Engineering`,
    // description: `Hi there! My name is Mary. I am product manager passionate about design, engineering, UX and people. I've had the fortune of designing and building products used by millions of people around the world. After an amazing 3 years at Microsoft, I decided to start a proptech project in early 2021, acutely aware of the impact design has at scale in the real estate industry. My primary goal is to put a permanent dent in the housing affordability crisis.`,
    description: `Hi there! I am passionate about all things product, design, engineering, UX and people. I've worked at Microsoft almost 5 years and counting, and I've had the fortune of working with some amazing people to design and build products used by millions of people around the world. In addition to this, I have a ton of passion projects that I constantly dabble in related to urban development and real estate 🤗.`,
    about:
        // "I'm originally from the DC area and currently residing in Austin, TX after living in Seattle, WA for some years. Outside of work, I am Mentor to aspiring design engineers and entrpreneurs. I also enjoy playing soccer or flag football, traveling, hiking, investing in real estate, reading poetry, and listening to podcasts.",
        "I enjoy taking complex problems and turning them into simple, human-friendly, aesthetically pleasing experiences. I thrive in ambiguity. Outside of work, I am mentor, speaker, and educator to aspiring design engineers and entrepreneurs. I also enjoy playing soccer or flag football, traveling, hiking, kayaking, candle-making, investing in real estate, reading poetry, and listening to podcasts.",
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: false,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "PASSION PROJECTS",
            url: "/passions",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        // {
        //     name: "CONTACT",
        //     url: "/contact",
        // },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/marygans",
        },
    ],
    social: [
        // {
        //     name: "Facebook",
        //     icon: "/images/Facebook.svg",
        //     url: "#",
        // },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/marygansallo",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/_blueseashells/",
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UCs2rrV4dAOWK4PvXMWIXY7A",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
        mail: "mary.gansallo@gmail.com",
        phone: "000-000-0000",
        address: "1234 \nLocation \nLocation",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }

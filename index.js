const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");

// -prompt for username
// -prompt for color
inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
        },
        {
            type: "checkbox",
            message: "What is your favorite color?",
            name: "stack",
            choices: [
                "Green",
                "Blue",
                "Pink",
                "Red"
            ]
        },
        // -pull github info
    ]).then(function (input) {
        username = input.username;
        color = input.color;

        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function (res) {
            // console.log(res.data);

            //     -image
            let imageURL = res.data.avatar_url;
            //     -username
            let login = res.data.login;
            let name = res.data.name;
            //     -links to:
            //         -location (google maps)
            let location = res.data.location;
            //         -github profile
            let gitURL = res.data.html_url;
            //         -blog
            let blog = res.data.blog;
            //     -bio
            let bio = res.data.bio;
            //     -number of public repos
            let publicRepos = res.data.public_repos;
            //     -number of followers
            let followers = res.data.followers;
            //     -number of stars
            // let stars = res.data.
            //     -number of users following
            let following = res.data.following;
            
        });
    });


// -generate pdf


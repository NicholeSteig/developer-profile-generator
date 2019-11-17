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
            console.log(imageURL);

            //     -username
            let login = res.data.login;
            let name = res.data.name;
            console.log(login);
            console.log(name);

            //     -links to:
            //         -location (google maps)
            let location = res.data.location;
            console.log(location);

            //         -github profile
            let gitURL = res.data.html_url;
            console.log(gitURL);

            //         -blog
            let blog = res.data.blog;
            console.log(blog);

            //     -bio
            let bio = res.data.bio;
            console.log(bio);

            //     -number of public repos
            let repos = res.data.public_repos;
            console.log(repos);

            //     -number of followers
            let followers = res.data.followers;
            console.log(followers);

            //     -number of stars
            let stars = res.data.gists;

            //     -number of users following
            let following = res.data.following;
            console.log(following);
        });
    });


// -generate pdf


const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

const path = require("path");

const songsPath = path.join(__dirname, "songs.json");

if (!fs.existsSync(songsPath)) {
    throw new Error(`songs.json not found at ${songsPath}`);
}

const SONGS = JSON.parse(fs.readFileSync(songsPath, "utf8"));

async function run() {
    try {
        // Get GitHub Token
        const token = core.getInput("github-token");
        const octokit = github.getOctokit(token);
        const { context } = github;

        // Get PR title
        const prTitle = context.payload.pull_request.title.toLowerCase();
        core.info(`PR Title: ${prTitle}`);

        // Find matching song
        let selectedSong = SONGS["default"]; // Default song
        for (const keyword in SONGS) {
            if (prTitle.includes(keyword)) {
                selectedSong = SONGS[keyword];
                break;
            }
        }

        // Comment message
        const message = `🎶 **PR Jukebox** - ` + `🎧 [${selectedSong.title}] *"${selectedSong.title}"*`;

        // Post comment on PR
        await octokit.rest.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.payload.pull_request.number,
            body: message
        });

        core.info("Comment posted successfully!");
    } catch (error) {
        core.setFailed(`Error: ${error.message}`);
    }
}

// Run the function
run();

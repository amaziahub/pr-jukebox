# PR Jukebox 🎵
PR Jukebox is a fun GitHub Action that automatically comments with a song recommendation whenever someone opens a pull request (PR). The song is randomly selected based on keywords found in the PR title, and the action includes a link to the song on YouTube for easy listening!

--- 
## Features
* 🎶 Song Recommendations: Automatically posts a song recommendation in the PR based on its title.
* 🎧 YouTube Link: The comment includes a clickable link to listen to the song on YouTube.
* 🎤 Customizable Songs: Add your own songs to the songs.json file and match them to keywords in PR titles.

---
## Setup
To set up PR Jukebox in your GitHub repository, follow these steps:

1. Add pr-jukebox Action to Your Workflow
Create a new GitHub Action workflow file in your repository, or update an existing one. For example, create `.github/workflows/pr-jukebox.yml` with the following content:

```yml
name: PR Jukebox 🎵

on:
  pull_request:
    types: [opened, edited, reopened]

jobs:
  pr-jukebox:
    runs-on: ubuntu-latest
    permissions:
      pull-requests: write  # Allow commenting on PRs
    steps:
      - name: Run PR Jukebox
        uses: amaziahub/pr-jukebox@main
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
This configuration will trigger the action every time a PR is opened, edited, or reopened.

---
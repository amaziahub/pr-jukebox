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

### 1. Add pr-jukebox Action to Your Workflow
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

### 2. Add Your Song List (`songs.json`)
Create a songs.json file in the root of your repository with a list of songs. For example:
```json
{
  "default": {
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "link": "https://www.youtube.com/watch?v=fJ9rUzIMcZQ"
  },
  "love": {
    "title": "I Will Always Love You",
    "artist": "Whitney Houston",
    "link": "https://www.youtube.com/watch?v=IrZttcehxVY"
  },
  "rock": {
    "title": "Stairway to Heaven",
    "artist": "Led Zeppelin",
    "link": "https://www.youtube.com/watch?v=QkF3oxziUI4"
  }
}
```

---

### 3. Add the Action to Your Repository
Once the workflow and `songs.json` are in place, commit and push the changes to your repository.

```bash
git add .github/workflows/pr-jukebox.yml songs.json
git commit -m "Set up PR Jukebox Action"
git push origin main
```

---

### 4. Test It Out
Open a new PR in your repository and see PR Jukebox in action! It will comment with a song recommendation based on the PR title.

---

### Customizing the Song List
* **Add Songs**: You can add more songs to the songs.json file by including new keyword-song pairs.
* **Change Keywords**: The keywords are matched to the PR title, so feel free to update them to suit your needs.
* **Default Song**: If no match is found, the action will post a default song (e.g., "Bohemian Rhapsody").

---

# License
This project is licensed under the MIT License.


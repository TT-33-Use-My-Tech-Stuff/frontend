# GIT FLOW FOR BUILD WEEK

1. Clone down our 'frontend' repo WITHOUT FORKING.

2. Point your terminal to your local frontend folder.

3. Checkout a new branch. (Branches should be made for each new feature/subject you're working on. EX: git checkout -b navbar - for working on the Navbar component)

4. Once you've finished your feature or section, (Remembering to make commits along the way.) push your branch up to Github. (EX: git push origin -u navbar)

5. OPTIONAL: Make your pull request - Paul will manage merging pull requests into the main branch.)

6. In your terminal, checkout the main branch again. (git checkout main)

7. Delete your local copy of your old branch. (EX: git branch -d navbar)

8. REMEMBER: Pull down any new changes on the remote repo BEFORE starting work on a new feature/component. This takes two commands: (git fetch --all) & (git reset --hard origin/main)

9. Checkout a new branch and start work on your new feature! 

# QUICK NOTE ON STYLING

You'll see that every HTML element added starts real tiny - I've already applied a CSS reset to App.CSS in order to apply it across our app, this implements a font-size which changes the root font-size to a responsive 10px - add your styles to the CSS document or use Styled Components to size things to your liking.

This will allow you to size EVERYTHING with 'rem' if you like, keeping it all responsive. 

EXAMPLE: 2.4rem === 24px... but responsive!

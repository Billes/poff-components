# POFF-components

## Development

First time: clone the git repository to your local computer and run `npm install`.
The project uses Eslint and Prettier to format the code. If you use VSCode, the formatting of the code will be done when you save.

#### Create a new component

Before creating a new component, make sure you are in the main branch and pull the latest updates using the `git pull` command.

1. Pick a Jira activty, add "tilldela" to you, and set the status from NEW ISSUE to **IN PROGRESS**
2. Create a new branch, use the proposed git command found in Jira (it will then be connected to Jira)
3. Code...
4. Commit your progress (small commits are preferred). See [Commit information](#commit-information)
5. Create a PR (from Jira or GitHub), set Öystein or Nathanael as reviewers, set status to **CODE REVIEW** in jira
6. When the PR is aproved, merge it to main branch and delete your working branch in GitHub
7. Set status to **DONE** in Jira
8. Repeat...

#### Components

The components are built in their own folders in `/src/components/`.

##### The structure of a component:

**Folder name:** ComponentName

The folder should contain the following files

- `index.ts`
- `[componentName].types.ts`
- `[componentName].tsx`

Add an export of the component in `/src/components/index.ts`: (example: `export { default as ComponentName } from './ComponentName'`)

#### Storybook

The implementation of Storybook is done by adding a story to `/src/stories/`. The file should be named [component].stories.tsx

To run storybook use `npm run storybook`

## Commit information
We are using GitHub workflows to automate storybook building and publishing of new releases.
Therefore, it is important that we use the correct types of commits in order for the version management to be correct:

Commit message should contain one of the following strings:
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

e.g. `git commit -m "docs: Updated documentation for commits"`
or
`git commit -m "feat: Input component"`

## Production

When a component is finished and merged with main, an action is run that builds the Storybook and publishes it on the github page.

TODO: Skapa en action som kompilerar och publicerar komponenterna med hjälp av rollup (e.g. `npm run rollup -c`)

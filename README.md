# ✍ Darklang Documentation

[![Ceasefire Now](https://badge.techforpalestine.org/ceasefire-now)](https://techforpalestine.org/learn-more)

Welcome to the source for the [Darklang](https://darklang.com) documentation.

Contribute your improvements as a pull request, or report problems in an [issue](https://github.com/darklang/docs/issues/new/choose).

View the live docs on our documentation website: [https://darklang.com/docs](https://darklang.com/docs)

> **ℹ** The Darklang docs are built using [Docusaurus](https://docusaurus.io/). If you're
trying to do something beyond the scope of this README, please check out their docs.

## 📃 What's in this document

- [What's in this document](#-whats-in-this-document)
- [Get started in 5 Minutes](#-get-started-in-5-minutes)
- [Documentation structure](#-documentation-structure)
  - [Tutorials](#-tutorials)
  - [How-to guides](#-how-to-guides)
  - [Explanations](#-explanations)
  - [Reference material](#-reference-material)
- [Project structure](#-project-structure)
  - [Directory structure](#-directory-structure)
- [Editing content](#-editing-content)
  - [Editing an existing docs page](#-editing-an-existing-docs-page)
- [Adding content](#-adding-content)
  - [Adding a new docs page to an existing sidebar](#-adding-a-new-docs-page-to-an-existing-sidebar)
  - [Adding items to your site's top navigation bar](#-adding-items-to-your-sites-top-navigation-bar)
  - [Checking formatting](#-checking-formatting)
- [How CI auto-deploys](#-how-ci-auto-deploys)
- [Publishing changes manually](#-publishing-changes-manually)

## ▶ Get started in 5 minutes

To change these docs and test the results locally:

```sh
npm install
npm run-script start
```

## 📚 Documentation structure

Darklang's documentation is organized into four categories:

- tutorials
- how-to guides
- background information and discussion
- reference material

This follows the [Divio Documentation System](https://documentation.divio.com/).
Using this system, documentation in each category should not do the work of any
other category. For example, a tutorial should just step the user through doing
the work, and should not provide background expanations or other reference
material or discussion.

In the future, we intend to provide access to all this material in the app, with
context-sensitive reference materials available for all product and language
features, and interactive tutorials and how-to guides built-in.

### 🔵 Tutorials

- "teaching a child how to cook"
- tells them what to do
- does not explain why they are doing it
- include specifics and let them learn the generalities over time
- assume that "obvious" things are not known
- do not include choices
- should be bulletproof

### 🔵 How-to guides

- "recipes"
- should have very specific names such as "how to add a custom domain to Darklang"

### 🔵 Explanations

- background material to understand further
- provides context

### 🔵 Reference material

- just descriptions
- follows the structure of the project/language (e.g. each type is represented)

## 🗃 Project structure

There are two important branches:

- main
- gh-pages

The website is hosted from `gh-pages`, but everything there is auto-generated
from `main`. When we want to make changes, we create a new branch off `main`
with the format `username/my-change` and make as many commits as we need to.
Then, we create a new pull request from that branch with `main` as the base.
When the pull request is merged, CircleCI will automatically deploy the changes
from `main` to the website (it runs a script against the source files on `main`
and deploys the generated website to `gh-pages`).

### 🔵 Directory structure

The project file structure in `main` is

```text
docs/
  README.md -- this file

  .circleci/config.yml -- used to autodeploy via circle ci

  .gitignore -- ignores autogenerated files that shouldn't sync via git

  .spelling -- a place to add words not in a standard dictionary

  docs/ -- individual markdown documentation pages
    changelog.md
    getting-started.md
    ...

  src/
    css/
    plugins/ -- docusaurus plugins

  package.json -- helper scripts

  docusaurus.config.js -- core site configuration

  sidebars.json -- sidebar sections and pages

  static/
    img/ -- static images, for posts, and also favicon.ico
    slack-apps/
    tutorials/
    index.html
    CNAME
    .nojekyll

  node_modules/
```

## 📝 Editing content

### 🔵 Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click
[here](https://docusaurus.io/docs/en/navigation)

## 📝 Adding content

### 🔵 Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

2. Refer to that doc's ID in an existing sidebar in `sidebars.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click
[here](https://docusaurus.io/docs/2.x/api/themes/configuration#navbar-link)

### 🔵 Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the navbar items in the themeConfig
   section of `docusaurus.config.js`:

`docusaurus.config.js`

```javascript
{
  themeConfig: {
    navBar: {
      items: [
        {
          to: "/introduction", // url path to the landing page, 
          label: "Classic",
          position: "right",
        },
        {
          to: "/next/introduction",
          activeBasePath: "docs",
          label: "Next",
          position: "right",
        },  
        {
          href: 'https://github.com/darklang/docs',
          label: 'GitHub',
          position: 'right',
        },
        ...
      ]
    }
  }
  ...
}
```

For more information about the navigation bar, click
[here](https://docusaurus.io/docs/2.x/api/themes/configuration#navbar-link)

## 🔵 Checking formatting

We run some tools to ensure that the docs are consistently formatted and to find
common errors. If you run `npm run format` you should pass the linter.

`markdownlint` is run automatically in CI - you can run it locally as
`npm run lint`.

## 🚀 How CI auto-deploys

The `.circleci/config.yml` file describes the CircleCI configuration. It watches
for commits/merges into the `main` branch, runs a script to generate the
contents of `gh-pages`, and pushes `gh-pages` to GitHub.

## 🔧 Publishing changes manually

**NOTE: You shouldn't need to do this because CircleCI runs this
automatically.**

On the commandline (remember to replace `<YOUR USERNAME>` with your GitHub
username):

```sh
GIT_USER=<YOUR USERNAME> CURRENT_BRANCH=main npm deploy
```

If you're using ssh instead of https, replace `GIT_USER=<YOUR USERNAME>` with
`USE_SSH=true`.

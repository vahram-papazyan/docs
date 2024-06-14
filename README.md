# ✍ Darklang Documentation

[![Ceasefire Now](https://badge.techforpalestine.org/ceasefire-now)](https://techforpalestine.org/learn-more)

Welcome to the source for the [Darklang](https://darklang.com) documentation.

Contribute your improvements as a pull request or report problems in an [issue](https://github.com/darklang/docs/issues/new/choose).

View the live docs on our documentation website: [https://darklang.com/docs](https://darklang.com/docs)

> **(ℹ)** The Darklang docs are built using [Docusaurus](https://docusaurus.io/). If you're
trying to do something beyond the scope of this README, please check out their docs.

## 📃 What's in this document

- [Get started in 5 minutes](#-get-started-in-5-minutes)
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
- [How CI auto-deploys](#%EF%B8%8F-how-ci-auto-deploys)
- [Publishing changes manually](#-publishing-changes-manually)

## 🚀 Get started in 5 minutes

To change these docs and test the results locally:

```sh
npm install
npm run-script start
```

## 📚 Documentation structure

Darklang's documentation is organized into four categories:

- Tutorials
- How-to guides
- Background information and discussion
- Reference material

This follows the [Divio Documentation System](https://documentation.divio.com/).
Using this system, documentation in each category should not do the work of any
other category. For example, a tutorial should just step the user through doing
the work, and should not provide background explanations or other reference
material or discussion.

In the future, we intend to provide access to all this material in the app, with
context-sensitive reference materials available for all product and language
features, and interactive tutorials and how-to guides built-in.

### 🔵 Tutorials

- "Teaching a child how to cook."
- Tells them what to do.
- Does not explain why they are doing it.
- Include specifics and let them learn the generalities over time.
- Assume that "obvious" things are not known.
- Do not include choices.
- Should be bulletproof.

### 🔵 How-to guides

- "Recipes" showing how to do something.
- Should have very specific names, such as "How to add a custom domain to Darklang."

### 🔵 Explanations

- Background material to understand further.
- Provides context.

### 🔵 Reference material

- Just descriptions.
- Follows the structure of the project/language (e.g., each type is represented).

## 🗃 Project structure

There are two important branches:

- `main`
- `gh-pages`

The website is hosted from `gh-pages`, but everything there is auto-generated
from `main`. When we want to make changes, we create a new branch of `main`
with the format `username/my-change` and make as many commits as we need to.
Then, we create a new pull request from that branch with `main` as the base.
When the pull request is merged, CircleCI will automatically deploy the changes
from `main` to the website (it runs a script against the source files on `main`
and deploys the generated website to `gh-pages`).

### 🔵 Directory structure

The project file structure in `main` is:

```text
docs/
  README.md -- this file

  .circleci/config.yml -- used to auto-deploy via CircleCI

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

Editing content in Docusaurus is straightforward. Whether you want to make small tweaks or
significant changes, the following section will guide you through the process.

### 🔵 Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs to Be Edited
---

Edit me...
```

For more information about docs, read the [Docusaurus docs](https://docusaurus.io/docs/en/navigation).

## 📝 Adding content

The following section will walk you through the process of adding a new document
and integrating it into an existing sidebar.

### 🔵 Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`. For example, `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here...
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

For more information about adding new docs, get familiar with
[adding items to the sidebar](https://docusaurus.io/docs/sidebar/items).

### 🔵 Adding items to your site's top navigation bar

1. Add links to docs, custom pages, or external links by editing the navbar items in the `themeConfig`
section of `docusaurus.config.js`:

```javascript
{
  themeConfig: {
    navBar: {
      items: [
        {
          to: "/introduction", // The URL path to the landing page, 
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

For more information about the navigation bar, see the corresponding
[Docusaurus guide](https://docusaurus.io/docs/2.x/api/themes/configuration#navbar-link).

## 🔵 Checking formatting

We run some tools to ensure that the docs are consistently formatted and to find
common errors. If you run `npm run format` you should pass the linter.

`markdownlint` is run automatically in CI - you can run it locally as
`npm run lint`.

## ⚙️ How CI auto-deploys

The `.circleci/config.yml` file describes the CircleCI configuration. It watches
for commits/merges into the `main` branch, runs a script to generate the
contents of `gh-pages`, and pushes `gh-pages` to GitHub.

## 🔧 Publishing changes manually

> **(ℹ)** You shouldn't need to do this because CircleCI runs this
automatically.

On the command-line (remember to replace `<YOUR USERNAME>` with your GitHub
username):

```sh
GIT_USER=<YOUR USERNAME> CURRENT_BRANCH=main npm deploy
```

If you're using SSH instead of HTTPS, replace `GIT_USER=<YOUR USERNAME>` with
`USE_SSH=true`.

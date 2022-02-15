---
slug: /contributors/git
title: Git and GitHub
sidebar_position: 1
---

## Overview

As a contributor to Livepeer content, you will interact with multiple tools and processes. You'll work in parallel with other contributors on the same project, potentially the exact same content, even at the same time. This is all enabled through Git and GitHub software.

Git is an open-source version control system. It facilitates this type of project collaboration through *distributed version control* of files that live in *repositories*. In essence, Git makes it possible to integrate streams of work done by multiple contributors over time, for a given repository.

GitHub is a web-based hosting service for Git repositories, such as those used to store [docs.livepeer.org](https://docs.livepeer.org) content. GitHub hosts the main repository, from which contributors can make copies for their own work.

## Git

Git uses a tiered structure to store and manage content for a project:

- *Repository*: Also known as a *repo*, this is the highest unit of storage. A repository contains one or more branches.
- *Branch*: A unit of storage that contains the files and  folders that make up a project's content set. Branches separate streams of work (typically referred to as versions). Contributions are always made and scoped to a specific branch. All repositories contain a default branch (typically named "main") and one or more branches that will eventually be merged back into the default branch. The default branch serves as the current version and "single source of truth" for the project. It's the parent from which all other branches in the repository are created.

You may interact with Git to update and manipulate repositories at both the local and GitHub levels:

- Locally through tools such as the Git `bash` console, which supports Git commands for managing local repositories and communicating with GitHub repositories.
- Via [www.github.com](https://www.github.com), which integrates Git to manage the reconciliation of contributions that flow back into the main repository.


## Pull requests
A pull request provides a convenient way for you to propose a set of changes that will be applied to the main branch. The changes are stored in your branch, so we can see the impact of merging them into the default branch. A pull request also serves as a mechanism to provide you with feedback and to resolve potential issues or questions before the changes are merged into the main branch.

To learn more about how pull requests work and how to create them, please refer to [Github's documentation](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)


## Additional Resources
- [How to contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub's Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub's "Hello World" tutorial](https://guides.github.com/activities/hello-world/)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Commit message style guidelines](https://commit.style/)
- [No-nonsense Git reference](https://rogerdudler.github.io/git-guide/)
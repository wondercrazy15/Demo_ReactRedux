# Contributing

This document describes the steps to contribute.

1. We do not commit or push directly to `dev`/`staging`/`master`
and each task must be in its own branch named: `(Card-<Trello-Card-Id>)`. For example:

```
git checkout dev
git pull origin dev
git checkout -b Card-1
```

For branch name: `(Card-1)`

`Trello-Card-Id` can be found by going to Trello card detail -> "Share and More" -> Bottom left of the popup has a label "Card #<number>"

2. Each commit must be in a format of `(<Trello-Card-Id>) <Description>`

`Description` should consisely describe the purpose of the commit. It **cannot** be vague like "Updating user data" but it should be something like "Removing sample user and integrating API"

For example:

```
git branch # verify you're on `Card-1` branch and not `dev`
git add path/to/file
git commit -m "(Card-1) Using correct API selector for user.name"
git push origin Card-1
```

3. Once feature is complete, please make sure all the tests and eslint passes. And then, create a `Pull Request` to the main branch. For example, if it's in development,
the `Pull Request` should be created from `(Card-1)` into `dev`.

4. After creating a `Pull Request`, you must do the following:

  - Add the `Pull Request` link into the Trello card's comments

  - Add the Trello's card link into the `Pull Request`'s description.

5. In the `Pull Request` description, provide copy the below points and answer them accordingly:

  - `Purpose`: What the purpose of this feature is/How this feature adds value to the business

  - `Review Points`: Describe any business logic that needs to be taken look into or that you were unsure of

  - `What can be improved?`: Anything the developer thought that would add value (i.e. better business value, more expedite development process)
  (i.e. "The design needs to cover all cases to ensure the requirements are clear", "Maybe when a user clicks button A it should also do save that data automatically", "The replies to questions took 3 hours which blocked me.")

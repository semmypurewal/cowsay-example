Run this as follows:

```
$ node main.mjs
 _____________
< Hello, Alice! >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

To complete the examples, clone this repository.

```
$ git clone whatever
```

Then branch off of main since we're going to rewrite history.

```
$ git checkout -b rebase-examples
```

Now suppose I did a code review. Here's some feedback.

1. Generating a random integer between 1..n is something I could use
in another place. Split that functionality out of `randomElt(list)` as
a separate `randUpTo(num)` function.

2. A better name for `createText` would be `createMessage`

3. Give the `temp` variable a more descriptive name.

4. You've added the `node_modules` directory to the repo. It should be
in a `.gitignore` file

5. The cowsay dependency was added /after/ it was used in the code. Switch those.


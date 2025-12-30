---
icon: lucide/regex
---

# regex

Regex, or regular expression, is a series of characters that are used for pattern matching in text. I have mainly needed to use this in some [Advent of Code](programming_challenges/advent_of_code.md) programming challenges, where I need to extract specific bits of data from strings, e.g., extracting the data between `[]` from `abba[mnop]qrst`. However, I keep finding myself needing to look up references for the expressions. So, I want to learn how to form regex expressions myself.

There are cheatsheets[^1],[^2] online, but I am interested in doing some kind of interactive course[^3] and creating my own cheatsheet/documentation for it.

## Character classes

| Task name | Task | Regex expression |
|---|---|---|
| Any character | Selecting a character (including special characters and spaces) | Use `.`, `/./g` |
| Character class | Selecting words that has one character which can be different | Use `[]` with the choices, `/b[aeiou]r/g` |
| Negated character class | Selecting words except certain characters | Use `^`, `/b[^eo]r/g` |
| Character range | Selecting letter ranges | Use `[]` and `-`, `/[e-o]/g` |
| Digit range | Selecting number ranges | Use `[]` and `-`, `/[3-6]/g` |
| Word character class | Selecting letters, numbers, and underscores | Use `\w`[^7], `/\w/g` |
| Non-word character class | Selecting all but letters, numbers, and underscores | Use `\W`, `/\W/g` |
| Digit character class | Selecting only numbers | Use `\d`, `/\d/g` |
| Non-digit character class | Selecting all but numbers | Use `\D`, `/\D/g` |
| Whitespace character class | Selecting only space characters | Use `\s`, `/\s/g` |
| Non-whitespace character class | Selecting all but space characters | Use `\S`, `/\S/g` |
| Escaping metacharacters | Selecting special characters | Use `\` to escape them, `/(\*|\.)/g` |

## Quantifiers

| Task name | Task | Regex expression |
|---|---|---|
| Zero-or-more quantifier (Kleene star) | A character does not need to be matched or can be matched many times | Use `*` after the character, `/be*r/g` |
| One-or-more quantifier | A character that can occur one or more times | Use `+` after the character, `/be+r/g` |
| Optional quantifier | A character can be optional | Use `?` after the character, `/colou?r/g` |
| Exact quantifier | Matching a character that appears `n` times | Use `{n}` after the character, `/be{2}r/g` |
| Minimum quantifier | Matching a character that appears at least `n` times in a row | Use `{n,}` after the character, `/be{3,}r/g` |
| Range quantifier | Matching a character that appears in an inclusive range `x,y` | Use `{x,y}` after the character, `/be{1,3}r/g` |
| Lazy (non-greedy) matching | Stop after first matching | Use `?`, `/.*?r/` |

## Alternation

| Task name | Task | Regex expression |
|---|---|---|
| Alternation | An expression can be in different expressions | Use `|`, `/(c|r)at|dog/g` |

## Anchors

| Task name | Task | Regex expression |
|---|---|---|
| Start-of-line anchor | Selecting characters at the start of the line | Use `^` before the term, `/^[0-9]/gm` |
| End-of-line anchor | Selecting characters at the end of the line | Use `$` after the term, `/html$/gm` |

## Lookarounds

| Task name | Task | Regex expression |
|---|---|---|
| Positive lookahead | Selecting text if it has a certain string after it | Use `(?=)`, where the certain string comes after `=`, `/\d+(?=PM)/g` |
| Negative lookahead | Selecting text if it does not have a certain string after it | Use `(?! )`, where the certain string comes after `!`, `/\d+(?!PM)/g` |
| Positive lookbehind | Selecting text if it has a certain string before it | Use `(?<=)`, where the certain string comes after `=`, `/(?<=\$)\d+/g` |
| Negative lookbehind | Selecting text if it does not have a certain string before it | Use `(?<!)`, where the certain string comes after `!`, `/(?<!\$)\d+/g` |

## Groups and references

| Task name | Task | Regex expression |
|---|---|---|
| Capturing group | Grouping expressions | Use `()`, `/(haa)/g` |
| Backreference | Referencing a group | Use `\n`, where `n` is an integer labelling/referencing a group, `/(ha)-\1,(haa)-\2/g` |
| Non-capturing group | Grouping an expression and ensure it is not captured by references | Use `(?:)`, `/(?:ha)-ha,(haa)-\1/g` |

## Flags

| Task name | Task | Regex expression |
|---|---|---|
| Global matching | Selecting all matches | Use `g`, `/\w+\.com/g` |
| Multiline matching | Selecting all matches across different lines | Use `m`, `/\w+\.com$/gm` |
| Case-insensitive matching | Removing case-sensitivity | Use `i`, `/\w+\.com$/gmi` |

## References

[^1]: [https://www.rexegg.com/regex-quickstart.php](https://www.rexegg.com/regex-quickstart.php){:target="_blank"}
[^2]: [https://regexlearn.com/cheatsheet](https://regexlearn.com/cheatsheet){:target="_blank"}
[^3]: [https://regexlearn.com/](https://regexlearn.com/){:target="_blank"}
[^4]: Where `b` and `g` are the fixed characters we want to search combinations of, e.g., `bar, ber, etc.`
[^5]: `|` is different to charset `[abc]`, since the latter operate at the character level, and alternatives are on the expression level.
[^6]: Regex does greedy matching by default, i.e., matching as long as possible.
[^7]: `\w` is equivalent to the character range `[A-Za-z0-9_]`. 
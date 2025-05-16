# Changelog Rules

These rules define the format and conventions for maintaining the CHANGELOG.md file in the AI Reservation System API project.

## Basic Principles

- The changelog follows the [Keep a Changelog](https://keepachangelog.com) format.
- All notable changes to the project must be documented in the CHANGELOG.md file.
- The changelog is meant for humans, not machines, so it should be readable and understandable.
- Each version should have a clear release date in YYYY-MM-DD format.
- Versions should follow [Semantic Versioning](https://semver.org/).

## Structure

- The file must start with a "# Changelog" heading.
- Include a brief description of the project: "All notable changes to `AI Reservation System API` will be documented in this file."
- Maintain an "Unreleased" section at the top that links to a comparison between the latest release and the develop branch.
- List versions in reverse chronological order (newest at the top).
- Each version should have its own section with a link to the release tag and the release date.

## Entry Format

- Each change entry must start with a type prefix followed by a colon and a space.
- Valid type prefixes include:
  - `feat`: New features
  - `fix`: Bug fixes
  - `docs`: Documentation changes
  - `style`: Changes that do not affect the meaning of the code
  - `refactor`: Code changes that neither fix a bug nor add a feature
  - `perf`: Performance improvements
  - `test`: Adding or correcting tests
  - `build`: Changes to the build system or dependencies
  - `ci`: Changes to CI configuration files and scripts
  - `chore`: Other changes that don't modify src or test files
- After the type prefix, provide a concise description of the change.
- Include attribution to the author using the format: `by [@username](profile-link)`.
- Include a reference to the commit using the format: `in [#commit-hash](commit-link)`.

## Example Entry

```markdown
- feat: add user authentication system by [@username](https://gitlab.skyshi.io/username) in [#commit-hash](https://gitlab.skyshi.io/ai-reservation-system/reservation-system-api/commit/commit-hash).
```

## Maintenance

- When releasing a new version, move all entries from the "Unreleased" section to a new version section.
- Update the "Unreleased" comparison link to point to the new latest release.
- Always end each entry with a period.
- Maintain consistent formatting and indentation throughout the file.
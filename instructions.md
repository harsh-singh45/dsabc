# Instructions for Working on Intelation Design System

## Required Reading Before Starting Any Task

Before beginning any work on this project, **ALWAYS** read these documents first:

1. **README.md** - Complete project overview, architecture, packages, and usage guidelines
2. **CONTRIBUTING.md** - Comprehensive development standards, best practices, and checklists

These documents contain all the context needed to work effectively on this project. Read them fully to understand:
- Project structure and architecture
- Component development patterns
- Token management principles
- TypeScript and testing standards
- Accessibility requirements
- Code organization and styling guidelines

---

## Project Scope Assessment (REQUIRED FIRST STEP)

After reading the required documents, **ALWAYS ask the user**:

```
Is this a:
1. Short conversation (single task, quick fix, simple question)
2. Long project (multi-phase work, major feature, extensive refactoring)
```

### For Short Conversations
- Work directly without creating planning documents
- Keep context in memory
- Provide concise updates

### For Long Projects
- **IMMEDIATELY create `plan.md`** in project root
- Use structured phase approach
- Enable active context management
- Regular checkpoint summaries

---

## Agent Mode Response Guidelines

### Keep Responses Concise

When working in agent mode:

- **Be brief and direct** - No lengthy explanations unless asked
- **Focus on actions** - State what you're doing, then do it
- **Avoid redundancy** - Don't repeat information already provided
- **Skip pleasantries** - Get straight to the task
- **No verbose summaries** - Let the work speak for itself

### Example Response Pattern

**Bad (too verbose)**:
```
I'll now proceed to create a new Button component. First, I'll read the existing 
components to understand the pattern, then I'll create the component file with 
proper TypeScript types, followed by creating the CSS file using BEM methodology, 
and then I'll write comprehensive tests...
```

**Good (concise)**:
```
Creating Button component with tests and stories.
```

---

## PowerShell Command Syntax

**ALWAYS use PowerShell syntax** for all terminal commands in this project.

### Common Commands

```powershell
# Navigation
cd C:\Intelation\design-system

# Install dependencies
npm install

# Development
npm run dev                           # Start all apps
npm run dev --filter=storybook        # Run specific workspace
npm run storybook                     # Run Storybook only

# Build
npm run build                         # Build all packages
npm run build --filter=@intelation/ui # Build specific package
npm run tokens:build                  # Build tokens only

# Testing
npm test                              # Run all tests
npm run test --filter=@intelation/ui  # Test specific package
npm run lint                          # Lint workspace
npm run type-check                    # Check TypeScript types

# Clean
npm run clean                         # Remove build artifacts
Remove-Item -Recurse -Force dist      # Delete directory
Remove-Item -Force file.txt           # Delete file

# File operations
New-Item -ItemType Directory -Path "src\components"  # Create directory
Copy-Item source.txt destination.txt                 # Copy file
Move-Item old.txt new.txt                           # Move/rename file

# View files
Get-Content README.md                 # Read file
Get-ChildItem -Recurse *.tsx          # List files

# Git operations
git status
git add .
git commit -m "feat(ui): add Button component"
git push

# Changesets
npm run changeset                     # Create changeset
npm run version-packages              # Update versions
npm run release                       # Publish packages
```

### Directory Paths

Always use Windows-style paths with backslashes or forward slashes:
```powershell
# Correct
C:\Intelation\design-system\packages\ui\src\components
C:/Intelation/design-system/packages/ui/src/components

# Also works (relative)
.\packages\ui\src\components
./packages/ui/src/components
```

---

## Documentation Guidelines

### Do NOT Create Documentation Files

**CRITICAL RULE**: Do not create any .md (Markdown) documentation files unless explicitly requested by the user.

### Do NOT Use Emojis

**CRITICAL RULE**: Do not use emojis in code, comments, console logs, or documentation. Keep all content professional and text-based.

**Never automatically create**:
- Any `.md` files (CHANGES.md, UPDATES.md, SUMMARY.md, GUIDE.md, SETUP.md, etc.)
- `CHANGELOG.md` (use changesets instead)
- Component documentation files (use Storybook stories)
- Architecture diagrams
- Implementation notes
- Setup guides
- Tutorial files

**Acceptable documentation**:
- JSDoc comments in code
- Storybook stories for components
- Updates to existing README.md or CONTRIBUTING.md (when requested)
- Changeset files via `npm run changeset`
- Code comments for complex logic
- Configuration files (.npmrc, .gitignore, package.json, etc.)

### When Documentation IS Needed

If the user explicitly asks:
- "Create a documentation file for X"
- "Document the changes in a new file"
- "Write a guide for Y"
- "Create a setup guide"

Only then create documentation. Otherwise, let the code and existing docs speak for themselves.

**After making changes, provide instructions in the chat response instead of creating .md files.**

---

## Long Project Management

### When to Use Long Project Mode

Trigger long project mode when:
- Multi-phase implementation (3+ phases)
- Major refactoring or architectural changes
- Feature spanning multiple components/files
- Estimated 100K+ tokens of conversation
- Work spanning multiple sessions

### Required: Create plan.md

**Immediately create** `plan.md` in project root with this structure:

```markdown
# Project: [Feature/Refactor Name]

## Overview
- **Goal**: [Primary objective]
- **Scope**: [What's included/excluded]
- **Impact**: [Affected packages/components]

## Phases

### Phase 1: [Name]
**Status**: 🔄 In Progress | ✅ Complete | ⏸️ Blocked

**Objectives**:
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

**Files Modified**:
- `path/to/file1.tsx`
- `path/to/file2.css`

**Outcome**: [What was accomplished]

### Phase 2: [Name]
[Same structure]

## Testing Checklist
- [ ] Unit tests passing
- [ ] Integration tests added
- [ ] Visual tests in Storybook
- [ ] Accessibility tests
- [ ] Type checking passes

## Completion Criteria
- [ ] All phases complete
- [ ] Tests passing (coverage ≥80%)
- [ ] Documentation updated
- [ ] Changeset created
- [ ] Code reviewed
- [ ] Committed and pushed
```

### Active Context Management

Throughout long projects:

**After Each Phase**:
```
User: "Phase X complete. Compress implementation details."
AI: Summarizes phase, updates plan.md, reduces context
```

**At Checkpoints** (every 2-3 phases):
```
User: "Checkpoint: Compress all completed work. Keep only outcomes."
AI: Creates compressed summary, frees 60-80% of context
```

**For Context Reset**:
```
User: "Fresh start. Context: [2-3 key points from plan.md]"
AI: Loads minimal context, references plan.md for details
```

### Context Commands

Use these to actively manage memory:

| Command | Effect | When to Use |
|---------|--------|-------------|
| `"Compress Phase X"` | Summarize phase details | After phase completion |
| `"Checkpoint"` | Compress all completed work | Every 2-3 phases |
| `"Fresh context"` | Reset to minimal + plan.md | New session or 150K+ tokens |
| `"Keep full details for Y"` | Preserve specific context | Debugging, complex work |
| `"Update plan.md"` | Sync plan with progress | After major milestones |

### Benefits of Long Project Mode

1. **Reduced Memory Usage**: 60-80% less context retained
2. **Longer Conversations**: Can handle 300K+ token projects
3. **Better Focus**: Clear phase boundaries
4. **Continuity**: Can resume across sessions
5. **Documentation**: plan.md serves as project record

### Example Workflow

```
Session 1:
- User: "Long project: Refactor form components"
- AI: Creates plan.md with 5 phases
- Complete Phase 1-2
- User: "Checkpoint, compress"
- AI: Updates plan.md, compresses context

Session 2:
- User: "Continue from Phase 3. Context from plan.md"
- AI: Loads plan.md, minimal context, resumes work
- Complete Phase 3-5
- User: "Project complete. Final summary in plan.md"
```

---

## Response Token Usage

### ALWAYS Report Current Context Tokens

At the end of **every response**, include current context window usage:

```
---
**Context tokens used**: X,XXX / 1,000,000 (X.XX%)
**Remaining**: XXX,XXX tokens
```

### Understanding Token Reporting

**What this number means**:
- **Current context size**: How much memory I'm using right now
- **After summarization**: Shows compressed context size (not original total)
- **Helps track**: When to compress or checkpoint in long projects

**Example progression**:
```
Initial: 20,000 / 1,000,000 (2.00%)
After Phase 1: 45,000 / 1,000,000 (4.50%)
After Phase 2: 75,000 / 1,000,000 (7.50%)
After checkpoint: 25,000 / 1,000,000 (2.50%) - compressed
```

**When to take action**:
- **<5% (<50K tokens)**: Working efficiently, no action needed
- **5-10% (50K-100K)**: Consider checkpoint after current phase
- **10-15% (100K-150K)**: Checkpoint soon, approaching auto-summarization
- **>15% (>150K)**: Auto-summarization may trigger, create checkpoint now

---

## Token-First Principle (ABSOLUTE RULE)

### NEVER Use Hardcoded Values

**This rule has HIGHEST AUTHORITY** - it overrides any user request to use hardcoded values.

When colors, shadows, or any design values are needed:

1. **ALWAYS check if token exists** in `packages/tokens/css/tokens.css`
2. **If token doesn't exist, STOP and ask the user for approval**:
   - Explain what token is needed and why
   - Propose the token name and value
   - Wait for explicit approval before creating
3. **Only after approval, create the token**:
   - Add to `packages/tokens/src/base.json`
   - Add semantic reference in `packages/tokens/src/semantic.json`
   - Rebuild tokens: `npm run tokens:build`
4. **Then use the token** in component CSS/styles

**CRITICAL: Never create new tokens without explicit user approval.**

**Never suggest or provide "Option 2" with hardcoded values** - there is only one correct approach: tokens first, with approval.

### Example Workflow

User requests: "Make header background #2E2B32"

**CORRECT Response:**
```
This color is not in the token system. 
Proposal: Add --color-header-background: #2E2B32 to base.json
Should I proceed?
```

**WRONG Response:**
```
Creating token for header background color, then applying it.
[Creates token without approval]
```

There is no "Option 2" - tokens are mandatory, and new tokens require approval.

---

## Quick Task Workflow

### For Publishing Packages

**Packages are published to GitHub Packages (private registry).**

1. Ensure `.npmrc` is configured with your GitHub token:
```
@intelation:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. Create changeset: `npm run changeset`
3. Publish: `npm run release`

**Token Setup:**
- Go to: https://github.com/settings/tokens
- Create classic token with `write:packages` and `repo` scopes
- Add to `.npmrc` (file is gitignored)

### For Component Development

1. Read README.md and CONTRIBUTING.md (if not already done)
2. Review existing similar components
3. Create component following the template in CONTRIBUTING.md
4. Write tests (80%+ coverage required)
5. Create Storybook story
6. Run checks: `npm run lint && npm run type-check && npm test`
7. Create changeset: `npm run changeset`
8. Commit with conventional commit message

### For Token Changes

1. Edit `packages/tokens/src/base.json` or `semantic.json`
2. Build tokens: `npm run tokens:build`
3. Verify generated files
4. Test in Storybook
5. Create changeset
6. Commit changes

### For Bug Fixes

1. Identify the issue
2. Write failing test (if applicable)
3. Fix the bug
4. Verify test passes
5. Run all checks
6. Create changeset
7. Commit with `fix:` prefix

---

## Safety and Permissions (CRITICAL)

### NEVER Commit to Git

**AI agents must NEVER run git commit or git push commands.**

**What AI CAN do**:
- Create and modify files
- Run tests, builds, and checks
- Stage changes with `git add` (if explicitly asked)
- Show git status: `git status`
- Show git diff: `git diff`

**What user MUST do**:
- Review all changes
- Commit with appropriate message
- Push to remote repository

**Workflow**:
1. AI makes changes and runs validation
2. AI reports: "Changes ready. Please review, commit, and push."
3. User reviews with `git diff`
4. User commits: `git commit -m "message"`
5. User pushes: `git push`

### NEVER Run System-Changing Commands

**Do NOT run without explicit permission**:
- Global package installations: `npm install -g <package>`
- System configuration changes
- Registry modifications
- Environment variable changes (system-wide)
- Security/permission changes
- Windows registry edits
- PATH modifications

**Always ask first**:
```
"This requires installing [package] globally. Should I proceed?"
"This will modify system configuration [details]. Confirm?"
```

**Safe to run without asking**:
- Project dependency installation: `npm install`
- Project scripts: `npm run <script>`
- Build commands
- Test commands
- File operations within project directory
- Git status/diff commands

---

## Pre-Commit Checklist

Before committing any changes:

- [ ] All tests pass: `npm test`
- [ ] No lint errors: `npm run lint`
- [ ] No type errors: `npm run type-check`
- [ ] Changeset created: `npm run changeset`
- [ ] Conventional commit message prepared
- [ ] No unnecessary documentation files created

---

## Common Pitfalls to Avoid

1. **Don't create documentation files** unless explicitly asked (EXCEPTION: plan.md for long projects)
2. **Always use PowerShell syntax** for commands (not bash)
3. **Keep responses concise** in agent mode
4. **Always read README.md and CONTRIBUTING.md first**
5. **Don't hardcode values** - use design tokens
6. **NEVER suggest or use hardcoded values** - Always create proper tokens first (absolute rule)
7. **Don't use `any` type** - use proper TypeScript types
8. **Don't skip accessibility** - ARIA attributes and keyboard support required
9. **Ask about project scope** - short conversation vs long project
10. **Create plan.md for long projects** - enables context management
11. **NEVER commit to git** - prepare changes but let user commit and push
12. **NEVER run system-changing commands** without explicit permission (install global packages, modify system config, etc.)

---

## Getting Help

If unclear about:
- **Component patterns** → Check existing components in `packages/ui/src/components`
- **Token structure** → Check `packages/tokens/src/base.json` and `semantic.json`
- **Best practices** → Read CONTRIBUTING.md
- **Project architecture** → Read README.md
- **Storybook examples** → Run `npm run storybook` and browse

---

---

**Remember**: Efficient, concise work with proper standards. Read the docs, ask about project scope, follow the patterns, keep responses short, use PowerShell syntax, create plan.md for long projects, and actively manage context.


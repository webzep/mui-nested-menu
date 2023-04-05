// See example: https://github.com/leoforfree/cz-customizable/blob/HEAD/cz-config-EXAMPLE.js
module.exports = {
    allowBreakingChanges: ['feat', 'fix'],
    allowCustomScopes: false,
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    messages: {
        confirmCommit: 'Commit?',
        subject: 'Write a short description of the change:\n',
        type: "Select the type of change that you're committing:",
    },
    scopes: [
        { name: 'common' },
        { name: 'docs' },
        { name: 'global' },
        { name: 'mui-nested-menu' },
        { name: 'ui' },
    ],
    skipQuestions: ['customScope', 'body', 'breaking', 'footer'],
    subjectLimit: 100,
    subjectSeparator: ': ',
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
    types: [
        {
            name: 'feat:     🌟 A new feature',
            value: '🌟 feat',
        },
        {
            name: 'fix:      🐞 A bug fix',
            value: '🐞 fix',
        },
        {
            name: 'docs:     📚 Documentation only changes',
            value: '📚 docs',
        },
        {
            name: 'style:    💅 Changes that do not affect the meaning of the code (eg. formatting)',
            value: '💅 style',
        },
        {
            name: 'refactor: 🎨 A code change that neither fixes a bug nor adds a feature',
            value: '🎨 refactor',
        },
        {
            name: 'test:     🧪 Adding missing tests or correcting existing tests',
            value: '🧪 test',
        },
        {
            name: 'build:    🛠️  Changes that affect the build system or external dependencies',
            value: '🛠️ build',
        },
        {
            name: "chore:    🔩 Other changes that don't modify src or test files",
            value: '🔩 chore',
        },
    ],
    usePreparedCommit: false,
};

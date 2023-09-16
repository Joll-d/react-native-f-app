const lightTheme = {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
};

const darkTheme = {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
};

type colorSchemesDictionary = {
    [key: string]: any;
};

export const colorSchemes: colorSchemesDictionary = {
    'dark': {darkTheme},
    'light': {lightTheme},
};

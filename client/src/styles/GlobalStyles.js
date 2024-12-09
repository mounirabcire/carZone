import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    /* colors --black mode */
    /* --blue-0: #273542;
    --blue-5: #283847; 
    --blue-10: #124e7f; 
    --blue-15: #2173b6;  
    --blue-20: #1f83d3;  
    --blue-25: #2185d5; 
    --blue-30: #2878bc; 
    --blue-35: #72c2ff; 
    --blue-40: #c6e9ff; 

    -gray-0: #333333;
    --gray-5: #393939; 
    --gray-10: #444444; 
    --gray-15: #595959;  
    --gray-20: #6f6f6f;  
    --gray-25: #7a7a7a; 
    --gray-30: #848484; 
    --gray-35: #b8b8b8; 
    --gray-40: #eeeeee;  */

    /* colors --light mode */
    --blue-0: #EEF0F2;
    --blue-5: #e7ecf0; /* background */
    --blue-10: #caddf0; /* intractive componenets*/
    --blue-15: #88b3de; /* borders & separators*/
    --blue-20: #609cd5; /* borders & separators*/
    --blue-25: #2185d5; /* solid */
    --blue-30: #0778c7; /* solid */
    --blue-35: #0065b2; /*  text */
    --blue-40: #0d3659; /* text */

    --gray-0: #f0f0f0;
    --gray-5: #ebebeb; /* background */
    --gray-10: #d9d9d9; /* intractive componenets*/
    --gray-15: #c8c8c8; /* borders & separators*/
    --gray-20: #a9a9a9; /* borders & separators*/
    --gray-25: #7c7c7c; /* solid */
    --gray-30: #717171; /* solid */
    --gray-35: #545454; /*  text */
    --gray-40: #202020; /* text */

    --success: #4BB543;
    --error: #D32F2F;
    --warning: #FFB100;
    --warning-text: #333;

    /* sizes */
    --font-size-6xxl: 96px;
    --font-size-5xl: 72px;
    --font-size-4xl: 60px;
    --font-size-3xl: 48.137px;
    --font-size-xxl: 38.6196px;
    --font-size-xl: 30.9839px;
    --font-size-lg: 24.8579px;
    --font-size-md: 19.9431px;
    --font-size-base: 16px;
    --font-size-tiny: 12.8365px;
    --font-size-micro: 10px;
    --font-size-nano: 8px;

    /* border */
    --border-gray-3: 3px solid var(--gray-15);
    --border-gray-2: 2px solid var(--gray-15);
    --border-gray-1: 1px solid var(--gray-15);

    /* border-radius */
    --border-radius-small: 4px;
    --border-radius-medium: 8px;
    --border-radius-large: 16px;
    --border-radius-xl: 24px;
    --border-radius-xxl: 50px;
    --border-radius-full: 100%;

    /* spacing */
    --spacing-0: 0px;
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 20px;
    --spacing-6: 24px;
    --spacing-7: 28px;
    --spacing-8: 32px;
    --spacing-9: 36px;
    --spacing-10: 40px;
    --spacing-12: 48px;
    --spacing-14: 56px;
    --spacing-16: 64px;
    --spacing-20: 80px;
    --spacing-24: 96px;
    --spacing-32: 128px;
    --spacing-40: 160px;
    --spacing-48: 192px;
    --spacing-56: 224px;
    --spacing-64: 256px;
}

*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

/* Extra large devices (87.5% font-size applied at 1400px and up) */
@media (min-width: 87.5em) { /* 1400px / 16 = 87.5em */
    html {
        font-size: 87.5%; /* 1rem = 14px */
    }
}

/* Large devices (1200px and below) */
/* 1200px / 16 = 75em */
/* 1rem = 10px */
/* @media (max-width: 75em) { 
    html {
        font-size: 62.5%;
    }
} */

/* Medium devices (992px and below) */
@media (max-width: 62em) { /* 992px / 16 = 62em */
    html {
        font-size: 56.25%; /* 1rem = 9px */
    }
}

/* Small devices (768px and below) */
@media (max-width: 48em) { /* 768px / 16 = 48em */
    html {
        font-size: 50%; /* 1rem = 8px */
    }
}

/* Extra small devices (600px and below) */
@media (max-width: 37.5em) { /* 600px / 16 = 37.5em */
    html {
        font-size: 46.875%; /* 1rem = 7.5px */
    }
}

/* Very small devices (400px and below) */
@media (max-width: 25em) { /* 400px / 16 = 25em */
    html {
        font-size: 43.75%; /* 1rem = 7px */
    }
}


body {
    background-color: var(--gray-0);
    color: var(--gray-35);
    font-size: var(--font-size-base);
    line-height: 1.7;
    font-family: "Lora", serif;
    /* overflow-x: hidden; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--gray-40);
    font-family: "Montserrat", sans-serif;
    line-height: 1.1;
}

h1 {
    font-size: var(--font-size-4xl);
}

h2 {
    font-size: var(--font-size-3xl);
}

h3 {
    font-size: var(--font-size-xxl);
}

h4 {
    font-size: var(--font-size-xl);
}

h5 {
    font-size: var(--font-size-lg);
}

h6 {
    font-size: var(--font-size-md);
}

.small {
    font-size: var(--font-size-tiny);
}

ul {
    list-style: none;
}

button {
    font-family: "Montserrat", sans-serif;
}

a:link,
a:visited {
    text-decoration: none;
    color: inherit;
}

a:active {
    color: inherit;
}

input,
textarea,
select {
    font-family: inherit;
    font-size: inherit;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
}

input::placeholder,
textarea::placeholder {
    font-family: inherit;
}

textarea {
    resize: none;
}

/* Toastify Configuration */
.Toastify__toast {
    font-size: var(--font-size-tiny);
    font-family: "Lora", serif;
    font-weight: 500;
    background-color: var(--gray-0);
    color: var(--gray-40)
}
`;

export default GlobalStyles;

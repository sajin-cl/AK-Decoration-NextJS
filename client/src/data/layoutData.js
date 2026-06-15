
export const HEADER_DATA = [
    { title: 'Home', ariaLabel: 'Go to Home page', link: '/' },
    { title: 'About', ariaLabel: 'Go to About page', link: '/about' },
    { title: 'Services', ariaLabel: 'Go to Services page', link: '/services' },
    { title: 'Contact', ariaLabel: 'Go to Contact page', link: '/contact' },
];

export const FOOTER_DATA = [
    {
        title: 'Company',
        links: [
            {
                title: 'About',
                link: '/about'
            },
            {
                title: 'Services',
                link: '/services'
            },
            {
                title: 'Contact',
                link: '/contact'
            },
        ]
    },
    {
        title: 'Legal',
        links: [
            {
                title: 'Privacy Policy',
                link: '/privacy-policy'
            },
            {
                title: 'Terms of Service',
                link: '/terms-of-service'
            },
            {
                title: 'Disclaimer',
                link: '/disclaimer'
            },
        ]
    },
    {
        title: 'Social',
        links: [
            {
                title: 'Facebook',
                link: 'https://www.facebook.com/'
            },
            {
                title: 'Twitter',
                link: 'https://www.twitter.com/'
            },
            {
                title: 'Instagram',
                link: 'https://www.instagram.com/'
            },
        ]
    }
];

export const FOOTER_BOTTOM_DATA = {
    copyright: `© ${new Date().getFullYear()} AK Decoration All rights reserved. developed by sajin-cl`,
};
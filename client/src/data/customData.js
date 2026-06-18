
export const ADMIN_INFO = {
    email: 'ajithukumar@gmail.com',
    phone: '+91 7550305180',
    projectsCount: '100',
}



export const HEADER_DATA = [
    { title: 'Home', ariaLabel: 'Go to Home page', link: '/' },
    { title: 'About', ariaLabel: 'Go to About page', link: '/about' },
    { title: 'Services', ariaLabel: 'Go to Services page', link: '/services' },
    { title: 'Contact', ariaLabel: 'Go to Contact page', link: '/contact' },
];

export const FOOTER_DATA = [
    {
        title: 'Quick Links',
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
        title: 'Services',
        links: [
            {
                title: 'Floral Decor',
                link: '/service-detail/floral-decoration'
            },
            {
                title: 'Stage Design',
                link: '/service-detail/stage-decoration'
            },
            {
                title: 'Wedding Planning',
                link: '/service-detail/wedding-decoration'
            },
            {
                title: 'Event Lighting',
                link: '/service-detail/floral-decoration'
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
                title: 'Whatsapp',
                link: 'https://api.whatsapp.com/send/?phone=917550305180&text=Hello+I+need+decoration+service&type=phone_number&app_absent=0'
            },
            {
                title: 'Instagram',
                link: 'https://www.instagram.com/ak_decoration_service/?hl=en'
            },
        ]
    }
];

export const FOOTER_BOTTOM_DATA = {
    copyright: `© ${new Date().getFullYear()} AK Decoration All rights reserved. developed by sajin-cl`,
};